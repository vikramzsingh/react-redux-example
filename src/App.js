import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContaines from "./components/HooksCakeContaines";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContaines />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
