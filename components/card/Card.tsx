import type { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';

const Wrapper = styled.footer`
  background-color: ${theme.color.white};
  box-shadow: rgb(0 0 0 / 17%) 0 0 13px 5px;
`;

type Props = {
  children?: ReactNode;
  className?: string;
};

function Card(props: Props): ReactElement {
  const { children, className } = props;

  return (
    <Wrapper className={className}>
      {children}
    </Wrapper>
  );
}

export default Card;
