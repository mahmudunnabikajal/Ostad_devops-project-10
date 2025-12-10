const express = require("express");
const app = express();
const version = process.env.VERSION || "v1";
const port = process.env.PORT || 3000;

/**
 * Root endpoint
 */
app.get("/", (req, res) => {
  res.send(`<h1>My App — Version ${version}</h1>\n<p>PID: ${process.pid}</p>`);
});

/**
 * Health check endpoint
 */
app.get("/health", (req, res) => res.json({ status: "ok", version }));

app.listen(port, () => console.log(`App v=${version} listening on ${port}`));
