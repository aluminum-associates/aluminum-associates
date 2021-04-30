export default {
  name: "employee",
  title: "Employee",
  type: "object",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "headshot",
      title: "Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "email",
      title: "Contact Email",
      type: "url",
      description:
        "Make sure to add mailto: to the beginning of your email address",
      validation: Rule =>
        Rule.uri({
          scheme: ["mailto"],
        }),
    },
    {
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
}
