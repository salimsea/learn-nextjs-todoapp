import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { getDataTodo, postUpdateDataTodo } from "redux/action/globalAction";
import { setFormTodo } from "redux/slice/globalSlice";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { dataTodos, dataTodo, formTodo } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFormTodo({ name: "id", value: dataTodo.items.id }));
    dispatch(setFormTodo({ name: "title", value: dataTodo.items.title }));
    dispatch(
      setFormTodo({ name: "completed", value: dataTodo.items.completed })
    );
  }, [dataTodo]);

  const btnUpdate = () => {
    console.log("formTodo : ", formTodo);
    dispatch(postUpdateDataTodo(formTodo, router, dataTodos));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="col-md-12">
          {!dataTodo.isLoad && (
            <Form>
              <FormGroup>
                <Label for="forId">Id</Label>
                <Input type="number" name="id" value={id} id="forId" disabled />
              </FormGroup>
              <FormGroup>
                <Label for="forTitle">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="forTitle"
                  placeholder="title placeholder"
                  defaultValue={dataTodo.items.title}
                  onChange={(e) =>
                    dispatch(
                      setFormTodo({ name: "title", value: e.target.value })
                    )
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
                      defaultChecked={dataTodo.items.completed === true}
                      onChange={(e) =>
                        dispatch(
                          setFormTodo({ name: "completed", value: true })
                        )
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
                      defaultChecked={dataTodo.items.completed === false}
                      onChange={(e) =>
                        dispatch(
                          setFormTodo({ name: "completed", value: false })
                        )
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
                onClick={() => btnUpdate()}
              >
                Submit
              </button>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
