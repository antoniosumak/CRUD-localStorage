import styled from "styled-components";
import { boxShadow, breakpoints, colors } from "../../lib/styles/theme";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const CardWrapper = styled.div`
  padding: 20px;
  box-shadow: ${boxShadow};
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: ${colors.blue};
    top: 0;
    left: 0;
    transition: ease-in-out 0.3s;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 3px;
    background-color: ${colors.blue};
    bottom: 0;
    right: 0;
    transition: ease-in-out 0.3s;
  }

  &:hover {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${colors.blue};
      top: 0;
      left: 0;
      transition: ease-in-out 0.3s;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${colors.blue};
      bottom: 0;
      right: 0;
      transition: ease-in-out 0.3s;
    }
  }
`;

export const StudentName = styled.h3`
  margin-bottom: 24px;
`;

export const StudentInfo = styled.div`
  display: flex;
  margin: 16px 0px;
  align-items: center;
  justify-content: space-between;
`;

export const InfoTitle = styled.h3`
  padding-bottom: 16px;
`;

export const InfoValues = styled.p``;

export const EditIcon = styled(FaEdit)`
  font-size: 24px;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.green};
  }
`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 24px;
  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    color: ${colors.red};
  }
`;

export const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0px;
`;

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
