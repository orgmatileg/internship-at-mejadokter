import { mysqlTable, int, varchar, decimal, text, serial } from "drizzle-orm/mysql-core";

export const kategori = mysqlTable("kategori", {
  id: serial("id").primaryKey(),
  nama: varchar("nama", 255).notNull(),
});

export const rumah = mysqlTable("rumah", {
  id: serial("id").primaryKey(),
  nama: varchar("nama", 255).notNull(),
  deskripsi: text("deskripsi"),
  harga: decimal("harga", 10, 2).notNull(),
  gambar: varchar("gambar", 255),
  kategori_id: int("kategori_id").notNull().references(() => kategori.id),
});

export const submission = mysqlTable("submission", {
  id: serial("id").primaryKey(),
  nama: varchar("nama", 255).notNull(),
  no_hp: varchar("no_hp", 20).notNull(),
  email: varchar("email", 255).notNull(),
  rumah_id: int("rumah_id").notNull().references(() => rumah.id),
});