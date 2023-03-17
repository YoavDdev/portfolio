export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the project',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'techonlogies',
      type: 'array',
      title: 'Techonlogies',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'linkToBuild',
      type: 'url',
      title: 'LinkToBuild',
    },
  ],
}
