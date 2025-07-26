export const reqDocumentDummy = async (id: string): Promise<DocumentDetail> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: `Document ${id}`,
                content: `This is the full content of Document ${id}, created to simulate a realistic paragraph.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
It contains multiple lines of text, separated by line breaks, to test how your frontend handles rich text formatting.
You can display this in a <pre> tag or convert the line breaks to <br /> in your React component to preserve spacing.
Make sure your layout gracefully handles long content like this, especially if displayed inside scrollable areas or limited containers.`,
                date: "2025-07-26",
            });
        }, 1000);
    });
};
