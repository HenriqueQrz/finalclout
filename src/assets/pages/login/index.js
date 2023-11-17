import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import smile from '../../image/bad-yellow.png'
import slogan from '../../image/yellow bad 1.png'
import axios from 'axios'





function Login() {

const [email, SetEmail] = useState ('');
const [senha, SetSenha] = useState ('');
const [erro , setErro] = useState ('');

const navigate = useNavigate( );

async function EntrarClick(){
  try{
  const r = await axios.post('http://localhost:5000/clientes/login' , {
    email: email ,
    senha: senha 
  });

  navigate('/');
}
catch(err){
  if (err.response.status === 401){
    setErro(err.response.data.erro);
      
    }
  }
}

function logo(){
  navigate('/')
}

  return (
    <main>
      <header className='barrass'>
        <img src={smile} onClick={logo} />
        <img src={slogan} onClick={logo}/>
        
      </header>
      <section>
        <div className='conteudologin'>
          <div className='loginzinn'>
            <p>Lﾠﾠgin</p>
          </div>
              <div className='domo'>
             <p>Email:</p> 
             <input className='inpu1' type="text" name="email type ahead" id="email_type_ahead" value={email} onChange={e => SetEmail(e.target.value)} ></input>
             <p>Senha:</p>
             <input className='inpu2'type='password' autoComplete='username' value={senha} onChange={e => SetSenha(e.target.value)} ></input>
              </div>

              

            <button class="ui-button ui-button--primary ui-button--full-width ui-button--size-large  captcha__submit" type="submit" name="commit" data-disable="true" data-bind-disabled="captchaDisabled" define="{localClass: new CaptchaStateHandler($context, {
                            v2Completed: true,
                            v3EnterpriseCompleted: false,
                            formCompleted: true,
                          })}" enable_submit_onload="true"  onClick={EntrarClick} >Entrar</button>

          <div className='tchouameni'>
          
            <Link className='irparacadastro' to = "/cadastro"> 
                          
                Não possui uma conta? Clique aqui!
                          
            </Link>

           
            <Link to= "/">

              Voltar ao inicio           

            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Login;
