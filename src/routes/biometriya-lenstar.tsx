import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Check, ChevronRight, Clock, Eye, MapPin, Phone, Ruler, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { biometryService, myopiaClinic, myopiaProductPages } from "@/lib/myopia-offering";
import heroMyopia from "@/assets/hero-myopia.jpg";

export const Route = createFileRoute("/biometriya-lenstar")({
  head: () => {
    const t = "Биометрия Lenstar LS 900 (Швейцария) — измерение осевой длины глаза | Оптика 100%";
    const d = "Бесконтактное оптическое измерение глаза на Lenstar LS 900: осевая длина, кривизна роговицы, глубина передней камеры. Зачем это нужно при контроле миопии у детей. Санкт-Петербург, ул. Кирочная, 17.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: "Биометрия Lenstar LS 900 — измерение осевой длины глаза | Оптика 100%" },
        { property: "og:description", content: "Как проходит бесконтактная биометрия, что она измеряет и зачем нужна при контроле миопии у детей. Запись в Санкт-Петербурге, ул. Кирочная, 17." },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: "https://eyes-your-way.lovable.app/biometriya-lenstar" }],
    };
  },
  component: BiometryPage,
});

const faq = [
  ["Биометрия Lenstar LS 900 болезненна?", "Нет. Это бесконтактное оптическое измерение: прибор не касается глаза, капли для анестезии не нужны. Ребёнку нужно несколько минут смотреть на внутреннюю метку."],
  ["Нужна ли подготовка к измерению?", "Специальной подготовки обычно не требуется. Возьмите предыдущие рецепты, очки и результаты обследований и биометрии, если они есть: их сравнивают с новыми измерениями."],
  ["Сколько занимает биометрия?", "Измерение обоих глаз занимает несколько минут. Прибор делает серию повторных замеров и усредняет их, поэтому итог стабильнее одиночного измерения."],
  ["Чем биометрия отличается от проверки зрения?", "Проверка зрения показывает, как ребёнок видит и какой нужен рецепт. Биометрия измеряет сам глаз — прежде всего его осевую длину. Эти данные дополняют друг друга."],
  ["Можно ли сделать биометрию без подбора линз?", "Обследование и биометрию проводят независимо от заказа линз. Возможность и стоимость процедуры уточните при записи."],
  ["Что если ребёнок не удержит взгляд на метке?", "Сообщите об этом заранее: врач подбирает порядок обследования. Прибор делает несколько повторных измерений, но результат зависит от фиксации взгляда, поэтому для маленьких детей решение принимает врач."],
];

