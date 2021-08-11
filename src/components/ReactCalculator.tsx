import { useCalculate } from "../hooks/useCalculate";
import styled from "@emotion/styled";
import { Button, ButtonBackgroundColor } from "./Button";
import { Command } from "../logic/Calculator";
import { Display } from "./Display";
import { useEffect } from "react";

type ComponentProps = {
  onCalculate: (input: string) => void;
  onClear: () => void;
  onAllClear: () => void;
  isClearable: boolean;
  value: string;
  selectedCommand: string;
};

type Props = {
  initialValue?: string | number;
  onEqual?: (result: number) => void
}

export const ReactCalculator: React.VFC<Props> = (props) => {
  const {
    value,
    isClearable,
    selectedCommand,
    onCalculate,
    onClear,
    onAllClear,
  } = useCalculate();

  useEffect(() => {
    if (props.initialValue) String(props.initialValue).split('').map(onCalculate)
  }, [])

  const calculate = (input: string) => {
    const reuslt = onCalculate(input)
    if (input === Command.Equal && props.onEqual) {
      props.onEqual(Number(reuslt))
    }
  }

  return (
    <CalculatorComponent
      onCalculate={calculate}
      onClear={() => onClear()}
      onAllClear={() => onAllClear()}
      isClearable={isClearable}
      value={value}
      selectedCommand={selectedCommand}
    />
  );
};

const CalculatorComponent: React.VFC<ComponentProps> = (props) => (
  <StyledDiv>
    <Display value={props.value} />
    <Button
      value={props.isClearable ? "C" : "AC"}
      onClick={() => (props.isClearable ? props.onClear() : props.onAllClear())}
      backgroundColor={ButtonBackgroundColor.Black}
    />
    <Button
      value="+/-"
      onClick={() => props.onCalculate(Command.Sign)}
      backgroundColor={ButtonBackgroundColor.Black}
    />
    <Button
      value="%"
      onClick={() => props.onCalculate(Command.Percentage)}
      backgroundColor={ButtonBackgroundColor.Black}
    />
    <Button
      value={"\u00F7"}
      onClick={() => props.onCalculate(Command.Division)}
      backgroundColor={ButtonBackgroundColor.Orange}
      isSelected={props.selectedCommand === Command.Division}
    />
    <br />
    <Button
      value="7"
      onClick={() => props.onCalculate("7")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="8"
      onClick={() => props.onCalculate("8")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="9"
      onClick={() => props.onCalculate("9")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="x"
      onClick={() => props.onCalculate(Command.Multiplication)}
      backgroundColor={ButtonBackgroundColor.Orange}
      isSelected={props.selectedCommand === Command.Multiplication}
    />
    <br />
    <Button
      value="4"
      onClick={() => props.onCalculate("4")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="5"
      onClick={() => props.onCalculate("5")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="6"
      onClick={() => props.onCalculate("6")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="-"
      onClick={() => props.onCalculate(Command.Subtraction)}
      backgroundColor={ButtonBackgroundColor.Orange}
      isSelected={props.selectedCommand === Command.Subtraction}
    />
    <br />
    <Button
      value="1"
      onClick={() => props.onCalculate("1")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="2"
      onClick={() => props.onCalculate("2")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="3"
      onClick={() => props.onCalculate("3")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="+"
      onClick={() => props.onCalculate(Command.Addition)}
      backgroundColor={ButtonBackgroundColor.Orange}
      isSelected={props.selectedCommand === Command.Addition}
    />
    <br />
    <Button
      value="0"
      onClick={() => props.onCalculate("0")}
      backgroundColor={ButtonBackgroundColor.Gray}
      isLarge={true}
    />
    <Button
      value="."
      onClick={() => props.onCalculate(".")}
      backgroundColor={ButtonBackgroundColor.Gray}
    />
    <Button
      value="="
      onClick={() => props.onCalculate(Command.Equal)}
      backgroundColor={ButtonBackgroundColor.Orange}
    />
  </StyledDiv>
);
const StyledDiv = styled.div`
  height: 100vh;
  display: block;
`;
