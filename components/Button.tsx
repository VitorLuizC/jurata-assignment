import type { MouseEvent, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';
import Anchor from './Anchor';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  height: 43px;
  border-radius: 3px;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #4d6693;
  color: ${theme.color.white};

  a& {
    text-decoration: none;
  }

  button& {
    border: 0 none transparent;
  }
`;

const Text = styled.span`
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.color.white};
`;

const Icon = styled.span`
  height: 1.5rem;
  margin-right: 0.5rem;
`;

type Props = {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  children: ReactNode;
  className?: string;
};

function Button(props: Props): ReactElement {
  const { icon, href, type = 'button', children, className, onClick } = props;

  if (href) {
    return (
      <Wrapper as={Anchor} href={href} onClick={onClick} className={className}>
        {icon && <Icon>{icon}</Icon>}
        <Text>{children}</Text>
      </Wrapper>
    );
  }

  return (
    <Wrapper as="button" type={type} onClick={onClick} className={className}>
      {icon && <Icon>{icon}</Icon>}
      <Text>{children}</Text>
    </Wrapper>
  );
}

export default Button;
