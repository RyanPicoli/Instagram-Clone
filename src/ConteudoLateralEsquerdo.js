import logo from './imagens/logo.png';
import Menu from './TextMenu.js';


export default function ConteudoLateralEsquerdo() {
    return (
        <div className="ConteudoLateralEsquedo">
            <img src={logo} alt='Logo'/>
            <p> Eu amo meu amor </p>
            <ul>
                <Menu nome="Home" />
                <Menu nome="Buscar"/>
                <Menu nome="Reels" />
                <Menu nome="Menssagem"/>
            </ul>
        </div>
    )
}