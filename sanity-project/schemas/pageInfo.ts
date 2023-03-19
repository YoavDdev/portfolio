export default {
  name: 'pageInfo',
  type: 'document',
  title: 'PageInfo',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'backgroundInformation',
      type: 'string',
      title: 'BackgroundInformation',
    },
    {
      name: 'porfilePic',
      type: 'image',
      title: 'PorfilePic',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'PhoneNumber',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'social',
      type: 'array',
      title: 'Social',
      of: [{type: 'reference', to: {type: 'social'}}],
    },
  ],
}
