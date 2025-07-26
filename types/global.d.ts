type DocumentsThumbnail = {
  documents: DocumentThumbnail[];
};

type DocumentThumbnail = {
  id: number;
  title: string;
  date: string;
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
