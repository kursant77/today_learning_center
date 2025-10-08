import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Globe } from "lucide-react";

export default function Schedule() {
  const { t } = useTranslation();

  const days = [
    t("schedule.monday"),
    t("schedule.tuesday"),
    t("schedule.wednesday"),
    t("schedule.thursday"),
    t("schedule.friday"),
    t("schedule.saturday"),
  ];

  //todo: remove mock functionality
  const scheduleData = [
    {
      day: 0,
      time: "09:00 - 11:00",
      course: "Frontend Development",
      room: "101",
      type: "offline",
    },
    {
      day: 0,
      time: "14:00 - 16:00",
      course: "Python Programming",
      room: "102",
      type: "offline",
    },
    {
      day: 1,
      time: "10:00 - 12:00",
      course: "IELTS Preparation",
      room: "201",
      type: "offline",
    },
    {
      day: 1,
      time: "15:00 - 17:00",
      course: "Backend Development",
      room: null,
      type: "online",
    },
    {
      day: 2,
      time: "09:00 - 11:00",
      course: "General English",
      room: "201",
      type: "offline",
    },
    {
      day: 2,
      time: "14:00 - 16:00",
      course: "Frontend Development",
      room: "101",
      type: "offline",
    },
    {
      day: 3,
      time: "10:00 - 12:00",
      course: "Matematika - DTM",
      room: "103",
      type: "offline",
    },
    {
      day: 3,
      time: "16:00 - 18:00",
      course: "Python Programming",
      room: null,
      type: "online",
    },
    {
      day: 4,
      time: "09:00 - 11:00",
      course: "IELTS Preparation",
      room: "201",
      type: "offline",
    },
    {
      day: 4,
      time: "14:00 - 16:00",
      course: "Backend Development",
      room: "102",
      type: "offline",
    },
    {
      day: 5,
      time: "10:00 - 12:00",
      course: "Frontend Development",
      room: "101",
      type: "offline",
    },
    {
      day: 5,
      time: "14:00 - 16:00",
      course: "General English",
      room: "201",
      type: "offline",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("schedule.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("schedule.subtitle")}</p>
        </div>

        <div className="grid gap-6">
          {days.map((day, dayIndex) => {
            const dayClasses = scheduleData.filter((item) => item.day === dayIndex);
            
            if (dayClasses.length === 0) return null;

            return (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl">{day}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {dayClasses.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border bg-muted/30"
                      >
                        <div className="flex-1 space-y-2">
                          <div className="font-semibold text-lg">{item.course}</div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{item.time}</span>
                            </div>
                            {item.type === "offline" && item.room && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{t("schedule.room")} {item.room}</span>
                              </div>
                            )}
                          </div>
                          <Badge
                            variant={item.type === "online" ? "default" : "secondary"}
                            className="gap-1"
                          >
                            {item.type === "online" && <Globe className="h-3 w-3" />}
                            {item.type === "online" ? t("schedule.online") : t("schedule.offline")}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
