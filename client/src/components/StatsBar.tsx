import { useTranslation } from "react-i18next";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export function StatsBar() {
  const { t } = useTranslation();

  const stats: Stat[] = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "2,500+",
      label: t("stats.students"),
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "12+",
      label: t("stats.years"),
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      value: "25+",
      label: t("stats.courses"),
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      value: "1,800+",
      label: t("stats.graduates"),
    },
  ];

  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
              data-testid={`stat-${index}`}
            >
              <div className="p-3 rounded-lg bg-primary/10">
                {stat.icon}
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
