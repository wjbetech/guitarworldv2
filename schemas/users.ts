import { defineField } from "sanity";

const users = {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    defineField({
      name: "isAdmin",
      title: "Is Admin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false, 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      initialValue: "", 
      validation: Rule => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Email of the user",
      initialValue: "", 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    }),
    defineField({
      name: "emailVerified",
      title: "Email Verified",
      type: "boolean",
      description: "Check if the email is verified",
      initialValue: false, 
      validation: Rule => Rule.required(),
      hidden: true,
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
      description: "Password of the user",
      initialValue: "", 
      validation: Rule => Rule.required(),
      hidden: true
      // optional: readOnly, hidden
    })
  ]
};

export default users;