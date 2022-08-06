import { useForm } from "react-hook-form";
import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../layout/Heading";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "name must have 3 characters"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Please enter your phone number")
    .min(8, "your phone number must have 8 characters"),
  subject: yup.string().required().max(1, "pick one, please!"),
  message: yup
    .string()
    .required("Please enter a message")
    .min(10, "message must have 10 characters"),
});

export default function Contact() {
  const [isResolved, setIsResolved] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);

    setIsResolved(true);
  }

  console.log(errors);

  if (isResolved) {
    return (
      <Row className="text-light center">
        <h1 className="centerHeading">THANK YOU</h1>
        <Nav.Link as={Link} to="/" className="text-light ">
          <h3 className="centerHeading thankYou">Home</h3>
        </Nav.Link>
      </Row>
    );
  }

  return (
    <div>
      {" "}
      <Heading className="centerHeading" content="Pokemon Form" color="white" />
      <div className="container text-light">
        <div>
          <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input className="form-control" {...register("firstName")} />
            {errors.firstName && <span>{errors.firstName.message}</span>}
            <br />

            <label>Phone Number</label>
            <input className="form-control" {...register("phoneNumber")} />
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
            <br />

            <div className="form-group ">
              <label>Subject</label>
              <select className="form-control t" {...register("subject")}>
                <option value="none" selected disabled hidden>
                  Select an Option
                </option>
                <option value="0">Enquiry</option>
                <option value="1">Complaint</option>
                <option value="2">Compliment</option>
                <option value="3">General Message</option>
              </select>
              {errors.subject && <span>{errors.subject.message}</span>}
            </div>
            <br />
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="form-control"
                {...register("message")}
                rows="3"
              ></textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </div>
            <br />
            <button className="btn btn-success w-100">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
