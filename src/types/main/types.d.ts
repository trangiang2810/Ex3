interface ProductItem {
  id: number;
  category: string;
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
}

interface Progress {
  id: number;
  title: string;
  content: string;
  statistical: number;
  icon: any;
  state: string;
}
