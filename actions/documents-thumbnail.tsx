

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
          { id: 4, title: "Document C", date: "2025-07-24" },
          { id: 5, title: "Document C", date: "2025-07-24" },
          { id: 6, title: "Document C", date: "2025-07-24" },
          { id: 7, title: "Document C", date: "2025-07-24" },
          { id: 8, title: "Document C", date: "2025-07-24" },
          { id: 9, title: "Document C", date: "2025-07-24" },
          { id: 10, title: "Document C", date: "2025-07-24" },
          { id: 11, title: "Document C", date: "2025-07-24" },
          { id: 12, title: "Document C", date: "2025-07-24" },
          { id: 13, title: "Document C", date: "2025-07-24" },
        ],
      });
    }, 1000); 
  });
};