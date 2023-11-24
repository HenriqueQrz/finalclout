import './index.scss';

import {Link} from 'react-router-dom'
import React, { useState } from 'react';

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
import logo20 from "../../image/image 164.png"
import logo21 from "../../image/image 168.png"
import logo22 from "../../image/image 169.png"

import logo23 from "../../image/45406.png"
import logo24 from "../../image/54324.png"
import logo25 from "../../image/61418.png"

import vlonelogo from "../../image/vlonelogo.png"
import palacelogo from "../../image/palacelogo.png"
import assclogo from "../../image/assclogo.png"
import offwhite from "../../image/offwhitelogo.png"
import sufganglogo from "../../image/sufganglogo.png"
import highlogo from "../../image/highlogo.png"
import supremelogo from "../../image/supremelogo.png"
import palacecinza from "../../image/palacecinza.jpg"
import palacerefletiva from "../../image/palacerefletiva.jpg"
import palacestussy from "../../image/palacestussy.jpg"
import suflaranja from "../../image/suflaranja.webp"
import calcasuf from "../../image/calcapretasuf.webp"
import bagsuf from "../../image/bagsuf.webp"
import sufwhite from "../../image/sufgangwhite.png"
import { useNavigate } from 'react-router-dom';


function Telaproduto() {

    

    function logo(){
        navigate('/')
      }

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



   function onSearch(){

    console.log(Searchtext)
    navigate (`/consulta/${Searchtext}`)

   }  

   function logo(){
    navigate('/')
  }



    return(
      <div className="principal">
      <div className="cabecalho">
        <div className="imgesquerda">
          <img onClick={logo} src={logo1} />
          <img onClick={logo} src={logo2} />
        </div>

        <div className="text">
          <h2> SOBRE NÓS </h2>
          <h2 onClick={vlone}> SHOP </h2>
          <h2> BRANDS </h2>
        </div>



        <input className='inputhome' type='text' value={Searchtext} onKeyDown={(e) => (e.code === "Enter" ? onSearch() : null)}  onChange={(e)  => setSearchtext(e.target.value)} />


        
          <img className="lupa" src={logo3} />
       

        
        

        
        
        
        <img className="lupa1" src={logo5} />

      

        <h2 className="tex2" onClick={ircadastro}>  Conecte-se </h2>

        <img className="lupa" src={logo4} />
        <h2 className="tex2ca"> Carrinho <br></br> R$ 0,00 BRL </h2>

        <div className="ff">
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
        </div>

      </div>


     <div className='prinprodtela'> 
      <div className='imagemesqprod'>

        <img className='imgesqprod' src={suflaranja} />

      </div>

      <div className='nomestelaprod'> 
        <h1 className='nometelaprod'> SUFGANG - DARK ORANGE "Joker"</h1>


        
       

        <select className='tamanhoprodtela' name='tamanhocamisa'>

        <option> Tamanho </option>

          <option> P</option>
          <option> M</option>
          <option> G</option>
          <option> GG</option>
          <option> EXG</option>

        </select>


        <div className='precotelaprod'>
          <h2 className='riscadoprod'> 89,99 </h2>
          <h2 className='precoprinprod'> R$ 69,99 <br></br> </h2>
          <h2 className='precopixprod'> Ou 65,99 no pix</h2>

          <h2 className='addcarrin'> Adicionar ao carrinho</h2>

          <a href='https://s3.amazonaws.com/img.iluria.com/product/size_chart/1E416.jpg'>
            
            <h2 className='medidasnm'> Clique aqui para ver a tabela de medidas </h2>

            </a>
       </div>

      </div>


      

      </div>

      </div> 
    )
}

export default Telaproduto