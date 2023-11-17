import './index.scss'
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

import grafico1 from "../../image/grafico1.png"

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
import henrique from "../../image/henrique.jpg"

import logo19 from"../../image/png-transparent-adhesive-tape-barricade-tape-police-police-tape-angle-police-officer-text (1).png"
import marcabad from "../../image/marcabd.jpg"

function Administracao(){

    const navigate = useNavigate();


    function administracaotelas(){
      navigate('/')

    }


    return(
        <div className="principal">
      <div className="cabecalhoo">


        <div className="imgesquerda">
          <img src={logo1} />
          <img src={logo2} />


          
        </div>

        <h1 className='botaoverloja' onClick={administracaotelas}>  Ver loja</h1>
        
        </div>


            <div className='principaladministracao'>

                <div className='esquerdaadmin'>

                   <div className='esqcinza'>  
                    <img className='imgadminesq' src={henrique} />

                       <div className='escritasesq'> 
                            <p> Henrique Lopesz</p>
                            <p className='p1'> Editar</p>
                        </div>
                        </div>                       
                             <div className='esqhh'>
                                <h1> Adicionar Produtos</h1>
                                <h1> Editar Produtos</h1>
                                <h1> Usuarios </h1>
                            </div>  

                            <div className='sairesqprin'>
                            <h1 className='sairesq' onClick={administracaotelas}> Sair </h1>
                            </div>
                </div>

                <div className='direitaadmin'>

                  <div className='prindireitacima'>

                  <h1> Mais vendidos <br></br> ㅤ Total :55</h1>

                    <img className='imgmaisvendido' src= {logo11} />

                      

                  </div>


                </div>

            </div>


        </div>
    )
}

export default Administracao