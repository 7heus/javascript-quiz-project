class Quiz {
  // YOUR CODE HERE:
  //
  // 1. constructor (questions, timeLimit, timeRemaining)

  // 2. getQuestion()

  // 3. moveToNextQuestion()

  // 4. shuffleQuestions()

  // 5. checkAnswer(answer)

  // 6. hasEnded()
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  shuffleQuestions() {
    const questions = this.questions;
    for (let i = questions.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * questions.length);
      const temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
    return questions;
  }

  checkAnswer(answer) {
    if (answer == this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers += 1;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) return false;
    else if (this.currentQuestionIndex == this.questions.length) return true;
  }
}
