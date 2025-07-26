export async function uploadDocument(file: File, token: string) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("http://localhost:3000/document/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Upload failed");
    }

    const data = await response.json();
    return data; // { message, document: { ... } }
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}
