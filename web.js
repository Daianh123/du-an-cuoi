const questions = [
  {
    title: "Câu 1",
    words: [
      "How",
      "saved",
      "important information",
      "your computer?",
      "is",
      "on",
    ],
    correctOrder: [
      "How",
      "is",
      "important information",
      "saved",
      "on",
      "your computer?",
    ],
  },
  {
    title: "Câu 2",
    words: [
      "Photos of",
      "free-time activities",
      "by",
      "every day",
      "shared",
      "Tom.",
      "on social media",
      "are",
    ],
    correctOrder: [
      "Photos of",
      "free-time activities",
      "are",
      "shared",
      "on social media",
      "every day",
      "by",
      "Tom.",
    ],
  },
  {
    title: "Câu 3",
    words: [
      "Do",
      "you",
      "follow",
      "any",
      "famous",
      "singers or ",
      "actors",
      "on",
      "Instagram?",
    ],
    correctOrder: [
      "Do",
      "you",
      "follow",
      "any",
      "famous",
      "singers or",
      "actors",
      "on",
      "Instagram?",
    ],
  },
  {
    title: "Câu 4",
    words: [
      "after ten min",
      "battery power.",
      "The screen",
      "turned off",
      "to",
      "save",
      "is",
      "usually",
    ],
    correctOrder: [
      "The screen",
      "is",
      "usually",
      "turned off",
      "after ten min",
      "to",
      "save",
      "battery power.",
    ],
  },
  {
    title: "Câu 5",
    words: [
      "What",
      "for",
      "information",
      "search",
      "do",
      "tools",
      "use",
      "you",
      "to",
    ],
    correctOrder: [
      "What",
      "tools",
      "do",
      "you",
      "use",
      "to",
      "search",
      "for",
      "information",
    ],
  },
  {
    title: "Câu 6",
    words: [
      "Spider-Man",
      "films",
      "were",
      "produced",
      "in",
      "the",
      "USA",
      "by",
      "Columbia Pictures.",
    ],
    correctOrder: [
      "Spider-Man",
      "films",
      "were",
      "produced",
      "in",
      "the",
      "USA",
      "by",
      "Columbia Pictures.",
    ],
  },
  {
    title: "Câu 7",
    words: [
      "when",
      "was",
      "the power",
      "out.",
      "Serena",
      "romantic",
      "film",
      "watching",
      "a",
      "went",
    ],
    correctOrder: [
      "Serena",
      "was",
      "watching",
      "a",
      "romantic",
      "film",
      "when",
      "the power",
      "went",
      "out.",
    ],
  },
  {
    title: "Câu 8",
    words: [
      "I",
      "don't",
      "have",
      "enough",
      "information",
      "to",
      "finish",
      "my",
      "report",
      "before",
      "Friday.",
    ],
    correctOrder: [
      "I",
      "don't",
      "have",
      "enough",
      "information",
      "to",
      "finish",
      "my",
      "report",
      "before",
      "Friday.",
    ],
  },
  {
    title: "Câu 9",
    words: [
      "What movie",
      "did",
      "you",
      "want",
      "to",
      "watch",
      "again",
      "as soon as",
      "it",
      "finished?",
    ],
    correctOrder: [
      "What movie",
      "did",
      "you",
      "want",
      "to",
      "watch",
      "again",
      "as soon as",
      "it",
      "finished?",
    ],
  },
  {
    title: "Câu 10",
    words: [
      "Children",
      "shouldn't",
      "see",
      "that",
      "film",
      "because",
      "its",
      "content",
      "is",
      "too",
      "violent.",
    ],
    correctOrder: [
      "Children",
      "shouldn't",
      "see",
      "that",
      "film",
      "because",
      "its",
      "content",
      "is",
      "too",
      "violent.",
    ],
  },
  {
    title: "Câu 11",
    words: [
      "the",
      "first",
      "Was",
      "created",
      "in",
      "1950s?",
      "video",
      "game",
      "the",
    ],
    correctOrder: [
      "Was",
      "the",
      "first",
      "video",
      "game",
      "created",
      "in",
      "the",
      "1950s?",
    ],
  },
  {
    title: "Câu 12",
    words: [
      "Radios",
      "were",
      "used",
      "to",
      "give",
      "important",
      "news",
      "during",
      "the",
      "second",
      "World War.",
    ],
    correctOrder: [
      "Radios",
      "were",
      "used",
      "to",
      "give",
      "important",
      "news",
      "during",
      "the",
      "second",
      "World War.",
    ],
  },
  {
    title: "Câu 13",
    words: [
      "In",
      "the",
      "past,",
      "phones",
      "text",
      "messages.",
      "for",
      "making",
      "were",
      "calls",
      "and",
      "sending",
      "simple",
      "used",
      "mainly",
    ],
    correctOrder: [
      "In",
      "the",
      "past,",
      "phones",
      "were",
      "mainly",
      "used",
      "for",
      "making",
      "calls",
      "and",
      "sending",
      "simple",
      "text",
      "messages.",
    ],
  },
  {
    title: "Câu 14",
    words: [
      "The",
      "keyboard",
      "was",
      "made",
      "of",
      "plastic,",
      "so",
      "it's light",
      "and",
      "easy",
      "to",
      "carry.",
    ],
    correctOrder: [
      "The",
      "keyboard",
      "was",
      "made",
      "of",
      "plastic,",
      "so",
      "it's light",
      "and",
      "easy",
      "to",
      "carry.",
    ],
  },
  {
    title: "Câu 15",
    words: [
      "It would",
      "be",
      "a good",
      "idea",
      "to learn",
      "to play",
      "a",
      "musical",
      "instrument",
      "like guitar",
      "or piano.",
    ],
    correctOrder: [
      "It would",
      "be",
      "a good",
      "idea",
      "to learn",
      "to play",
      "a",
      "musical",
      "instrument",
      "like guitar",
      "or piano.",
    ],
  },
  {
    title: "Câu 16",
    words: [
      "We'd",
      "play football",
      "in",
      "the",
      "football ground",
      "when",
      "we",
      "were",
      "students",
      "at school.",
    ],
    correctOrder: [
      "We'd",
      "play football",
      "in",
      "the",
      "football ground",
      "when",
      "we",
      "were",
      "students",
      "at school.",
    ],
  },
  {
    title: "Câu 17",
    words: [
      "Do you",
      "think",
      "it would",
      "be",
      "great",
      "to",
      "attend",
      "a",
      "live",
      "Korean concert",
      "by Black Pink?",
    ],
    correctOrder: [
      "Do you",
      "think",
      "it would",
      "be",
      "great",
      "to",
      "attend",
      "a",
      "live",
      "Korean concert",
      "by Black Pink?",
    ],
  },
  {
    title: "Câu 18",
    words: [
      "If we",
      "won",
      "this sports",
      "competition,",
      "we would",
      "have",
      "enough money",
      "to travel",
      "to Thailand.",
    ],
    correctOrder: [
      "If we",
      "won",
      "this sports",
      "competition,",
      "we would",
      "have",
      "enough money",
      "to travel",
      "to Thailand.",
    ],
  },
  {
    title: "Câu 19",
    words: [
      "My father",
      "wouldn't",
      "often",
      "sleep",
      "at noon,",
      "so",
      "he felt",
      "really tired",
      "in the afternoon.",
    ],
    correctOrder: [
      "My father",
      "wouldn't",
      "often",
      "sleep",
      "at noon,",
      "so",
      "he felt",
      "really tired",
      "in the afternoon.",
    ],
  },
  {
    title: "Câu 20",
    words: [
      "She",
      "was",
      "going",
      "sightseeing",
      "in",
      "the",
      "city",
      "all",
      "day",
      "yesterday.",
    ],
    correctOrder: [
      "She",
      "was",
      "going",
      "sightseeing",
      "in",
      "the",
      "city",
      "all",
      "day",
      "yesterday.",
    ],
  },
  {
    title: "Câu 21",
    words: [
      "They",
      "went",
      "to",
      "the",
      "theatre,",
      "but",
      "they",
      "couldn't",
      "get",
      "tickets.",
    ],
    correctOrder: [
      "They",
      "went",
      "to",
      "the",
      "theatre,",
      "but",
      "they",
      "couldn't",
      "get",
      "tickets.",
    ],
  },
  {
    title: "Câu 22",
    words: [
      "John",
      "and",
      "Sarah",
      "were",
      "exploring",
      "the",
      "island",
      "when",
      "they",
      "suddenly",
      "got",
      "lost.",
    ],
    correctOrder: [
      "John",
      "and",
      "Sarah",
      "were",
      "exploring",
      "the",
      "island",
      "when",
      "they",
      "suddenly",
      "got",
      "lost.",
    ],
  },
  {
    title: "Câu 23",
    words: [
      "The",
      "group",
      "was",
      "having",
      "a",
      "great",
      "time",
      "to",
      "visit",
      "Paris",
      "while",
      "they",
      "were",
      "there.",
    ],
    correctOrder: [
      "The",
      "group",
      "was",
      "having",
      "a",
      "great",
      "time",
      "to",
      "visit",
      "Paris",
      "while",
      "they",
      "were",
      "there.",
    ],
  },
  {
    title: "Câu 24",
    words: [
      "The",
      "tourists",
      "were",
      "really",
      "tired",
      "when",
      "they",
      "arrived",
      "at",
      "the",
      "hotel.",
    ],
    correctOrder: [
      "The",
      "tourists",
      "were",
      "really",
      "tired",
      "when",
      "they",
      "arrived",
      "at",
      "the",
      "hotel.",
    ],
  },
  {
    title: "Câu 26",
    words: [
      "They",
      "must",
      "do",
      "judo",
      "to",
      "keep",
      "them",
      "fit",
      "and",
      "stay",
      "healthy.",
    ],
    correctOrder: [
      "They",
      "must",
      "do",
      "judo",
      "to",
      "keep",
      "them",
      "fit",
      "and",
      "stay",
      "healthy.",
    ],
  },
  {
    title: "Câu 27",
    words: [
      "She",
      "cannot",
      "go",
      "horse",
      "racing",
      "because",
      "it's",
      "too",
      "expensive",
      "for",
      "her.",
    ],
    correctOrder: [
      "She",
      "cannot",
      "go",
      "horse",
      "racing",
      "because",
      "it's",
      "too",
      "expensive",
      "for",
      "her.",
    ],
  },
  {
    title: "Câu 28",
    words: [
      "What",
      "sport",
      "could",
      "you",
      "play",
      "when",
      "you",
      "were",
      "at",
      "high",
      "school?",
    ],
    correctOrder: [
      "What",
      "sport",
      "could",
      "you",
      "play",
      "when",
      "you",
      "were",
      "at",
      "high",
      "school?",
    ],
  },
  {
    title: "Câu 29",
    words: [
      "Why",
      "do",
      "we",
      "have",
      "to",
      "organize",
      "the",
      "sporting",
      "events?",
    ],
    correctOrder: [
      "Why",
      "do",
      "we",
      "have",
      "to",
      "organize",
      "the",
      "sporting",
      "events?",
    ],
  },
  {
    title: "Câu 30",
    words: [
      "What",
      "kind",
      "of",
      "musical",
      "instrument",
      "can",
      "you",
      "play?",
    ],
    correctOrder: [
      "What",
      "kind",
      "of",
      "musical",
      "instrument",
      "can",
      "you",
      "play?",
    ],
  },
  {
    title: "Câu 31",
    words: [
      "We",
      "visited",
      "the",
      "museum",
      "in",
      "the",
      "town",
      "yesterday.",
    ],
    correctOrder: [
      "We",
      "visited",
      "the",
      "museum",
      "in",
      "the",
      "town",
      "yesterday.",
    ],
  },
  {
    title: "Câu 32",
    words: [
      "I",
      "need",
      "to",
      "get",
      "a",
      "new",
      "passport",
      "every",
      "ten",
      "years",
      "because",
      "my",
      "face",
      "changes.",
    ],
    correctOrder: [
      "I",
      "need",
      "to",
      "get",
      "a",
      "new",
      "passport",
      "every",
      "ten",
      "years",
      "because",
      "my",
      "face",
      "changes.",
    ],
  },
  {
    title: "Câu 33",
    words: [
      "Linda",
      "was",
      "reading",
      "the",
      "guidebook",
      "when",
      "she",
      "saw",
      "the",
      "accident.",
    ],
    correctOrder: [
      "Linda",
      "was",
      "reading",
      "the",
      "guidebook",
      "when",
      "she",
      "saw",
      "the",
      "accident.",
    ],
  },
  {
    title: "Câu 34",
    words: [
      "The",
      "Korean",
      "tourists",
      "hired",
      "a",
      "local",
      "guide",
      "to",
      "take",
      "them",
      "across",
      "the",
      "mountains.",
    ],
    correctOrder: [
      "The",
      "Korean",
      "tourists",
      "hired",
      "a",
      "local",
      "guide",
      "to",
      "take",
      "them",
      "across",
      "the",
      "mountains.",
    ],
  },
  {
    title: "Câu 35",
    words: [
      "They",
      "were",
      "taking",
      "photos",
      "when",
      "it",
      "started",
      "to",
      "rain.",
    ],
    correctOrder: [
      "They",
      "were",
      "taking",
      "photos",
      "when",
      "it",
      "started",
      "to",
      "rain.",
    ],
  },
  {
    title: "Câu 36",
    words: [
      "Pater’s",
      "mother",
      "was",
      "too",
      "busy",
      "to",
      "take",
      "him",
      "to",
      "the",
      "cinema.",
    ],
    correctOrder: [
      "Pater’s",
      "mother",
      "was",
      "too",
      "busy",
      "to",
      "take",
      "him",
      "to",
      "the",
      "cinema.",
    ],
  },
  {
    title: "Câu 37",
    words: [
      "What",
      "is",
      "the",
      "most",
      "popular",
      "mean",
      "of",
      "transport",
      "in",
      "your",
      "country?",
    ],
    correctOrder: [
      "What",
      "is",
      "the",
      "most",
      "popular",
      "mean",
      "of",
      "transport",
      "in",
      "your",
      "country?",
    ],
  },
  {
    title: "Câu 38",
    words: [
      "The",
      "laptop",
      "isn't",
      "fast",
      "enough",
      "to",
      "download",
      "the",
      "film.",
    ],
    correctOrder: [
      "The",
      "laptop",
      "isn't",
      "fast",
      "enough",
      "to",
      "download",
      "the",
      "film.",
    ],
  },
  {
    title: "Câu 39",
    words: [
      "Which",
      "place",
      "do",
      "you",
      "think",
      "is",
      "better",
      "to",
      "live?",
    ],
    correctOrder: [
      "Which",
      "place",
      "do",
      "you",
      "think",
      "is",
      "better",
      "to",
      "live?",
    ],
  },
  {
    title: "Câu 40",
    words: [
      "Young",
      "students",
      "often",
      "ride",
      "bicycles",
      "to",
      "school",
      "every",
      "day.",
    ],
    correctOrder: [
      "Young",
      "students",
      "often",
      "ride",
      "bicycles",
      "to",
      "school",
      "every",
      "day.",
    ],
  },
  {
    title: "Câu 41",
    words: [
      "I",
      "like",
      "taking",
      "some",
      "photographs",
      "of",
      "animals",
      "to",
      "save",
      "in",
      "my",
      "computer.",
    ],
    correctOrder: [
      "I",
      "like",
      "taking",
      "some",
      "photographs",
      "of",
      "animals",
      "to",
      "save",
      "in",
      "my",
      "computer.",
    ],
  },
  {
    title: "Câu 42",
    words: [
      "My",
      "sister",
      "is",
      "really",
      "good",
      "at",
      "playing",
      "the",
      "guitar.",
    ],
    correctOrder: [
      "My",
      "sister",
      "is",
      "really",
      "good",
      "at",
      "playing",
      "the",
      "guitar.",
    ],
  },
  {
    title: "Câu 43",
    words: [
      "Marre",
      "did",
      "her",
      "homework",
      "when",
      "she",
      "got",
      "home",
      "from",
      "the",
      "zoo.",
    ],
    correctOrder: [
      "Marre",
      "did",
      "her",
      "homework",
      "when",
      "she",
      "got",
      "home",
      "from",
      "the",
      "zoo.",
    ],
  },
  {
    title: "Câu 44",
    words: [
      "It",
      "is",
      "difficult",
      "for",
      "school",
      "buses",
      "to",
      "move",
      "to",
      "London.",
    ],
    correctOrder: [
      "It",
      "is",
      "difficult",
      "for",
      "school",
      "buses",
      "to",
      "move",
      "to",
      "London.",
    ],
  },
  {
    title: "Câu 45",
    words: [
      "I",
      "don’t",
      "enjoy",
      "going",
      "to",
      "the",
      "cinema",
      "on",
      "my",
      "own.",
    ],
    correctOrder: [
      "I",
      "don’t",
      "enjoy",
      "going",
      "to",
      "the",
      "cinema",
      "on",
      "my",
      "own.",
    ],
  },
  {
    title: "Câu 46",
    words: [
      "In",
      "the 1440s,",
      "the first",
      "printing press",
      "was invented",
      "and it",
      "could print",
      "many books",
      "quickly.",
    ],
    correctOrder: [
      "In",
      "the 1440s,",
      "the first",
      "printing press",
      "was invented",
      "and it",
      "could print",
      "many books",
      "quickly.",
    ],
  },
];

