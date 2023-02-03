import { Outlet, Link } from "react-router-dom";
const GameMenu = () => {
    return (
    <div id="GameChoice">
      <h1>Menu</h1>
        <div className="d-flex justify-content-center mb-3 mt-3">
          <Link to="GameSetting"><button className="btn btn-light btn-outline-primary">Partie personnalisée</button></Link>
          <Outlet />
        </div>
        <div className="d-flex justify-content-center">
          <Link to="Game"><button className="btn btn-light btn-outline-dark">Partie rapide</button></Link>
          <Outlet />
        </div>
    </div>
    );
  };
  
  export default GameMenu;