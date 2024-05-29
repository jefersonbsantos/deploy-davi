import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import React from "react";

const ListItems = () => {
  const { ProductsList, setCount, count, setInit, init, cont, setCont } =
    useContext(GlobalContext);

  useEffect(() => {
    setInit([...ProductsList.slice(0, cont)]);
  }, [ProductsList]);

  const handleMore = () => {
    setCont(cont + 9);
    setInit([...ProductsList.slice(0, cont + 9)]);
  };

  const addToBag = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <ul className="containerList">
        {ProductsList && ProductsList.length > 0 ? (
          init.map((object) => {
            const imageSrc = require(`../../assets${object.image}`).default;
            return (
              <li key={object.id}>
                <img src={imageSrc} alt={object.name} />
                <p className="productName">{object.name.toUpperCase()}</p>
                <div>
                  <p className="price">
                    {Number(object.price).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <p className="payInstallment">
                    até {object.parcelamento[0]}x de{" "}
                    {Number(object.parcelamento[1]).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button onClick={addToBag}>COMPRAR</button>
              </li>
            );
          })
        ) : (
          <p>deu merda</p>
        )}
      </ul>
      {init && init.length >= cont ? (
        <button onClick={handleMore} className="buttonHandleMore">
          CARREGAR MAIS
        </button>
      ) : (
        <p> Todos os produtos foram carregados</p>
      )}
    </div>
  );
};

export default ListItems;
