interface Order {
  orderPlaced: string;
  orderTotal: number;
  shipTo: string;
  orderNumber: number;
  deliveryDate: string;
  title?: string;
  author?: string;
  productName?: string;
  manufacturer?: string;
  price: number;
}

const orderHistory: Order[] = [
  {
    orderPlaced: 'August 4, 2020',
    orderTotal: 31.55,
    shipTo: 'JS Masher',
    orderNumber: 1,
    deliveryDate: 'August 8, 2020',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    price: 31.55,
  },
  {
    orderPlaced: 'July 19, 2020',
    orderTotal: 44.53,
    shipTo: 'JS Masher',
    orderNumber: 2,
    deliveryDate: 'July 20, 2020',
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    price: 41.33,
  },
  {
    orderPlaced: 'July 4, 2020',
    orderTotal: 17.22,
    shipTo: 'JS Masher',
    orderNumber: 3,
    deliveryDate: 'July 7, 2020',
    productName: 'Gamecube Controller Adapter',
    manufacturer: 'Nintendo',
    price: 15.98,
  },
  {
    orderPlaced: 'July 3, 2020',
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: 4,
    deliveryDate: 'July 5, 2020',
    productName: 'Gamecube Controller',
    manufacturer: 'Nintendo',
    price: 94.95,
  },
  {
    orderPlaced: 'July 3, 2020',
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    orderNumber: 4,
    deliveryDate: 'July 5, 2020',
    title: 'The Art of Sql',
    author: 'Faroult, Stephane',
    price: 33.99,
  },
];
