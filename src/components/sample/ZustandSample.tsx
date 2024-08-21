import { useSample } from "@/store/sample";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";

function ZustandSample() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [elem, setElem] = useState("");
  const { sample1, sample2, sample3, addSample1, addSample2, addSample3 } =
    useSample();

  const handleAge = (e: any) => {
    setAge(e.target.value);
  };
  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleElement = (e: any) => {
    setElem(e.target.value);
  };
  return (
    <section className="mt-10 border border-black-100 p-5">
      <h2 className="font-bold mb-5">Zustand Sample Section</h2>
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
        <Input placeholder="element" onChange={handleElement} value={elem} />
        elements:
        {sample3.map((elem, index) => (
          <span key={index}>{elem}</span>
        ))}
        <Button
          variant="outlined"
          className="self-start"
          onClick={() => {
            addSample3(elem);
            setElem("");
          }}
        >
          Add Sample1
        </Button>
      </div>
    </section>
  );
}

export default ZustandSample;
