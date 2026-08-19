import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Title, Sub, Btn } from './QuizEntry.styles';

const QuizEntry: React.FC = () => {
  return (
    <Section id="quiz-entry" aria-label="향 취향 퀴즈 진입">
      <Title>
        나에게 딱 맞는 향을 찾아보세요
      </Title>
      <Sub dangerouslySetInnerHTML={{ __html: '간단한 질문으로 당신에게 어울리는<br>핸드크림을 추천해드려요.' }} />
      <Btn as={Link} to="/quiz" className="trigger-quiz">
        <span>START QUIZ</span>
        <span>→</span>
      </Btn>
    </Section>
  );
};

export default QuizEntry;
