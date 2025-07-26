import { useState } from "react";
import QnaGroup from "../molecules/qna-group"
import { Button } from "../ui/button";
import { submitQuiz } from "@/actions/submit-quiz";
import { toast } from "sonner";
import { set } from "zod";
import Result from "./result";

type Props = {
    quiz: QuizResponse
}

export default function QuizRoom({ quiz }: Props) {

    const [loading, setLoading] = useState(false);
    const [SubmitQuizResponse, setSubmitQuizResponse] = useState<SubmitQuizResponse>();


    const [userAnswer, setUserAnswer] = useState<UserAnswer>({
        answer_ids: Array(quiz.qnaCount).fill(null),
    });

    const handleSelect = (questionIndex: number, answerId: number) => {
        const newAnswerIds = [...userAnswer.answer_ids];
        newAnswerIds[questionIndex] = answerId;
        setUserAnswer({ answer_ids: newAnswerIds });
    };

    const handleSubmit = async () => {
        const hasNull = userAnswer.answer_ids.some((id) => id === null);
        if(hasNull) {
            toast.error("Must answer all questions!")
            return
        }

        setLoading(true);
        try {
            const res = await submitQuiz(quiz.id, userAnswer);
            if (res.success) {
                setSubmitQuizResponse(res)
            }
        } catch (err) {
            console.error("Failed submit quiz", err);
            toast.error("Failed to submit quiz");
        } finally {
            setLoading(false);
        }

    }

    return (
        <>
            {
                !SubmitQuizResponse && 
                <div className="space-y-6">
                    {quiz.questions?.map((qna, index) => (
                        <QnaGroup
                            key={qna.id}
                            question={qna.content}
                            answerChoices={qna.answers}
                            onSelect={(answerId) => handleSelect(index, answerId)}
                        />
                    ))}

                    <Button disabled={loading} onClick={handleSubmit}>
                        {loading ? "Submitting..." : "Submit"}
                    </Button>
                </div>
            }

            {
                SubmitQuizResponse && <Result question={quiz.questions} data={SubmitQuizResponse}></Result>
            }
        </>
    );
}