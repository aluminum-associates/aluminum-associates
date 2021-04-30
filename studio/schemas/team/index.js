export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "teammates",
      title: "Teammates",
      type: "array",
      of: [{ type: "employee" }],
    },
  ],
}
