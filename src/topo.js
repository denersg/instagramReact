import Logo from "./arquivos-instagram/imagens/logo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { IoCompassOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

function MenuTopo(){
    return(
        <div className="menu-topo">
            <IoLogoInstagram className="insta-logo" />
            <div className="linha-vertical"></div>
            <img className="insta-name" src={Logo} />
            <input type="text" placeholder="Pesquisar" />
            <nav>
                <IoIosSend className="send" />
                <IoCompassOutline className="compass" />
                <IoHeartOutline className="heart" />
                <IoPersonOutline className="person" />
            </nav>
        </div>
    );
}

export default function Topo() {

    return(
        <div>
            <header className="header">
                <MenuTopo />
            </header>
        </div>
    );
}