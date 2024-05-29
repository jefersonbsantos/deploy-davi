import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import React from "react";
// import { IProduct } from "../../providers/GlobalContext/@type";

const ModalOrder = () => {
  const {
    setOpenModalOrder,
    ProductsList,
    setProductsList,
    init,
    setInit,
    cont,
    setCont,
  } = useContext(GlobalContext);

  const closeModal = () => {
    setOpenModalOrder(false);
    console.log("adssadasjdajsfsajajfajfjsajf");
  };

  const sortOrder = (button: any) => {
    if (button == "Mais recente") {
      ProductsList.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });

      setProductsList(ProductsList);
      setInit([...ProductsList.slice(0, cont)]);
    } else if (button == "Maior preço") {
      ProductsList.sort((a, b) => b.price - a.price);

      setProductsList(ProductsList);
      setInit([...ProductsList.slice(0, cont)]);
    } else if (button == "Menor preço") {
      ProductsList.sort((a, b) => a.price - b.price);

      setProductsList(ProductsList);
      setInit([...ProductsList.slice(0, cont)]);
    }
  };
  return (
    <div className="modal" role="dialog">
      <div className="headerModal">
        <h1>ORDERNAR</h1>
        <img src="/close.svg" alt="" onClick={closeModal} />
      </div>
      <div className="divbuttons">
        <button
          onClick={() => {
            closeModal();
            sortOrder("Mais recente");
          }}
        >
          Mais recente
        </button>
        <button
          onClick={() => {
            closeModal();
            sortOrder("Maior preço");
          }}
        >
          Maior preço
        </button>
        <button
          onClick={() => {
            closeModal();
            sortOrder("Menor preço");
          }}
        >
          Menor preço
        </button>
      </div>
    </div>
  );
};

export default ModalOrder;
