import express from "express";

import createTemplate from "./templates/create-template";

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log(`The sample PDF app is running on port ${port}.`);
});

app.post("/", async (req, res) => {
  const result = await createTemplate(req.body);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename=example.pdf`);

  result.pipe(res);
});