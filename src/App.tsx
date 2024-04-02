import { useEffect, useState } from "react";
import "./App.css";
import SetParams from "./components/SetParams";
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
  console.log(investmentVals);
  console.log(...output.map((val) => val));

  return (
    <div className="flex flex-col  text-center justify-center pt-[20px]">
      <SetParams setInitialVals={setInitialVals} />
      <div className="text-white flex justify-around mt-5 items-center w-[700px]  h-[40px] self-center rounded-lg bg-[#29cc68] space-x">
        <p>Year</p>
        <p>Expected return</p>
        <p>Annual Investment</p>
        <p>Initial Investment</p>
      </div>
      {output.map((val) => (
        <Results
          key={val.year}
          year={val.year}
          valueEndOfYear={val.valueEndOfYear}
          interest={val.interest}
          annualInvestment={val.annualInvestment}
        />
      ))}
    </div>
  );
}

export default App;
