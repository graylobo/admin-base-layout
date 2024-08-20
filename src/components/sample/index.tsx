"use client";
import ReactQuerySample from "@/components/sample/react-query";
import ZustandSample from "@/components/sample/zustand";
import styles from "./index.module.css";
function Sample() {
  return (
    <div>
      <h1 className={styles.sample}>This is Sample Component...</h1>
      <ReactQuerySample />
      <ZustandSample />
    </div>
  );
}

export default Sample;
