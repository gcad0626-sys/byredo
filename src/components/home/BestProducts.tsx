import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Section, 
  Head, 
  MoreLink, 
  List, 
  Card, 
  ImgWrap, 
  Rank, 
  Name, 
  Desc, 
  Price 
} from './BestProducts.styles';

const products = [
  {
    rank: "01",
    image: "/org/img/product-blanche.jpg",
    name: "BLANCHE",
    desc: "블랑쉬\n핸드크림 30ml",
    price: "₩70,000"
  },
  {
    rank: "02",
    image: "/org/img/product-baldafrique.jpg",
    name: "BAL D'AFRIQUE",
    desc: "발 다프리크\n핸드크림 30ml",
    price: "₩70,000"
  }
];

const BestProducts: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Section id="best-products" aria-label="실시간 베스트 상품">
      <Head>
        <h3>실시간 베스트 상품</h3>
        <MoreLink as={Link} to="/products" className="trigger-product-list">전체 상품 보기 ›</MoreLink>
      </Head>
      <List>
        {products.map((item, index) => (
          <Card key={index} className="trigger-product-detail" onClick={() => navigate('/products/1')}>
            <ImgWrap>
              <Rank>{item.rank}</Rank>
              <img src={item.image} alt={`${item.name} 핸드크림`} />
            </ImgWrap>
            <Name>{item.name}</Name>
            <Desc dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }} />
            <Price>{item.price}</Price>
          </Card>
        ))}
      </List>
    </Section>
  );
};

export default BestProducts;
