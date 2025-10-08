import { useTranslation } from "react-i18next";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { CourseCard } from "@/components/CourseCard";
import { TeacherCard } from "@/components/TeacherCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { t, i18n } = useTranslation();

  //todo: remove mock functionality - featured courses
  const featuredCourses = [
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
      id: "3",
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

  //todo: remove mock functionality - featured teachers
  const featuredTeachers = [
    {
      id: "1",
      name: "Aziz Rahimov",
      specialtyUz: "Frontend Developer",
      specialtyRu: "Frontend Разработчик",
      specialtyEn: "Frontend Developer",
      experience: 8,
      bioUz: "8 yillik tajribaga ega frontend developer. Google va Facebook loyihalarida ishlaganman.",
      bioRu: "Frontend разработчик с 8-летним опытом. Работал над проектами Google и Facebook.",
      bioEn: "Frontend developer with 8 years of experience. Worked on Google and Facebook projects.",
      linkedIn: "https://linkedin.com",
      telegram: "https://t.me",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      specialtyUz: "IELTS Mutaxassisi",
      specialtyRu: "Специалист IELTS",
      specialtyEn: "IELTS Specialist",
      experience: 10,
      bioUz: "10 yillik IELTS o'qitish tajribasi. 500+ talaba 7+ ball olishda yordam berdim.",
      bioRu: "10 лет опыта преподавания IELTS. Помог более 500 студентам получить 7+ баллов.",
      bioEn: "10 years of IELTS teaching experience. Helped 500+ students achieve 7+ scores.",
      instagram: "https://instagram.com",
    },
    {
      id: "3",
      name: "Sardor Karimov",
      specialtyUz: "Python Developer",
      specialtyRu: "Python Разработчик",
      specialtyEn: "Python Developer",
      experience: 6,
      bioUz: "6 yillik Python dasturlash tajribasi. Machine Learning va AI bo'yicha mutaxassis.",
      bioRu: "6 лет опыта программирования на Python. Специалист по Machine Learning и AI.",
      bioEn: "6 years of Python programming experience. Specialist in Machine Learning and AI.",
      linkedIn: "https://linkedin.com",
      telegram: "https://t.me",
    },
    {
      id: "4",
      name: "Dilnoza Yusupova",
      specialtyUz: "Matematika o'qituvchisi",
      specialtyRu: "Учитель математики",
      specialtyEn: "Mathematics Teacher",
      experience: 12,
      bioUz: "12 yillik matematika o'qitish tajribasi. Abituriyentlarga maxsus tayyorgarlik.",
      bioRu: "12 лет опыта преподавания математики. Специальная подготовка для абитуриентов.",
      bioEn: "12 years of mathematics teaching experience. Special preparation for university applicants.",
      instagram: "https://instagram.com",
    },
  ];

  //todo: remove mock functionality - testimonials
  const testimonials = [
    {
      id: "1",
      name: "Ali Karimov",
      course: "Frontend Development",
      text: i18n.language === "uz" 
        ? "Tooday o'quv markazida o'qish mening hayotimni o'zgartirdi. Professional o'qituvchilar va zamonaviy dastur tufayli men orzuimdagi ishga joylashdim."
        : i18n.language === "ru"
        ? "Обучение в Tooday изменило мою жизнь. Благодаря профессиональным преподавателям и современной программе я устроился на работу мечты."
        : "Studying at Tooday changed my life. Thanks to professional teachers and modern curriculum, I got my dream job.",
    },
    {
      id: "2",
      name: "Madina Yusupova",
      course: "IELTS Preparation",
      text: i18n.language === "uz"
        ? "IELTS kursida o'qib 7.5 ball oldim. O'qituvchilar juda malakali va har bir talabaga alohida e'tibor berishadi."
        : i18n.language === "ru"
        ? "Я получила 7.5 баллов на IELTS после курса. Преподаватели очень квалифицированные и уделяют внимание каждому студенту."
        : "I scored 7.5 on IELTS after the course. Teachers are very qualified and give individual attention to each student.",
    },
    {
      id: "3",
      name: "Sardor Rahimov",
      course: "Python Programming",
      text: i18n.language === "uz"
        ? "Python dasturlash kursini tugatgandan so'ng, men mustaqil loyihalar yaratishni boshladim. Kurs juda amaliy va tushunarli."
        : i18n.language === "ru"
        ? "После завершения курса Python я начал создавать собственные проекты. Курс очень практичный и понятный."
        : "After completing the Python course, I started creating my own projects. The course is very practical and understandable.",
    },
  ];

  //todo: remove mock functionality - latest events
  const latestEvents = [
    {
      id: "1",
      titleUz: "Sertifikat topshirish marosimi",
      titleRu: "Церемония вручения сертификатов",
      titleEn: "Certificate Award Ceremony",
      descriptionUz: "2024-yil Frontend Development kursini muvaffaqiyatli tugatgan talabalarga sertifikat topshiriladi",
      descriptionRu: "Вручение сертификатов студентам, успешно завершившим курс Frontend Development 2024",
      descriptionEn: "Certificate presentation to students who successfully completed Frontend Development course 2024",
      date: new Date("2024-12-15"),
      category: "Graduation",
    },
    {
      id: "2",
      titleUz: "IT Bootcamp 2025",
      titleRu: "IT Bootcamp 2025",
      titleEn: "IT Bootcamp 2025",
      descriptionUz: "Yangi yil uchun maxsus IT bootcamp. 3 oyda professional dasturchi bo'ling",
      descriptionRu: "Специальный IT bootcamp к новому году. Станьте профессиональным программистом за 3 месяца",
      descriptionEn: "Special IT bootcamp for new year. Become a professional developer in 3 months",
      date: new Date("2025-01-10"),
      category: "Bootcamp",
    },
    {
      id: "3",
      titleUz: "IELTS Mock Test",
      titleRu: "Пробный тест IELTS",
      titleEn: "IELTS Mock Test",
      descriptionUz: "Bepul IELTS mock test va natijalarni tahlil qilish. Barcha uchun ochiq",
      descriptionRu: "Бесплатный пробный тест IELTS и анализ результатов. Открыто для всех",
      descriptionEn: "Free IELTS mock test and results analysis. Open to everyone",
      date: new Date("2024-12-20"),
      category: "Test",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />

      <section className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{t("courses.title")}</h2>
              <p className="text-muted-foreground mt-2">{t("courses.subtitle")}</p>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-courses">
                {t("courses.filter")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
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
      </section>

      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{t("teachers.title")}</h2>
              <p className="text-muted-foreground mt-2">{t("teachers.subtitle")}</p>
            </div>
            <Link href="/teachers">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-teachers">
                {t("teachers.viewProfile")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                id={teacher.id}
                name={teacher.name}
                specialty={
                  i18n.language === "uz" ? teacher.specialtyUz :
                  i18n.language === "ru" ? teacher.specialtyRu :
                  teacher.specialtyEn
                }
                experience={teacher.experience}
                bio={
                  i18n.language === "uz" ? teacher.bioUz :
                  i18n.language === "ru" ? teacher.bioRu :
                  teacher.bioEn
                }
                linkedIn={teacher.linkedIn}
                telegram={teacher.telegram}
                instagram={teacher.instagram}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{t("testimonials.title")}</h2>
            <p className="text-muted-foreground mt-2">{t("testimonials.subtitle")}</p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <section className="w-full py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">{t("events.title")}</h2>
              <p className="text-muted-foreground mt-2">{t("events.subtitle")}</p>
            </div>
            <Link href="/events">
              <Button variant="outline" className="gap-2" data-testid="button-view-all-events">
                {t("events.readMore")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEvents.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={
                  i18n.language === "uz" ? event.titleUz :
                  i18n.language === "ru" ? event.titleRu :
                  event.titleEn
                }
                description={
                  i18n.language === "uz" ? event.descriptionUz :
                  i18n.language === "ru" ? event.descriptionRu :
                  event.descriptionEn
                }
                date={event.date}
                category={event.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("register.title")}</h2>
          <p className="text-muted-foreground mb-8">{t("register.subtitle")}</p>
          <Link href="/register">
            <Button size="lg" className="gap-2" data-testid="button-cta-register">
              {t("hero.registerBtn")}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
