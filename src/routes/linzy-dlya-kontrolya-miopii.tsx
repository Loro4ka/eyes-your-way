import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, CalendarDays, Check, ChevronRight, CircleDot, Eye, Glasses, MapPin, Phone, Ruler, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { childServices, contactCatalogUrl, contactLenses, myopiaClinic, spectacleCatalogUrl, spectacleLenses } from "@/lib/myopia-offering";
import heroMyopia from "@/assets/hero-myopia.jpg";

export const Route = createFileRoute("/linzy-dlya-kontrolya-miopii")({
  head: () => ({ meta: [
    { title: "Линзы для контроля миопии у детей в СПб — Оптика 100%" },
    { name: "description", content: "Очковые линзы Stellest, Myopilux Plus, ZEISS MyoCare, Hoya MiYOSMART и контактные MiSight, SEED EDOF, OKVision. Детский врач и биометрия Lenstar LS 900 на Кирочной, 17." },
    { property: "og:title", content: "Линзы для контроля миопии — Оптика 100%" },
    { property: "og:description", content: "Очковые и контактные линзы, приём детского врача и биометрия Lenstar LS 900. Подбор и наблюдение в Санкт-Петербурге, ул. Кирочная, 17." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: MyopiaPage,
});

const faq = [
  ["Чем контроль миопии отличается от обычных очков?", "Обычные однофокальные линзы корректируют нечёткое зрение вдаль. Специальные дизайны для контроля миопии также направлены на замедление её прогрессирования. Они не устраняют уже имеющуюся близорукость и не гарантируют остановку её роста."],
  ["С какого возраста можно подбирать линзы?", "Возрастные показания различаются у разных изделий. Врач учитывает возраст ребёнка, рецепт, динамику миопии, состояние глаз и инструкцию производителя. Для контактных линз важны также готовность к уходу и участие родителей."],
  ["Что выбрать: очковые или контактные линзы?", "Очки не требуют прикосновения к глазу. Контактные линзы могут быть удобны при активном образе жизни, но требуют строгой гигиены. Выбор делают вместе с врачом после обследования, а не только по названию или стоимости."],
  ["Myopilux Plus — то же самое, что Stellest?", "Нет. Myopilux Plus обеспечивает поддержку зрения вблизи, а Stellest использует асферические микролинзы. Показания и доказательная база различаются; заменять одну линзу другой без консультации нельзя."],
  ["Зачем измерять осевую длину глаза?", "При прогрессировании миопии глаз часто удлиняется. Биометрия позволяет отслеживать осевую длину в динамике — вместе с рефракцией и другими данными это помогает врачу оценивать течение миопии и выбранную тактику."],
  ["Биометрия Lenstar LS 900 болезненна?", "Это бесконтактное оптическое измерение. Прибор не касается глаза. Состав обследования и необходимость дополнительных процедур определяет врач."],
  ["Как часто нужны контрольные осмотры?", "Индивидуальный график назначает врач. Часто динамику оценивают примерно каждые шесть месяцев, а после первичного подбора могут понадобиться более ранние визиты. При боли, покраснении или внезапном ухудшении зрения обратитесь за медицинской помощью без ожидания планового осмотра."],
  ["Можно ли спать в контактных линзах?", "Не следует спать в перечисленных дневных линзах. Соблюдайте инструкцию производителя и рекомендации врача; однодневные линзы повторно не используют. Не допускайте контакта линз с водопроводной водой."],
  ["Сколько стоит подбор и сами линзы?", "Стоимость зависит от выбранного изделия, рецепта, комплектации и обследования. Актуальные варианты смотрите в каталоге, а стоимость приёма детского врача и биометрии уточняйте при записи. Для очков отдельно учитываются оправа и изготовление."],
  ["Что взять на приём?", "Предыдущие рецепты, очки, результаты обследований и биометрии, если они есть. Эти данные позволяют оценить динамику, а не только состояние зрения в день визита."],
];

function MyopiaPage() {
  return <main className="bg-background text-foreground">
    <nav aria-label="Хлебные крошки" className="border-b border-border">
      <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 text-sm text-muted-foreground">
        <li><Link to="/" className="hover:text-primary">Главная</Link></li><li><ChevronRight className="size-3" aria-hidden /></li>
        <li aria-current="page" className="text-foreground">Линзы для контроля миопии</li>
      </ol>
    </nav>
    <section className="myopia-hero relative isolate overflow-hidden border-b border-border">
      <img src={heroMyopia} width={1536} height={1024} alt="Ребёнок в очках на прогулке" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
      <div className="myopia-hero-shade absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="max-w-[560px]">
          <p className="text-sm font-bold uppercase tracking-normal text-primary">Оптика 100% · Детское зрение</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">Линзы для<br className="hidden md:block" /> контроля миопии</h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground">Чёткое зрение сегодня. Индивидуальный подход к контролю близорукости на годы вперёд.</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">Очковые и контактные линзы для детей и подростков. Выбор после обследования, с наблюдением детского врача.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg"><a href="#zapis">Записаться к врачу <CalendarDays /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#ochkovye">Выбрать линзы <ArrowDown /></a></Button>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" />{myopiaClinic.address}</p>
        </div>
      </div>
    </section>
    <nav aria-label="Разделы контроля миопии" className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-5 py-5">
        {[["Очковые линзы", "ochkovye"], ["Контактные линзы", "kontaktnye"], ["Детские услуги", "uslugi"], ["Как подобрать", "podbor"], ["Вопросы", "voprosy"]].map(([name, id]) => <Button key={id} asChild variant="link" className="h-auto p-0 text-foreground"><a href={`#${id}`}>{name}<ChevronRight /></a></Button>)}
      </div>
    </nav>

    <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1.3fr_1fr]">
      <div><h2 className="heading-bar text-2xl md:text-3xl">Не только коррекция, но и контроль</h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">Миопия — близорукость, при которой ребёнок хуже видит удалённые предметы. В детстве она может прогрессировать по мере роста глаза. Поэтому важно не только подобрать диоптрии для чёткого зрения, но и отслеживать изменения рефракции и осевой длины глаза.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Для контроля миопии используются специальные оптические дизайны. Они отличаются принципом действия, показаниями и режимом ношения. Универсальной «лучшей линзы» нет: врач учитывает результаты обследования, динамику близорукости и образ жизни ребёнка.</p>
      </div>
      <div className="border-l-2 border-primary pl-6 lg:mt-2"><h3 className="text-lg">Когда стоит обратиться к врачу</h3>
        <ul className="mt-4 space-y-4">{["Ребёнок щурится или подходит ближе к доске и экрану", "Рецепт на очки меняется, близорукость увеличивается", "У родителей есть миопия — важно наблюдать зрение ребёнка"].map(text => <li key={text} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{text}</li>)}</ul>
        <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Линзы не излечивают миопию. Результат индивидуален; назначение и наблюдение необходимы при любом выбранном методе.</p>
      </div>
    </section>

    <section id="ochkovye" className="scroll-mt-6 border-y border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><Glasses className="size-5" />01 / Очковая коррекция</p><h2 className="heading-bar text-2xl md:text-3xl">Линзы для очков</h2></div><Button asChild variant="outline"><a href={spectacleCatalogUrl} target="_blank" rel="noopener noreferrer">Все цены в каталоге <ArrowUpRight /></a></Button></div>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Три производителя, четыре линейки. Выбор дизайна, рецепта и оправы — по результатам обследования. Myopilux Plus выделен отдельно: это не взаимозаменяемый аналог микролинзовых решений.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{spectacleLenses.map(lens => <article key={lens.model} className="myopia-product flex flex-col rounded-lg border border-border bg-card p-6 transition-transform motion-safe:hover:-translate-y-1">
          <div className="flex items-start justify-between gap-3"><p className="text-sm font-bold text-muted-foreground">{lens.manufacturer}</p><Glasses className="size-6 text-primary" /></div>
          <h3 className="mt-3 text-2xl">{lens.model}</h3><p className="mt-2 text-sm font-semibold text-primary">{lens.technology}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lens.description}</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{lens.note}</p><p className="mt-4 text-lg font-extrabold text-foreground">{lens.price}</p>
          <div className="mt-auto pt-6">{lens.model === "Stellest" ? <Button asChild variant="link" className="h-auto p-0"><Link to="/stellest-katalog-s-linzami">Подробнее о Stellest <ArrowUpRight /></Link></Button> : <Button asChild variant="link" className="h-auto p-0"><a href={spectacleCatalogUrl} target="_blank" rel="noopener noreferrer">Смотреть в каталоге <ArrowUpRight /></a></Button>}</div>
        </article>)}</div>
      </div>
    </section>

    <section id="kontaktnye" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-12">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary"><CircleDot className="size-5" />02 / Контактная коррекция</p><h2 className="heading-bar text-2xl md:text-3xl">Контактные линзы</h2></div><Button asChild variant="outline"><a href={contactCatalogUrl} target="_blank" rel="noopener noreferrer">Все цены в каталоге <ArrowUpRight /></a></Button></div>
      <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Для ребёнка, готового соблюдать правила ношения и гигиены. Перед подбором врач оценивает состояние глаз; специалист проверяет посадку и обучает обращению с линзами.</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">{contactLenses.map(lens => <article key={lens.model} className="flex flex-col rounded-lg border border-border p-6 transition-colors hover:border-primary/50">
        <div className="flex items-start justify-between gap-3"><p className="text-sm font-bold text-muted-foreground">{lens.manufacturer}</p><CircleDot className="size-6 shrink-0 text-primary" /></div><h3 className="mt-3 text-xl">{lens.model}</h3><p className="mt-2 text-sm font-semibold text-primary">{lens.technology}</p><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{lens.description}</p><p className="mt-3 text-xs leading-relaxed text-muted-foreground">{lens.note}</p><p className="mt-4 text-lg font-extrabold text-foreground">{lens.price}</p><div className="mt-auto pt-6"><Button asChild variant="link" className="h-auto p-0"><a href={contactCatalogUrl} target="_blank" rel="noopener noreferrer">Смотреть в каталоге <ArrowUpRight /></a></Button></div>
      </article>)}</div>
      <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">Не спите в дневных линзах, не используйте однодневную пару повторно и не допускайте контакта линз с водой. При боли или покраснении снимите линзы и обратитесь к врачу.</p>
    </section>

    <section id="uslugi" className="scroll-mt-6 border-y border-border bg-secondary"><div className="mx-auto max-w-6xl px-5 py-12">
      <p className="mb-3 text-sm font-semibold text-primary">03 / Диагностика и наблюдение</p><h2 className="heading-bar text-2xl md:text-3xl">Услуги для детей</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">{childServices.map((service, i) => <div key={service.name} className="border-t border-border pt-6">{i === 0 ? <Stethoscope className="size-8 text-primary" /> : <Ruler className="size-8 text-primary" />}<h3 className="mt-4 text-xl">{service.name}</h3>{"origin" in service && <p className="mt-2 text-sm font-semibold text-primary">{service.origin}</p>}<p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p><Button asChild variant="link" className="mt-5 h-auto p-0"><a href="#zapis">Уточнить стоимость и записаться <ArrowUpRight /></a></Button></div>)}</div>
      <p className="mt-8 text-sm text-muted-foreground">Стоимость и доступное время приёма детского врача и биометрии уточняются при записи.</p>
    </div></section>

    <section id="podbor" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-12"><h2 className="heading-bar text-2xl md:text-3xl">Как подбирают линзы для контроля миопии</h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[["Обследование", "Врач проверяет зрение и состояние глаз, изучает прежние рецепты и измерения."], ["Оценка динамики", "Рефракция и биометрия помогают оценить прогрессирование и риски."], ["Выбор линз", "Обсуждаются показания, рецепт, удобство очков или контактной коррекции."], ["Наблюдение", "Назначается режим ношения и индивидуальный график контрольных визитов."]].map(([title, text], i) => <li key={title} className="border-t border-border pt-5"><span className="text-3xl font-extrabold text-primary">0{i + 1}</span><h3 className="mt-4 text-lg">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}</ol>
      <div className="mt-8 flex items-start gap-3 bg-secondary p-5"><Eye className="mt-1 size-5 shrink-0 text-primary" /><p className="text-sm leading-relaxed text-muted-foreground">Помимо коррекции, обсудите с врачом прогулки на открытом воздухе, перерывы при работе вблизи и удобное освещение. Эти привычки дополняют наблюдение, но не заменяют назначенные линзы.</p></div>
    </section>

    <section id="voprosy" className="border-t border-border"><div className="mx-auto max-w-6xl px-5 py-12"><h2 className="heading-bar text-2xl md:text-3xl">Вопросы родителей</h2><Accordion type="single" collapsible className="mt-6">{faq.map(([question, answer], i) => <AccordionItem key={question} value={`faq-${i}`}><AccordionTrigger className="gap-4 py-5 text-base font-semibold">{question}</AccordionTrigger><AccordionContent className="max-w-4xl leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section id="zapis" className="scroll-mt-6 border-t border-border bg-brand-soft"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.4fr_1fr]">
      <div><p className="text-sm font-semibold text-primary">Оптика 100% · Санкт-Петербург</p><h2 className="mt-3 text-3xl">Начните с приёма детского врача</h2><p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">Обсудите подходящий метод контроля миопии, обследование на Lenstar LS 900 и стоимость доступных вариантов.</p><Button asChild size="lg" className="mt-6"><a href={myopiaClinic.phoneHref}><Phone />{myopiaClinic.phone}</a></Button></div>
      <div className="border-l-2 border-primary pl-6"><h3 className="text-lg">Салон оптики</h3><p className="mt-4 flex gap-2 text-sm"><MapPin className="size-4 shrink-0 text-primary" />{myopiaClinic.address}</p><p className="mt-3 text-sm text-muted-foreground">{myopiaClinic.metro}</p><p className="mt-2 text-sm text-muted-foreground">{myopiaClinic.hours}</p><p className="mt-5 text-xs leading-relaxed text-muted-foreground">Наличие линз, возможность проведения биометрии и время приёма детского врача подтвердите по телефону до визита.</p></div>
    </div></section>
    <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 px-5 py-8 text-sm"><Link to="/stellest-katalog-s-linzami" className="text-primary hover:underline">Подробнее о Stellest →</Link><Link to="/" className="text-primary hover:underline">Подбор очков →</Link><Link to="/opravy/zhenskie" className="text-primary hover:underline">Каталог женских оправ →</Link></div>
  </main>;
}