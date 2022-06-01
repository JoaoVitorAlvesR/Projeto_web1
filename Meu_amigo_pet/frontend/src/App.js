import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Home from "./components/pages/Home";
import Container from "./components/layout/Container"

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
            <Register/>
        </Route>
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
