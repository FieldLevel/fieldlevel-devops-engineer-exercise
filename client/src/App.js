import { useEffect, useState } from "react";
import "./App.css";

import { getHomeRunLeaders } from "./data/api";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getHomeRunLeaders();
      if (data.length > 0) {
        setPlayers(data);
      }
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <header>MLB 2021 HR Leaders</header>
      <div className="content">
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Player</td>
              <td>Home Runs</td>
            </tr>
          </thead>
          <tbody>
            {players.map((player, ix) => (
              <tr id={player.id} className={ix % 2 ? "even" : "odd"}>
                <td>{ix + 1}</td>
                <td>{player.name}</td>
                <td className="stat">{player.hr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
