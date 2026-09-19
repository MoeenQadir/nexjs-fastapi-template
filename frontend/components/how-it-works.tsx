import { Code2, Rocket, Settings2 } from "lucide-react";

const steps = [
  {
    icon: Settings2,
    step: "01",
    title: "Configure",
    description:
      "Spin up the stack with one command. PostgreSQL, FastAPI and Next.js are wired and ready out of the box.",
  },
  {
    icon: Code2,
    step: "02",
    title: "Build",
    description:
      "Ship features with server components, JWT auth, role-based access and a polished shadcn/ui dashboard.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deploy",
    description:
      "Push to GitHub and deploy to Vercel in minutes. Type-safe API client and CI/CD are already in place.",
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          From zero to production,{" "}
          <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
            fast
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          A deliberately simple workflow for teams that want to build real
          products instead of wrestling with infrastructure.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.step}
            className="relative rounded-2xl border bg-card p-6 transition-all hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10"
          >
            <span className="absolute right-5 top-5 text-4xl font-extrabold text-muted-foreground/20">
              {step.step}
            </span>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/20">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}