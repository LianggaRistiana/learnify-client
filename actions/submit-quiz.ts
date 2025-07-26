
interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export const submitQuiz = async (
  quizId: number,
  body: UserAnswer
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
