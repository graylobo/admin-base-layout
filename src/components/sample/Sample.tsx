"use client";
import ReactQuerySample from "@/components/sample/ReactQuerySample";
import styles from "./index.module.css";
import ZustandSample from "@/components/sample/ZustandSample";
import ModalSample from "@/components/sample/ModalSample";
import AgGridSample from "@/components/sample/AgGridSample";

function Sample() {
  return (
    <div>
      <h1 className={styles.sample}>This is Sample Component...</h1>
      <ReactQuerySample />
      <ZustandSample />
      <AgGridSample />
      <ModalSample />
    </div>
  );
}

export default Sample;
