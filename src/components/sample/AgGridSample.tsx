import React, { useState, useCallback, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from "@mui/material";

const MyCellComponent = (props: any) => {
  return (
    <>
      <Button onClick={() => window.alert(`${props.value}`)}>+</Button>
      {props.value}
    </>
  );
};

function AgGridSample() {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 },
  ]);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Make",
      field: "make",
      cellRenderer: MyCellComponent,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: { values: ["Toyota", "Ford", "Porsche"] },
    },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
  ]);

  const onCellValueChanged = useCallback((event: any) => {
    console.log("Cell value changed:", event.data);
  }, []);

  const onCellClicked = useCallback((event: any) => {
    console.log("Cell clicked:", event.value);
  }, []);

  const getAllCellValues = () => {
    const allData: any[] = [];
    gridRef.current?.api.forEachNode((node) => {
      if (node.data) {
        allData.push(node.data);
      }
    });
    console.log("All cell values:", allData);
  };

  const getColumnCellValues = (columnName: string) => {
    const columnValues = gridRef.current?.api
      .getRenderedNodes()
      .map((node) => node.data[columnName]);
    console.log(`${columnName} column values:`, columnValues);
  };

  const getSpecificCellValue = (columnName: string, rowIndex: number) => {
    const node = gridRef.current?.api.getModel().getRow(rowIndex);
    if (node) {
      const cellValue = node.data[columnName];
      console.log(
        `Value at row ${rowIndex + 1}, column ${columnName}:`,
        cellValue
      );
    } else {
      console.log(`Row ${rowIndex} not found`);
    }
  };

  return (
    <section className="ag-theme-quartz mt-10 border border-black-100 p-5 flex flex-col h-[500px]">
      <h2 className="font-bold mb-5">AG Grid Sample Section</h2>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs as any}
        defaultColDef={{
          flex: 1,
          filter: true,
          editable: true,
        }}
        onCellValueChanged={onCellValueChanged}
        onCellClicked={onCellClicked}
      />
      <div className="mt-4">
        <Button variant="outlined" onClick={getAllCellValues}>
          Get All Cell Values
        </Button>
        <Button variant="outlined" onClick={() => getColumnCellValues("price")}>
          Get price Column Values
        </Button>
        <Button
          variant="outlined"
          onClick={() => getSpecificCellValue("model", 1)}
        >
          Get model Value of Row 2
        </Button>
      </div>
    </section>
  );
}

export default AgGridSample;
