import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import $ from "jquery";

import "./styles/index.css";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

export default function App() {
  $(function () {
    var message = "Hej, wróć do nas!";
    var original;

    $(window)
      .focus(function () {
        if (original) {
          document.title = original;
        }
      })
      .blur(function () {
        var title = $("title").text();
        if (title !== message) {
          original = title;
        }
        document.title = message;
      });
  });

  return (
    <BrowserRouter>
      <Helmet>
        <title>PHU Jarex - Jarosław Sztandera</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
