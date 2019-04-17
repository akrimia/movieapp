import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import ViewApp from "./components/viewapp";
import SearchApp from "./components/search";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import AppModal from "./components/modale";

function App() {
  return (
    <div className="App">
      <SearchApp />
      <ViewApp />
      <AppModal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
