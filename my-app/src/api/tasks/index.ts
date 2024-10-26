import { OpenAPIHono } from "@hono/zod-openapi";
import { getTasksHandler, getTasksRoute } from "./getTasks";
import { createTasksHandler, createTasksRoute } from "./createTasks";

export const tasksApi = new OpenAPIHono();
tasksApi
  .openapi(getTasksRoute, getTasksHandler)
  .openapi(createTasksRoute, createTasksHandler);
