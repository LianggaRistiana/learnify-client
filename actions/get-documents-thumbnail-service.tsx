'use server'


export type DocumentData = {
  id: number
  title: string
  summary: string
  createdAt: string;
}

export type GetDocumentResponse = {
  message: string
  count?: number
  data?: DocumentData[]
}
export async function getAllDocuments(token: string) : Promise<GetDocumentResponse> {

  const res = await fetch("http://localhost:3000/document/all", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Gagal mengambil dokumen");
  }

  const data = await res.json();

  return {
    message: data.message,
    count: data.count,
    data: data.data,
  };
}