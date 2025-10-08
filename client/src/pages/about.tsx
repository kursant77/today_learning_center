import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from "lucide-react";

export default function About() {
  const { t, i18n } = useTranslation();

  const advantages = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      titleUz: "Tajribali o'qituvchilar",
      titleRu: "Опытные преподаватели",
      titleEn: "Experienced Teachers",
      descUz: "Barcha o'qituvchilarimiz 5+ yillik tajribaga ega professional mutaxassislar",
      descRu: "Все наши преподаватели - профессионалы с опытом более 5 лет",
      descEn: "All our teachers are professionals with 5+ years of experience",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      titleUz: "Zamonaviy dastur",
      titleRu: "Современная программа",
      titleEn: "Modern Curriculum",
      descUz: "Eng so'nggi texnologiyalar va metodlarga asoslangan o'quv dasturi",
      descRu: "Учебная программа, основанная на новейших технологиях и методах",
      descEn: "Curriculum based on latest technologies and methods",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      titleUz: "Kafolatlangan natija",
      titleRu: "Гарантированный результат",
      titleEn: "Guaranteed Results",
      descUz: "95% bitiruvchilarimiz orzuiga erishadi va ishga joylashadi",
      descRu: "95% наших выпускников достигают своих целей и трудоустраиваются",
      descEn: "95% of our graduates achieve their goals and get employed",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      titleUz: "Rasmiy sertifikat",
      titleRu: "Официальный сертификат",
      titleEn: "Official Certificate",
      descUz: "Kursni tugatganingizdan so'ng xalqaro tan olingan sertifikat oling",
      descRu: "Получите международно признанный сертификат после завершения курса",
      descEn: "Receive internationally recognized certificate after course completion",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t("about.mission")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {i18n.language === "uz"
                  ? "Biz har bir talabaga sifatli ta'lim berib, ularning professional rivojlanishiga hissa qo'shishni maqsad qilganmiz. Zamonaviy texnologiyalar va tajribali o'qituvchilar yordamida yoshlarni kelajakka tayyorlaymiz."
                  : i18n.language === "ru"
                  ? "Наша цель - предоставить каждому студенту качественное образование и внести вклад в их профессиональное развитие. Мы готовим молодежь к будущему с помощью современных технологий и опытных преподавателей."
                  : "Our mission is to provide quality education to every student and contribute to their professional development. We prepare youth for the future with modern technologies and experienced teachers."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{t("about.vision")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {i18n.language === "uz"
                  ? "O'zbekistondagi eng yetakchi va innovatsion o'quv markazi bo'lish. 2030 yilga kelib 10,000+ professional mutaxassislarni tayyorlash va xalqaro standartlarga mos ta'lim berish."
                  : i18n.language === "ru"
                  ? "Стать ведущим и инновационным учебным центром в Узбекистане. К 2030 году подготовить 10,000+ профессиональных специалистов и обеспечить образование, соответствующее международным стандартам."
                  : "To become the leading and most innovative learning center in Uzbekistan. By 2030, train 10,000+ professional specialists and provide education that meets international standards."}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.advantages")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {advantage.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {i18n.language === "uz" ? advantage.titleUz :
                       i18n.language === "ru" ? advantage.titleRu :
                       advantage.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {i18n.language === "uz" ? advantage.descUz :
                       i18n.language === "ru" ? advantage.descRu :
                       advantage.descEn}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("about.history")}</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                {i18n.language === "uz"
                  ? "Tooday o'quv markazi 2012 yilda tashkil topgan. Biz kichik guruh bilan boshlaganmiz, ammo bugungi kunda 2500+ talaba bizning markazimizda o'qiydi. 12 yil davomida biz 1800+ professional mutaxassislarni tayyorladik. Bizning bitiruvchilarimiz yirik kompaniyalar va xalqaro tashkilotlarda muvaffaqiyatli ishlashmoqda."
                  : i18n.language === "ru"
                  ? "Учебный центр Tooday был основан в 2012 году. Мы начали с небольшой группы, но сегодня в нашем центре обучается 2500+ студентов. За 12 лет мы подготовили 1800+ профессиональных специалистов. Наши выпускники успешно работают в крупных компаниях и международных организациях."
                  : "Tooday Learning Center was established in 2012. We started with a small group, but today 2500+ students study at our center. Over 12 years, we have trained 1800+ professional specialists. Our graduates successfully work in major companies and international organizations."}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
