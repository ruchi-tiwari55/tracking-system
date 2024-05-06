import * as React from 'react';
import { styled } from '@mui/system';
import { unstable_useNumberInput as useNumberInput } from '@mui/base/unstable_useNumberInput';
import { unstable_useForkRef as useForkRef } from '@mui/utils';

const StyledInputRoot = styled('div')(({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  border-radius: 8px;
  color: ${theme.palette.mode === 'dark' ? '#C7D0DD' : '#434D5B'};
  background: ${theme.palette.mode === 'dark' ? '#434D5B' : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? '#303740' : '#DAE2ED'};
  box-shadow: 0px 2px 4px ${theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.05)'};
  display: grid;
  grid-template-columns: 1fr 19px;
  grid-template-rows: 1fr 1fr;
  overflow: hidden;
  column-gap: 8px;
  padding: 1px;

  &.focused {
    border-color: #3399FF;
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? '#0059B2' : '#B6DAFF'};

    & button:hover {
      background: #3399FF;
    }
  }
`);

const StyledLabel = styled('label')(({ theme }) => `
  font-size: 0.875rem;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  color: ${theme.palette.mode === 'dark' ? 'black' : 'black'};
  padding: 1px
  marginRight:1px

`);

const StyledInputElement = styled('input')(({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1;
  color: ${theme.palette.mode === 'dark' ? '#C7D0DD' : '#434D5B'};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 3px;
  outline: 0;
`);

const StyledStepperButton = styled('button')(({ theme }) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  appearance: none;
  padding: 0;
  width: 19px;
  height: 19px;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  box-sizing: border-box;
  background: ${theme.palette.mode === 'dark' ? '#434D5B' : '#fff'};
  border: 0;
  color: ${theme.palette.mode === 'dark' ? '#C7D0DD' : '#434D5B'};
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &.increment {
    grid-column: 2/3;
    grid-row: 1/2;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303740' : '#DAE2ED'};
    border-bottom: 0;
    background: ${theme.palette.mode === 'dark' ? '#434D5B' : '#F3F6F9'};
    color: ${theme.palette.mode === 'dark' ? '#434D5B' : '#C7D0DD'};

    &:hover {
      cursor: pointer;
      color: #fff;
      background: ${theme.palette.mode === 'dark' ? '#007FFF' : '#3399FF'};
      border-color: ${theme.palette.mode === 'dark' ? '#0059B2' : '#B6DAFF'};
    }
  }

  &.decrement {
    grid-column: 2/3;
    grid-row: 2/3;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303740' : '#DAE2ED'};
    background: ${theme.palette.mode === 'dark' ? '#434D5B' : '#F3F6F9'};
    color: ${theme.palette.mode === 'dark' ? '#434D5B' : '#C7D0DD'};

    &:hover {
      cursor: pointer;
      color: #fff;
      background: ${theme.palette.mode === 'dark' ? '#007FFF' : '#3399FF'};
      border-color: ${theme.palette.mode === 'dark' ? '#0059B2' : '#B6DAFF'};
    }
  }
`);

const CustomNumberInput = React.forwardRef(function CustomNumberInput(
  { label, ...props },
  ref,
) {
  const {
    getRootProps,
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    focused,
  } = useNumberInput(props);

  const inputProps = getInputProps();

  inputProps.ref = useForkRef(inputProps.ref, ref);

  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputRoot {...getRootProps()} className={focused ? 'focused' : null}>
        <StyledStepperButton {...getIncrementButtonProps()} className="increment">
          ▴
        </StyledStepperButton>
        <StyledStepperButton {...getDecrementButtonProps()} className="decrement">
          ▾
        </StyledStepperButton>
        <StyledInputElement {...inputProps} />
      </StyledInputRoot>
    </div>
  );
});

export default CustomNumberInput;
