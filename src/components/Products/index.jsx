import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

import {
  Container,
  BotaoAddToCart,
  BotaoDetails,
  DivBtnAddToCartDetails,
} from "./styles";

export default function Products(props) {
  let produtos = Object.values(props);
  let totalProdutos = produtos[0];
  const {productDetails, setProductDetails} = useContext(MyContext)

  const [todosProdutos, setTodosProdutos] = useState(totalProdutos);


  const pesquisar = todosProdutos.filter((item) =>
    item.descricao.toLowerCase().includes(props.valorInput.toLowerCase())
  );

  function detailsProduct(produto){
    setProductDetails(produto)
  }

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
              <DivBtnAddToCartDetails>
                <BotaoAddToCart type="button" onClick={() => props.addItens(produto)}>
                  Add to Cart
                </BotaoAddToCart>
                <BotaoDetails type="button" onClick={() => detailsProduct(produto)}>
                  <Link to="/details">Details</Link>
                </BotaoDetails>
              </DivBtnAddToCartDetails>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
