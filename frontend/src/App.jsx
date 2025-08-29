import React from "react";
import { useEffect } from "react";
import Nvabar from "./layouts/Nvabar";
import Masthead from "./layouts/Masthead";
import Home from "./layouts/Home";
import Footer from "./layouts/Footer";

function App() {
  useEffect(() => {
    // Import script của template
    import("./assets/js/scripts");
  }, []);

  return (
    <body id="page-top">
      <Nvabar />
      <Masthead />
      <Home />
      <Footer />
    </body>
  )
}

export default App;