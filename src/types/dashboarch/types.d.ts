interface DataType {
  key: React.Key;
  icon?: any;
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
