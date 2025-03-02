// ./app/lib/db/schema.ts
import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(), // Use text for Kinde Auth ID
  isActivated: boolean("is_activated").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const journals = pgTable("journals", {
  id: serial('id').primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  label: text("label").notNull(), // emotion
  createdAt: timestamp("created_at").defaultNow(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id),
});

export const usersRelations = relations(users, ({ many }) => ({
  journals: many(journals),
}));

export const journalsRelations = relations(journals, ({ one }) => ({
  author: one(users, {
    fields: [journals.userId],
    references: [users.id],
  }),
}));
