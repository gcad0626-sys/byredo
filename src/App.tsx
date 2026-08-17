
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Search from './pages/Search';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderComplete from './pages/OrderComplete';
import MyPage from './pages/MyPage';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';
import ExchangeReturn from './pages/ExchangeReturn';
import Wishlist from './pages/Wishlist';
import Review from './pages/Review';
import WriteReview from './pages/WriteReview';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SocialSignup from './pages/SocialSignup';
import About from './pages/About';
import Quiz from './pages/Quiz';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
        <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/orders" element={<OrderList />} />
        <Route path="/mypage/orders/:id" element={<OrderDetail />} />
        <Route path="/mypage/exchange-return/:id" element={<ExchangeReturn />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mypage/reviews" element={<Review />} />
        <Route path="/mypage/write-review" element={<WriteReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/social-signup" element={<SocialSignup />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
    </OrderProvider>
  );
}

export default App;
