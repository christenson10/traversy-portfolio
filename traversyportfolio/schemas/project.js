export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "Personal", title: "Personal" },
          { value: "Client", title: "Client" },
          { value: "School", title: "School" },
        ],
      },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "projectImage",
      title: "Project image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'projectImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
};
