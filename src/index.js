import ReactDOM from "react-dom";
import App from "./app";
import "./reset.css"
import "./style.css";


const app = App();
const root = document.querySelector(".root");
ReactDOM.render(app, root);