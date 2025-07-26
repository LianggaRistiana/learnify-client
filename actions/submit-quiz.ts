interface SelectedAnswer {
  answerId: number;
  isCorrect: boolean;
  suggestion: string;
}

interface SubmitQuizResult {
  quizId: number;
  score: number;
  selectedAnswers: SelectedAnswer[];
  allCorrectAnswers: SelectedAnswer[];
}

interface SubmitQuizResponse {
  success: boolean;
  message?: string;
  data: SubmitQuizResult;
}

interface SubmitQuizRequest {
  answer_ids: number[];
}

interface SubmitQuizResponse {
  score: number;
  total_questions: number;
  correct_answers: number;
}

interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export const submitQuiz = async (
  quizId: number,
  body: SubmitQuizRequest
): Promise<SubmitQuizResponse> => {
  const token = localStorage.getItem("token");

  if (!token) { 
    throw new Error("Token tidak ditemukan.");
  }

  const res = await fetch(`${process.env.API_URL}/quiz/${quizId}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Gagal submit kuis.");
  }

  return data;
};
