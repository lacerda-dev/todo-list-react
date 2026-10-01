import "./Button.css"

export const Button = ({ content, onClick, color }) => {
  return (
    <div>
      <button className='btn-list' onClick={onClick} style={{backgroundColor: color}}>{content}</button>
    </div>
  );
};
