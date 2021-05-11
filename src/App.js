import React from "react";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Work } from "./components/work";
import { Articles } from "./components/articles";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Articles />
    </div>
  );
};

export default App;
