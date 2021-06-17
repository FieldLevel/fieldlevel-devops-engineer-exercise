import axios from "axios";

const getHomeRunLeaders = async () => {
  const url = "http://localhost:5001/homeruns";
  return await axios.get(url).then((resp) => resp.data);
};

export { getHomeRunLeaders };
