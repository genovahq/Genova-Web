import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "REPLACE_WITH_PROJECT_ID",
    dataset: process.env.SANITY_STUDIO_DATASET || "production",
  },
  // Deployed to https://genova-web.sanity.studio
  studioHost: "genova-web",
});
