import { formatter } from "../fieldsVals/investment";
interface ResultTypes {
  year: number;
  valueEndOfYear: number;
  interest: number;
  annualInvestment: number;
}
function Results({
  year,
  valueEndOfYear,
  interest,
  annualInvestment,
}: ResultTypes) {
  return (
    <div className="text-white flex  justify-around mt-10 items-center w-[700px]  h-[50px] self-center rounded-lg bg-[#2a6e44] space-x">
      <p>{Math.round(year)}</p>
      <p>{formatter.format(valueEndOfYear)}</p>
      <p>{formatter.format(interest)}</p>
      <p>{formatter.format(annualInvestment)}</p>
    </div>
  );
}

export default Results;
