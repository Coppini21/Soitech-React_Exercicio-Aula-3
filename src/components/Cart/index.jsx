import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import MyContext from "../../context/MyContext";

import {
  TotalCart,
  Item,
  BtnClear,
  BtnClose,
  BtnRemove,
  BtnSave,
  MensagemCart,
  DivBtnClearClose,
} from "./styles";

export default function Cart(props) {
  const { cart, setCart } = useContext(MyContext);

  function closeCart() {
    let cartModal = document.getElementById("totalCart");
    cartModal.style.display = "none";
  }

  function clear(){
    setCart( valorAtual => valorAtual.splice(0, cart.length))
  }
 

  return (
    <>
      <TotalCart id="totalCart">
        {cart.length > 0 ? (
          cart.map((produto, i) => {
            return (
              <div key={i}>
                <Item>
                  <div className="divImgInf">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${produto.img})` }}
                    />
                    <div className="divInf">
                      <h3>
                        {produto.descricao} with multiple colors, for men and
                        lady
                      </h3>
                      <p>
                        Size: {produto.tamanho}, Color: {produto.cor}, Material:{produto.material}
                      </p>
                      <p>Seller: {produto.vendedor}</p>
                      <div className="divTotalBtn">
                        <BtnRemove type="button">Remover</BtnRemove>
                        <BtnSave type="button">Save for later</BtnSave>
                      </div>
                    </div>
                  </div>
                  <div className="divTotalQuantidade">
                    <span>${produto.valor}</span>
                    <form>
                      <select name="quantidade" id="quantidade">
                        <option value={produto.quantidade}>Qty: {produto.quantidade}</option>
                      </select>
                    </form>
                  </div>
                </Item>
                <div className="linha"></div>
              </div>
            );
          })
        ) : (
          <MensagemCart>Não há produtos no carrinho!</MensagemCart>
        )}

        <DivBtnClearClose>
          <BtnClose type="button" onClick={() => closeCart()}>
            Fechar Cart
          </BtnClose>
          <BtnClear type="button" onClick={clear}>Clear</BtnClear>
        </DivBtnClearClose>
      </TotalCart>
    </>
  );
}
