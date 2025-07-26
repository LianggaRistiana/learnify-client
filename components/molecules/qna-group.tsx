import AnswerChoices from "../atoms/answer-choices";
import Question from "../atoms/question";

type Props = {
    question: string;
    answerChoices: AnswerChoice[];
    onSelect?: (id: number) => void;
}

export default function QnaGroup({ question, answerChoices, onSelect }: Props) {
  const name = `question-${question}`; // Bisa disesuaikan, misal pakai ID soal jika ada
  return (
    <div className="w-full my-8">
      <Question>{question}</Question>
      <AnswerChoices answerChoices={answerChoices} onSelect={onSelect} name={name} />
    </div>
  );
}
