import { Briefcase, Database, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Users",
    value: "24",
    detail: "Active sign-ups",
  },
  {
    icon: Database,
    label: "Items",
    value: "48",
    detail: "In the catalog",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    value: "JWT",
    detail: "Token-protected routes",
  },
  {
    icon: Briefcase,
    label: "Status",
    value: "Live",
    detail: "Deployed on Vercel",
  },
];

function page() {
  return (
    <div className="pl-8 pt-6 pr-8">
      <h1 className="text-2xl">Hi, developer 👋🏼</h1>
      <h3 className="text-muted-foreground">
        Welcome back, nice to see you again!
      </h3>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border bg-card p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
                <stat.icon className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;