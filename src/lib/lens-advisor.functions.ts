import { createServerFn } from "@tanstack/react-start";
import { contactLenses, spectacleLenses } from "./myopia-offering";

type Input = { age: number; prescription: string; lifestyle: string };

export const compareMyopiaLenses = createServerFn({ method: "POST" })
  .inputValidator((d: Input): Input => {
    const age = Number(d?.age);
    if (!Number.isFinite(age) || age < 3 || age > 18) throw new Error("Укажите возраст от 3 до 18 лет");
    const prescription = String(d?.prescription ?? "").trim().slice(0, 300);
    const lifestyle = String(d?.lifestyle ?? "").trim().slice(0, 600);
    if (!prescription) throw new Error("Укажите рецепт");
    return { age, prescription, lifestyle };
  })
  .handler(async ({ data }) => {
    const { generateResponse, GatewayError } = await import("@lovable.dev/ai-gateway");
    const catalog = [...spectacleLenses, ...contactLenses]
      .map((l) => `- ${l.manufacturer} ${l.model} (${l.technology}), ${l.price}: ${l.description}`).join("\n");
    try {
      const res = await generateResponse({
        model: "openai/gpt-6.1-terra",
        instructions: `Ты консультант салона «Оптика 100%» (Санкт-Петербург, ул. Кирочная, 17). Помогаешь родителям разобраться в линзах для контроля миопии. Используй ТОЛЬКО линзы из списка ниже, не придумывай другие модели и цены. Не ставь диагноз и не обещай результат: окончательный выбор делает детский врач после осмотра и биометрии Lenstar LS 900. Пиши по-русски, кратко, в Markdown без таблиц: 1) короткий вывод; 2) 2–4 наиболее подходящих варианта — для каждого «чем подходит» и «что учесть»; 3) вопросы, которые стоит задать врачу; 4) приглашение записаться на приём (8-800-700-0214).\n\nЛинзы:\n${catalog}`,
        input: `Возраст ребёнка: ${data.age} лет\nРецепт: ${data.prescription}\nОбраз жизни: ${data.lifestyle || "не указан"}`,
      });
      const text = (res.output ?? [])
        .flatMap((o) => (o.type === "message" ? o.content : []))
        .map((c) => (c.type === "output_text" ? c.text : ""))
        .join("").trim();
      if (!text) return { error: "Не удалось подготовить сравнение. Попробуйте ещё раз." };
      return { text };
    } catch (e) {
      if (e instanceof GatewayError) {
        console.error("lens advisor", e.code, e.ids);
        if (e.code === "rate_limited") return { error: "Сейчас много запросов. Попробуйте через минуту." };
        if (e.code === "payment_required") return { error: "Сервис временно недоступен." };
      } else console.error(e);
      return { error: "Не удалось подготовить сравнение. Попробуйте позже или позвоните нам." };
    }
  });
