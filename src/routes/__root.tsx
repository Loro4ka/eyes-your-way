import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Оптика 100% — очки и линзы в Санкт-Петербурге" },
      { name: "description", content: "Подбор очков и линз в Оптике 100%: Санкт-Петербург, ул. Кирочная, 17." },
      { name: "author", content: "Оптика 100%" },
      { property: "og:title", content: "Оптика 100% — очки и линзы" },
      { property: "og:description", content: "Подбор очков и линз в Санкт-Петербурге, ул. Кирочная, 17." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const navItems = [
  { label: "Подбор очков", href: "/" },
  { label: "Женские оправы", href: "/opravy/zhenskie" },
  { label: "LION`S HEART", href: "/opravy/lions-heart" },
  { label: "Линзы Stellest", href: "/stellest-katalog-s-linzami" },
  { label: "Контроль миопии", href: "/linzy-dlya-kontrolya-miopii" },
  { label: "Прогрессивные линзы", href: "/progressivnye-linzy" },
  { label: "Стоимость", href: "/#stoimost" },
  { label: "Пошагово", href: "/#kak" },
  { label: "Виды очков", href: "/#vidy" },
  { label: "Вопросы", href: "/#faq" },
  { label: "Запись", href: "/#zapis" },
];


function SiteHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-5">
        <a href="/" className="flex items-center gap-2" aria-label="Оптика 100% — на главную">
          <span className="rounded-sm border-2 border-primary px-2 py-0.5 text-xl font-extrabold leading-none tracking-tight text-primary">
            100%
          </span>
          <span className="text-xl font-extrabold uppercase tracking-tight text-foreground">
            Оптика
          </span>
        </a>
      </div>
      <nav className="border-t border-border">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-5 py-3 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex rounded-md px-4 py-2 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {item.label}
              </a>
            </li>

          ))}
        </ul>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 text-sm text-muted-foreground md:grid-cols-4">
        <div>
          <p className="font-extrabold uppercase tracking-tight text-foreground">Оптика 100%</p>
          <p className="mt-2">Подбор очков и линз в Санкт-Петербурге.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Страницы</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/" className="hover:text-primary">
                Подбор очков
              </Link>
            </li>
            <li>
              <Link to="/opravy/zhenskie" className="hover:text-primary">
                Женские оправы
              </Link>
            </li>
            <li>
              <Link to="/opravy/lions-heart" className="hover:text-primary">
                Оправы LION`S HEART
              </Link>
            </li>
            <li>
              <Link to="/opravy/zhenskie" hash="katalog" className="hover:text-primary">
                Каталог оправ
              </Link>
            </li>
            <li>
              <Link to="/progressivnye-linzy" className="hover:text-primary">
                Прогрессивные линзы
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">Услуги</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/linzy-dlya-kontrolya-miopii" className="hover:text-primary">
                Линзы для контроля миопии
              </Link>
            </li>
            <li>
              <Link to="/" hash="stoimost" className="hover:text-primary">
                Стоимость подбора
              </Link>
            </li>
            <li>
              <Link to="/" hash="vidy" className="hover:text-primary">
                Виды очков
              </Link>
            </li>
            <li>
              <Link to="/" hash="faq" className="hover:text-primary">
                Частые вопросы
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-foreground">Адрес и запись</p>
          <p className="mt-2">Санкт-Петербург, ул. Кирочная, 17</p>
          <p className="mt-1">м. Чернышевская, ежедневно 10:00–20:00</p>
          <a href="tel:+78120000000" className="mt-2 inline-block hover:text-primary">
            8 (812) 000-00-00
          </a>
        </div>
      </div>
    </footer>
  );
}


function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <div className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </div>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
