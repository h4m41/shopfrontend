import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="text-trueGray-700">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
