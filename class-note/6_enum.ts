enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키'

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}
function askQuestion(answer: Answer) {
  if (answer === "Y") {
    console.log("정답입니다");
  }
  if (answer === "N") {
    console.log("오답입니다");
  }
}
askQuestion(Answer.Yes);
