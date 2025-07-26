type Props = {
    data : SubmitQuizResponse
}


export default function Result({data}: Props) {
    return (
        <div>
            <div className="font-bold text-6xl text-center">
                {
                    data.data.score
                }
            </div>
        </div>
    )

}