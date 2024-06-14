import "./App.css";
import "./CSS/fonts.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Page/header";
import Footer from "./Page/footer";
import MainContents from "./Page/main/mainContents";
import AboutContents from "./Page/about/aboutContents";
import Shop from "./Page/shop/shop";
import MypageContents from "./Page/mypage/mypageContents";
import LoginContent from "./Page/login/loginContent";
import SigninContent from "./Page/signin/signinContent";
import SignFormContent from "./Page/signin/signFormContent";
import CartContents from "./Page/cart/cartContents";
import PayContents from "./Page/pay/payContents";
import PayCompleteContent from "./Page/payComplete/payCompleteContent";
import ShopDetailContents from "./Page/shopDetail/shopDetailContents";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/about" element={<AboutContents />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mypage" element={<MypageContents />} />
        <Route path="/login" element={<LoginContent />} />
        <Route path="/signin" element={<SigninContent />} />
        <Route path="/signForm" element={<SignFormContent />} />
        <Route path="/cart" element={<CartContents />} />
        <Route path="/pay" element={<PayContents />} />
        <Route path="/complete" element={<PayCompleteContent />} />
        <Route path="/shopDetail/:id" element={<ShopDetailContents />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
