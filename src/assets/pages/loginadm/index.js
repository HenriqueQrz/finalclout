import './index.scss';
import { useState } from 'react';
import smile from '../../image/bad-yellow.png'
import slogan from '../../image/yellow bad 1.png'
import { useNavigate } from 'react-router-dom';

function Logadm() {

  const navigate = useNavigate();

  function logo(){
    navigate('/')
  }

  return (
    <main>
      <header className='barras'>

      
        <img src={smile} onClick={logo} />
        <img src={slogan} onClick={logo}/>
        
        <h1>Administração</h1>
      </header>
      <section>
        <div className='conteudoadm'>
          <div className='loginzinnn'>
            <p>Lﾠﾠgin</p>
            <a>Administradores</a>
          </div>
              <div className='domo'>
             <p>Email:</p> <input className='inpu1' type="text" name="email type ahead" id="email_type_ahead" ></input>
             <p>Senha:</p><input className='inpu2'type='email' autoComplete='username'></input>
              </div>

              <div className='nobu'>
             <p>Ao fazer login, você concorda com a Política deﾠ

              <a class="login-footer__link" target="_blank" href="https://thegamecollective.com.br/20177541/policies/36170956.html?locale=pt-BR" title="Política de privacidade">Política de privacidade </a>
             </p>
              <p> e com osﾠ
              <a class="login-footer__link" target="_blank" href="https://thegamecollective.com.br/20177541/policies/36170956.html?locale=pt-BR" title="Termos de Uso">Termos de uso </a>
              .</p>
            </div>

            <button class="ui-button ui-button--primary ui-button--full-width ui-button--size-large  captcha__submit" type="submit" name="commit" data-disable="true" data-bind-disabled="captchaDisabled" define="{localClass: new CaptchaStateHandler($context, {
                            v2Completed: true,
                            v3EnterpriseCompleted: false,
                            formCompleted: true,
                          })}" enable_submit_onload="true">Entrar</button>

         
          </div>

        
      </section>
    </main>
  );
}

export default Logadm;
