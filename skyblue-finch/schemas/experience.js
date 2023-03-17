export default {
  name: 'expirience',
  type: 'document',
  title: 'Expirience',
  fields: [
    {
      name: 'jobTitle',
      type: 'string',
      title: 'JobTitle',
    },
    {
      name: 'companyImage',
      type: 'image',
      title: 'CompanyImage',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      type: 'text',
      title: 'Company',
    },
    {
      name: 'dateStarted',
      type: 'date',
      title: 'DateStarted',
    },
    {
      name: 'dateEnded',
      type: 'date',
      title: 'DateEnded',
    },
    {
      name: 'isCurentllyWorkingHere',
      type: 'boolean',
      title: 'IsCurentllyWorkingHere',
    },
    {
      name: 'technologies',
      type: 'array',
      title: 'Technologies',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      type: 'array',
      title: 'Points',
      of: [{type: 'string'}],
    },
  ],
}
