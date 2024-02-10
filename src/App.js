import "./Assets/Styles/App.css";
import MainView from "./Views/MainView";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <MainView />
      <Toaster />
    </div>
  );
}

export default App;