function BiometryPage() {
  return (
    <main className="bg-background text-foreground">
      <nav aria-label="Хлебные крошки" className="border-b border-border">
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Главная</Link></li>
          <li><ChevronRight className="size-3" aria-hidden /></li>
          <li><Link to="/linzy-dlya-kontrolya-miopii" className="hover:text-primary">Контроль миопии</Link></li>
          <li><ChevronRight className="size-3" aria-hidden /></li>
          <li aria-current="page" className="text-foreground">Биометрия Lenstar LS 900</li>
        </ol>
      </nav>

      <section className="myopia-hero relative isolate overflow-hidden border-b border-border">
        <img src={heroMyopia} width={1536} height={1024} alt="Ребёнок в очках на прогулке" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div className="myopia-hero-shade absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <div className="max-w-[600px]">
            <p className="text-sm font-bold uppercase tracking-normal text-primary">Оптика 100% · Диагностика</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Биометрия<br className="hidden md:block" /> Lenstar LS 900</h1>
            <p className="mt-3 inline-block border border-primary px-3 py-1 text-sm font-semibold text-primary">{biometryService.origin}</p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground">{biometryService.lead}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href={myopiaClinic.phoneHref}><Phone /> Записаться: {myopiaClinic.phone}</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#izmereniya">Что измеряет <ChevronRight /></a></Button>
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{myopiaClinic.address}</p>
          </div>
        </div>
      </section>

      <nav aria-label="Разделы страницы биометрии" className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-5">
          {[["Что измеряет", "izmereniya"], ["Как проходит", "kak-prohodit"], ["Зачем при миопии", "zachem"], ["Как часто", "chasto"], ["Вопросы", "voprosy"], ["Запись", "zapis"]].map(([name, id]) => (
            <Button key={id} asChild variant="link" className="h-auto p-0 text-foreground"><a href={`#${id}`}>{name}<ChevronRight /></a></Button>
          ))}
        </div>
      </nav>

      <section id="izmereniya" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><ScanLine className="size-5" />01 / Измерения</p><h2 className="heading-bar text-2xl md:text-3xl">Что измеряет прибор</h2></div>
          <p className="text-sm font-semibold text-primary">{biometryService.device} · {biometryService.origin}</p>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {biometryService.measures.map((m) => (
            <li key={m.name} className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <h3 className="text-lg">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">{biometryService.note}</p>
      </section>

      <section id="kak-prohodit" className="scroll-mt-6 border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><Ruler className="size-5" />02 / Процедура</p>
          <h2 className="heading-bar text-2xl md:text-3xl">Как проходит измерение</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {biometryService.steps.map((s, i) => (
              <li key={s.title} className="border-t border-border pt-5">
                <span className="text-3xl font-extrabold text-primary">0{i + 1}</span>
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted-foreground">Стоимость и доступное время биометрии и приёма детского врача уточняются при записи.</p>
        </div>
      </section>

      <section id="zachem" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-12">
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><Eye className="size-5" />03 / Зачем это нужно</p>
        <h2 className="heading-bar text-2xl md:text-3xl">Зачем биометрия при контроле миопии</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <ul className="space-y-6">
            {biometryService.why.map((w) => (
              <li key={w.title} className="border-l-2 border-primary pl-6">
                <h3 className="text-lg">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{w.text}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-lg">Один визит — две задачи</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />Проверка зрения и рефракции: какой рецепт нужен сейчас.</li>
              <li className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />Биометрия: как изменился глаз с прошлого визита.</li>
              <li className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />Обсуждение с родителем выбранной тактики и графика наблюдения.</li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{biometryService.disclaimer}</p>
          </div>
        </div>
      </section>

      <section id="chasto" className="scroll-mt-6 border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><Clock className="size-5" />04 / Наблюдение</p>
            <h2 className="heading-bar text-2xl md:text-3xl">Как часто повторять</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{biometryService.frequency}</p>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-lg">Что взять с собой</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              {["Предыдущие рецепты и очки", "Результаты прошлых обследований и биометрии", "Вопросы врачу о динамике и режиме ношения"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="voprosy" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="heading-bar text-2xl md:text-3xl">Вопросы о биометрии</h2>
          <Accordion type="single" collapsible className="mt-6">
            {faq.map(([question, answer], i) => (
              <AccordionItem key={question} value={`faq-${i}`}>
                <AccordionTrigger className="gap-4 py-5 text-base font-semibold">{question}</AccordionTrigger>
                <AccordionContent className="max-w-4xl leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="zapis" className="scroll-mt-6 border-t border-border bg-brand-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-primary">Оптика 100% · Санкт-Петербург</p>
            <h2 className="mt-3 text-3xl">Запишитесь на обследование</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Обсудите биометрию на Lenstar LS 900, приём детского врача и подбор линз для контроля миопии.</p>
            <Button asChild size="lg" className="mt-6"><a href={myopiaClinic.phoneHref}><Phone />{myopiaClinic.phone}</a></Button>
            <Button asChild size="lg" variant="outline" className="mt-6"><Link to="/linzy-dlya-kontrolya-miopii">Линзы для контроля миопии <ArrowUpRight /></Link></Button>
          </div>
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-lg">Салон оптики</h3>
            <p className="mt-4 flex gap-2 text-sm"><MapPin className="size-4 shrink-0 text-primary" />{myopiaClinic.address}</p>
            <p className="mt-3 text-sm text-muted-foreground">{myopiaClinic.metro}</p>
            <p className="mt-2 text-sm text-muted-foreground">{myopiaClinic.hours}</p>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Возможность проведения биометрии и время приёма детского врача подтвердите по телефону до визита.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="heading-bar text-2xl">Линзы, которые подбирают после биометрии</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li><Link to="/stellest-katalog-s-linzami" className="rounded-md border border-border px-3 py-1 hover:border-primary">Stellest</Link></li>
            {myopiaProductPages.map((o) => (
              <li key={o.slug}><Link to="/linzy-dlya-kontrolya-miopii/$slug" params={{ slug: o.slug }} className="rounded-md border border-border px-3 py-1 hover:border-primary">{o.model}</Link></li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/linzy-dlya-kontrolya-miopii" className="text-primary hover:underline">Раздел «Контроль миопии» →</Link>
            <Link to="/" className="text-primary hover:underline">Подбор очков →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
