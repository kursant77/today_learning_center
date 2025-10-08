import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/register">
              <Button size="lg" className="gap-2 w-full sm:w-auto" data-testid="button-hero-register">
                <BookOpen className="h-5 w-5" />
                {t("hero.registerBtn")}
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" data-testid="button-hero-courses">
                {t("hero.viewCoursesBtn")}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
