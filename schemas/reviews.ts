import { defineField } from "sanity";

const reviews = {
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "guitar",
      title: "Guitar",
      type: "reference",
      to: [{ type: "guitar" }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "User Rating",
      type: "number",
      validation: Rule => Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      validation: Rule => Rule.required().min(10).error("Review text must be at least 10 characters"),
    }),
  ]
}


export default reviews;