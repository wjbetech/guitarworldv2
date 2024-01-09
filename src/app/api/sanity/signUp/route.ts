import sanityClient from "@/libs/sanityClient";

import { signUpHandler } from "next-auth-sanity";

export const POST = signUpHandler(sanityClient);