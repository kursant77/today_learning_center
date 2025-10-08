import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function Courses() {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  //todo: remove mock functionality
  const allCourses = [
    {
      id: "1",
      nameUz: "Frontend Development",
      nameRu: "Frontend Разработка",
      nameEn: "Frontend Development",
      descriptionUz: "React, TypeScript va Tailwind CSS bilan zamonaviy veb-saytlar yarating",
      descriptionRu: "Создавайте современные веб-сайты с React, TypeScript и Tailwind CSS",
      descriptionEn: "Build modern websites with React, TypeScript and Tailwind CSS",
      category: "IT",
      duration: "3 oy",
      price: "$299",
      level: t("courses.intermediate"),
      teacherName: "Aziz Rahimov",
    },
    {
      id: "2",
      nameUz: "Backend Development",
      nameRu: "Backend Разработка",
      nameEn: "Backend Development",
      descriptionUz: "Node.js, Express va MongoDB bilan server-side dasturlash",
      descriptionRu: "Программирование на стороне сервера с Node.js, Express и MongoDB",
      descriptionEn: "Server-side programming with Node.js, Express and MongoDB",
      category: "IT",
      duration: "4 oy",
      price: "$350",
      level: t("courses.advanced"),
      teacherName: "Rustam Aliyev",
    },
    {
      id: "3",
      nameUz: "IELTS Preparation",
      nameRu: "Подготовка к IELTS",
      nameEn: "IELTS Preparation",
      descriptionUz: "IELTS imtihoniga professional tayyorgarlik va yuqori ball kafolati",
      descriptionRu: "Профессиональная подготовка к IELTS с гарантией высокого балла",
      descriptionEn: "Professional IELTS preparation with high score guarantee",
      category: "Languages",
      duration: "4 oy",
      price: "$250",
      level: t("courses.intermediate"),
      teacherName: "Sarah Johnson",
    },
    {
      id: "4",
      nameUz: "General English",
      nameRu: "Общий английский",
      nameEn: "General English",
      descriptionUz: "Ingliz tilini noldan o'rganing va erkin gapiring",
      descriptionRu: "Изучите английский с нуля и свободно говорите",
      descriptionEn: "Learn English from scratch and speak fluently",
      category: "Languages",
      duration: "6 oy",
      price: "$200",
      level: t("courses.beginner"),
      teacherName: "Emma Wilson",
    },
    {
      id: "5",
      nameUz: "Matematika - DTM",
      nameRu: "Математика - ДТМ",
      nameEn: "Mathematics - University Entrance",
      descriptionUz: "DTM va universitetga kirish uchun matematika fanidan tayyorgarlik",
      descriptionRu: "Подготовка по математике для поступления в университет",
      descriptionEn: "Mathematics preparation for university entrance exams",
      category: "Exams",
      duration: "5 oy",
      price: "$180",
      level: t("courses.intermediate"),
      teacherName: "Dilnoza Yusupova",
    },
    {
      id: "6",
      nameUz: "Python Programming",
      nameRu: "Программирование на Python",
      nameEn: "Python Programming",
      descriptionUz: "Python dasturlash tilini noldan o'rganing va real loyihalar yarating",
      descriptionRu: "Изучите Python с нуля и создавайте реальные проекты",
      descriptionEn: "Learn Python from scratch and build real projects",
      category: "IT",
      duration: "4 oy",
      price: "$350",
      level: t("courses.beginner"),
      teacherName: "Sardor Karimov",
    },
  ];

  const categories = [
    { value: "all", label: t("courses.all") },
    { value: "IT", label: t("courses.it") },
    { value: "Languages", label: t("courses.languages") },
    { value: "Exams", label: t("courses.exams") },
  ];

  const filteredCourses = selectedCategory === "all"
    ? allCourses
    : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("courses.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("courses.subtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>{t("courses.filter")}:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              data-testid={`filter-${category.value}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={
                i18n.language === "uz" ? course.nameUz :
                i18n.language === "ru" ? course.nameRu :
                course.nameEn
              }
              description={
                i18n.language === "uz" ? course.descriptionUz :
                i18n.language === "ru" ? course.descriptionRu :
                course.descriptionEn
              }
              category={course.category}
              duration={course.duration}
              price={course.price}
              level={course.level}
              teacherName={course.teacherName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
