import Header from './components/header/Header';
import "./app.scss";
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Content from './components/Content/Content';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { Routes, Route, Link, } from 'react-router-dom';
import ItemPaper from './components/item_paper/ItemPaper';
import Category from './components/Category/Category';
import CookieConsent from "react-cookie-consent";
import LoginWin from './components/LoginWin/LoginWin';
import React, { useState } from 'react';
import Mobile_header from './components/Mobile/Mobile_header/Mobile_header';
import { useMediaQuery } from 'react-responsive'
import Mobile_top_banner from './components/Mobile/Mobile_top_banner/Mobile_top_banner';
import Mobile_popular from './components/Mobile/Mobile_popular/Mobile_popular';
import Mobile_fullbanner from './components/Mobile/Mobile_fullbanner/Mobile_fullbanner';
import Mobile_contentFooter from './components/Mobile/Mobile_contentFooter/Mobile_contentFooter';
import Mobile_footer from './components/Mobile/Mobile_footer/Mobile_footer';
import Mobile_header_bottom from './components/Mobile/Mobile_header/Mobile_header_bottom';


function App() {
  const [modalActive, setModalActive] = useState(false)

  const [counter, setCounter] = useState(0);
  const [likeCounter, setLikeCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  };

  const Likeincrease = () => {
    setLikeCounter(count => count + 1);
  };

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isPc = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <div className="App">
      {isTabletOrMobile &&
        <>
          <Mobile_header setModalActive={setModalActive} counter={counter} likeCounter={likeCounter} />
          <Routes>
            <Route path="/" element={[<Mobile_top_banner />, <Mobile_popular quant={4} needBtn={false} Likeincrease={Likeincrease} increase={increase} />,
            <Mobile_fullbanner />,
            <Mobile_contentFooter />,
            <Mobile_footer />,
            <Mobile_header_bottom setModalActive={setModalActive} counter={counter} likeCounter={likeCounter}/>
            ]} />
          </Routes>
        </>}
      {isPc &&
        <>
          <Header setModalActive={setModalActive} counter={counter} likeCounter={likeCounter} />
          <Routes>
            <Route path="/" element={[<Banner />, <Content Likeincrease={Likeincrease} increase={increase} />]} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/ItemPaper" element={<ItemPaper Likeincrease={Likeincrease} increase={increase} counter={counter} setCounter={setCounter} />} />
            <Route path="/category" element={<Category Likeincrease={Likeincrease} increase={increase} />} />
          </Routes>
          <Footer />
          <CookieConsent debug={false}
            location="bottom"
            buttonText="ACCEPT"
            enableDeclineButton
            buttonWrapperClasses="Main__button__cookie"
            declineButtonText="X"
            cookieName="myAwesomeCookieName2"
            containerClasses="Cookies"
            buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
            expires={1}
          >
            <h2>This website uses cookies</h2>
            OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance<br /> and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider that you accept its use. <br />You can expand this information consulting our <a>Cookies Policy Page.</a>
          </CookieConsent>
          <LoginWin active={modalActive} setActive={setModalActive} />
        </>}
    </div >
  );
}

export default App;
