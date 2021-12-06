import Topo from "./topo";
import Corpo from "./corpo";

export default function App(){
    //Vou colocar a div de class 'linha-horizontal' no arquivo 'corpo.js'
    //Ainda vou ver onde irei colocar a tag 'script' para chamar os ícones do JavaScript
    return(
        <div>
            <Topo />
            <Corpo />
        </div>
    );
}