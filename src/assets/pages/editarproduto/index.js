import './index.scss';
import React, { useState } from 'react';


import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"
import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
import logo4 from "../../image/image 2.png"
import logo5 from "../../image/image 63.png"


function Consulta() {

  return (
<div className='principal'>
    <div className="cabecalhoo">
      <div className="imgesquerda">
        <img src={logo1} />
        <img src={logo2} />
      </div>

      <div className="text">
        <input type='text' placeholder='EX: HIGH COMPANY'/>
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
    
</div>  

  );
}

export default Consulta;
