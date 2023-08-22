import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from "./components/PortfolioContainer";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div style={{
            backgroundColor: darkMode ? "#222" : "white",
            color: darkMode && "white",
        }}>
            <PortfolioContainer />
        </div>

    );
};


export default App;
