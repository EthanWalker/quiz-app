/*******************************************************************
*   File         : app.js                                          *
*   Author(s)    : Ethan Walker                                    *
*   Project      : Quiz App                                        *
*   Creation Date: 06/14/2015                                      *
*   Last Modified: 06/16/2015                                      *
*   Purpose      : Main JS file for web based quiz.                *
*******************************************************************/
$(document).ready(function() {
  // Initialize Variables
  var numberOfQuestions = 4;
  var currentQuestion = 0;
  var numberCorrect = 0;
  var questionArray = [];
  /***************************************************************************/
  // Initialize 4 Questions
  questionArray.push(new Question("What is Alabama's all time NCAAF record against South Carolina?", "10-4", "15-3-1", "12-2", "67-0", 0));
  questionArray.push(new Question("When was Alabama's last NCAAF National Championship victory?", "1929", "1946", "2012", "2015", 2));
  questionArray.push(new Question("Who is currently the head coach of the Alabama Crimson Tide?", "Steve Spurrier", "Nick Saban", "Don Cheadle", "Urban Myer", 1));
  questionArray.push(new Question("Who is Alabama's only Heisman winner?", "Mark Ingram", "Bear Bryant", "Tim Tebow", "Amari Cooper", 0));
  /***************************************************************************/
  // Show question function
  function showQuestion(currentQuestion) {
    // Inject Question Values Into Text of HTML Page
    $('#question').text(questionArray[currentQuestion].question)
    $('#answer1').text(questionArray[currentQuestion].answerArray[0].value)
    $('#answer2').text(questionArray[currentQuestion].answerArray[1].value)
    $('#answer3').text(questionArray[currentQuestion].answerArray[2].value)
    $('#answer4').text(questionArray[currentQuestion].answerArray[3].value)
  }
  function keepScore(currentQuestion, userAnswer){
    console.log(currentQuestion);
    if(questionArray[currentQuestion].correctAnswer == userAnswer) {
      numberCorrect++;    
    }
  }
  function showFinalScreen(numberCorrect, numberOfQuestions)
  {
    // Clear Page
    $('header h1').empty();
    $('header h3').empty();
    $('.answer-container').empty();
    // Show Score
    $('header h1').text("Thanks for playing!");
    $('header h3').text("You got " + numberCorrect + " out of " + numberOfQuestions + " correct!" );
    $('.answer-container').addClass("logo");
  }
  /***************************************************************************/
  /* MAIN */
  showQuestion(currentQuestion); // Show First Question
  $('#submit-answer').click(function() {
    var userAnswer = $('input[name=answer]:checked').attr('id');
    keepScore(currentQuestion, userAnswer);
    currentQuestion++; // Increment to Next Question
    if (currentQuestion < numberOfQuestions) {
      showQuestion(currentQuestion);     
    } 
    else {
      showFinalScreen(numberCorrect, numberOfQuestions);
    }
  });
});