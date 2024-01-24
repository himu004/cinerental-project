import Sidebar from "../Sidebar/Sidebar";
import MovieList from "../Cine/MovieList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Pages = () => {

    const {darkMode} = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <main>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pages;
