import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    phone: "",
    courseId: "",
    interests: "",
  });

  //todo: remove mock functionality - courses list
  const courses = [
    { id: "1", nameUz: "Frontend Development", nameRu: "Frontend Разработка", nameEn: "Frontend Development" },
    { id: "2", nameUz: "Backend Development", nameRu: "Backend Разработка", nameEn: "Backend Development" },
    { id: "3", nameUz: "Python Programming", nameRu: "Программирование на Python", nameEn: "Python Programming" },
    { id: "4", nameUz: "IELTS Preparation", nameRu: "Подготовка к IELTS", nameEn: "IELTS Preparation" },
    { id: "5", nameUz: "General English", nameRu: "Общий английский", nameEn: "General English" },
    { id: "6", nameUz: "Matematika - DTM", nameRu: "Математика - ДТМ", nameEn: "Mathematics - DTM" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: remove mock functionality - form submission
    console.log('Registration form submitted:', formData);
    toast({
      title: t("register.success"),
      description: t("register.success"),
    });
    setFormData({
      fullName: "",
      age: "",
      phone: "",
      courseId: "",
      interests: "",
    });
  };

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("register.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("register.subtitle")}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t("register.title")}</CardTitle>
            <CardDescription>{t("register.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">{t("register.fullName")}</label>
                <Input
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t("register.fullName")}
                  required
                  data-testid="input-fullname"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("register.age")}</label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder={t("register.age")}
                  required
                  min="10"
                  max="100"
                  data-testid="input-age"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("register.phone")}</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 90 123 45 67"
                  required
                  data-testid="input-phone"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("register.selectCourse")}</label>
                <Select
                  value={formData.courseId}
                  onValueChange={(value) => setFormData({ ...formData, courseId: value })}
                  required
                >
                  <SelectTrigger data-testid="select-course">
                    <SelectValue placeholder={t("register.selectCourse")} />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {i18n.language === "uz" ? course.nameUz :
                         i18n.language === "ru" ? course.nameRu :
                         course.nameEn}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("register.interests")}</label>
                <Textarea
                  value={formData.interests}
                  onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                  placeholder={t("register.interests")}
                  rows={4}
                  required
                  data-testid="input-interests"
                />
              </div>

              <Button type="submit" className="w-full" data-testid="button-submit">
                {t("register.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
