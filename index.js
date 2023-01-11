function selectAnswers() {
  const showAnswers = document.querySelectorAll(
    "flex justify-center mt-8 lg:justify-end"
  );

  for (let aws of showAnswers) {
    aws.click();
  }

  const answers = document.querySelectorAll(
    "flex items-center justify-between pr-5 py-3 rounded-size-24 pl-8 cursor-pointer mb-1 bg-success-05"
  );

  for (let aws in answers) {
    aws.click();
  }
}
