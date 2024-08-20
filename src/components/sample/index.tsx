"use client";
import { useGetTodo, useGetTodos, usePostTodo, usePutTodo } from "@/hooks/api";
import { useSample } from "@/store/sample";
import styles from "./index.module.css";
import { Button, Input } from "@mui/material";
import { useState } from "react";
import { object } from "zod";
function Sample() {
    const { data: todo, isLoading, isError } = useGetTodo(1);
    const { data: todos } = useGetTodos();
    const { mutate: postMutate, data: postData } = usePostTodo();
    const { mutate: putMutate, data: putTodo } = usePutTodo();
    const [age, setAge] = useState("");
    const [name, setName] = useState("");
    const [elem, setElem] = useState("");
    const { sample1, sample2, sample3, addSample1, addSample2, addSample3 } =
        useSample();

    const handlePostTodo = () => {
        postMutate({ userId: 1, title: "test", completed: false });
    };
    const handlePutTodo = () => {
        putMutate({
            userId: 11,
            data: { title: "test", completed: false },
        });
    };

    const handleAge = (e: any) => {
        setAge(e.target.value);
    };
    const handleName = (e: any) => {
        setName(e.target.value);
    };

    const handleElement = (e: any) => {
        setElem(e.target.value);
    };
    console.log("todo:::", todo);
    console.log("todos:::", todos);
    console.log("postData:::", postData);
    console.log("putTodo:::", putTodo);
    return (
        <div>
            <h1 className={styles.sample}>This is Sample Component...</h1>
            <section className="flex gap-10">
                <Button variant="contained" onClick={handlePostTodo}>
                    Post
                </Button>
                <Button variant="outlined" onClick={handlePutTodo}>
                    Put
                </Button>
            </section>
            <section>
                <div className="flex flex-col mb-10">
                    <span>Sample1:{sample1}</span>
                    <Button
                        variant="outlined"
                        className="self-start"
                        onClick={() => {
                            addSample1("go1");
                        }}
                    >
                        Add Sample1
                    </Button>
                </div>
                <div className="flex flex-col mb-10">
                    <Input placeholder="age" onChange={handleAge} />
                    <Input placeholder="name" onChange={handleName} />
                    {Object.entries(sample2).map(([key, value]) => (
                        <span key={key}>
                            {key}:{value}
                        </span>
                    ))}
                    <Button
                        variant="outlined"
                        className="self-start"
                        onClick={() => {
                            addSample2({ age, name });
                        }}
                    >
                        Add Sample1
                    </Button>
                </div>
                <div className="flex flex-col mb-10">
                    <Input placeholder="element" onChange={handleElement} />
                    elements:
                    {sample3.map((elem, index) => (
                        <span key={index}>{elem}</span>
                    ))}
                    <Button
                        variant="outlined"
                        className="self-start"
                        onClick={() => {
                            addSample3(elem);
                        }}
                    >
                        Add Sample1
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Sample;
