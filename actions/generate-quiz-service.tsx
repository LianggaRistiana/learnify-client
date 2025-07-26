'use server';

export const generateQuiz = async (documentId: number, numQuestions: number, token: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quiz/create`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
                document_id: documentId,
                num_questions: numQuestions,
            }),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
            throw new Error(data.message || "Gagal membuat kuis.");
        }

        return {
            success: true,
            message: data.message,
            quiz_id: data.quiz_id,
        };
    } catch (error: any) {
        console.error("Error createQuiz (server):", error);
        return {
            success: false,
            message: error.message || "Terjadi kesalahan saat membuat kuis.",
        };
    }
};
