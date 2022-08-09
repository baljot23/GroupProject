import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Item from "./Item";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";
import Error from "./Error";
import About from "./About";
import { HiArrowCircleUp } from "react-icons/hi";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/item/:_id">
            <Item />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
      <a href="#top">
        <HiArrowCircleUp
          style={{
            color: "black",
            width: "100px",
            height: "50px",
            position: "fixed",
            bottom: "30px",
            right: "5px",
          }}
        />{" "}
      </a>
    </>
  );
}

export default App;
