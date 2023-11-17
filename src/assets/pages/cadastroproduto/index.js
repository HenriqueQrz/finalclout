import './index.scss'
import axios from 'axios'
import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Cadastroproduto() {


    const [idcategoria , SetCategoria ] = useState ('');
    const [modelo, SetModelo] = useState ('');
    const [marca, SetMarca] = useState ('');
    const [preco, SetPreco] = useState ('');
    const [tamanho, SetTamanho] = useState ('');
    const [destaque, Setdestaque] = useState (false);
    const [disponivel, SetDisponivel] = useState (false);
    const [estoque, SetEstoque] = useState ('');
    const [erro , setErro] = useState ('');
    const [produtos, setProdutos] = useState([]);
    
    const navigate = useNavigate( );


    useEffect(() => {
        // Aqui você pode fazer uma chamada à API para obter a lista de produtos existente
        // Substitua a URL pela sua rota real
        axios.get('http://localhost:5000/produto').then((response) => {
          setProdutos(response.data);
        });
      }, []);
    
    async function CadastrarProdutoClick(){
      try{

        if(erro){
          toast.error('Credenciais inválidas', {
            position: toast.POSITION.TOP_RIGHT
            });
        }

      const response = await axios.post('http://localhost:5000/produto' , {
    idcategoria:    idcategoria,
    modelo:         modelo,
    marca:          marca,
    preco:          preco,
    tamanho:        tamanho,
    destaque:       destaque,
    disponivel:     disponivel,
    estoque:        estoque
      });
    
      setProdutos([...produtos, response.data]);  

      navigate('/');
    }
    catch(err){
        if (err.response.status == 500){
          setErro(err.response.data.erro);
  
        }
  
        }
      }


    return (
        <div className='connt'>

        <div>
            {produtos.map((produto) => (
            <div key={produto.id}>
            <h1>{produto.modelo}</h1>
            <p>Marca: {produto.marca}</p>
            <p>Preço: {produto.preco}</p>

            {/* Adicionar mais informações do produto conforme necessário */}
          </div>
          ))}
        </div>
            <ToastContainer/>
            <div> 

            </div>


            <div className='cont' >


                <div className='tito' >
                    <h1>Cadastro de produtos</h1>
                </div>

                <div className='contt'>


                    
                <div className='img'>
                        <div className='ti-h1'>
                            
                                    <h1>Adicionar uma imagem</h1>
                                    <h2>+</h2>
                              
                           <img className='imagem-capa' alt='' />
                            <input type="file" id='imagemCapa' />

                        </div>
                    </div>
                    <div className='dadosdoproduto'>
                        <div className='nome'>
                            <h1> Nome:</h1>
                            <input className='nmcad' type='text' placeholder='Escreva..' value={modelo} onChange={e => SetModelo(e.target.value)} />
                        </div>



                        <p className='linha'></p>

                        <div className='b-produto'>
                            <h1>Seu Produto é...</h1>



                            <div className='prod'>
                                <div className='in'>
                                    <input
                                        name="categoria"
                                        type="radio"
                                        value={1} // Usar o valor específico que representa Camiseta
                                        checked={idcategoria === "1"} // Marcar a categoria selecionada
                                        onChange={e => SetCategoria(e.target.value)}/>
                                    <label className='nomeproduto'>Camiseta</label>
                                </div>

                                <div className='in'>
                                    <input
                                        name="categoria"
                                        type="radio"
                                        value={2} // Usar o valor específico que representa Tenis
                                        checked={idcategoria === "2"} // Marcar a categoria selecionada
                                        onChange={e => SetCategoria(e.target.value)}
                                    />
                                    <label className='nomeproduto'>Tenis</label>
                                </div>

                                <div className='in'>
                                    <input
                                        name="categoria"
                                        type="radio"
                                        value={3} // Usar o valor específico que representa Calça
                                        checked={idcategoria === "3"} // Marcar a categoria selecionada
                                        onChange={e => SetCategoria(e.target.value)}
                                    />
                                    <label className='nomeproduto'>Calça</label>
                                </div>


                                <div className='in'>
                                    <input
                                        name="categoria"
                                        type="radio"
                                        value={4} // Usar o valor específico que representa Jaqueta
                                        checked={idcategoria === "4"} // Marcar a categoria selecionada
                                        onChange={e => SetCategoria(e.target.value)}
                                    />
                                    <label className='nomeproduto'>Jaqueta</label>
                                </div>

                                <div className='in'>
                                    <input
                                       name="categoria"
                                       type="radio"
                                       value={5} // Usar o valor específico que representa Conjunto
                                       checked={idcategoria === "5"} // Marcar a categoria selecionada
                                       onChange={e => SetCategoria(e.target.value)}
                                    />
                                    <label className='nomeproduto'>Conjunto </label>
                                </div>
                            </div>



                            <p className="linha"></p>

                        </div>

                        <div className='ingredientes'>
                            <h1>Marca:</h1>
                            <input type='text' placeholder='Escreva..' value={marca} onChange={e => SetMarca(e.target.value)}  />
                        </div>

                        <p className='linha'></p>

                        

                        <p className='linha'></p>

                        <div className='valor'>
                            <h1>Qual o preço do seu produto?</h1>
                            <input type='text' placeholder='R$'  value={preco} onChange={e => SetPreco(e.target.value)} />
                        </div>

                        <div className='ingredientes'>
                            <h1>tamanho:</h1>
                            <input type='text' placeholder='Escreva..' value={tamanho} onChange={e => SetTamanho(e.target.value)}  />
                        </div>
                        

                        <p className='linha'></p>

                        
                        <div className='disponivel'>
                            <h1>Destaque:</h1>
                            <input 
                                 type='checkbox'
                                 checked={destaque}
                                 onChange={e => Setdestaque(e.target.checked)}
                            />
                           </div>
                        <div className='disponivel'>
                            <h1>Disponível:</h1>
                            <input
                                type='checkbox'
                                checked={disponivel}
                                onChange={e => SetDisponivel(e.target.checked)} />
                           </div>
                           <div className='valor'>
                            <h1>Quantidade em estoque:</h1>
                            <input type='text' placeholder='QTD' value={estoque} onChange={e => SetEstoque(e.target.value)}  />
                        </div>
                        <div>
                            <h1>
                                {erro}
                            </h1>
                        </div>
                        
                        <div className='fin-botao'>
                            <button onClick={CadastrarProdutoClick} >Finalizar Cadastro</button>
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>


    )
}