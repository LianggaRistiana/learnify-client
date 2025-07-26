type DocumentsThumbnail = {
  documents: DocumentThumbnail[];
};

type QuizResponse = {
  id: number;
  doc_id: number;
  createdAt: string;
  updatedAt: string;
  qnaCount: number;
  quizTime: number;
  score: number | null;
  questions: QuizQuestion[];
};

type QuizQuestion = {
  id: number;
  quizzes_id: number;
  content: string;
  answers: QuizAnswer[];
};

type QuizAnswer = {
  id: number;
  content: string;
};

type DocumentThumbnail = {
  id: number;
  title: string;
  createdAt: string;
  summary: string;
};

type DocumentDetail = {
  id: number;
  title: string;
  summary: string;
  date: string;
  text: string;
};

type DocumentQNA = {
  id: number;
  time: number;
  qna: QnA[];
};

type UserAnswer = {
  answerIds: number[];
};

type QnA = {
  id: number;
  question: string;
  answerChoices: AnswerChoice[];
};

type AnswerChoice = {
  id: number;
  content: string;
};

type SelectedAnswer = {
  answerId: number;
  isCorrect: boolean;
  suggestion: string;
};

type SubmitQuizResult = {
  quizId: number;
  score: number;
  selectedAnswers: SelectedAnswer[];
  allCorrectAnswers: SelectedAnswer[];
};

type SubmitQuizResponse = {
  success: boolean;
  message?: string;
  data: SubmitQuizResult;
};
