import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_EDITOR_TOKEN as string,
  apiVersion: "2022-03-07"
})

export default sanityClient;