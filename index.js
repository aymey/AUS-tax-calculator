const readline = require("readline");
let result = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const taxtable21 = function (gross, deduction) {
  const taxDed = gross - deduction;

  if (taxDed > 0 && taxDed < 18201) {
    console.log("Bracket: $0 – $18,200");
    console.log(gross + " - " + deduction + " = " + taxDed);
    console.log("$0");
  } else if (taxDed > 18201 && taxDed < 45000) {
    console.log("Bracket: $18,201 – $45,000");
    let result = 0.19 * (taxDed - 18200);
    console.log("$0.19 x (" + taxDed + " - $18,200) =");
    console.log(result);

    return result;
  } else if (taxDed > 45001 && taxDed < 120000) {
    console.log("Bracket: $45,001 – $120,000");
    let result = 5092 + 0.325 * (taxDed - 45000);
    console.log("$5,092 + $0.325 x (" + taxDed + " - $45,000) =");
    console.log(result);

    return result;
  } else if (taxDed > 120001 && taxDed < 180000) {
    console.log("Bracket: $120,001 – $180,000");
    let result = 29467 + 0.37 * (taxDed - 120000);
    console.log("$29,467 + $0.37 x (" + taxDed + " - $120,000) =");
    console.log(result);

    return result;
  } else if (taxDed > 180001) {
    console.log("Bracket: > $180,001");
    let result = 51667 + 0.45 * (taxDed - 180000);
    console.log("$51,667 + $0.45 x (" + taxDed + " - $180,000) = ");
    console.log(result);
  }
};

const taxtable19 = function (gross, deduction) {
  const taxDed = gross - deduction;

  if (taxDed > 0 && taxDed < 18201) {
    console.log("Bracket: $0 – $18,200");
    console.log("$0");

    return result;
  } else if (taxDed > 18201 && taxDed < 37000) {
    console.log("Bracket: $18,201 – $37,000");

    return result;
  } else if (taxDed > 37001 && taxDed < 90000) {
    console.log("Bracket: $37,001 – $90,000");

    return result;
  } else if (taxDed > 90001 && taxDed < 180000) {
    console.log("Bracket: $90,001 – $180,000");

    return result;
  } else if (taxDed > 180001) {
    console.log("Bracket: > $180,001");
    return result;
  }
};

rl.question("2021 or 2019 table? (21 / 19 / help / repo) ", (answer) => {
  if ((answer = "21")) {
    table21();
  } else if ((answer = "19")) {
    table19();
  } else if ((answer = "help")) {
    rl.close();
    console.log(
      "type 21 for the 2020 - 2021 tax table (AUS), type 19 for the 2019 tax table (AUS) or type repo for a link to the gihub repository"
    );
  } else if ((answer = "repo")) {
    rl.close();
    console.log(
      "github repository: https://github.com/FabianPaci/AUS-tax-calculator"
    );
  } else {
    rl.close();
    console.log("unknown command please try help for more information");
  }
});

const table21 = function () {
  rl.on("line", (gross) => {
    rl.on("line", (deduction) => {
      console.log(taxtable21(gross, deduction));
      rl.close();
    });
  });
};

const table19 = function () {
  rl.on("line", (gross) => {
    rl.on("line", (deduction) => {
      console.log(taxtable19(gross, deduction));
      rl.close();
    });
  });
};
