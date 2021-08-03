import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, CreatePost, ViewPost, DeletePost } from "./components";

function App() {
  return (
    <body>
      <div class="App">
        <Router>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/CreatePost" exact component={() => <CreatePost />} />
          <Route path="/ViewPost" exact component={() => <ViewPost />} />
          <Route path="/DeletePost" exact component={() => <DeletePost />} />
        </Switch>
        </Router>
      </div>
    </body>
  );
}

export default App;
