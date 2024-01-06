import { defineField } from "sanity";

const verificationToken = {
  name:'verification-token',
  title: 'Verification Token',
  type: 'document',
  fields: [
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
      description: "Identifcation of the user",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
      description: "User token",
    }),
    defineField({
      name: "expiresAt",
      title: "Expires At",
      type: "datetime",
      description: "When the token expires",
    }),
  ]
}

export default verificationToken;