const add = (num1, num2) => {
  if (typeof num1 === "string" && typeof num2 === "string")
    return Number(num1) + Number(num2);

  if (typeof num1 === "number" && typeof num2 === "number")
    return String(num1) + String(num2);

  return null;
};

module.exports = add;
