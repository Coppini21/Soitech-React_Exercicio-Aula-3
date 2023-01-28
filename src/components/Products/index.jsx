import React, { useEffect, useState, useContext } from "react";

import { Container, BotaoAddToCart } from "./styles";

export default function Products(props) {
  let produtos = Object.values(props);
  let totalProdutos = produtos[0];

  const [todosProdutos, setTodosProdutos] = useState(totalProdutos);

  const pesquisar = todosProdutos.filter((item) =>
    item.descricao.toLowerCase().includes(props.valorInput.toLowerCase())
  );

  

  return (
    <Container>
      <div id="titulo">
        <span>{props.name}</span>
      </div>
      <div id="listaTotalProdutos">
        {pesquisar.map((produto, i) => {
          return (
            <div className="item" key={i}>
              <div
                className="img"
                style={{ backgroundImage: `url(${produto.img})` }}
              />
              <label>{produto.descricao}</label>
              <span>{`${produto.valor},000 ugx`}</span>
              <BotaoAddToCart type="button" onClick={() => props.addItens(produto)}>
                Add to Cart
              </BotaoAddToCart>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
