import { useState } from "react";
import QnaGroup from "../molecules/qna-group"
import { Button } from "../ui/button";

type Props = {
    quiz: DocumentQNA
}

export default function QuizRoom({ quiz }: Props) {
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({
    answerIds: Array(quiz.qna.length).fill(null), 
  });

  const handleSelect = (questionIndex: number, answerId: number) => {
    const newAnswerIds = [...userAnswer.answerIds];
    newAnswerIds[questionIndex] = answerId;
    setUserAnswer({ answerIds: newAnswerIds });
  };

  return (
    <div className="space-y-6">
      {quiz.qna?.map((qna, index) => (
        <QnaGroup
          key={qna.id}
          question={qna.question}
          answerChoices={qna.answerChoices}
          onSelect={(answerId) => handleSelect(index, answerId)}
        />
      ))}
      
      <Button onClick={() => {console.log(userAnswer)}}>Submit</Button>
    </div>
  );
}