import logo from './imagens/logo.png';
import Menu from './TextMenu.js';
import { IoMdHome } from "react-icons/io"; // Icon Home
import { IoSearch } from "react-icons/io5"; // Icon Buscar
import { RiMovieLine } from "react-icons/ri"; // Icon Reels
import { FaComment } from "react-icons/fa"; //Icon Menssagem





export default function ConteudoLateralEsquerdo() {
    return (
        <div className="ConteudoLateralEsquedo">
            <img src={logo} alt='Logo'/>
            <p> Eu amo meu amor </p>
            <ul>
                <Menu icon={<IoMdHome style={{ 
                    width: '15%',  
                    height: '15%',
                    color: 'black',  
                    

                }}/>} nome="Home"/>



                <Menu icon={<IoSearch style={{ 
                    width: '15%',  
                    height: '15%',
                    color: 'black', 
                    
 
                    
                }}/>} nome="Buscar" />

                <Menu icon={<RiMovieLine style={{ 
                    width: '15%',  
                    height: '15%',
                    color: 'black',  
                    

                    
                }}/>} nome="Reels" />

                <Menu icon={<FaComment  style={{ 
                    width: '15%',  
                    height: '15%',
                    color: 'black',  
                    
 
                        
                }}/>} nome="Menssagem"/> 

                
            </ul>
        </div>
    )
}