const express = require("express");
const app = express();
const axios = require("axios");
const port = process.env.PORT || 3001;

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
  axios
    .get(
      "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    )
    .then((response) => res.send({ success: true, response: response.data }))
    .catch((error) => res.send({ success: false, message: error.message }));
});
