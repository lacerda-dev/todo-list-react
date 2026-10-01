export const Button = ({ content, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{content}</button>
    </div>
  );
};
