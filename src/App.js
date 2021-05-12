import React from "react";

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Work } from "./components/work";
import { Articles } from "./components/articles";
import { Contact } from "./components/contact";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Articles />
      <Contact />
    </div>
  );
};

export default App;
