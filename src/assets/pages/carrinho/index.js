import './index.scss'
import { Link } from 'react-router-dom'
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
import caminhao from "../../image/caminhaozin.png"

import logo19 from"../../image/png-transparent-adhesive-tape-barricade-tape-police-police-tape-angle-police-officer-text (1).png"
import sufwhite from "../../image/sufgangwhite.png"
import dunklow from"../../image/dunklow 2.png"
import { useState } from 'react'





function Carrinho (){


    
      const [count, setCount] = useState(1.799,99);
    
      const increment = () => {
        setCount(count + 1.799,99);
      };

      const decrement = () => {
        setCount(count - 1.799,99 );

      };
    



    return(


       <div className='principal'>


        <div className="cabecalho">
        <div className="imgesquerda">
          <img src={logo1} />
          <img src={logo2} />
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




           <h1 className= "titulocarrin"> HOME {'>'} Seu carrinho de compras </h1> 


            <Link className= "continuar" to="/" >

                Continuar comprando

            </Link>


            <div className="Itemscarrin">

                <img  className="imgcarrin" src={dunklow}/>

                
              <div className='namesproduto'>

                <p className='nomeprinproduto'> NIKE - Dunk low "Paisley Black" </p>

                <p className='precoproduto'> R$ 1.799,99 BRL</p>

                <p className='tamanhotenis'> Tamanho 42 </p>
              </div> 


              <div className='botaoadd'> 

             

                <button onClick={decrement}> - </button>
                <p> R$ {count} </p>
                <button onClick={increment}> + </button>
              
              
              </div>

            </div>

          <div className='containerfreteprin'>

          
            <div className='containerfrete'>

            
            <img className="caminhaozin" src={caminhao} />
            </div>

            
            
          </div>  


          <h1 className='qualificou'> Você se qualificou para o Frete grátis!</h1>

          <h1 className='subtotal'> Subtotal: ㅤ R$ {count} BRL </h1>
          <div className='finalizando'>
            <h2 className='finalizarcompra'> Continuar para finalizar a compra. </h2>
          </div>




          <div className='principaltermos'>

            <div className='seguranca'>

              <h1> SEGURANÇA E AUTENTICIDADE </h1>

              <h2> Somos especialistas em revenda de <br></br> streetwear e sneakers exclusivos desde <br></br> 2017. Todos os nossos produtos são <br></br> 100% autênticos e originais. </h2>

            </div>

            <div className='devolucao'>

              <h1>
              TROCA E DEVOLUÇÃO

              </h1>

              <h2>
              Esta em dúvida se o produto vai te servir como espera? Todos os nossos pedidos tem direito a troca ou devolução em até 7 dias após a entrega da compra.
              </h2>

            </div>

            


          </div>
          
          <div className="entrega">

        <img src={logo8} />

        <h2 className="texttt"> PARCELAMENTO <br></br> Em até 6x sem juros</h2>


        <img src={logo9} />

        <h2 className="texttt"> FRETE GRÁTIS <br></br> A partir de R$299,99 </h2>

        <img src={logo10} />

        <h2 className="texttt"> GARANTIA DE TROCA <br></br> Até 7 dias após a entrega</h2>

      </div>


          


    </div>

    )

}

export default Carrinho