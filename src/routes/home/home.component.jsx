// import "./App.css";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
// import { homedir } from "os";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />
    </div>
  );
};

export default Home;
