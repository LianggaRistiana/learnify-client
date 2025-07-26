'use server'

type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export const getQuiz = async (documentId: number, token: string): Promise<ApiResponse<QuizResponse>> => {
  console.log(documentId)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quiz/document/${documentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Gagal mengambil data kuis.');
  }

  return data;
};