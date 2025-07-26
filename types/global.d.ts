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
  QnA: QnA[];
};

type QnA = {
  question: string;
  answerChoiches: AnswerChoice[];
};

type AnswerChoice = {
  content: string;
};
