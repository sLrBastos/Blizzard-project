import Mounts from "./components/Mounts";
import Oauth from "./components/Oauth";
import PlayerMounts from "./components/Player";

function App() {
  return (
    <>
      <h1>Collection</h1>
      <Oauth />
      <PlayerMounts />
      <Mounts />
    </>
  );
}

export default App;
