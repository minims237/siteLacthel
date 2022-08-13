import idesc from "./assets/img/tempsnip.png";
import "./apropos.css";
import { useState } from "react";
const AproposD = (det: number) => {
    const [detail, setDetail] = useState(100);
  return (
    <div className="a_container">
      <div className="a_container_link">
        {det===100?(
          <button className="btnActive"  onClick={()=>setDetail(100)}>
            <h4>Le marché du lait</h4>
          </button>
        ):(
<button  onClick={()=>setDetail(100)}>
            <h4>Le marché du lait</h4>
          </button>
        )
        }
          <button  onClick={()=>setDetail(100)}>
            <h4>Le marché du lait</h4>
          </button>

          <button onClick={()=>setDetail(101)}>
            <h4>Nos objectifs</h4>
          </button>
          <button onClick={()=>setDetail(103)}>
            <h4>Comment investir ?</h4>
          </button>

      </div>
      <div className="a_container_txt">
        <div>
          <img src={idesc} alt="lacther" height="auto" width="550" />
        </div>
        <div></div>
        <h3>Lacthel</h3>
        <p>
          transformation et commercialisation du lait de vache local en produits
          dérivées (beurre, cèmes, yaourt...).Lacthel est bien déterminée à
          changer cet état de chose et conquérir ce marché, par patriotisme
          économique et pour l’honneur de notre pays et de notre continent !
        </p>
      </div>
    </div>
  );
};
export default AproposD;
