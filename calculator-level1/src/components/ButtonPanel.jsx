import Button from "./Button";

const ButtonPanel = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", "C", "=", "+"],
  ];

  return (
    <div className="button-panel">
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((btnValue) => (
            <Button
              key={btnValue}
              value={btnValue}
              onClick={onButtonClick}
              className={["/", "*", "-", "+", "="].includes(btnValue) ? "operator" : ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ButtonPanel;
