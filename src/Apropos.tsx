import idesc from"./assets/img/tempsnip.png"
import "./apropos.css"
const Apropos=()=>{
    return(
        <div className="a_container">
            <div className="a_container_img">
                <img src={idesc} alt="lacther" height="400" width="550"/>
            </div>
            <div className="a_container_txt">
                <h3>Lacthel</h3>
                <p>
                transformation et commercialisation du lait de vache local en produits dérivées (beurre, cèmes, yaourt...).Lacthel
                est bien déterminée à changer cet état de chose et conquérir ce marché, par patriotisme économique et pour l’honneur de notre pays et de notre continent !
                </p>
            </div>
        </div>
    )
}
export default Apropos