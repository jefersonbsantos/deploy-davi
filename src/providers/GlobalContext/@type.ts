export interface IGlobalProviderProps {
  children: React.ReactNode;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  parcelamento: number[];
  color: string;
  image: string;
  size: string[];
  date: string;
}

export interface IGlobalContext {
  ProductsList: IProduct[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  openModalOrder: boolean;
  setOpenModalOrder: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsList: React.Dispatch<React.SetStateAction<IProduct[]>>;
  init: IProduct[];
  setInit: React.Dispatch<React.SetStateAction<IProduct[]>>;
  cont: number;
  setCont: React.Dispatch<React.SetStateAction<number>>;
}
