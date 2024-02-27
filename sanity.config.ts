import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dataset, projectId } from "./lib/env.api";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "cojocarudavid",
  title: "cojocarudavid.me",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: { types: schemaTypes },
});
