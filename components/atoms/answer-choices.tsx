import { useState } from "react";

type Props = {
  answerChoices: AnswerChoice[];
  onSelect?: (id: number) => void;
  name: string; // ← Tambahkan ini
};

export default function AnswerChoices({ answerChoices, onSelect, name }: Props) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleChange = (id: number) => {
    setSelectedId(id);
    onSelect?.(id);
  };

  return (
    <div className="space-y-3">
      {answerChoices.map((choice) => (
        <label
          key={choice.id}
          htmlFor={`answer-${name}-${choice.id}`}
          className={`flex items-center w-full px-4 py-3 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out
            ${
              selectedId === choice.id
                ? "border-blue-500 bg-sidebar ring-2 ring-blue-300"
                : "border hover:border-primary "
            }`}
        >
          <input
            type="radio"
            id={`answer-${name}-${choice.id}`}
            name={name} // ← gunakan nama unik
            value={choice.id}
            checked={selectedId === choice.id}
            onChange={() => handleChange(choice.id)}
            className="form-radio h-5 w-5 mr-4 accent-blue-500"
          />
          <span className="">{choice.content}</span>
        </label>
      ))}
    </div>
  );
}
