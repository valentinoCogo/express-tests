const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//
const mainRoutes = require("./routes/main.js");

//

app.use("/", mainRoutes);
app.use("/menu/:id", mainRoutes);

app.use("/test", mainRoutes);
//

//

let PORT = 3440;
app.listen(PORT, () => {
  console.log("andanding " + PORT);
});
