// src/actions/quiz-service.ts

export async function reqDocumentQnaDummy(documentId: string): Promise<DocumentQNA> {
  await delay(500); // Simulasi delay

  return {
    id: parseInt(documentId),
    time: 300, // durasi dalam detik
    qna: [
      {
        id: 1,
        question: "Apa ibukota Indonesia?",
        answerChoiches: [
          { id: 1, content: "Jakarta" },
          { id: 2, content: "Bandung" },
          { id: 3, content: "Surabaya" },
          { id: 4, content: "Medan" },
        ],
      },
      {
        id: 2,
        question: "Siapa presiden pertama Indonesia?",
        answerChoiches: [
          { id: 1, content: "Soekarno" },
          { id: 2, content: "Soeharto" },
          { id: 3, content: "Habibie" },
          { id: 4, content: "Jokowi" },
        ],
      },
      {
        id: 3,
        question: "Apa nama mata uang Indonesia?",
        answerChoiches: [
          { id: 1, content: "Rupiah" },
          { id: 2, content: "Dollar" },
          { id: 3, content: "Yen" },
          { id: 4, content: "Euro" },
        ],
      },
    ],
  };
}

// Helper untuk delay simulasi
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
