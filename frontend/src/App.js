import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="video-background">
        <source
          src="https://videos.pexels.com/video-files/2453852/2453852-hd_1280_720_24fps.mp4"
          type="video/mp4"
        />
      </video>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/chat" Component={ChatPage} />
      </Routes>
    </div>
  );
}
export default App;
