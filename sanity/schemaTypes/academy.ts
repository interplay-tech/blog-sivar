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
    defineField({
      name:'video',
      title:'Video',
      type:'mux.video',
    
    }),
    defineField({
      name:'mainImage',
      title:' Portada',
      type:'image',
      options:{
        hotspot:true,
      }
    }),
    defineField({
      name:'description',
      title:'Descripcion',
      type:'text',
    }),
    defineField({
      name:'filename',
      title:'Filename',
      type:'string',
    }),

  ],
});

