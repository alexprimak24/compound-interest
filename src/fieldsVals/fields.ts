interface Field {
  text: string;
  vals: string;
}

interface Fields {
  field: Field[];
}

const myField: Fields = {
  field: [
    { text: "Initial Investment", vals: "initialInvestment" },
    { text: "Annual Investment", vals: "annualInvestment" },
    { text: "Expected return", vals: "expectedReturn" },
    { text: "Duration", vals: "duration" },
  ],
};

export default myField;
