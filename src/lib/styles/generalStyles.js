import styled from "styled-components";
import { breakpoints, colors } from "./theme";

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 1px solid black;
  outline: none;

  &:focus {
    border: 1px solid black;
  }
`;

export const Label = styled.label`
  padding-bottom: 8px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px auto;
  ${(props) => props.noMarginBottom && "margin-bottom: 0px;"}
  @media screen and (${breakpoints.tablet}) {
    width: 90%;
  }
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  padding: 12px 0px;
  color: ${colors.white};
  border: 1px solid ${colors.blue};
  transition: 0.3s ease-in-out;
  margin: 16px 0px;
  ${(p) => p.sidePadding && `padding: 12px ${p.sidePadding}px;`}
  &:hover {
    cursor: pointer;
    background-color: ${colors.white};
    color: ${colors.blue};
    border: 1px solid ${colors.blue};
  }
`;

export const Center = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputError = styled.p`
  padding: 4px 0px;
  color: ${colors.red};
`;

export const ErrorMessage = styled.p`
  padding: 8px 0px;
  color: ${colors.red};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
