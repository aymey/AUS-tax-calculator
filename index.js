let gross = 12122;
let deduction = 0;
let result = 0;
let taxDed = gross - deduction;
const taxtable = function () {
  if (taxDed > 0 && taxDed < 18200) {
    result = 0;
    return result;
  } else if (taxDed > 18200 && taxDed < 37000) {
    result = texDed + 18200 * 0.19;
    return result;
  } else if (taxDed > 37001 && taxDed < 90000) {
    result = texded + 37000 * 0.325;
    return result;
  } else if (taxDed > 90001 && taxDed < 180000) {
    result = taxDed + 90000 * 0.37;
    return result;
  } else if (taxDed > 180001) {
    result = taxDed + 180000 * 0.45;
    return result;
  }
};

return;
