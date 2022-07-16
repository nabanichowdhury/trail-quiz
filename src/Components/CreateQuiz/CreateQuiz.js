import React from "react";

const CreateQuiz = () => {
  return (
    <div>
      <body style="background-color: #0b89fd;">
        <div class="container text-center flex">
          <div class="quiz">
            <div class="quiz_header">
              <div class="quiz_user flex text-center">
                <h4>Welcome! UserName</h4>
              </div>
              <div class="quiz_timer flex text-center">
                <span class="time">Time Left: 00:00</span>
              </div>
            </div>
            <div class="quiz_body">
              <h2>Q1. There is your Question?</h2>
              <ul class="option-group1">
                <li class="option">This is option 1</li>
                <li class="option">This is option 2</li>
                <li class="option">This is option 3</li>
                <li class="option">This is option 4</li>
              </ul>
              <button class="btn-next">Next Question</button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default CreateQuiz;
