import { JSONDummyTodos } from "assets";
const { setDataTodos, setDataTodo } = require("redux/slice/globalSlice");

export const getDataTodos = (dataTodos) => {
  return (dispatch) => {
    dispatch(
      setDataTodos({
        items: dataTodos.items.length === 0 ? JSONDummyTodos : dataTodos.items,
      })
    );
  };
};

export const getDataTodo = (id, dataTodos) => {
  return (dispatch) => {
    let data = dataTodos.items.length === 0 ? JSONDummyTodos : dataTodos.items;
    data.map((item) => {
      if (item.id == id) {
        dispatch(
          setDataTodo({
            items: item,
          })
        );
      }
    });
  };
};

export const postUpdateDataTodo = (data, router, dataTodos) => {
  return (dispatch) => {
    let ret = dataTodos.items.length === 0 ? JSONDummyTodos : dataTodos.items;
    let newArr = ret.map((item, i) => {
      if (data.id == item.id) {
        const { title, completed } = data;
        return { ...item, title, completed };
      } else {
        return { ...item };
      }
    });
    dispatch(
      setDataTodos({
        items: newArr,
      })
    );
    router.push("/todo");
  };
};

export const postDeleteDataTodo = (id, dataTodos) => {
  return (dispatch) => {
    let ret = dataTodos.items.length === 0 ? JSONDummyTodos : dataTodos.items;
    dispatch(
      setDataTodos({
        items: ret.filter((item) => item.id !== id),
      })
    );
  };
};

export const postAddDataTodo = (data, router, dataTodos) => {
  return (dispatch) => {
    let ret = dataTodos.items.length === 0 ? JSONDummyTodos : dataTodos.items;
    const json = {
      id: ret.length + 1,
      title: data.title,
      completed: data.completed,
    };
    dispatch(
      setDataTodos({
        items: [...ret, json],
      })
    );
    router.push("/todo");
  };
};
