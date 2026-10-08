const answers = {
  q1: "a",
  q2: "a",
  q3: "b",
  q4: "b"
};

const form = document.getElementById("quiz");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;

  Object.entries(answers).forEach(([question, correct]) => {
    const selected = form.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === correct) score++;
  });

  result.hidden = false;
  result.className = "result " + (score >= 3 ? "success" : "fail");

  if (score >= 3) {
    result.innerHTML =
      "Как здорово что ты так хорошо знаешь свою любимую жену!! 💚<br><br>" +
      "С днем рождения красавчик, подарок спрятан в зеленом рюкзаке 🎁";
  } else {
    result.innerHTML =
      "Малыш, придется тебе попотеть чтобы получить подарок. 😏<br><br>" +
      "Спой серенаду своей жене и она отдаст тебе подарок! 🎤❤️";
  }

  result.scrollIntoView({ behavior: "smooth", block: "center" });
});
