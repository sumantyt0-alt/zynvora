const SuggestionCard = ({ text, onClick }) => {
  return (
    <button
      onClick={() => onClick(text)}
      className="border rounded-lg p-3 hover:bg-gray-100"
    >
      {text}
    </button>
  );
};

export default SuggestionCard;