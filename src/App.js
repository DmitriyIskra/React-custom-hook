import { useEffect, useState } from "react";
import useJsonFetch from "./hooks/useJsonFetch";

import Data from "./components/Data";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {

  return (
    <div className="App">
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
