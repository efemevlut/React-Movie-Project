import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail/:id" component={MovieDetails} exact/>
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
