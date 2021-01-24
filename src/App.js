import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
