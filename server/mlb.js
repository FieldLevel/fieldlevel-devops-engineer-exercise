const axios = require("axios");

axios.defaults.headers.common["Content-Type"] = "application/json";

const hrLeaders =
  "http://lookup-service-prod.mlb.com/json/named.leader_hitting_repeater.bam?sport_code='mlb'&results=25&game_type='R'&season='2021'&sort_column='hr'&leader_hitting_repeater.col_in=ab&leader_hitting_repeater.col_in=name_display_first_last&leader_hitting_repeater.col_in=hr&leader_hitting_repeater.col_in=team_id&leader_hitting_repeater.col_in=player_id";

const getHomeRunLeaders = async () => {
  return await axios.get(hrLeaders).then((resp) => resp.data);
};

module.exports = {
  getHomeRunLeaders,
};
