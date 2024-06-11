import { defineType, defineField } from "sanity";

export const academy = defineType({
  name: "academy",
  title: "Academy",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});

