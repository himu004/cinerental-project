import { useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context";
import Pages from "./components/Pages/Pages";

function App() {
  const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Pages />
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
