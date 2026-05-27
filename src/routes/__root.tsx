// @ts-nocheck
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { TopNav, Footer, ScrollToTopButton, useScrollTopOnRoute } from "../components/portfolio-layout";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl text-ink">404</h1>
        <h2 className="mt-4 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-teal transition-colors">
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted">Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-teal transition-colors">Try again</button>
          <a href="/" className="rounded-full border border-rule px-4 py-2 text-sm font-medium hover:border-ink transition-colors">Go home</a>
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
      { title: "Amanda Hanggoro — Product Manager" },
      { name: "description", content: "Product Manager with 5+ years across consumer, AI/ML, healthtech, and social-impact products in SEA, MENA, and the US." },
      { property: "og:title", content: "Amanda Hanggoro — Product Manager" },
      { property: "og:description", content: "Product Manager with 5+ years across consumer, AI/ML, healthtech, and social-impact products in SEA, MENA, and the US." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Amanda Hanggoro — Product Manager" },
      { name: "twitter:description", content: "Product Manager with 5+ years across consumer, AI/ML, healthtech, and social-impact products in SEA, MENA, and the US." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba6c5340-33a9-4ea1-8e21-b77f7d5d7d49/id-preview-85adbff1--f9db83b3-7cda-4a76-842c-43175901c7b1.lovable.app-1779677366802.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ba6c5340-33a9-4ea1-8e21-b77f7d5d7d49/id-preview-85adbff1--f9db83b3-7cda-4a76-842c-43175901c7b1.lovable.app-1779677366802.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

function Shell() {
  useScrollTopOnRoute();
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Shell />
    </QueryClientProvider>
  );
}
