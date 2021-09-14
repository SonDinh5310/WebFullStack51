import UseRefBasics from "./components/1-useRef-bassics";
import UseRefNoRender from "./components/2-useRef-no-render";
import UseForwardRef from "./components/3-useRef-fowardRef";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* <UseRefBasics></UseRefBasics>
            <UseRefNoRender></UseRefNoRender> */}
            <UseForwardRef></UseForwardRef>
        </div>
    );
}

export default App;
