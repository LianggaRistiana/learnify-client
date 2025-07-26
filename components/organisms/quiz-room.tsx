import { useState } from "react";
import QnaGroup from "../molecules/qna-group"
import { Button } from "../ui/button";

type Props = {
    quiz: QuizResponse
}

export default function QuizRoom({ quiz }: Props) {
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    answerIds: Array(quiz.qnaCount).fill(null), 
  });

  const handleSelect = (questionIndex: number, answerId: number) => {
    const newAnswerIds = [...userAnswer.answerIds];
    newAnswerIds[questionIndex] = answerId;
    setUserAnswer({ answerIds: newAnswerIds });
  };

  return (
    <div className="space-y-6">
      {quiz.questions?.map((qna, index) => (
        <QnaGroup
          key={qna.id}
          question={qna.content}
          answerChoices={qna.answers}
          onSelect={(answerId) => handleSelect(index, answerId)}
        />
      ))}
      
      <Button onClick={() => {console.log(userAnswer)}}>Submit</Button>
    </div>
  );
}