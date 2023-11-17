import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"
import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
import logo4 from "../../image/image 2.png"
import logo5 from "../../image/image 63.png"
import logo6 from "../../image/SUF COLLAGE 1.png"
import logo7 from "../../image/CONFIRA A COLEÇÃO.png"


import logo8 from "../../image/image 3.png"
import logo9 from "../../image/image 4.png"
import logo10 from "../../image/image 5.png"

import logo11 from "../../image/image 7.png"
import logo12 from "../../image/image 8.png"

import logo13 from "../../image/D_NQ_NP_787723-MLB50018200486_052022-O.webp"
import logo14 from "../../image/image 60.png"

import logo15 from "../../image/Connector line.png"
import logo16 from "../../image/Connector line (1).png"

import logo17 from "../../image/image 32.png"

import logo18 from "../../image/bad-yellow 1.png"

import logo19 from"../../image/png-transparent-adhesive-tape-barricade-tape-police-police-tape-angle-police-officer-text (1).png"
import sufwhite from "../../image/sufgangwhite.png"
import './index.scss'
import { useNavigate } from "react-router-dom"


function Minhascompras(){

 
  const navigate = useNavigate();

  function logo(){
    navigate('/')
  }

    return(
        <div className="principal">


<div className="cabecalho">
        <div className="imgesquerda">
          <img src={logo1} onClick={logo} />
          <img src={logo2} onClick={logo}/>
        </div>

        <div className="text">
          <h2> NEWS </h2>
          <h2> SHOP </h2>
          <h2> BRANDS </h2>
        </div>

        <img className="lupa" src={logo3} />
        <img className="lupa1" src={logo5} />

        <h2 className="tex2"> Minha conta <br></br> Conecte-se </h2>

        <img className="lupa" src={logo4} />
        <h2 className="tex2"> Carrinho <br></br> R$ 0,00 BRL </h2>

        <div className="ff">
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
        </div>

      </div>




        <h1 className="maiorque">
            Home {'>'} Minhas compras
        </h1>

       <div className="principalcompras"> 
            <div className="categorys">

                <p> Carrinho </p>
                <p> Meus endereços</p>
                <p> Sair </p>

            </div>

            <div className="minhascomprastela">

                <p className="telinha"> Minhas compras </p>

                <div className="linhabranca">

                </div>

                <div className="descricaoproduto"> 
                    
                    <img className="sufwhite" src= {sufwhite}/>


                   <div className="conteudominhascompras"> 
                        <p> SUFGANG - Basic Pack Tee 4.0 "White" </p>

                        <p> R$119,99 BRL </p>

                        <p> Tamanho: S/P </p>
                    </div> 


                </div>


            </div>
        
        
        </div>




    
</div>

)

                
    

}


export default Minhascompras


