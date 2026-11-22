import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import homeMedia from "./schemas/homeMedia";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "REPLACE_WITH_PROJECT_ID";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
  name: "genova-web",
  title: "Genova Web",
  projectId,
  dataset,
  plugins: [
    structureTool({
      // "Homepage photos & videos" is a single document, not a list.
      structure: (S) =>
        S.list()
          .title("Genova Web")
          .items([
            S.listItem()
              .title("Homepage photos & videos")
              .id("homeMedia")
              .child(S.document().schemaType("homeMedia").documentId("homeMedia")),
          ]),
    }),
  ],
  schema: { types: [homeMedia] },
});
