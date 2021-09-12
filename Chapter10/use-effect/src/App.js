import "./App.css";
import UseEffectBasics from "./components/1-useEffect-basics";
import UseEffectCleanup from "./components/2-useEffect-cleanup";
import UseEffectCallApi from "./components/3-useEffect-call-api";

function App() {
    return (
        <div className="App">
            {/* <UseEffectBasics></UseEffectBasics> */}
            {/* <UseEffectCleanup></UseEffectCleanup> */}
            <UseEffectCallApi></UseEffectCallApi>
        </div>
    );
}

export default App;
