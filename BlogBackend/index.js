const express = require("express");
const app = express();
const cors = require("cors");

const port = 3000;
const routes = require("./Route/route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", // or use '*' for all origins (not recommended in production)
    credentials: true,
  })
);

app.use("/", routes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
