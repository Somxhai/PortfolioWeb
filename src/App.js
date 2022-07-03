import "./App.css";
import MenuBar from "./components/MenuBar";
import { About } from "./About";
import { Greetings } from "./components/greetings_page/Greetings";
function App() {
  return (
    <div>
      <MenuBar />
      <Greetings />
      <About />
    </div>
  );
}

export default App;
