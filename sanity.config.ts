import { defineConfig, StudioNavbar } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { theme } from "./theme";
import StudioNavBar from "./components/StudioNavBar";
import Logo from "./components/Logo";
import { getDefaultDocumentNode } from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: "/studio",
  name: "PAPAFAM_Content_Studio",
  title: "nextjs13 sanity blog",
  projectId: projectId ? projectId : "",
  dataset: dataset ? dataset : "",

  plugins: [
    deskTool({ defaultDocumentNode: getDefaultDocumentNode }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar,
    },
  },
  theme: theme,
});
