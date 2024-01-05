import { defineField } from "sanity";

const guitars = {
  name: 'guitar',
  title: 'Guitars',
  type: 'document',
  fields: [
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      description: "Model of the guitar",
      initialValue: "", 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the guitar",
      initialValue: 0, 
      validation: Rule => Rule.required().min(159).error("Price must be at least 159")
      // optional: readOnly, hidden
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      description: "Current discount on the guitar",
      initialValue: 0, 
      validation: Rule => Rule.required().max(15).error("Discount must be at most 15"),
      // optional: readOnly, hidden
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      description: "Image of the guitar", 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the guitar",
      initialValue: "", 
      validation: Rule => [Rule.required(), Rule.max(100).error("Description can not be more than 100 characters"), Rule.min(10).error("Description can not be less than 10 characters")],
      // optional: readOnly, hidden
    }),
    defineField({
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      description: "Is the guitar in stock",
      initialValue: false, 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    }),
    defineField({
      name: "amount",
      title: "Amount",
      type: "number",
      description: "How many of the guitars are in stock",
      initialValue: 0, 
      validation: Rule => Rule.required()
      // optional: readOnly, hidden
    })
  ]
};

export default guitars;