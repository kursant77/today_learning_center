import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Gallery() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: t("gallery.all") },
    { value: "classes", label: t("gallery.classes") },
    { value: "events", label: t("gallery.eventsGallery") },
    { value: "graduates", label: t("gallery.graduatesGallery") },
  ];

  //todo: remove mock functionality - gallery items with placeholder colors
  const galleryItems = [
    { id: "1", category: "classes", title: "Frontend Class", color: "from-blue-500/20 to-blue-500/5" },
    { id: "2", category: "classes", title: "Python Workshop", color: "from-green-500/20 to-green-500/5" },
    { id: "3", category: "events", title: "Certificate Ceremony", color: "from-purple-500/20 to-purple-500/5" },
    { id: "4", category: "classes", title: "IELTS Session", color: "from-orange-500/20 to-orange-500/5" },
    { id: "5", category: "graduates", title: "Graduate 2024", color: "from-pink-500/20 to-pink-500/5" },
    { id: "6", category: "events", title: "Open Doors Day", color: "from-teal-500/20 to-teal-500/5" },
    { id: "7", category: "classes", title: "Backend Course", color: "from-indigo-500/20 to-indigo-500/5" },
    { id: "8", category: "graduates", title: "Success Stories", color: "from-red-500/20 to-red-500/5" },
    { id: "9", category: "events", title: "IT Bootcamp", color: "from-yellow-500/20 to-yellow-500/5" },
    { id: "10", category: "classes", title: "Math Class", color: "from-cyan-500/20 to-cyan-500/5" },
    { id: "11", category: "graduates", title: "Top Students", color: "from-violet-500/20 to-violet-500/5" },
    { id: "12", category: "events", title: "New Year Celebration", color: "from-emerald-500/20 to-emerald-500/5" },
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("gallery.title")}</h1>
          <p className="text-lg text-muted-foreground">{t("gallery.subtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`aspect-square hover-elevate cursor-pointer overflow-hidden bg-gradient-to-br ${item.color}`}
              onClick={() => console.log('Image clicked:', item.id)}
              data-testid={`gallery-item-${item.id}`}
            >
              <div className="h-full w-full flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground/40 mb-2">
                    {item.title.charAt(0)}
                  </div>
                  <p className="text-sm font-medium text-foreground/70">
                    {item.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
