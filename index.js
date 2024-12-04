function greet(names) {
  if (!names) {
    console.log(`Hi there!`);
  } else console.log(`Hello ${names}!`);
}

greet("Ralp");
greet("Roche");
greet("Simon");
greet();
greet();

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  if (unit === "C") {
    const result = convertToFahrenheit(degrees);
    return `${result}F`;
  } else if (unit === "F") {
    const result = convertToCelsius(degrees);
    return `${result}C`;
  }
}

console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));

function convertLength(length, from, to) {
  if (from === "miles") {
    if (to === "km") {
      const result = length * 1.6;
      return `${result} km`;
    } else if (to === "ft") {
      const result = length * 5280;
      return `${result} ft`;
    } else if (to === "miles") {
      return `${length} ${to}`;
    }
  } else if (from === "km") {
    if (to === "miles") {
      const result = length / 1.6;
      return `${result} miles`;
    } else if (to === "ft") {
      const result = length * 3281;
      return `${result} ft`;
    } else if (to === "km") {
      return `${length} ${to}`;
    }
  } else if (from === "ft") {
    if (from === "miles") {
      const result = length / 5280;
      return `${result} ft`;
    } else if (from === "km") {
      const result = length / 3281;
      return `${result} ft`;
    } else if (to === "ft") {
      return `${length} ${to}`;
    }
    //   } else if (from === to) {
    //     const result = length;
    //     const result1 = to;
    //     return `${result} ${result1}`;
  } else return `Invalid unit: ${to}`;
}

console.log(convertLength(50, "miles", "km"));
console.log(convertLength(32, "km", "miles"));
console.log(convertLength(50, "km", "km"));

console.log(convertLength(5, "miles", "km"));
console.log(convertLength(5, "miles", "ft"));
console.log(convertLength(5, "km", "ft"));

console.log(convertLength(5, "lbs", "lbs"));

// CALCULATOR

let calculation = "";

function number(number) {
  calculation += number;
  console.log(calculation);
}

function result(result) {
  return (calculation = eval(calculation));
}
