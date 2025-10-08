import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Send, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

interface TeacherCardProps {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  bio: string;
  imageUrl?: string;
  linkedIn?: string;
  telegram?: string;
  instagram?: string;
}

export function TeacherCard({
  name,
  specialty,
  experience,
  bio,
  linkedIn,
  telegram,
  instagram,
}: TeacherCardProps) {
  const { t } = useTranslation();

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="hover-elevate overflow-hidden flex flex-col h-full">
      <CardContent className="pt-6 space-y-4 flex-1">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
            {initials}
          </div>
          <div>
            <h3 className="text-xl font-semibold" data-testid="text-teacher-name">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{specialty}</p>
          </div>
          <Badge variant="secondary" data-testid="badge-experience">
            {experience} {t("teachers.experience")}
          </Badge>
        </div>
        
        <p className="text-sm text-muted-foreground text-center line-clamp-3">
          {bio}
        </p>

        {(linkedIn || telegram || instagram) && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {linkedIn && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => window.open(linkedIn, '_blank')}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            )}
            {telegram && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => window.open(telegram, '_blank')}
                data-testid="button-telegram"
              >
                <Send className="h-4 w-4" />
              </Button>
            )}
            {instagram && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => window.open(instagram, '_blank')}
                data-testid="button-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full" data-testid="button-view-teacher">
          {t("teachers.viewProfile")}
        </Button>
      </CardFooter>
    </Card>
  );
}
