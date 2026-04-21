import React from "react";
import { Colors, Controls, Eswat2, Header, Values } from "./components";

const App = () => {
  return (
    <main className="ds1-main">
      <Header label="Tinker r3t" />
      <Eswat2 />
      <Controls />
      <Colors />
      <hr className="ml-0 mr-0" />
      <Values />
    </main>
  );
};

export default App;
