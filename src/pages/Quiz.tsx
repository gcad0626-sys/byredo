import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { 
  QuizMain, QuizHeader, CloseBtn, HeaderTitle, QuizContent, 
  IntroWrapper, IntroTitle, IntroDesc, IntroDivider, IntroMeta, BlackBtn,
  QTitle, QItem, QNumDesc, OptionRow, OptionGrid, OptionBox, OptionPill, OptionLine,
  ResultWrapper, ResultSub, ResultTitle, ResultTags, ResultLine, ResultDesc,
  ResultBestMatch, ResultProductName, ResultProductDesc, ResultPrice, RetakeBtn,
  RecTitle, RecItem, RecNum, RecName, RecKo, RecTags, RecBottom, RecPriceInfo, RecViewBtn, RecCartBtn
} from './Quiz.styles';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 });
  const [showCartModal, setShowCartModal] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    const main = document.getElementById('quiz-main');
    if (main) main.scrollTo(0, 0);
  }, [step]);

  const getBestMatches = () => {
    let mainId = 3; // BLANCHE
    if (answers.q1 === 1) mainId = 3;
    if (answers.q1 === 2) mainId = 5;
    if (answers.q1 === 3) mainId = 6;
    if (answers.q1 === 4) mainId = 4;
    
    const mainProduct = products.find(p => p.id === mainId) || products[2];
    const others = products.filter(p => p.id !== mainProduct.id).slice(0, 2);
    return { mainProduct, others };
  };

  const { mainProduct, others } = getBestMatches();

  return (
    <AppLayout>
      <QuizMain id="quiz-main">
        <QuizHeader>
          <CloseBtn onClick={() => navigate(-1)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </CloseBtn>
          <HeaderTitle>SCENT QUIZ</HeaderTitle>
          <div style={{ width: 24 }} />
        </QuizHeader>

        <QuizContent>
          {step === 1 && (
            <IntroWrapper>
              <IntroTitle>나에게 어울리는<br/>향을 찾아보세요</IntroTitle>
              <IntroDesc>
                간단한 질문을 통해 당신의 향 취향에 가장 잘 어<br/>
                울리는 핸드크림을 찾아드립니다.
              </IntroDesc>
              <IntroDivider />
              <IntroMeta>5 QUESTIONS · ABOUT 1 MIN</IntroMeta>
            </IntroWrapper>
          )}

          {step === 2 && (
            <>
              <QTitle>당신의 향 취향을 알려주세요</QTitle>
              
              <QItem>
                <QNumDesc><span className="num">01</span><span className="desc">어떤 분위기의 향을 좋아하시나요?</span></QNumDesc>
                <OptionRow active={answers.q1 === 1} onClick={() => setAnswers({...answers, q1: 1})}>
                  깨끗하고 산뜻한 <div className="radio" />
                </OptionRow>
                <OptionRow active={answers.q1 === 2} onClick={() => setAnswers({...answers, q1: 2})}>
                  따뜻하고 포근한 <div className="radio" />
                </OptionRow>
                <OptionRow active={answers.q1 === 3} onClick={() => setAnswers({...answers, q1: 3})}>
                  우디하고 차분한 <div className="radio" />
                </OptionRow>
                <OptionRow active={answers.q1 === 4} onClick={() => setAnswers({...answers, q1: 4})}>
                  달콤하고 부드러운 <div className="radio" />
                </OptionRow>
              </QItem>

              <QItem>
                <QNumDesc><span className="num">02</span><span className="desc">선호하는 향의 존재감은 어느 정도인가요?</span></QNumDesc>
                <OptionGrid>
                  <OptionBox active={answers.q2 === 1} onClick={() => setAnswers({...answers, q2: 1})}>
                    <div className="radio" /> 은은하게
                  </OptionBox>
                  <OptionBox active={answers.q2 === 2} onClick={() => setAnswers({...answers, q2: 2})}>
                    <div className="radio" /> 적당하게
                  </OptionBox>
                  <OptionBox active={answers.q2 === 3} onClick={() => setAnswers({...answers, q2: 3})}>
                    <div className="radio" /> 오래도록
                  </OptionBox>
                  <OptionBox active={answers.q2 === 4} onClick={() => setAnswers({...answers, q2: 4})}>
                    <div className="radio" /> 확실하게
                  </OptionBox>
                </OptionGrid>
              </QItem>

              <QItem>
                <QNumDesc><span className="num">03</span><span className="desc">가장 끌리는 향 계열은 무엇인가요?</span></QNumDesc>
                <OptionGrid>
                  <OptionPill active={answers.q3 === 1} onClick={() => setAnswers({...answers, q3: 1})}>FLORAL</OptionPill>
                  <OptionPill active={answers.q3 === 2} onClick={() => setAnswers({...answers, q3: 2})}>FRESH</OptionPill>
                  <OptionPill active={answers.q3 === 3} onClick={() => setAnswers({...answers, q3: 3})}>WOODY</OptionPill>
                  <OptionPill active={answers.q3 === 4} onClick={() => setAnswers({...answers, q3: 4})}>MUSK</OptionPill>
                </OptionGrid>
              </QItem>

              <QItem>
                <QNumDesc><span className="num">04</span><span className="desc">어떤 분위기의 향을 선호하시나요?</span></QNumDesc>
                <OptionRow active={answers.q4 === 1} onClick={() => setAnswers({...answers, q4: 1})} style={{ justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>CLEAN & MINIMAL</span>
                </OptionRow>
                <OptionRow active={answers.q4 === 2} onClick={() => setAnswers({...answers, q4: 2})} style={{ justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>NATURAL & RELAXED</span>
                </OptionRow>
                <OptionRow active={answers.q4 === 3} onClick={() => setAnswers({...answers, q4: 3})} style={{ justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>ELEGANT & URBAN</span>
                </OptionRow>
                <OptionRow active={answers.q4 === 4} onClick={() => setAnswers({...answers, q4: 4})} style={{ justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}>WARM & SENSUAL</span>
                </OptionRow>
              </QItem>

              <QItem>
                <QNumDesc><span className="num">05</span><span className="desc">핸드크림에서 어떤 느낌을 원하시나요?</span></QNumDesc>
                <OptionLine active={answers.q5 === 1} onClick={() => setAnswers({...answers, q5: 1})}>
                  <div className="radio" /> 가볍고 산뜻하게
                </OptionLine>
                <OptionLine active={answers.q5 === 2} onClick={() => setAnswers({...answers, q5: 2})}>
                  <div className="radio" /> 부드럽고 편안하게
                </OptionLine>
                <OptionLine active={answers.q5 === 3} onClick={() => setAnswers({...answers, q5: 3})}>
                  <div className="radio" /> 포근하고 따뜻하게
                </OptionLine>
                <OptionLine active={answers.q5 === 4} onClick={() => setAnswers({...answers, q5: 4})}>
                  <div className="radio" /> 감각적이고 진하게
                </OptionLine>
              </QItem>
            </>
          )}

          {step === 3 && (
            <ResultWrapper>
              <ResultSub>YOUR SCENT PROFILE</ResultSub>
              <ResultTitle>당신에게 어울리는 향을 찾았어요</ResultTitle>
              <ResultTags>CLEAN · SOFT · FRESH</ResultTags>
              <ResultLine />
              <ResultDesc>
                당신의 취향에 가장 잘 어울리는 향입니다.
              </ResultDesc>
              <ResultLine />
              <ResultBestMatch>BEST MATCH</ResultBestMatch>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>BYREDO</div>
              <ResultProductName>{mainProduct.name}</ResultProductName>
              <ResultProductDesc>{mainProduct.desc}</ResultProductDesc>
              <ResultPrice>30ml · ₩{mainProduct.price.toLocaleString()}</ResultPrice>
            </ResultWrapper>
          )}

          {step === 4 && (
            <>
              <ResultSub style={{ textAlign: 'center', marginTop: '24px' }}>RECOMMENDED FOR YOU</ResultSub>
              <RecTitle>당신에게 추천하는 핸드크림</RecTitle>
              
              <RecItem>
                <RecNum><span className="num">01</span> <span className="badge">BEST MATCH</span></RecNum>
                <RecName>{mainProduct.name}</RecName>
                <RecKo>{mainProduct.desc}</RecKo>
                <RecTags>Signature Scent</RecTags>
                <RecBottom>
                  <RecPriceInfo>
                    <span className="vol">30ml</span>
                    <span className="price">₩{mainProduct.price.toLocaleString()}</span>
                  </RecPriceInfo>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <RecViewBtn onClick={() => navigate(`/products/${mainProduct.id}`, { state: { fromQuiz: true } })}>VIEW PRODUCT →</RecViewBtn>
                    <RecCartBtn onClick={() => {
                      addToCart({
                        productId: mainProduct.id,
                        name: mainProduct.name,
                        image: mainProduct.image,
                        option: mainProduct.options?.[0] || '30ML',
                        qty: 1,
                        price: mainProduct.price,
                        giftMessage: null
                      });
                      setShowCartModal(true);
                    }}>
                      <img src="/org/img/icon-cart.png" alt="cart" />
                    </RecCartBtn>
                  </div>
                </RecBottom>
              </RecItem>

              {others.map((item, index) => (
                <RecItem key={item.id} style={index === 1 ? { borderBottom: 'none' } : {}}>
                  <RecNum><span className="num">0{index + 2}</span></RecNum>
                  <RecName>{item.name}</RecName>
                  <RecKo>{item.desc}</RecKo>
                  <RecTags>Recommended</RecTags>
                  <RecBottom>
                    <RecPriceInfo>
                      <span className="vol">30ml</span>
                      <span className="price">₩{item.price.toLocaleString()}</span>
                    </RecPriceInfo>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <RecViewBtn onClick={() => navigate(`/products/${item.id}`, { state: { fromQuiz: true } })}>VIEW PRODUCT →</RecViewBtn>
                      <RecCartBtn onClick={() => {
                        addToCart({
                          productId: item.id,
                          name: item.name,
                          image: item.image,
                          option: '30ML',
                          qty: 1,
                          price: item.price,
                          giftMessage: null
                        });
                        setShowCartModal(true);
                      }}>
                        <img src="/org/img/icon-cart.png" alt="cart" />
                      </RecCartBtn>
                    </div>
                  </RecBottom>
                </RecItem>
              ))}
            </>
          )}

          {step === 1 && <BlackBtn onClick={() => setStep(2)}>START QUIZ <span>→</span></BlackBtn>}
          {step === 2 && <BlackBtn onClick={() => setStep(3)}>RESULT <span>→</span></BlackBtn>}
          {step === 3 && (
            <div style={{ marginTop: 'auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BlackBtn onClick={() => setStep(4)} style={{ marginTop: 0 }}>VIEW RECOMMENDATION <span>→</span></BlackBtn>
              <RetakeBtn onClick={() => setStep(1)}>RETAKE QUIZ</RetakeBtn>
            </div>
          )}
        </QuizContent>
      </QuizMain>
      <Modal 
        isOpen={showCartModal} 
        message="장바구니에 담겼습니다" 
        onClose={() => {
          setShowCartModal(false);
          navigate('/cart');
        }} 
        confirmText="바로가기"
        cancelText="계속 쇼핑"
        onCancel={() => setShowCartModal(false)}
      />
    </AppLayout>
  );
};

export default Quiz;
