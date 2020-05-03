const apiId = process.env.SANITY_STUDIO_NETLIFY_SITE_ID
const buildHookId = process.env.SANITY_STUDIO_NETLIFY_HOOK_ID
const name = process.env.SANITY_STUDIO_NETLIFY_SITE_NAME

export default {
  widgets: [
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "Deploy Changes",
        sites: [
          {
            title: "Aluminum Associates",
            apiId: apiId,
            buildHookId: buildHookId,
            name: name,
          },
        ],
      },
    },
  ],
};
