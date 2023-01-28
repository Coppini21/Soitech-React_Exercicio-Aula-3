import React, { useState, useContext, useEffect } from "react";

import Products from "../../components/Products";
import Cart from "../../components/Cart";
import config from "../../../config.json";

import MyContext from "../../context/MyContext";

import { IoIosCart, IoIosLogOut } from "react-icons/io";

import {
  Total,
  InputPesquisa,
  DivInputCart,
  QuantidadeItensCart,
  DivCartQuantidade,
  DivCartSair,
  DivIconSair,
} from "./style";

export default function HomeProducts() {
  const categorias = Object.keys(config);
  const categoriaOne = categorias[0];
  const categoriaTwo = categorias[1];
  const { cart, setCart } = useContext(MyContext);

  const [valorInput, setValorInput] = useState("");

  function abrirCart(event) {
    let cart = document.getElementById("totalCart");
    cart.style.display = "flex";
    event.stopPropagation();
  }

  console.log(cart);
  function sairPage() {
    localStorage.removeItem("autorizacao");
    window.location.reload();
  }

  function addItens(item) {
    const existente = cart.find(
      (produto) => produto.descricao === item.descricao
    );

    if (existente) {
      cart.forEach((produto) => {
        if (produto === existente) {
          produto.quantidade = produto.quantidade + 1;
        }
      });
    } else {
      const quantidade = {
        ...item,
        quantidade: 1,
      };

      setCart([...cart, quantidade]);
    }
  }

  window.addEventListener("click", function (event) {
    let openCart = document.getElementById("totalCart");

    if (!openCart.contains(event.target)) {
      if (openCart.style.display == "flex") {
        openCart.style.display = "none";
      }
    }
  });

  return (
    <Total>
      <Cart Prod={config.Electronics} />
      <DivInputCart>
        <div>
          <InputPesquisa
            value={valorInput}
            type="text"
            onChange={(e) => setValorInput(e.target.value)}
            placeholder="Pesquisar"
          />
        </div>

        <DivCartSair>
          <DivCartQuantidade id="divCartQuantidade">
            <QuantidadeItensCart>{cart.length}</QuantidadeItensCart>
            <IoIosCart size={30} onClick={abrirCart} />
          </DivCartQuantidade>
          <DivIconSair onClick={sairPage}>
            <IoIosLogOut size={30} />
            <label>Sair</label>
          </DivIconSair>
        </DivCartSair>
      </DivInputCart>

      <Products
        produtos={config.Electronics}
        name={categoriaOne}
        valorInput={valorInput}
        addItens={addItens}
      />

      <Products
        produtos={config.Clothing}
        name={categoriaTwo}
        valorInput={valorInput}
        addItens={addItens}
      />
    </Total>
  );
}
