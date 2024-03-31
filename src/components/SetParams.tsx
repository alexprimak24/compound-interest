import Fields from "./Fields";
import fieldVals from "../fieldsVals/fields";
function SetParams({
  setInitialVals,
}: {
  setInitialVals: (param: string, value: number) => void;
}) {
  return (
    <div className="text-white">
      <h1>Investment Calculator</h1>
      <div className="m-auto  rounded-lg max-w-[700px]  bg-[#44825F] mt-[50px] grid grid-cols-1 grid-rows-2 md:grid-cols-2 gap-[60px] p-[50px]">
        {fieldVals.field.map((val) => (
          <Fields
            text={val.text}
            key={val.text}
            setInitialVals={setInitialVals}
            vals={val.vals}
          />
        ))}
      </div>
    </div>
  );
}

export default SetParams;
