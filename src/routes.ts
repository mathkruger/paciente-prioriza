import { html } from "@elysiajs/html";
import Elysia from "elysia";
import { HomeController } from "./controllers/home.controller";

export const routes = new Elysia().use(html()).get("/", () => {
  return HomeController.getHome();
});


