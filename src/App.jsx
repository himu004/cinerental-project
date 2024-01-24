import { useReducer, useState } from "react";
import "./App.css";

import { MovieContext, ThemeContext } from "./context";
import Pages from "./components/Pages/Pages";
import { cartReducer, initialState } from "./reducers/CartReducer";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Pages />
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
