import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
import marcabad from "../../image/marcabd.jpg"



import './index.scss';



function App() {


  


    const [Searchtext, setSearchtext] = useState('')
    const navigate = useNavigate();


    function consulta(){
      navigate('/consulta')

    }

    function ircadastro() {
      navigate ('/cadastro')
    }

    function vlone(){
      navigate ('/vlone')
    }

    function irparacarrinho(){
      navigate ('/payment')
    }



   function onSearch(){

    console.log(Searchtext)
    navigate (`/consulta/${Searchtext}`)

   }  
  
  return (
    <div className="principal">
      <div className="cabecalho">
        <div className="imgesquerda">
          <img src={logo1} />
          <img src={logo2} />
        </div>

        <div className="text">
       <a href='#sobre' className='sobrenosscrool'>   
        <h2> SOBRE NÓS</h2>
        </a>
          <h2 onClick={vlone}> SHOP </h2>
          <h2 onClick={vlone}> BRANDS </h2>
        </div>



        <input className='inputhome' type='text' value={Searchtext} onKeyDown={(e) => (e.code === "Enter" ? onSearch() : null)}  onChange={(e)  => setSearchtext(e.target.value)} />


        
          <img className="lupa" src={logo3} />
       

        
        

        
        
        
        <img className="lupa1" src={logo5} />

      

        <h2 className="tex2" onClick={ircadastro}>  Conecte-se </h2>

        <img className="lupa" src={logo4} />
        <h2 onClick={irparacarrinho} className="tex2ca"> Carrinho <br></br> R$ 1799,99 BRL </h2>

        <div className="ff">
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
        </div>

      </div>


      <div className="colecoes">


        <img className="colecao" src={logo6} />

  
          <img className="confira" src={logo7}  onClick={consulta}/>
       
      </div>






      <div className="entrega">

        <img src={logo8} />

        <h2 className="texttt"> PARCELAMENTO <br></br> Em até 6x sem juros</h2>


        <img src={logo9} />

        <h2 className="texttt"> FRETE GRÁTIS <br></br> A partir de R$299,99 </h2>

        <img src={logo10} />

        <h2 className="texttt"> GARANTIA DE TROCA <br></br> Até 7 dias após a entrega</h2>

      </div>


      <div className="maisvendidos">

        <h2> SNEAKERS <br></br> + <br></br> VENDIDOS</h2>

        <div className="esquerda">

          <img src={logo12} />

          <img src={logo11} />

        </div>




      </div>


      <div className="nametns">

        <p className="sss"> Air Jordan 4 Retro Laser BG</p>
        <p className="ssss"> Air Jordan 4 Black and Yellow</p>


      </div>


      <div className="confiraaa">

        <h2> Confira Mais Produtos em <br></br> ㅤㅤㅤ destaque</h2>

      </div>
      

        <div className="brinde">

          
          <h2 className="brinde3"> CONFIRA NOSSA MARCA  </h2>


        </div>


        <a href="https://www.instagram.com/dkz.co/" target="_blank">
          <img className="logo13" src={marcabad}/>
        </a>

        <h1 className="diferente"> Seja o diferente dentre os iguais </h1>


        <img className="logo14" src= {logo14}/>




        <div className="setas">

          <img src={logo15} />

            <h1> Sobre Nós </h1>
          <img src= {logo16}/>  

          

        </div>


        <img className="logo17" src= {logo17}/>


        <div id='sobre'>

          <p>        Somos uma empresa criada por 3  adolescentes <br></br> que surgiu por conta da dificil demanda de peças <br></br> ㅤ unicas presentes em culturas diferentes, <br></br> decidimos criar uma loja para ajudar pessoas a <br></br>  ㅤ terem acesso a uma cultura underground. <br></br>
 O nosso foco aqui é trazer os melhores produtos <br></br> da Gringa para o Brasil, contando sempre com a <br></br>  ㅤㅤ ㅤhonestidade    e transparência.
 </p>

          <img src={logo18}/>

        </div>







      <img className="logo19" src= {logo19}/>



    </div>





  );



}

export default App;
