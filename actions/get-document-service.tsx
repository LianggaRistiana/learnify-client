"use server"

export type DocumentData = {
  id: number
  user_id: number
  title: string
  summary: string
  text: string
  createdAt: string;
}

export type GetDocumentResponse = {
  message: string
  data?: DocumentData
}

export const getDocumentById = async (id: number, token: string): Promise<GetDocumentResponse> => {
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null

//   if (!token) {
//     return { message: "Unauthorized: No token found" }
//   }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/document/${id}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    return { message: "Failed to fetch document" }
  }

  const data = await res.json()

  return {
    message: data.message || "Document retrieved successfully",
    data: data.data,
  }
}