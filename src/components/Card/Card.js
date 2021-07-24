import React, { useContext, useState } from "react";
import {
  CardWrapper,
  StudentName,
  StudentInfo,
  InfoTitle,
  InfoValues,
  EditIcon,
  DeleteIcon,
  IconRow,
  ValuesWrapper,
} from "./CardStyles";
import {
  Button,
  FormRow,
  Input,
  Label,
  Form,
  InputError,
} from "../../lib/styles/generalStyles";
import { DataContext } from "../../context/DataContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import Popup from "../Popup/Popup";

const Card = ({ studentData, indexID }) => {
  const { data, setData } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);
  const formik = useFormik({
    initialValues: {
      id: Math.round(Math.random() * 1000),
      studentName: studentData.studentName,
      studentAge: studentData.studentAge,
      faculty: studentData.faculty,
      studyYear: studentData.studyYear,
    },

    validationSchema: Yup.object({
      studentName: Yup.string().required("Student name is required"),
      studentAge: Yup.string().required("Age is required"),
      faculty: Yup.string().required("Faculty is required"),
      studyYear: Yup.string().required("Study year is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      //Editing selected card
      //Joining values from submit to values from array

      const updatedValue = data.map((value, index) => {
        if (index === indexID) {
          value.studentName = values.studentName;
          value.studentAge = values.studentAge;
          value.faculty = values.faculty;
          value.studyYear = values.studyYear;
        }
        return data;
      });
      setData([...data], ...updatedValue);
      resetForm();
    },
  });

  const handleDelete = (index) => {
    const temp = [...data];
    temp.splice(index, 1);
    setData(temp);

    if (temp.length !== 0) {
      localStorage["data"] = JSON.stringify(data);
    } else if (temp.length === 0) {
      localStorage.clear();
    }
  };

  return (
    <>
      {isOpened && (
        <Popup
          close={setIsOpened}
          title={`Edit for ${studentData.studentName}`}
        >
          <Form onSubmit={formik.handleSubmit}>
            <FormRow>
              <Label htmlFor="studentName">Student Name</Label>
              <Input
                id="studentName"
                type="text"
                {...formik.getFieldProps("studentName")}
              />
              {formik.touched.studentName && formik.errors.studentName ? (
                <InputError>{formik.errors.studentName}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Label htmlFor="age">Student Age</Label>
              <Input
                id="age"
                type="text"
                value={studentData.studentAge}
                {...formik.getFieldProps("studentAge")}
              />
              {formik.touched.studentAge && formik.errors.studentAge ? (
                <InputError>{formik.errors.studentAge}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Label htmlFor="faculty">Faculty</Label>
              <Input
                id="faculty"
                type="text"
                value={studentData.faculty}
                {...formik.getFieldProps("faculty")}
              />
              {formik.touched.faculty && formik.errors.faculty ? (
                <InputError>{formik.errors.faculty}</InputError>
              ) : null}
            </FormRow>
            <FormRow>
              <Label htmlFor="studyYear">Year of study</Label>
              <Input
                id="studyYear"
                type="text"
                value={studentData.studyYear}
                {...formik.getFieldProps("studyYear")}
              />
              {formik.touched.studyYear && formik.errors.studyYear ? (
                <InputError>{formik.errors.studyYear}</InputError>
              ) : null}
            </FormRow>
            <FormRow noMarginBottom>
              <Button type="submit" sidePadding="16">
                Edit
              </Button>
            </FormRow>
          </Form>
        </Popup>
      )}
      <CardWrapper>
        <StudentName>{studentData.studentName}</StudentName>
        <StudentInfo>
          <ValuesWrapper>
            <InfoTitle>Age</InfoTitle>
            <InfoValues>{studentData.studentAge}</InfoValues>
          </ValuesWrapper>
          <ValuesWrapper>
            <InfoTitle>Faculty</InfoTitle>
            <InfoValues>{studentData.faculty}</InfoValues>
          </ValuesWrapper>
          <ValuesWrapper>
            <InfoTitle>Study year</InfoTitle>
            <InfoValues>{studentData.studyYear}</InfoValues>
          </ValuesWrapper>
        </StudentInfo>
        <IconRow>
          <EditIcon onClick={() => setIsOpened(true)} />

          <DeleteIcon onClick={() => handleDelete(indexID)} />
        </IconRow>
      </CardWrapper>
    </>
  );
};

export default Card;
