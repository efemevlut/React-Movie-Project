import Movie from "./pages/Movie";
import Navbar from './components/Navbar'
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/detail/:id" component={MovieDetails} exact/>
        <Route path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
