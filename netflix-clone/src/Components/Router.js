import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movie" exact component={Movie}></Route>
        <Route path="/movie/popular" exact component={Movie}></Route>
        <Route path="/movie/now-playing" exact component={Movie}></Route>
        <Route path="/movie/upcoming" exact component={Movie}></Route>
        <Route path="/movie/top-rated" exact component={Movie}></Route>
        <Route path="/tv" exact component={TV}></Route>
        <Route path="/tv/airing-today" exact component={TV}></Route>
        <Route path="/tv/on-the-air" exact component={TV}></Route>
        <Route path="/tv/top-rated" exact component={TV}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
        <Route path="/tv/:id" component={Detail}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
