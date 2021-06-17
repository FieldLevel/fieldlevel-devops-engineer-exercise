const cors = require("cors");
const express = require("express");
const app = express();
const port = 5001;

const mlb = require("./mlb");

app.use(cors());
app.options("*", cors());

app.get("/homeruns", async (req, res, next) => {
  try {
    const response = await mlb.getHomeRunLeaders();
    const results =
      response?.leader_hitting_repeater?.leader_hitting_mux?.queryResults;

    const data = results.row.map((r) => {
      return { id: r.player_id, name: r.name_display_first_last, hr: r.hr };
    });
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
