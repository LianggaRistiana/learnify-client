import QnaGroup from "../molecules/qna-group"

type Props = {
    quiz: DocumentQNA
}

export default function QuizRoom({ quiz }: Props) {
    return (
        <div className="">
            {quiz.qna?.map((qna) => (
                <QnaGroup key={qna.id} answerChoices={qna.answerChoices} question={qna.question} />
            ))}
        </div>
    )
}