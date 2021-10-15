import styled from 'styled-components';
import type Answer from '../models/Answer';
import Button from './Button';
import Card from './card/Card';
import CardFooter from './card/CardFooter';
import IconLink from './icons/IconLink';

const Wrapper = styled(Card)`
  width: 290px;
`;

const Footer = styled(CardFooter)`
  justify-content: flex-end;
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
        <Footer>
          <Button icon={<IconLink />} href={answer.url}>
            See more
          </Button>
        </Footer>
      )}
    </Wrapper>
  );
}

export default AnswerCard;
