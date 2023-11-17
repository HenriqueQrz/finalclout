import React from 'react';

const ListaProdutos = ({ produtos }) => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <p>Nome: {produto.modelo}</p>
            <p>Marca: {produto.marca}</p>
            <p>Preço: R${produto.preco}</p>
            <p>Tamanho: {produto.tamanho}</p>
            <p>Destaque: {produto.destaque}</p>
            <p>Disponivel: R${produto.disponivel}</p>
            <p>estoque: R${produto.estoque}</p>
            {/* Adicione mais informações do produto conforme necessário */}
            {produto.imagem && <img src={produto.imagem} alt={`Imagem de ${produto.modelo}`} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaProdutos;