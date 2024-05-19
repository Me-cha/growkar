// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TableComponent from "./component/Table/table";
import LoginPage from "./pages/LoginPage/Login";
import data from "./Middleware/company.json";
// import { useEffect } from "react";
// import { getCompaniesAction } from "./redux/action/userControls";
import { extractFieldsAndData } from "./Middleware/TableSort";
import NumericalAnalysis from "./component/NumericalAnalysis/Number";
import MenuAppBar from "./component/AppBar/Appbar";

function App() {
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.userControls?.company);

  // useEffect(() => {
  //   dispatch(getCompaniesAction());
  // }, [dispatch]);

  // console.log("data", data);

  const processedData = data.map((item, index) => ({
    id: index,
    ...item,
  }));

  const { fields, data: tableData } = extractFieldsAndData(processedData);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      {/* <LoginPage /> */}
      <MenuAppBar />
      {/* <TableComponent fields={fields} data={tableData} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <NumericalAnalysis
          dataset={tableData}
          calculationType="totalEntries"
          header="Sales Performance"
        />
        <NumericalAnalysis
          dataset={tableData}
          calculationType="totalEntries"
          header="Return on Ad Spend (ROAS)"
        />
        <NumericalAnalysis
          dataset={tableData}
          calculationType="totalEntries"
          header="Cost per Acquisition (CPA)"
        />
      </div>
    </div>
  );
}

export default App;
