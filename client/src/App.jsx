import { useEffect, useState } from "react";
import Lenis from "lenis";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/About";
function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="m-0 p-0">
      <Home />
    </main>
  );
}

export default App;
