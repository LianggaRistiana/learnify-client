type Props = {
    data: SubmitQuizResponse
}


export default function Result({ data }: Props) {
    return (
        <div>
            <div className="font-bold text-6xl text-center">
                {
                    data.data.score
                }
            </div>
            <div className="space-y-4">
                {data.data.selectedAnswers.map((answer, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-md border ${answer.isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50"
                            }`}
                    >
                        <p className="font-semibold">
                            Jawaban ID: {answer.answerId}
                        </p>
                        <p>
                            Status:{" "}
                            <span className={answer.isCorrect ? "text-green-600" : "text-red-600"}>
                                {answer.isCorrect ? "Benar" : "Salah"}
                            </span>
                        </p>
                        {!answer.isCorrect && (
                            <p className="text-sm text-gray-600 mt-1">
                                Saran: {answer.suggestion}
                            </p>
                        )}
                    </div>
                ))}
            </div>

        </div>
    )

}