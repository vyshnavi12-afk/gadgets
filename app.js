let express = require("express");
let app = express();
app.get("/gadgets", (request, response) => {
  response.sendFile("/gadgets.html", { root: __dirname });
});
app.listen(3000);
