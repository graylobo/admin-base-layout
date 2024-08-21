import { useGetTodo, useGetTodos, usePostTodo, usePutTodo } from "@/hooks/api";
import { Button } from "@mui/material";
import React from "react";

function ReactQuerySample() {
  const { data: todo, isLoading, isError } = useGetTodo(1);
  const { data: todos } = useGetTodos();
  const { mutate: postMutate, data: postData } = usePostTodo();
  const { mutate: putMutate, data: putTodo } = usePutTodo();
  const handlePostTodo = () => {
    postMutate({ userId: 1, title: "test", completed: false });
  };
  const handlePutTodo = () => {
    putMutate({
      userId: 11,
      data: { title: "test", completed: false },
    });
  };
  console.log("get todo:::", todo);
  console.log("get todos:::", todos);
  console.log("post data:::", postData);
  console.log("put todo:::", putTodo);
  return (
    <section className="mt-10 border border-black-100 p-5">
      <h2 className="font-bold mb-5">React Query Sample Section</h2>
      <div>
        <Button variant="contained" onClick={handlePostTodo}>
          Post
        </Button>
        <Button variant="outlined" onClick={handlePutTodo}>
          Put
        </Button>
      </div>
    </section>
  );
}

export default ReactQuerySample;
