const questions = [
  {
    question:
      "Question 1: The first television set........ in the 1920s. (build)",
    answer: "was built",
  },
  {
    question:
      "Question 2: The software for this game..........a team of developers in Japan last month. (make)",
    answer: "was made by",
  },
  {
    question:
      "Question 3: The first computer game ......Steve Russell. (invent)",
    answer: "was invented by",
  },
  {
    question:
      "Question 4: These old cars .....a German company in the 1970s. (produce)",
    answer: "were produced by",
  },
  {
    question: "Question 5: The 2010 Texting World Cup.......by Korea. (win)",
    answer: "was won",
  },

  {
    question:
      "Question 1: If I had more free time, I........... to a classical concert this weekend. (GO)",
    answer: "would go",
  },
  {
    question:
      "Question 2: When I was a child, my grandparents... us to the beach for a holiday every summer. (WOULD/TAKE)",
    answer: "would take",
  },
  {
    question:
      "Question 3: It........... possible for people to live under the sea in the future. (WOULD)",
    answer: "would be",
  },
  {
    question:
      "Question 4: She..... around the world on a luxury cruise if she didn't win the lottery.( TRAVEL)",
    answer: "wouldn’t travel",
  },
  {
    question:
      "Question 5: When we were kids, we..... hours playing board games on rainy afternoons. (WOULD)",
    answer: "would spend",
  },
  {
    question:
      "Question 11:Computers...... schools and workplaces to complete tasks quickly. (use)",
    answer: "are used in",
  },
  {
    question:
      "Question 12:Digital files......on cloud servers for easy access. (save)",
    answer: "are saved",
  },
  {
    question:
      "Question 13:New apps......... on smartphones every day. (download)",
    answer: "are downloaded",
  },
  {
    question:
      "Question 14:Jackson Bell's magazine........ teenagers from many different countries. (read)",
    answer: "is read by",
  },
  {
    question:
      "Question 15:Alerts........to users when something goes wrong. (give)",
    answer: "are given",
  },
  {
    question:
      "Question 16:Some movie stars ....... in the chat show on BBC last night. (interview)",
    answer: "were interviewed",
  },
  {
    question:
      "Question 17:When we arrived, Mary ..... a film on TV in the living room. (watch)",
    answer: "was watching",
  },
  {
    question:
      "Question 18:My sister and I don't mind ...... food and drinks for the party tomorrow. (prepare)",
    answer: "prepare",
  },
  {
    question:
      "Question 19:Suzanna...... a uniform at work when she was an officer in TTC group. (have to/wear)",
    answer: "had to wear",
  },
  {
    question:
      "Question 20:The Picasso exhibition .....in our country twice a year. (open)",
    answer: "is opened",
  },
  {
    question: "Question 21: They went inside __ … it started to rain. (soon)",
    answer: "as soon as",
  },
  {
    question:
      "Question 22: We decided to stay home __ too cold to go out. (because)",
    answer: "because it was",
  },
  {
    question:
      "Question 23: My brother worked hard, __ won the championship last year. (so)",
    answer: "so he",
  },
  {
    question:
      "Question 24: __ were tired, the children continued playing in the park. (Although)",
    answer: "although they",
  },
  {
    question:
      "Question 25: She wanted to buy the dress, __ too expensive for her budget. (but)",
    answer: "but it was",
  },
  {
    question:
      "Question 26: My close friend, Anna, ……….. part in the school's sports competition last year, because her broken leg. (CAN/ TAKE)",
    answer: "could not take",
  },
  {
    question:
      "Question 27: People ....... on the grass or else they will be punished. (MUST/ WALK)",
    answer: "must not walk",
  },
  {
    question:
      "Question 28: Richard ...........to wear a suit to work, but he usually does. (HAVE)",
    answer: "does not have",
  },
  {
    question:
      "Question 29: Gary has travelled a lot and he ........can speak ...five languages. (CAN/ SPEAK)",
    answer: "can speak",
  },
  {
    question:
      "Question 30: Students......(NEED/ BRING) their tennis balls because there are school's balls available for them.",
    answer: "need not bring",
  },
  {
    question:
      "Question 31: __ (you/take) any photos when we visited the museum yesterday?",
    answer: "did you take",
  },
  {
    question:
      "Question 32: I __ (buy) any souvenirs when I was on holiday because I didn’t have enough money.",
    answer: "did not buy",
  },
  {
    question:
      "Question 33: When we __ (drive) home, I realized I didn’t have my passport.",
    answer: "were driving",
  },
  {
    question:
      "Question 34: They __ (plan) to visit the museum yesterday, but they decided to go shopping instead.",
    answer: "planned",
  },
  {
    question: "Question 35: __ (you/look) at a map when I saw you yesterday?",
    answer: "were you looking",
  },
  {
    question:
      "Question 36: It ..............for her to catch the train yesterday. (too/late)",
    answer: "was too late",
  },
  {
    question:
      "Question 37: The coffee is..............enough for me to drink. (not hot/enough)",
    answer: "not hot enough",
  },
  {
    question:
      "Question 38: The backpack is..............me to carry for long. (too/heavy)",
    answer: "too heavy for",
  },
  {
    question:
      "Question 39: Today, the music ……….. for me to dance. (exciting/enough)",
    answer: "is exciting enough",
  },
  {
    question: "Question 40: They have………buy this car. (enough/money)",
    answer: "enough money to",
  },
  {
    question:
      "Question 41: My sister decided......................some novels in her free time. (read)",
    answer: "to read",
  },
  {
    question:
      "Question 42: She ...................... yoga every Sunday with her friends. (enjoy/do)",
    answer: "enjoys doing",
  },
  {
    question:
      "Question 43: She often studies hard ________________ good marks. (get)",
    answer: "to get",
  },
  {
    question:
      "Question 44: I'm not very .............sports, so I would like to practice it. (good/play)",
    answer: "good at playing",
  },
  {
    question:
      "Question 45: The students are ______________ to music during the break. (interested/listen)",
    answer: "interested in listening",
  },
];

function loadQuestions() {
  const quizContainer = document.getElementById("quiz-container");
  questions.forEach((q, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
            <p>${q.question}</p>
            <input type="text" id="answer-${index}" placeholder="Nhập câu trả lời của bạn">
            <button onclick="checkAnswer(${index})">Kiểm tra</button>
            <p id="feedback-${index}" class="feedback"></p>
        `;
    quizContainer.appendChild(questionElement);
  });
}

function checkAnswer(index) {
  const userAnswer = document
    .getElementById(`answer-${index}`)
    .value.trim()
    .toLowerCase();
  const correctAnswer = questions[index].answer.toLowerCase();
  const feedbackElement = document.getElementById(`feedback-${index}`);

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Chính xác!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = `Sai rồi. Đáp án đúng là: "${questions[index].answer}".`;
    feedbackElement.style.color = "red";
  }
}

window.onload = loadQuestions;
