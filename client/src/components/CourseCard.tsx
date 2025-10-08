import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, TrendingUp, User } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CourseCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  price: string;
  level: string;
  teacherName: string;
  imageUrl?: string;
}

export function CourseCard({
  name,
  description,
  category,
  duration,
  price,
  level,
  teacherName,
}: CourseCardProps) {
  const { t } = useTranslation();

  const getCategoryColor = (cat: string) => {
    if (cat === "IT") return "bg-blue-500/10 text-blue-700 dark:text-blue-300";
    if (cat === "Languages") return "bg-green-500/10 text-green-700 dark:text-green-300";
    return "bg-purple-500/10 text-purple-700 dark:text-purple-300";
  };

  return (
    <Card className="hover-elevate overflow-hidden flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 flex items-center justify-center">
        <div className="text-6xl text-primary/30 font-bold">
          {name.charAt(0)}
        </div>
      </div>
      
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <Badge className={getCategoryColor(category)} data-testid="badge-category">
            {category}
          </Badge>
          <Badge variant="secondary" data-testid="badge-level">
            {level}
          </Badge>
        </div>
        <div>
          <h3 className="text-xl font-semibold line-clamp-2" data-testid="text-course-name">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 flex-1">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{t("courses.teacher")}:</span>
          <span className="font-medium">{teacherName}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{t("courses.duration")}:</span>
          <span className="font-medium">{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{t("courses.price")}:</span>
          <span className="font-medium">{price}</span>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" data-testid="button-view-course">
          {t("courses.viewDetails")}
        </Button>
      </CardFooter>
    </Card>
  );
}
