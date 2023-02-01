import { Outlet, Link } from "react-router-dom";
const GameMenu = () => {
    return (
    <div id="GameChoice">
      <h1>GameMenu</h1>
      <button > <Link to="GameSetting">Partie personnalisée</Link></button>
      <button > <Link to="Game">Partie Rapide</Link></button>
      <Outlet />

    </div>
    );
  };
  
  export default GameMenu;