import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "YOUR_TINA_CLIENT_ID", // Replace with your Tina Client ID
  branch: "main", // Git branch where content is stored
  token: "YOUR_TINA_TOKEN", // Replace with your Tina API Token
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "public/uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          { name: "title", label: "Title", type: "string" },
          { name: "date", label: "Date", type: "datetime" },
          { name: "body", label: "Body", type: "rich-text" },
        ],
      },
    ],
  },
});
