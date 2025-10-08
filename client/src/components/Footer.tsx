import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Facebook, Instagram, Send, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/courses", label: t("nav.courses") },
    { path: "/teachers", label: t("nav.teachers") },
    { path: "/about", label: t("nav.about") },
    { path: "/events", label: t("nav.events") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="w-full border-t bg-muted/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                T
              </div>
              <span className="font-bold text-2xl">Tooday</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.about")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.quickLinks")}</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t("footer.followUs")}</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log('Facebook clicked')}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log('Instagram clicked')}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log('Telegram clicked')}
                data-testid="button-social-telegram"
              >
                <Send className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log('LinkedIn clicked')}
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tooday. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
