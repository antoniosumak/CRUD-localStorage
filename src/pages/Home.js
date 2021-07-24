import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Section from "../components/Section/Section";
import {
  Button,
  FormRow,
  Grid,
  Input,
  Label,
  InputError,
} from "../lib/styles/generalStyles";
import Card from "../components/Card/Card";
import Popup from "../components/Popup/Popup";
import { Form } from "../lib/styles/generalStyles";
import { DataContext } from "../context/DataContext";
import Header from "../components/Header/Header";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      id: Math.round(Math.random() * 1000),
      studentName: "",
      studentAge: "",
      faculty: "",
      studyYear: "",
    },

    validationSchema: Yup.object({
      studentName: Yup.string().required("Student name is required"),
      studentAge: Yup.string().required("Age is required"),
      faculty: Yup.string().required("Faculty is required"),
      studyYear: Yup.string().required("Study year is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      setData([...data, values]);
      resetForm();
    },
  });
  const { data, setData } = useContext(DataContext);
  const [isOpened, setIsOpened] = useState(false);

  //Setting data into local storage
  if (data && data.length > 0) {
    localStorage["data"] = JSON.stringify(data);
  }

  //Setting data from localStorage on app load
  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      const localData = JSON.parse(localStorage["data"]);
      setData(localData);
    }
  }, []);

  return (
    <>
      <Header />
      <Section>
        {isOpened && (
          <Popup close={setIsOpened} title={"Add new item"}>
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
                  {...formik.getFieldProps("studyYear")}
                />
                {formik.touched.studyYear && formik.errors.studyYear ? (
                  <InputError>{formik.errors.studyYear}</InputError>
                ) : null}
              </FormRow>
              <FormRow noMarginBottom>
                <Button type="submit" sidePadding="16">
                  Add item
                </Button>
              </FormRow>
            </Form>
          </Popup>
        )}
        <Button
          sidePadding="16"
          onClick={() => {
            setIsOpened(true);
          }}
        >
          Add new Item
        </Button>
        <Grid>
          {data &&
            data.map((value, index) => (
              <Card key={index} studentData={value} indexID={index} />
            ))}
        </Grid>
      </Section>
    </>
  );
};

export default Home;
