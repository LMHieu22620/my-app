import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
