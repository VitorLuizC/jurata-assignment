import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 92px;
  border-top: 1px solid rgb(216, 216, 216);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: rgb(232, 235, 242);
`;

type Props = {
  children?: ReactNode;
  className?: string;
};

function CardFooter(props: Props): ReactElement {
  const { children, className } = props;

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
}

export default CardFooter;
