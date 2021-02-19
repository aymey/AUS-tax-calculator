let result = 0;

const taxtable21 = function (gross, deduction) {
  const taxDed = gross - deduction;

  if (taxDed > 0 && taxDed < 18201) {
    console.log("Bracket: $0 – $18,200");
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

// taxtable21(0, 0);
// taxtable19(0, 0);
