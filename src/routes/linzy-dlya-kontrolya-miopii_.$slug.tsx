import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { myopiaClinic, myopiaProductPages } from "@/lib/myopia-offering";

export const Route = createFileRoute("/linzy-dlya-kontrolya-miopii_/$slug")({
  loader: ({ params }) => {
    const product = myopiaProductPages.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData, params }) => {
    const t = loaderData ? `${loaderData.manufacturer} ${loaderData.model} — контроль миопии | Оптика 100%` : "Линза не найдена — Оптика 100%";
    const d = loaderData ? `${loaderData.kind} ${loaderData.model} (${loaderData.technology}) для контроля миопии у детей. ${loaderData.price}. Подбор на Кирочной, 17.` : "Страница не найдена.";
    const url = `https://eyes-your-way.lovable.app/linzy-dlya-kontrolya-miopii/${params.slug}`;
    return {
      meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "product" }, { property: "og:url", content: url }, { name: "twitter:card", content: "summary" }],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  return (
    <main>
      <nav aria-label="Хлебные крошки" className="mx-auto max-w-6xl px-5 pt-6 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Главная</Link> › <Link to="/linzy-dlya-kontrolya-miopii" className="hover:text-primary">Контроль миопии</Link> › <span className="text-foreground">{p.model}</span>
      </nav>
      <section className="mx-auto max-w-6xl px-5 py-10">
        <p className="text-sm font-bold text-primary">{p.kind} · {p.manufacturer}</p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-5xl">{p.model} для контроля миопии</h1>
        <p className="mt-3 font-semibold text-primary">Технология: {p.technology}</p>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{p.description}</p>
        <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{p.note}</p>
        <p className="mt-6 text-2xl font-extrabold">{p.price}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href={p.catalogUrl} target="_blank" rel="noopener noreferrer">Перейти в каталог <ArrowUpRight /></a></Button>
          <Button asChild size="lg" variant="outline"><a href={myopiaClinic.phoneHref}><Phone /> Записаться: {myopiaClinic.phone}</a></Button>
        </div>
      </section>
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="heading-bar text-2xl">Как подобрать {p.model}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
            <li>Приём детского врача: проверка зрения и рефракции.</li>
            <li>Биометрия Lenstar LS 900 — измерение длины глаза для контроля динамики.</li>
            <li>Выбор линзы врачом и обучение ношению.</li>
            <li>Повторные визиты для оценки результата.</li>
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm"><MapPin className="size-4 text-primary" />{myopiaClinic.address}, {myopiaClinic.metro}, {myopiaClinic.hours}</p>
          <p className="mt-6 text-sm font-semibold">Другие линзы:</p>
          <ul className="mt-2 flex flex-wrap gap-2 text-sm">
            <li><Link to="/stellest-katalog-s-linzami" className="rounded-md border border-border px-3 py-1 hover:border-primary">Stellest</Link></li>
            {myopiaProductPages.filter((o) => o.slug !== p.slug).map((o) => (
              <li key={o.slug}><Link to="/linzy-dlya-kontrolya-miopii/$slug" params={{ slug: o.slug }} className="rounded-md border border-border px-3 py-1 hover:border-primary">{o.model}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
