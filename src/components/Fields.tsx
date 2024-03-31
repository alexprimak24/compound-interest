function Fields({
  text,
  vals,
  setInitialVals,
}: {
  text: string;
  vals: string;
  setInitialVals: (param: string, value: number) => void;
}) {
  return (
    <div className="appearance-none ml-[3px] man-w-[205px]">
      <p className="text-left uppercase text-xs">{text}</p>
      <input
        className=" flex self-left bg-transparent outline-none rounded-lg p-[10px] border-2 border-white  mt-[8px]"
        type="number"
        onChange={(e) => setInitialVals(vals, Number(e.target.value))}
      />
    </div>
  );
}

export default Fields;
