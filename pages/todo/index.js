import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDataTodo,
  getDataTodos,
  postDeleteDataTodo,
} from "redux/action/globalAction";

const Todo = () => {
  const router = useRouter();
  const { dataTodos } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataTodos(dataTodos));
  }, [dispatch]);

  const btnAdd = () => {
    router.push("/todo/new");
  };
  const btnUpdate = (id) => {
    router.push(`/todo/${id}`);
    dispatch(getDataTodo(id, dataTodos));
  };
  const btnDelete = (id) => {
    dispatch(postDeleteDataTodo(id, dataTodos));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-success btn-sm" onClick={btnAdd}>
            Add Todo
          </button>
          <table class="table mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {!dataTodos.isLoad &&
                dataTodos.items.map((item, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>
                        <span
                          className={`badge ${
                            item.completed ? "bg-success" : "bg-warning"
                          }`}
                        >
                          {`${item.completed}`}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => btnUpdate(item.id)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => btnDelete(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todo;
