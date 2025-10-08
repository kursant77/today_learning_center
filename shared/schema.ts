import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  nameUz: text("name_uz").notNull(),
  nameRu: text("name_ru").notNull(),
  nameEn: text("name_en").notNull(),
  description: text("description").notNull(),
  descriptionUz: text("description_uz").notNull(),
  descriptionRu: text("description_ru").notNull(),
  descriptionEn: text("description_en").notNull(),
  category: text("category").notNull(),
  duration: text("duration").notNull(),
  price: text("price").notNull(),
  level: text("level").notNull(),
  teacherId: varchar("teacher_id").notNull(),
  schedule: text("schedule").notNull(),
  imageUrl: text("image_url"),
});

export const teachers = pgTable("teachers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  specialty: text("specialty").notNull(),
  specialtyUz: text("specialty_uz").notNull(),
  specialtyRu: text("specialty_ru").notNull(),
  specialtyEn: text("specialty_en").notNull(),
  experience: integer("experience").notNull(),
  bio: text("bio").notNull(),
  bioUz: text("bio_uz").notNull(),
  bioRu: text("bio_ru").notNull(),
  bioEn: text("bio_en").notNull(),
  imageUrl: text("image_url"),
  linkedIn: text("linked_in"),
  telegram: text("telegram"),
  instagram: text("instagram"),
});

export const applications = pgTable("applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  age: integer("age").notNull(),
  phone: text("phone").notNull(),
  courseId: varchar("course_id").notNull(),
  interests: text("interests").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  titleUz: text("title_uz").notNull(),
  titleRu: text("title_ru").notNull(),
  titleEn: text("title_en").notNull(),
  description: text("description").notNull(),
  descriptionUz: text("description_uz").notNull(),
  descriptionRu: text("description_ru").notNull(),
  descriptionEn: text("description_en").notNull(),
  date: timestamp("date").notNull(),
  imageUrl: text("image_url"),
  category: text("category").notNull(),
});

export const insertCourseSchema = createInsertSchema(courses).omit({ id: true });
export const insertTeacherSchema = createInsertSchema(teachers).omit({ id: true });
export const insertApplicationSchema = createInsertSchema(applications).omit({ id: true, createdAt: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });

export type Course = typeof courses.$inferSelect;
export type Teacher = typeof teachers.$inferSelect;
export type Application = typeof applications.$inferSelect;
export type Event = typeof events.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type InsertTeacher = z.infer<typeof insertTeacherSchema>;
export type InsertApplication = z.infer<typeof insertApplicationSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;
