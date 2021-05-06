import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import DiscoverMoviePage from "./pages/discoverMoviesPage";

import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/discover" component={DiscoverMoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
