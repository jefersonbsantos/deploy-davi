import { useContext } from "react";
import FilterButton from "../FilterButton";
import ListItems from "../ListItems";
import SortButton from "../SortButton";
import { GlobalContext } from "../../providers/GlobalContext/GlobalContext";
import ModalOrder from "../ModalOrder";
import React from "react";

const Main = () => {
  const { openModalOrder } = useContext(GlobalContext);

  return (
    <>
      {openModalOrder ? <ModalOrder /> : null}
      <main className="main">
        <h1 className="title">Blusas</h1>
        <div className="teste">
          <div className="styleButtons">
            <FilterButton />
            <SortButton />
          </div>
        </div>
        <ListItems />
      </main>
    </>
  );
};

export default Main;
