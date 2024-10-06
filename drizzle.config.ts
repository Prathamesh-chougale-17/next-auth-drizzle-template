import { defineConfig } from "drizzle-kit";
import { env } from "./env";
export default defineConfig({
  schema: "./drizzle/schema.ts",
  out: "./drizzle/generated",
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["auth_*"],
});