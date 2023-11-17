import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import logo1 from "../../image/bad-yellow 2.png"
import logo2 from "../../image/yellow bad 1.png"


function Cadastro() {

    const [nome, SetNome] = useState ('');
    const [sobrenome, SetSobrenome] = useState ('');
    const [telefone, SetTelefone] = useState ('');
    const [cpf, SetCpf] = useState ('');
    const [emailCadastro, SetEmailCadastro] = useState ('');
    const [senhaCadastro, SetSenhaCadastro] = useState ('');
    const [erro , setErro] = useState ('');
    
    const navigate = useNavigate( );
    
    async function CadastrarClick(){
      try{
      const r = await axios.post('http://localhost:5000/cadastro' , {
        nome: nome ,
        sobrenome: sobrenome ,
        telefone: telefone ,
        cpf: cpf ,
        email: emailCadastro ,
        senha: senhaCadastro 
      });
    
      navigate('/');
    }
    catch(err){
      if (err.response.status === 401){
        setErro(err.response.data.erro);
          
        }
      }
    }


    return (
        <main>
            <header>
                <img src={logo1} />
                <img src={logo2} />
            </header>
            <section>
                <div className='conteudocadastro'>
                    <div className='loginzin'>
                        <p>Crie sua Conta</p>
                    </div>
                    <div className='domo'>
                        <p>Nome:</p> <input className='inpu3' type="text" name="name type ahead" id="email_type_ahead" value={nome} onChange={e => SetNome(e.target.value)} ></input>
                        <p>Sobrenome:</p> <input className='inpu3' type="text" name="name type ahead" id="email_type_ahead" value={sobrenome} onChange={e => SetSobrenome(e.target.value)} ></input>
                        <p>Telefone:</p> <input className='inpu4' type="(number)" name="tel type ahead" id="email_type_ahead" value={telefone} onChange={e => SetTelefone(e.target.value)} ></input>
                        <p>CPF:</p> <input className='inpu5' type="text"  value={cpf} onChange={e => SetCpf(e.target.value)} ></input>
                        <p>Email:</p> <input className='inpu1' type="text"  value={emailCadastro} onChange={e => SetEmailCadastro(e.target.value)} ></input>
                        <p>Senha:</p><input className='inpu2' type='password' value={senhaCadastro} onChange={e => SetSenhaCadastro(e.target.value)} ></input>
                    </div>
                    <button class="ui-button ui-button--primary ui-button--full-width ui-button--size-large  captcha__submit" type="submit" name="commit" data-disable="true" data-bind-disabled="captchaDisabled" define="{localClass: new CaptchaStateHandler($context, {
                              v2Completed: true,
                              v3EnterpriseCompleted: false,
                              formCompleted: true,
                            })}" enable_submit_onload="true" onClick={CadastrarClick}>Cadastrar-se </button>
                    <div className='tchouameni'>

                        <Link to ="/login">

                        Já tem uma conta? Clique aqui!      

                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default Cadastro;

