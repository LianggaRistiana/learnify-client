

export const reqDocumentsThumbnail = async () => {

}

export const reqDocumentsThumbnailDummy = async (): Promise<DocumentsThumbnail> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        documents: [
          { id: 1, title: "Document A", date: "2025-07-26" },
          { id: 2, title: "Document B", date: "2025-07-25" },
          { id: 3, title: "Document C", date: "2025-07-24" },
        ],
      });
    }, 1000); 
  });
};