let currentIndex = 0;
let selectedAnswers = [];

const choicesDiv = document.getElementById("choices");
const answerList = document.getElementById("answerList");
const result = document.getElementById("result");
const title = document.getElementById("questionTitle");

function loadQuestion() {
  const q = questions[currentIndex];
  title.textContent = q.title;
  choicesDiv.innerHTML = "";
  answerList.innerHTML = "";
  result.textContent = "";
  selectedAnswers = [];

  // Trộn ngẫu nhiên từ:
  const shuffled = [...q.words].sort(() => Math.random() - 0.5);

  shuffled.forEach((word) => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.className = "choice";
    btn.onclick = () => selectWord(btn);
    choicesDiv.appendChild(btn);
  });
}

function selectWord(button) {
  const li = document.createElement("li");
  li.textContent = button.textContent;
  li.dataset.word = button.textContent;
  li.onclick = () => undoWord(li, button);

  answerList.appendChild(li);
  selectedAnswers.push(button.textContent);
  button.disabled = true;
  button.style.opacity = 0.5;
}
function undoWord(li, button) {
  const word = li.dataset.word;

  // Xóa từ khỏi danh sách đã chọn
  const index = selectedAnswers.indexOf(word);
  if (index !== -1) {
    selectedAnswers.splice(index, 1);
  }
  li.remove();
  const choiceButtons = document.querySelectorAll(".choice");
  choiceButtons.forEach((btn) => {
    if (btn.textContent === word) {
      btn.disabled = false;
      btn.style.opacity = 1;
    }
  });
}

function checkAnswer() {
  const correct = questions[currentIndex].correctOrder;

  if (selectedAnswers.length !== correct.length) {
    result.textContent = "⚠️ Bạn chưa chọn đủ từ.";
    return;
  }

  const isCorrect = selectedAnswers.every((word, i) => word === correct[i]);
  result.textContent = isCorrect ? "✅ Chính xác!" : "❌ Sai rồi.";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    result.textContent = "🎉 Bạn đã hoàn thành tất cả các câu!";
    choicesDiv.innerHTML = "";
    answerList.innerHTML = "";
    title.textContent = "Hoàn thành!";
    return;
  }
  loadQuestion();
}

window.onload = loadQuestion;
