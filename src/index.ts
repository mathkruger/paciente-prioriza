import Elysia from "elysia";
import { routes } from "./routes";

const server = new Elysia()
.use(routes);

server.listen({
  port: 3000,
});
