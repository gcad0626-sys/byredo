export interface Product {
  id: number;
  badge: string | null;
  image: string;
  brand: string;
  name: string;
  desc: string;
  price: number;
  options: string[];
  koName?: string;
}

export const products: Product[] = [
  { id: 1, badge: 'BEST', image: '/img/la.png', brand: 'BYREDO', name: 'LA TULIPE', koName: '라 튤립', desc: '깨끗한 세탁물과 화이트 로즈의 향기를 담은 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] },
  { id: 2, badge: null, image: '/img/mojave.png', brand: 'BYREDO', name: 'MOJAVE GHOST', koName: '모하비 고스트', desc: '황야에 핀 아름답고 진귀한 모하비 고스트 향을 담은 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] },
  { id: 3, badge: 'NEW', image: '/img/product-blanche.jpg', brand: 'BYREDO', name: 'BLANCHE', koName: '블랑쉬', desc: '깨끗한 세탁물과 화이트 로즈의 향기를 담은 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] },
  { id: 4, badge: null, image: '/img/product-baldafrique.jpg', brand: 'BYREDO', name: "BAL D'AFRIQUE", koName: '발 다프리크', desc: '달콤한 머스크 향과 함께 활기찬 아프리카의 매력을 담은 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] },
  { id: 5, badge: null, image: '/img/rose.png', brand: 'BYREDO', name: "ROSE OF NO MAN'S LAND", koName: '로즈 오브 노 맨즈 랜드', desc: '무인지대에 핀 한 송이 장미처럼 은은하고 우아한 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] },
  { id: 6, badge: null, image: '/img/gypsy.png', brand: 'BYREDO', name: 'GYPSY WATER', koName: '집시 워터', desc: '숲속 깊은 곳의 흙내음과 바닐라 향이 어우러진 신비로운 핸드크림입니다.', price: 70000, options: ['30ML', '100ML'] }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(p => p.id === id);
};
