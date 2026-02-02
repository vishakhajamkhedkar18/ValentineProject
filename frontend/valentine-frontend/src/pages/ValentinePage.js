import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getValentine, acceptValentine } from "../service/api";
import "./ValentinePage.css";
import confetti from "canvas-confetti";


function ValentinePage() {
    const { id } = useParams();
    const [valentine, setValentine] = useState(null);
    const [noPos, setNoPos] = useState({ top: "55%", left: "60%" });

    useEffect(() => {
        getValentine(id).then(res => setValentine(res.data));
    }, [id]);

    const moveNo = () => {
        setNoPos({
            top: Math.random() * 80 + "%",
            left: Math.random() * 80 + "%"
        });
    };

    const sayYes = () => {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });
        acceptValentine(id);
        setValentine({ ...valentine, accepted: true });
    };

    if (!valentine) return <h2>Loading...</h2>;

return (
  <div className="page">
    <div className="card">
      {!valentine.accepted ? (
        <>
          <h1 className="title">
            {valentine.name}, will you be my Valentine? 💖
          </h1>

          <div className="buttons">
            <button className="yes" onClick={sayYes}>
              YES 💘
            </button>

            <button
              className="no"
              style={{ position: "absolute", ...noPos }}
              onMouseEnter={moveNo}
              onTouchStart={moveNo}
            >
              NO 😜
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="yay">YAY!!! 💕</h1>
          <p className="subtitle">Best decision ever 😘</p>
          <h3 className="love-text">I love you ❤️</h3>
          <h3 className="love-message">{valentine.message}</h3>
        </>
      )}
    </div>
  </div>
);

}

export default ValentinePage;
