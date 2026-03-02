import LetterItem from "./LetterItem";

function LetterList({ letters }) {
  return (
    <ul>
      {letters.map((letter) => (
        <li key={letter.id}>{letter.content}</li>
      ))}
    </ul>
  );
}
export default LetterList;