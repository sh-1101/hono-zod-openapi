import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { tasksApi } from "./tasks";

export const api = new OpenAPIHono();

api
  .route("/tasks", tasksApi)
  .doc("/specification", {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
    },
  })
  .get(
    "/doc",
    swaggerUI({
      url: "/api/specification",
    })
  );
