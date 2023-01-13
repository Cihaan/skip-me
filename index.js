const exerciceType = document.getElementsByClassName(
  "font-bold text-size-20 capitalize lg:w-50 lg:truncate"
)[0]?.innerText;

let progressBar = document.getElementsByClassName(
  "h-2 bg-primary-80 rounded transition-all duration-150"
);

async function showAnswers() {
  if (exerciceType == "Listening" || exerciceType == "Reading") {
    const showAnswers = document.querySelectorAll(".leading-none");

    for (let aws of showAnswers) {
      if (aws.innerText == "Voir la correction") {
        aws.click();
      }
    }
  } else {
    const showAnswers = document.getElementsByClassName(
      "button-outline-default-large hidden min-w-48 mr-6 lg:flex lg:items-center"
    )[0];

    showAnswers.click();
  }
}

async function selectAnswers() {
  if (exerciceType == "Listening" || "Reading") {
    const answers = document.getElementsByClassName(
      "flex items-center justify-between pr-5 py-3 rounded-size-24 pl-8 cursor-pointer mb-1 bg-success-05"
    );

    for (let aws of answers) {
      aws.click();
    }
  } else {
    const answer = document.getElementsByClassName(
      "flex items-center justify-between pr-5 py-3 rounded-size-24 pl-4 cursor-pointer mb-1 bg-success-05"
    );

    answer[answer.length - 1].click();
  }
}

async function validate() {
  if (exerciceType == "Listening" || "Reading") {
    const submit = document.getElementsByClassName(
      "min-w-48 button-solid-primary-large"
    )[0];

    submit.click();
  } else {
    const submit = document.getElementsByClassName(
      "min-w-48 button-solid-primary-large"
    )[0];

    submit.click();
  }
}

async function goNextQuestion() {
  const nextButton = document.getElementsByClassName(
    "min-w-48 button-solid-primary-large"
  )[0];

  nextButton.click();
}

async function submit() {
  showAnswers().then(() => {
    selectAnswers().then(() => {
      if (exerciceType == "Listening" || "Reading") {
        validate()
          .then(() => {
            goNextExercise();
          })
          .catch(() => {
            goNextExercise();
          });
      } else {
        goNextQuestion();
      }
    });
  });
}

function goNextExercise() {
  const nextButton = document.getElementsByClassName(
    "button-solid-primary-medium"
  )[0];

  nextButton.click();
}

function skip() {
  const iteration = document
    .getElementsByClassName(
      "text-size-12 text-primary-80 leading-tight rounded lg:bg-primary-50 lg:px-2 lg:py-1 lg:mt-2 lg:absolute lg:progress-bar-arrow-top lg:text-white lg:transition-all lg:duration-150 lg:transform lg:-translate-x-1/2"
    )[0]
    ?.innerText.split("/");

  if (iteration) {
    const count = parseInt(iteration[1]) - parseInt(iteration[0]);
    console.log({ count, exerciceType });

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        submit();
      }, i * 1000);
    }
  } else {
    goNextExercise();
  }
}

skip();
