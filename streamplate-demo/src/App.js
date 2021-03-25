import "./App.css";
import Header from "./components/common/Header";
import HomeScreen from "./components/screens/HomeScreen";
import AppScreen from "./components/screens/AppScreen";
import OrbScreen from "./components/screens/OrbScreen";
import ContactScreen from "./components/screens/ContactScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/app" component={AppScreen} />
        <Route exact path="/orb" component={OrbScreen} />
        <Route exact path="/contact" component={ContactScreen} />
      </div>
    </Router>
  );
}

export default App;
