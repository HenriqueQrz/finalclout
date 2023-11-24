import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './assets/pages/home';
import Logadm from './assets/pages/loginadm';
import Login from './assets/pages/login';
import Consulta from './assets/pages/consulta';
import Cadastro from './assets/pages/cadastrar';
import Minhascompras from'./assets/pages/minhascompras';
import Carrinho from './assets/pages/carrinho';
import Administracao from './assets/pages/admistracao';
import Consultavlone from './assets/pages/produtosvlone';
import Consultapalace from './assets/pages/palace';
import Consultasufgang from './assets/pages/sufgang';
import Payment from './assets/pages/payment';
import Paycredit from './assets/pages/paycredit';
import Paydebit from './assets/pages/paydebit';
import Paypix from './assets/pages/paypix';
import Cadastroproduto from './assets/pages/cadastroproduto';
import Consultaassc from './assets/pages/assc';
import Consultasupreme from './assets/pages/supreme';
import Applog from './assets/pages/homelogada';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Telaproduto from './assets/pages/produtotela';
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} /> 
      <Route path= '/loginadm' element={<Logadm/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/consulta/:productName' element= {<Consulta/>} />
      <Route path='/consulta' element= {<Consulta/>} />
      <Route path='/consulta/Vlone' element= {<Consultavlone/>} />
      <Route path='/consulta/Palace' element= {<Consultapalace/>} />
      <Route path='/consulta/Supreme' element= {<Consultasupreme/>} /> 
      <Route path='/consulta/Sufgang' element= {<Consultasufgang/>} />
      <Route path='/consulta/Assc' element= {<Consultaassc/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/cadastroproduto' element={<Cadastroproduto/>} />
      <Route path='/minhascompras' element={<Minhascompras/>} />
      <Route path='/carrinho' element={<Carrinho/>} />
      <Route path='/administracao' element={<Administracao/>} />
      <Route path='/vlone' element={<Consultavlone/>} />
      <Route path='/palace' element={<Consultapalace/>} />
      <Route path='/sufgang' element={<Consultasufgang/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/paycredit' element={<Paycredit/>} />
      <Route path='/paydebit' element={<Paydebit/>} />
      <Route path='/paypix' element={<Paypix/>} />
      <Route path='/assc' element={<Consultaassc/>} />
      <Route path='/supreme' element={<Consultasupreme/>} />
      <Route path='/homelogada' element={<Applog/>}/>
      <Route path='/telaproduto' element={<Telaproduto/>}/>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
