import React from "react";
interface Value {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
interface GetResultProps {
  values: Value[]; // Define the type of the prop as an array of Value objects
}
function GetResult({ value }: {value:<GetResultProps[]> }) {
  return (
    <div className="flex gap-[30px] justify-center mt-[50px] text-white">
      <p>Year</p>
      <p>Investment Value</p>
      <p>Interest(Year)</p>
      <p>Total Interest</p>
      <p>Invested Capital</p>
      {value.map(())}
    </div>
  );
}

export default GetResult;
