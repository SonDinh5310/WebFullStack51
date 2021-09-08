// import "./App.css";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";

function App() {
    return (
        <Container className="App" maxWidth="md">
            <NavBar></NavBar>
            <ItemList></ItemList>
        </Container>
    );
}

export default App;
