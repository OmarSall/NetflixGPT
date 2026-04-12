import Body from "./components/Body";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import AuthListener from "./utils/AuthListener";

function App() {
    return (
        <Provider store={appStore}>
            <Body/>
            <AuthListener/>
        </Provider>
    );
}

export default App;
