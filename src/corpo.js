import { IoChevronForwardCircle } from "react-icons/io5";

function Story(props){
    
    return(
        <div className="story">
            <div className="thumbnail">
                <img src={props.imagem}/>
            </div>
            <span>{props.titulo}</span>
        </div>
    );
}

function Stories(){
    return(
        <div className="stories">
            <Story imagem="./imagens/9gag.svg" titulo="9gag"/>
            <Story imagem="./imagens/meowed.svg" titulo="meowed"/>
            <Story imagem="./imagens/barked.svg" titulo="barked"/>
            <Story imagem="./imagens/nathanwpylestrangeplanet.svg" titulo="nathanwpyle..."/>
            <Story imagem="./imagens/wawawicomics.svg" titulo="wawawic..."/>
            <Story imagem="./imagens/respondeai.svg" titulo="respondeai"/>
            <Story imagem="./imagens/filomoderna.svg" titulo="filomoderna"/>
            <Story imagem="./imagens/memeriagourmet.svg" titulo="memeria..."/>

            <div className="botao-scroll">
                <IoChevronForwardCircle/>
            </div>
        </div>
    );
}

function Post(props){
    return(
        <div className="post">
            <div>
                <img src={props.imagem}/>
            </div>
            <span>{props.titulo}</span>
            <div className="miniImagem">
                <img src={props.mini}/>
            </div>
        </div>
    );
}

function Posts(){
    return(
        <div className="posts">
        <Post imagem="./imagens/gato-telefone.svg" mini="./imagens/meowed.svg" titulo="meowed"/>
        <Post imagem="./imagens/dog.svg" mini="./imagens/barked.svg" titulo="barked"/>
        </div>
    );
}

function MenuLateral(){
    return(
        <div className="menu-lateral">
            <Story imagem="./imagens/9gag.svg" titulo="9gag"/>
        </div>
    );
}

//Essa função vai englobar os posts e os stories.
function Feed(){
    return(
        <div className="feed">
            <Stories/>
            <Posts/>
            {/* <MenuLateral/> */}
        </div>
    );
}

//Essa função irá agregar todo o conteúdo, como stories, posts, etc.
function Conteudo(){
    return(
        <div className="conteudo">
            <Feed/>
        </div>
    );
}

export default function Corpo(){
    return(
        <div>
            <Conteudo/>
        </div>
    );
}