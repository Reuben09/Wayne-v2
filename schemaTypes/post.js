import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'name',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Add Address',
      type: 'reference',
      to: {type: 'address'},
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'nextmow',
      title: 'Next Mow',
      type: 'string',
    }),
    defineField({
      name: 'lastmow',
      title: 'Last Mow',
      type: 'string',
    }),
    defineField({
      name: 'mowfrequency',
      title: 'Mow Frequency',
      type: 'string',
      options: {
        list: [
          {title: 'Weekly', value: 'weekly'},
          {title: 'Bi-Weekly', value: 'bi-weekly'},
          {title: 'Monthly', value: 'monthly'},
          {title: 'None', value: 'none'},
        ],
        layout: 'radio', // or 'dropdown'
      },
    }),
    defineField({
      name: 'customernumber',
      title: 'Customer Number',
      type: 'number',
    }),
    defineField({
      name: 'productcode',
      title: 'Product Code',
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
