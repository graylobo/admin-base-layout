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
  console.log("todo:::", todo);
  console.log("todos:::", todos);
  console.log("postData:::", postData);
  console.log("putTodo:::", putTodo);
  return (
    <section className="mt-10 border border-black-100 p-5">
      <h1 className="font-bold mb-5">React Query Sample Section</h1>
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
