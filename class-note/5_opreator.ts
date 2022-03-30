var wonse: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString;
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Man {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Man) {
//   someone.name; // 공통된 속성만 사용가능
// }

function askSomeone(someone: Developer & Man) {
  someone.name;
  someone.age;
  someone.skill;
}

// var wonse: string | number | boolean;
