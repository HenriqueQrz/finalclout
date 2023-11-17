import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"
import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
import logo4 from "../../image/image 2.png"
import logo5 from "../../image/profi.png"
import vector from '../../image/vector.png'
import pinquis from '../../image/qrcode.png'
import cellphon from '../../image/cellphone.png'
import littleqr from '../../image/qrzinho.png'
import verified from '../../image/approve.png'

import './index.scss';

function Paypix() {
  return (
    <div className="principal">
      <div className="cabecalho">
        <div className="imgesquerda">

          <a href="/">  <img src={logo1} className="logo1" />
          <img src={logo2}  className="logo2"/> </a>
        </div>

        <div className="text">
          <h2 className='shop'> SHOP </h2>
          <h2 className='brand'> BRANDS </h2>
          <h2 className='sneak'> SNEAKERS </h2>
        </div>

        <img className="lupa" src={logo3}/>
        <img className="lupa1" src={logo5}/>

       <div>
        <h2 className="tex2"> Minha conta </h2><h2 className="tec2">Conecte-se </h2>
    
        </div>

        <div></div>
        <img className="lupa" src={logo4} />
        <h2 className="tec3"> Carrinho <br></br> R$ 0,00 BRL </h2>

        <div className="ff">
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
          <div className="finalcabecalho"></div>
        </div>
      </div>

      <section>
      <img src={vector} className='Vector'/>

       <h1 className='Check'>CHECKOUT</h1>
        
      <div className='mãe'>
      <div className='quadrado'>
    
          <div className='Calcu'>

        <div className="paipix">
          <h1>Pagamento via Pix</h1>
        </div>

            <div className='piquis'>

                <div className='numba'>
                  <h4>Pague com PIX em qualquer dia e a qualquer hora!<br></br>
           O pagamento é instantâneo, prático e pode ser feito em poucos segundos. <br></br>
           É muito ráido e seguro.</h4>

                </div>
            </div>


          <div className="elemento-qr">
          <img src={pinquis}  className="qr"/>
            <div className="elemento-qr-texto">
              <div className="cellphon">
                <img src= {cellphon} />
                <p> 1. Abra o app do seu banco ou instituição financeira
                 e entre no ambiente PIX.</p>
              </div>

              <div className="litteleqr">
                <img src={littleqr} />
                <p>2. Escolha a opção Pagar com QR CODE e escaneie o código ao lado.</p>
              </div>

              <div className="verified">
                <img src={verified} />
                <p>3. Confirme as informações e finalize a compra.</p>
              </div>
            </div>
          </div>


        

       


        <div className="number6">
                   <button className="tut">CONFIRMAR COMPRA</button>
                </div>

          </div>
      </div>

            <div className='checkin'>
              <div className='resumo'>
                <p className='rest'>RESUMO DO PEDIDO</p>
                <div>
                <p className='edit'>Editar Carrinho</p> 
                </div>
              </div>

              <div className='auto'>
                  <div className='vajin'>

                    <div className='box'></div>

                 <p>NIKE - Dunk Low “Paisley Black”</p>
                 <h1 className='price'>R$1.799,99 BRL</h1>

                  </div>

              </div>
              
              <div className='land'>
                 
                 <h2 className='pork'>Entrega</h2>
              
                 <h4 className='free'>Frete Grátis (7 a 15 Dias)</h4>
                 
               </div> 


               <div className='tot'>
                 
                 <h2 className='total'>TOTAL</h2>
              
                 <h4 className='cash'> R$1.799,99 BRL</h4>
                 
               </div> 
              </div>
              </div>

    </section>
    </div>
  );
}

export default Paypix;
