import React from "react";

function Results({
  year,
  valueEndOfYear,
  interest,
  annualInvestment,
}: {
  year: number;
  valueEndOfYear: number;
  interest: number;
  annualInvestment: number;
}) {
  return (
    <div className="">
      <p>{year}</p>
      <p>{valueEndOfYear}</p>
      <p>{interest}</p>
      <p>{annualInvestment}</p>
      <p>Invested Capital</p>
    </div>
  );
}

export default Results;
