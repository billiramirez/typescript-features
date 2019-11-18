interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  }
};

const beberage = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My beberage has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(beberage);
