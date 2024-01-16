import React, { useEffect, useState } from "react";
import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function AddPages() {
    const navigate = useNavigate()
  const [table, setTable] = useState([]);
  function handleAdd(val) {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify(val),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/")
  }

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }

  function Delete(id) {
    fetch("http://localhost:3000/" + id, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }
  return (
    <div className="addPages">
        <Helmet>
        <title>Add Pages</title>
      </Helmet>
      <Formik
        initialValues={{ icon: "", name: "", description: "" }}
        validationSchema={Yup.object({
          icon: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleAdd(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="icon"> Icon</label>
          <Field name="icon" type="text" />
          <div style={{ color: "red" }}>
            {" "}
            <ErrorMessage name="icon" />
          </div>

          <label htmlFor="name"> Name</label>
          <Field name="name" type="text" />
          <div style={{ color: "red" }}>
            {" "}
            <ErrorMessage name="name" />
          </div>

          <label htmlFor="description">Description</label>
          <Field name="description" type="text" />
          <div style={{ color: "red" }}>
            {" "}
            <ErrorMessage name="desc" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {table.map((x) => (
        <table>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Delete</th>
          </tr>
          <tr>
            <td className={`${x.icon} icon`}></td>
            <td>{x.name}</td>
            <td>{x.description}</td>
            <td>
              <i onClick={()=>Delete(x._id)} className="fa-solid fa-trash"></i>
            </td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default AddPages;
