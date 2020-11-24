const quiz = [
  {
    question:"a,b,c,その次は？",
    answers:['d','f','t','j'],
    correct:'d',
  },{
    question:"ゲーム「艦これ」でケッコンカッコカリをしていない場合のレベル上限は？",
    answers:['80','100','50','99'],
    correct:'99',
  },{
    question:"アニメ「この素晴らしい世界に祝福を！」で通称：駄女神と呼ばれるアクアを演じた声優は？",
    answers:['水瀬いのり','雨宮天','内田真礼','小倉唯'],
    correct:'雨宮天',
  }
]
const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let buttonIndex;

let score = 0;

const outputQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for (buttonIndex = 0;buttonIndex < buttonLength; buttonIndex++){
    $button[buttonIndex] .textContent= quiz[quizIndex].answers[buttonIndex];
  }
}

outputQuiz();

for (buttonIndex = 0;buttonIndex < buttonLength; buttonIndex++){
  $button[buttonIndex].addEventListener('click', (e) => {
    if(e.target.textContent === quiz[quizIndex].correct){
      window.alert("correct!");
      score++;
    }else{
      window.alert("incorrect...");
    }
    quizIndex++;
    if(quizIndex < quizLength){
      outputQuiz();
    }else{
      window.alert("finish! Your score is " + score + ' / ' + quizIndex + '.');
      score = 0;
      quizIndex = 0;
      outputQuiz();
    }
  });
}
