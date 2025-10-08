import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/courses", label: t("nav.courses") },
    { path: "/teachers", label: t("nav.teachers") },
    { path: "/about", label: t("nav.about") },
    { path: "/events", label: t("nav.events") },
    { path: "/schedule", label: t("nav.schedule") },
    { path: "/gallery", label: t("nav.gallery") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 hover-elevate rounded-md px-2 py-1">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                T
              </div>
              <span className="font-bold text-xl">Tooday</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/register" className="hidden md:block">
              <Button data-testid="button-register">{t("nav.register")}</Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant={location === link.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link href="/register">
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)} data-testid="button-mobile-register">
                {t("nav.register")}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
