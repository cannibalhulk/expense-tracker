import app from "./app";
console.log("Server is running");

Bun.serve({
    fetch: app.fetch
  });