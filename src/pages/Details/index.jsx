import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Container, Item, DetalhesItem } from "./style";
import MyContext from "../../context/MyContext";

export default function Details() {
  const { productDetails } = useContext(MyContext);

  if (productDetails.length === 0) {
  }

  return (
    <Container id="totalCart">
      {productDetails.length === 0 ? (
        <Navigate to="/products" />
      ) : (
        <Item>
          <div
            className="img"
            style={{ backgroundImage: `url(${productDetails.img})` }}
          />
          <DetalhesItem>
            <h2>{productDetails.descricao}</h2>
            <h3>
              Cor: <span>{productDetails.cor}</span>
            </h3>
            <h3>
              Material: <span>{productDetails.material}</span>
            </h3>
            <h3>
              Tamanho: <span>{productDetails.tamanho}</span>
            </h3>
            <h3>
              Vendedor: <span>{productDetails.vendedor}</span>
            </h3>
            <h3>
              Valor: <span>{`R$${productDetails.valor},00`}</span>
            </h3>
          </DetalhesItem>
        </Item>
      )}
    </Container>
  );
}
