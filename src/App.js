import logo from "./logo.svg";
import "./App.css";
import Address from "./Component/Profile/Address.js";
import FullName from "./Component/Profile/FullName.js";
import ProfilePhoto from "./Component/Profile/ProfilePhoto.js";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
