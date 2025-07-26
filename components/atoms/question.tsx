type QuestionProps = {
  children: React.ReactNode;
};

export default function Question({ children }: QuestionProps) {
  return (
    <div className="whitespace-pre-line mb-2">
      {children}
    </div>
  );
}
