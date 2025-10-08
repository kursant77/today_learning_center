import { useTranslation } from "react-i18next";
import { TeacherCard } from "@/components/TeacherCard";

export default function Teachers() {
  const { t, i18n } = useTranslation();

  //todo: remove mock functionality
  const allTeachers = [
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
    {
      id: "5",
      name: "Emma Wilson",
      specialtyUz: "Ingliz tili o'qituvchisi",
      specialtyRu: "Учитель английского",
      specialtyEn: "English Teacher",
      experience: 7,
      bioUz: "7 yillik ingliz tili o'qitish tajribasi. Cambridge sertifikatiga ega.",
      bioRu: "7 лет опыта преподавания английского языка. Имеет сертификат Cambridge.",
      bioEn: "7 years of English teaching experience. Cambridge certified.",
      linkedIn: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "6",
      name: "Rustam Aliyev",
      specialtyUz: "Backend Developer",
      specialtyRu: "Backend Разработчик",
      specialtyEn: "Backend Developer",
      experience: 9,
      bioUz: "9 yillik backend dasturlash tajribasi. Node.js va cloud texnologiyalari mutaxassisi.",
      bioRu: "9 лет опыта backend программирования. Специалист по Node.js и облачным технологиям.",
      bioEn: "9 years of backend development experience. Specialist in Node.js and cloud technologies.",
      linkedIn: "https://linkedin.com",
      telegram: "https://t.me",
    },
  ];

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("teachers.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("teachers.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allTeachers.map((teacher) => (
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
    </div>
  );
}
