// Import our custom CSS
import "./scss/styles.scss";

import About from "./components/About";
import { Gallery } from "./components/Gallery";
import { Presentations } from "./components/Presentations";

function App() {
  return (
    <>
      <About />
      <Gallery />
      <Presentations />
    </>
  );
}

export default App;
