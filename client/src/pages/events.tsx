import { useTranslation } from "react-i18next";
import { EventCard } from "@/components/EventCard";

export default function Events() {
  const { t, i18n } = useTranslation();

  //todo: remove mock functionality
  const allEvents = [
    {
      id: "1",
      titleUz: "Sertifikat topshirish marosimi",
      titleRu: "Церемония вручения сертификатов",
      titleEn: "Certificate Award Ceremony",
      descriptionUz: "2024-yil Frontend Development kursini muvaffaqiyatli tugatgan talabalarga sertifikat topshiriladi. Marosimda ota-onalar va mehmonlar ishtirok etadi.",
      descriptionRu: "Вручение сертификатов студентам, успешно завершившим курс Frontend Development 2024. На церемонии присутствуют родители и гости.",
      descriptionEn: "Certificate presentation to students who successfully completed Frontend Development course 2024. Parents and guests attend the ceremony.",
      date: new Date("2024-12-15"),
      category: "Graduation",
    },
    {
      id: "2",
      titleUz: "IT Bootcamp 2025",
      titleRu: "IT Bootcamp 2025",
      titleEn: "IT Bootcamp 2025",
      descriptionUz: "Yangi yil uchun maxsus IT bootcamp. 3 oyda professional dasturchi bo'ling. Frontend, Backend va Mobile development bo'yicha intensiv kurs.",
      descriptionRu: "Специальный IT bootcamp к новому году. Станьте профессиональным программистом за 3 месяца. Интенсивный курс по Frontend, Backend и Mobile development.",
      descriptionEn: "Special IT bootcamp for new year. Become a professional developer in 3 months. Intensive course on Frontend, Backend and Mobile development.",
      date: new Date("2025-01-10"),
      category: "Bootcamp",
    },
    {
      id: "3",
      titleUz: "IELTS Mock Test",
      titleRu: "Пробный тест IELTS",
      titleEn: "IELTS Mock Test",
      descriptionUz: "Bepul IELTS mock test va natijalarni tahlil qilish. Barcha uchun ochiq. O'z darajangizni bilib oling.",
      descriptionRu: "Бесплатный пробный тест IELTS и анализ результатов. Открыто для всех. Узнайте свой уровень.",
      descriptionEn: "Free IELTS mock test and results analysis. Open to everyone. Know your level.",
      date: new Date("2024-12-20"),
      category: "Test",
    },
    {
      id: "4",
      titleUz: "Master-klass: Python va AI",
      titleRu: "Мастер-класс: Python и AI",
      titleEn: "Master Class: Python and AI",
      descriptionUz: "Python va Sun'iy Intellekt bo'yicha maxsus master-klass. Mashhur dasturchilar bilan tanishing va tajriba almashing.",
      descriptionRu: "Специальный мастер-класс по Python и Искусственному Интеллекту. Познакомьтесь с известными программистами и обменяйтесь опытом.",
      descriptionEn: "Special master class on Python and Artificial Intelligence. Meet famous programmers and exchange experiences.",
      date: new Date("2025-01-05"),
      category: "Workshop",
    },
    {
      id: "5",
      titleUz: "Ochiq eshiklar kuni",
      titleRu: "День открытых дверей",
      titleEn: "Open Doors Day",
      descriptionUz: "O'quv markazimizga tashrif buyuring. Kurslar, o'qituvchilar va shaxsiy imkoniyatlar bilan tanishing.",
      descriptionRu: "Посетите наш учебный центр. Познакомьтесь с курсами, преподавателями и личными возможностями.",
      descriptionEn: "Visit our learning center. Get acquainted with courses, teachers and personal opportunities.",
      date: new Date("2024-12-25"),
      category: "Open Day",
    },
    {
      id: "6",
      titleUz: "Yangi yil bayram dasturi",
      titleRu: "Новогодняя программа",
      titleEn: "New Year Program",
      descriptionUz: "O'quvchilar, o'qituvchilar va ota-onalar uchun maxsus yangi yil bayram dasturi. Sovg'alar va surprizlar kutmoqda!",
      descriptionRu: "Специальная новогодняя программа для студентов, преподавателей и родителей. Подарки и сюрпризы ждут вас!",
      descriptionEn: "Special New Year program for students, teachers and parents. Gifts and surprises await you!",
      date: new Date("2024-12-30"),
      category: "Holiday",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("events.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("events.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allEvents.map((event) => (
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
    </div>
  );
}
