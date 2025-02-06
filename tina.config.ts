import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: "b7aa0e72-7068-44d0-a732-e4082ec3aa76", // Replace with your Tina Client ID
  branch: "main", // Git branch where content is stored
  token: "ff2c21aaa8f190821caf29c6133e46612226e9e2", // Replace with your Tina API Token
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
