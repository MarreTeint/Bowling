import { Outlet, Link } from "react-router-dom";
const GameMenu = () => {
    return (
    <div id="GameChoice">
      <h1>Menu</h1>
      <Link to="GameSetting"><button > Partie personnalisée</button></Link>
      <Link to="Game"><button > Partie Rapide</button></Link>
      <Outlet />

    </div>
    );
  };
  
  export default GameMenu;