// import { StaticImageData } from "next/image";

interface DataType {
  key: React.Key;
  flag: any;
  name: string;
  quantity: number;
  ratio: number;
}

interface Progress {
  id: number;
  title: string;
  content: string;
  statistical: number;
  icon: any;
  state: string;
}

interface Tasks {
  key: React.Key;
  img: StaticImageData;
  content: string;
  iconEdit: any;
  iconDelete: any;
}
