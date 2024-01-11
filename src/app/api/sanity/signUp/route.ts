import { signUpHandler } from "next-auth-sanity";

import sanityClient from "@/libs/sanityClient";

export const POST = signUpHandler(sanityClient);