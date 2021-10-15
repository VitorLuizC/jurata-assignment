import { ChangeEvent, FormEvent, ReactElement } from 'react';
import styled from 'styled-components';
import theme from '../theme/theme';

const Wrapper = styled.div``;

const InputWrapper = styled.fieldset`
  border: 0 none transparent;
  padding: 0;
`;

const Input = styled.input`
  background-color: ${theme.color.white};
  padding: 1rem;
  border: 1px solid #f6f5f3;
  height: 68px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
`;

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

function QuestionInput(props: Props): ReactElement {
  const { value, onChange, className } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value);
  };

  return (
    <Wrapper className={className}>
      <InputWrapper>
        <Input
          type="search"
          value={value}
          onChange={handleChange}
          enterKeyHint="go"
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default QuestionInput;
