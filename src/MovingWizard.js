import React,{useState} from 'react'
const MovingGif = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveCount, setMoveCount] = useState(0);

  const handleMove = () => {
    switch (moveCount % 4) {
      case 0: // Move right
        setPosition(prevPosition => ({
          ...prevPosition,
          x: prevPosition.x + 600,
        }));
        break;
      case 1: // Move down
        setPosition(prevPosition => ({
          ...prevPosition,
          y: prevPosition.y + 300,
          x:prevPosition.x -200
        }));
        break;
      case 2: // Move left
        setPosition(prevPosition => ({
          ...prevPosition,
          x: prevPosition.x - 300,
        }));
        break;
      default: // Reset to original position
        setPosition({ x: 0, y: 0 });
        break;
    }
    setMoveCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ position: 'relative', top: position.y, left: position.x }}>
      <img
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif"
        alt="moving-gif"
        onClick={handleMove}
        style={{ cursor: 'pointer',width:"200px" }}
      />
      {/* <button onClick={() => setMoveCount(0)}>Reset</button> */}
    </div>
  );
};

export default MovingGif;