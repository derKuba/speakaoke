import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import SearchPage from "./pages/search.page";
import PresentationPage from "./pages/presentation.page";

import "./index.css";

const App = () => (
  <Router>
    <Route path="/" component={SearchPage} />
    <Route path="/presentation/:keyword" component={PresentationPage} />
  </Router>
);

render(() => <App />, document.getElementById("root"));
