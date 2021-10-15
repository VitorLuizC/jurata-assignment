import styled from 'styled-components';
import type Answer from '../models/Answer';
import theme from '../theme/theme';
import Anchor from './Anchor';
import Card from './Card';

const Wrapper = styled(Card)`
  width: 290px;
`;

const ImageWrapper = styled.figure`
  width: 100%;
  height: 290px;
  margin: 0;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageEmpty = styled.div``;

const Title = styled.h3``;

const Text = styled.p``;

type Props = {
  answer: Answer;
  question: string;
  className?: string;
};

function AnswerCard(props: Props) {
  const { answer, question, className } = props;

  return (
    <Wrapper className={className}>
      <ImageWrapper>
        {answer.image ? <Image src={answer.image} alt="" /> : <ImageEmpty />}
      </ImageWrapper>
      <Title>{question}</Title>
      <Text>{answer.answer}</Text>
      {answer.url && (
        <Anchor to={answer.url}>
          See more
        </Anchor>
      )}
    </Wrapper>
  );
}

export default AnswerCard;
