    import logo1 from "../../image/bad-yellow 2.png"
    import logo2 from "../../image/yellow bad 1.png"
    import logo3 from "../../image//pngtree-vector-magnifying-glass-icon-png-image_889405.png"
    import logo4 from "../../image/image 2.png"
    import logo5 from "../../image/profi.png"
    import logo6 from "../../image/SUF COLLAGE 1.png"
    import logo7 from "../../image/CONFIRA A COLEÇÃO.png"
    import vector from '../../image/vector.png'
    import pix from '../../image/pix.png';
    import cartão from '../../image/carta.png';

    
    import './index.scss';
    
    function Payment () {
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

          <img src={vector} className="Vector"/>

          <h1 className='check'>CHECKOUT</h1>

        
          <div className='mãe'>
      <div className='quadrado'>
        <div className='yellow'>
          <h1 className='method'>Selecione o Método de pagamento</h1>
          </div>

          <div className='calculos'>
            <div className='piquis'>

                <div className='pix1'>
                  <img src={pix} className='PIX'/>
                </div>

                <div className='pix2'>
                  <h2>PIX</h2> 
                  <h4>APROVAÇAO IMEDIATA</h4>
                </div>
            </div>

            <div className='debito'>
              <div className='debito1'>
                <img src={cartão} className='card'/>
              </div>
              <div className='debito2'>
                <h2 className='car'>CARTÃO DE DEBITO</h2>
              </div>
            </div>
               <div className='credito'>
                  <div className='credito1'>
                    <img src={cartão} className='cart'/>
                  </div>
                  <div className='credito2'>
                    <h2 className='cre'>CARTÃO DE CRÉDITO</h2>
                  </div>
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
export default Payment ;