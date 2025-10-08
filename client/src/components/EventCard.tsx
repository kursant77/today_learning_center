import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { format } from "date-fns";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  imageUrl?: string;
}

export function EventCard({
  title,
  description,
  date,
  category,
}: EventCardProps) {
  const { t } = useTranslation();

  return (
    <Card className="hover-elevate overflow-hidden flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-accent/20 via-primary/10 to-accent/5 flex items-center justify-center relative">
        <div className="text-6xl text-primary/30 font-bold">
          {title.charAt(0)}
        </div>
        <div className="absolute top-4 right-4">
          <Badge className="bg-background/90 backdrop-blur" data-testid="badge-date">
            <Calendar className="h-3 w-3 mr-1" />
            {format(date, "dd MMM yyyy")}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="space-y-2">
          <Badge variant="secondary" data-testid="badge-category">
            {category}
          </Badge>
          <h3 className="text-xl font-semibold line-clamp-2" data-testid="text-event-title">
            {title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full gap-2" data-testid="button-read-more">
          {t("events.readMore")}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
