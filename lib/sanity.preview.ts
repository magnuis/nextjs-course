"use  client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("You must be signed in to access this page");
}

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId og dataset. Check your sanity.json or .env"
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
