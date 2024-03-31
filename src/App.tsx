import { useEffect, useState } from "react";
import "./App.css";
import SetParams from "./components/SetParams";
import GetResult from "./components/GetResult";
import { calculateInvestmentResults } from "./fieldsVals/investment";
import Results from "./components/Results";
interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}

function App() {
  const [investmentVals, setInvestmentVals] = useState({
    initialInvestment: 1,
    annualInvestment: 1,
    expectedReturn: 1,
    duration: 1,
  });
  const [output, setOutput] = useState<InvestmentResult[]>([]);
  function setInitialVals(param: string, value: number) {
    const updatedVals = {
      ...investmentVals,
      [param]: value,
    };
    setInvestmentVals(updatedVals);
  }

  useEffect(() => {
    setOutput(calculateInvestmentResults(investmentVals));
  }, [investmentVals]);
  console.log(...output.map((val) => val));

  return (
    <div className="flex flex-col bg-gray-800 w-[100vw] h-[100vh] text-center justify-center pt-[20px]">
      <SetParams setInitialVals={setInitialVals} />
      {/* {...output.map((val) => {
        <Results year={ val.year} , valueEndOfYear={ val.valueEndOfYear} , interest={ val.interest} , year={ val.year} , annualInvestment={val.annualInvestment} />
      })} */}
    </div>
  );
}

export default App;
