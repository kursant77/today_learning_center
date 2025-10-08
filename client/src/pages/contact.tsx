import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality - form submission
    console.log('Contact form submitted:', formData);
    toast({
      title: t("contact.send"),
      description: t("register.success"),
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t("contact.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("contact.address")}</div>
                    <div className="text-sm text-muted-foreground">
                      Tashkent, Chilonzor district, Bunyodkor Avenue 12
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("contact.phone")}</div>
                    <div className="text-sm text-muted-foreground">
                      +998 90 123 45 67
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("contact.email")}</div>
                    <div className="text-sm text-muted-foreground">
                      info@tooday.uz
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t("contact.workHours")}</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>{t("contact.mondayFriday")}: 09:00 - 18:00</div>
                      <div>{t("contact.saturday")}: 09:00 - 14:00</div>
                      <div>{t("contact.sunday")}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="font-medium mb-3">{t("footer.followUs")}</div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => console.log('Facebook clicked')}
                      data-testid="button-contact-facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => console.log('Instagram clicked')}
                      data-testid="button-contact-instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => console.log('Telegram clicked')}
                      data-testid="button-contact-telegram"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary/50 mx-auto" />
                  <p className="text-sm text-muted-foreground">Google Maps Integration</p>
                </div>
              </div>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("contact.message")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("contact.name")}</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t("contact.name")}
                    required
                    data-testid="input-contact-name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("contact.email")}</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t("contact.email")}
                    required
                    data-testid="input-contact-email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("contact.message")}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.message")}
                    rows={6}
                    required
                    data-testid="input-contact-message"
                  />
                </div>

                <Button type="submit" className="w-full" data-testid="button-contact-submit">
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
