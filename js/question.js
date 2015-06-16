/*******************************************************************
*   File         : question.js                                     *
*   Author(s)    : Ethan Walker                                    *
*   Project      : Quiz App                                        *
*   Creation Date: 06/14/2015                                      *
*   Last Modified: 06/16/2015                                      *
*   Purpose      : JS file for question object.                    *
*******************************************************************/

/*Question Object*/ 
function Question(question, answer0, answer1, answer2, answer3, correctAnswer) {
    this.question = question;
    this.correct = false;
    this.correctAnswer = correctAnswer; 
    var answers = [];

    answers.push({
      key: "answer0",
      value: answer0,
      isAnswer: correctAnswer == 0
    });
    answers.push({
      key: "answer1",
      value: answer1,
      isAnswer: correctAnswer == 1
    });
    answers.push({
      key: "answer2",
      value: answer2,
      isAnswer: correctAnswer == 2
    });
    answers.push({
      key: "answer3",
      value: answer3,
      isAnswer: correctAnswer == 3
    });
    this.answerArray = answers; 
  }