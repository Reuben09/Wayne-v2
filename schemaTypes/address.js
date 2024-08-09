import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
