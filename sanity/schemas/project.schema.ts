const schema = {
  name:  'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title'}
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'React', value: 'react' },
              { title: 'Next', value: 'next' },
              { title: 'Docker', value: 'docker' },
              { title: 'AWS', value: 'aws' },
              { title: 'Node', value: 'node' },
              { title: 'Mongo Db', value: 'mongodb' },
              { title: 'Laravel', value: 'laravel' },
            ],
          },
        },
      ],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required()
    },
  ]

}

export default schema;