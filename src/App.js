import logo from './logo.svg';
import './App.css';
import ConteudoLateralEsquerdo from './ConteudoLateralEsquerdo';


function App() {
  return (
    <>
    
      <ConteudoLateralEsquerdo/>
      
      <div className='ConteudoLateralEsquerdo'>
        {/* 
          Logo do insta
          Menu lateral principal        
        */}
      </div>

      <div className='ConteudoCentral'>
        {/* 
          Stories
          Feed de posts
        */}
      </div>

      <div className='ConteudoLateralDireito'>
        {/* 
          Login 
          Sugestões de amigos
          Sugestões de contas 
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados

        */}
      </div>

    </>
  );
}

export default App;
