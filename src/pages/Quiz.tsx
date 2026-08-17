import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { 
  QuizMain, QuizHeader, CloseBtn, HeaderTitle, QuizContent, 
  IntroWrapper, IntroTitle, IntroDesc, IntroDivider, IntroMeta, BlackBtn,
  QTitle, QItem, QNumDesc, OptionRow, OptionGrid, OptionBox, OptionPill, OptionLine,
  ResultWrapper, ResultSub, ResultTitle, ResultTags, ResultLine, ResultDesc,
  ResultBestMatch, ResultProductName, ResultProductDesc, ResultPrice, RetakeBtn,
  RecTitle, RecItem, RecNum, RecName, RecKo, RecTags, RecBottom, RecPriceInfo, RecViewBtn
} from './Quiz.styles';

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({ q1: 0, q2: 0, q3: 0, q4: 0, q5: 0 });

  // Scroll to top on step change
  useEffect(() => {
    const main = document.getElementById('quiz-main');
    if (main) main.scrollTo(0, 0);
  }, [step]);

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
                깨끗하고 부드러운 향을 선호하는 당신에게<br/>
                잘 어울리는 향입니다.
              </ResultDesc>
              <ResultLine />
              <ResultBestMatch>BEST MATCH</ResultBestMatch>
              <div style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px' }}>BYREDO</div>
              <ResultProductName>BLANCHE</ResultProductName>
              <ResultProductDesc>블랑쉬</ResultProductDesc>
              <ResultPrice>30ml · ₩70,000</ResultPrice>
            </ResultWrapper>
          )}

          {step === 4 && (
            <>
              <ResultSub style={{ textAlign: 'center', marginTop: '24px' }}>RECOMMENDED FOR YOU</ResultSub>
              <RecTitle>당신에게 추천하는 핸드크림</RecTitle>
              
              <RecItem>
                <RecNum><span className="num">01</span> <span className="badge">BEST MATCH</span></RecNum>
                <RecName>BLANCHE</RecName>
                <RecKo>블랑쉬</RecKo>
                <RecTags>Clean · Soft · Fresh</RecTags>
                <RecBottom>
                  <RecPriceInfo>
                    <span className="vol">30ml</span>
                    <span className="price">₩70,000</span>
                  </RecPriceInfo>
                  <RecViewBtn onClick={() => navigate('/products/1')}>VIEW PRODUCT →</RecViewBtn>
                </RecBottom>
              </RecItem>

              <RecItem>
                <RecNum><span className="num">02</span></RecNum>
                <RecName>GYPSY WATER</RecName>
                <RecKo>집시 워터</RecKo>
                <RecTags>Woody · Fresh</RecTags>
                <RecBottom>
                  <RecPriceInfo>
                    <span className="vol">30ml</span>
                    <span className="price">₩70,000</span>
                  </RecPriceInfo>
                  <RecViewBtn onClick={() => navigate('/products/2')}>VIEW PRODUCT →</RecViewBtn>
                </RecBottom>
              </RecItem>

              <RecItem style={{ borderBottom: 'none' }}>
                <RecNum><span className="num">03</span></RecNum>
                <RecName>MOJAVE GHOST</RecName>
                <RecKo>모하비 고스트</RecKo>
                <RecTags>Soft · Musk</RecTags>
                <RecBottom>
                  <RecPriceInfo>
                    <span className="vol">30ml</span>
                    <span className="price">₩70,000</span>
                  </RecPriceInfo>
                  <RecViewBtn onClick={() => navigate('/products/3')}>VIEW PRODUCT →</RecViewBtn>
                </RecBottom>
              </RecItem>
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
    </AppLayout>
  );
};

export default Quiz;
