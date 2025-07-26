import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Props = {
    data: SubmitQuizResponse
    question: QuizQuestion[];
}


export default function Result({ data, question }: Props) {
    const router = useRouter();
    return (
        <div>
            <div className="font-bold text-6xl text-center my-16">

                {
                    data.data.score.toFixed(2)
                } / 100
            </div>
            <div className="space-y-4">
                {data.data.selectedAnswers.map((answer, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-md border ${answer.isCorrect ? "border-green-500 bg-sidebar" : "border-red-500 bg-sidebar"
                            }`}
                    >
                        <p className={`font-semibold ${answer.isCorrect ? "text-green-500" : "text-red-500"}`}>
                             <Badge variant={`${!answer.isCorrect ? "destructive" : "default"}`} className="mr-2">
                                {answer.isCorrect ? "Benar" : "Salah"}
                            </Badge>
                            {question[index].content}
                        </p>
                        
                        <p className="text-black">
                           
                        </p>
                        {!answer.isCorrect && (
                            <p className="text-sm text-muted-foreground mt-1">
                                {answer.suggestion}
                            </p>
                        )}

                        <p className="mt-2 text-left">Jawaban anda : {data.data.selectedAnswers[index].content}</p>
                    </div>
                ))}
            </div>
            
            <Button className="mt-12 w-full" onClick={() => router.push("/home")}>Back to Home</Button>
        </div>
    )

}