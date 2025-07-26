type DocumentsThumbnail = {
  documents: DocumentThumbnail[];
};

type DocumentThumbnail = {
  id: number;
  title: string;
  date: string;
};

type DocumentDetail = {
  title: string;
  content: string;
  date: string;
};

type DocumentQNA = {
  id: number;
  time: number;
  qna: QnA[];
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
