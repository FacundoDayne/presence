import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {Link, Outlet} from "react-router-dom";
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <nav>
                <Link to="/presence/">Home</Link>
                {" | "}
                <Link to="/presence/Profile">Profile</Link>
                {" | "}
                <Link to="/presence/Another">Another</Link>
            </nav>

            <Outlet />

        </>
    );
}

export default App;
