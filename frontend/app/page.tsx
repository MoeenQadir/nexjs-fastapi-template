import Link from "next/link";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { HowItWorks } from "@/components/how-it-works";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Code2,
  Database,
  Mail,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const BRAND = {
  name: "MyselfX",
  fullName: "MyselfX Developer",
  tagline: "Next.js + FastAPI Starter Kit",
  email: "myselfxdeveloper@gmail.com",
  phone: "+92 344 1586424",
  phoneHref: "tel:+923441586424",
  whatsappHref: "https://wa.me/923441586424",
  address: "Multan, Punjab, Pakistan",
};

const features = [
  {
    icon: Code2,
    title: "Next.js 14 Frontend",
    description:
      "App Router, Server Components, built-in caching and a full dashboard UI out of the box.",
  },
  {
    icon: Database,
    title: "FastAPI Backend",
    description:
      "Async Python API with automatic OpenAPI docs, PostgreSQL and SQLAlchemy.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    description:
      "JWT authentication, role-based access, password hashing and token handling.",
  },
  {
    icon: Palette,
    title: "Dark / Light Theme",
    description:
      "Polished shadcn/ui components with a gorgeous dark mode that just works.",
  },
];

const stack = ["Next.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "TypeScript"];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-gradient-to-b from-teal-500/15 via-cyan-500/10 to-transparent dark:from-teal-500/20"
        aria-hidden="true"
      />

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg shadow-teal-500/30">
              <Zap className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg tracking-tight">
              {BRAND.name}
              <span className="ml-1 hidden text-sm font-normal text-muted-foreground sm:inline">
                Developer
              </span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
              )}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
        <Badge variant="outline" className="mb-6 gap-2 rounded-full px-4 py-1.5 text-sm">
          <Sparkles className="h-4 w-4 text-teal-500" />
          Production-ready full-stack starter kit by MyselfX Developer
        </Badge>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Build apps with{" "}
          <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
            Next.js &amp; FastAPI
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A complete full-stack foundation — Next.js 14 frontend, FastAPI
          backend, PostgreSQL database and JWT authentication — so you can focus
          on shipping features instead of wiring infrastructure.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "lg" }),
              "gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
            )}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2")}
          >
            <Rocket className="h-4 w-4" />
            View Dashboard
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border bg-card p-6 transition-all hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/20">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <HowItWorks />

      {/* Contact */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl border bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-background p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s build something great
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have a project in mind? Reach out — I&apos;d love to hear about it.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${BRAND.email}`}
              className="rounded-2xl border bg-card p-6 text-center transition-colors hover:border-teal-500/50"
            >
              <Mail className="mx-auto mb-3 h-6 w-6 text-teal-500" />
              <p className="mb-1 text-sm font-semibold text-muted-foreground">Email</p>
              <p className="break-all text-sm font-medium">{BRAND.email}</p>
            </a>
            <a
              href={BRAND.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border bg-card p-6 text-center transition-colors hover:border-teal-500/50"
            >
              <MessageCircle className="mx-auto mb-3 h-6 w-6 text-teal-500" />
              <p className="mb-1 text-sm font-semibold text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-medium">{BRAND.phone}</p>
            </a>
            <a
              href={BRAND.phoneHref}
              className="rounded-2xl border bg-card p-6 text-center transition-colors hover:border-teal-500/50"
            >
              <Phone className="mx-auto mb-3 h-6 w-6 text-teal-500" />
              <p className="mb-1 text-sm font-semibold text-muted-foreground">Phone</p>
              <p className="text-sm font-medium">{BRAND.phone}</p>
            </a>
            <div className="rounded-2xl border bg-card p-6 text-center">
              <MapPin className="mx-auto mb-3 h-6 w-6 text-teal-500" />
              <p className="mb-1 text-sm font-semibold text-muted-foreground">Location</p>
              <p className="text-sm font-medium">{BRAND.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t bg-muted/30">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600">
              <Zap className="h-4 w-4 text-white" />
            </span>
            © {new Date().getFullYear()} {BRAND.fullName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground">
            <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">
              {BRAND.email}
            </a>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
            <a href={BRAND.whatsappHref} className="hover:text-foreground">
              {BRAND.phone}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}