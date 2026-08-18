import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Title, Badge, Sub, Btn } from './QuizEntry.styles';

const QuizEntry: React.FC = () => {
  return (
    <Section id="quiz-entry" aria-label="향 취향 퀴즈 진입">
      <Title>
        <Badge>
          <img src="/img/icon-quiz.png" alt="quiz icon" />
        </Badge>
        나에게 딱 맞는 향을 찾아보세요
      </Title>
      <Sub dangerouslySetInnerHTML={{ __html: '간단한 질문으로 당신에게 어울리는<br>핸드크림을 추천해드려요.' }} />
      <Btn as={Link} to="/quiz" className="trigger-quiz">향 취향 퀴즈 시작 →</Btn>
    </Section>
  );
};

export default QuizEntry;
