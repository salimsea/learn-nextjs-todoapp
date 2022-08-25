import { Layout } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { postAddDataTodo } from "redux/action/globalAction";
import { setFormTodo } from "redux/slice/globalSlice";

const New = () => {
  const router = useRouter();
  const { dataTodos, formTodo } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const btnAdd = () => {
    dispatch(postAddDataTodo(formTodo, router, dataTodos));
  };

  return (
    <Layout pageTitle="Add New">
      <div className="col-md-12">
        <Form>
          <FormGroup>
            <Label for="forTitle">Title</Label>
            <Input
              type="text"
              name="title"
              id="forTitle"
              placeholder="title placeholder"
              onChange={(e) =>
                dispatch(setFormTodo({ name: "title", value: e.target.value }))
              }
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Completed</legend>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onChange={(e) =>
                    dispatch(setFormTodo({ name: "completed", value: true }))
                  }
                />{" "}
                <span className="badge bg-success">true</span>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  name="radio1"
                  onChange={(e) =>
                    dispatch(setFormTodo({ name: "completed", value: false }))
                  }
                />{" "}
                <span className="badge bg-warning">false</span>
              </Label>
            </FormGroup>
          </FormGroup>

          <Link href={"/todo"}>
            <button className="btn btn-dark me-2">Back</button>
          </Link>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => btnAdd()}
          >
            Submit
          </button>
        </Form>
      </div>
    </Layout>
  );
};

export default New;
