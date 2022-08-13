import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { Form } from "react-bootstrap";
import logoE from "./assets/img/logoE.png";
import Apropos from "./Apropos";
import AproposD from "./AproposD";
import idesc from "./assets/img/tempsnip.png";
import march from "./assets/img/imarche.png";
import inves from "./assets/img/investir.png";
import objecti from "./assets/img/objectif.png";
import "./apropos.css";
let d = 100;
const HomePage = () => {
  const [naviga, setNaviga] = useState(1);
  const [detail, setDetail] = useState(100);
  return (
    <div className="h_all">
      <div className="h_header">
        <div>
          <img src={logoE} width="150" height="50" className="logoBlog" />{" "}
        </div>
        <div className="h_header_oneBlog">
          <div className="h_navi">
            {naviga === 1 ? (
              <li>
                <a
                  href="#accueil"
                  className="active"
                  onClick={() => setNaviga(1)}
                >
                  Accueil
                </a>
              </li>
            ) : (
              <li>
                <a href="#accueil" onClick={() => setNaviga(1)}>
                  Accueil
                </a>
              </li>
            )}

            {naviga === 2 ? (
              <li>
                <a
                  href="#apropos"
                  className="active"
                  onClick={() => setNaviga(2)}
                >
                  A Propos
                </a>
              </li>
            ) : (
              <li>
                <a href="#apropos" onClick={() => setNaviga(2)}>
                  A Propos
                </a>
              </li>
            )}

            {naviga == 3 ? (
              <li>
                <a
                  href="#nosproduit"
                  className="active"
                  onClick={() => setNaviga(3)}
                >
                  Nos Produits
                </a>
              </li>
            ) : (
              <li>
                <a href="#nosproduit" onClick={() => setNaviga(3)}>
                  Nos Produits
                </a>
              </li>
            )}

            {naviga === 4 ? (
              <li>
                <a
                  href="#noschiffre"
                  className="active"
                  onClick={() => setNaviga(4)}
                >
                  Nos Chiffre
                </a>
              </li>
            ) : (
              <li>
                <a href="#noschiffre" onClick={() => setNaviga(4)}>
                  Nos Chiffre
                </a>
              </li>
            )}

            {naviga === 5 ? (
              <li>
                <a
                  href="#contact"
                  className="active"
                  onClick={() => setNaviga(5)}
                >
                  Contact
                </a>
              </li>
            ) : (
              <li>
                <a href="#contact" onClick={() => setNaviga(5)}>
                  Contact
                </a>
              </li>
            )}
          </div>
          <div className="backUp">
            <a href="#accueil" className="btn" onClick={() => setNaviga(1)}>
              <Icon.ChevronUp size="16" />
            </a>
          </div>
          <div className="btnBlog">
            <div>
              <button className="btn">Connexion</button>
            </div>
            <div>
              {" "}
              <button className="btn">Inscription</button>
            </div>
          </div>
        </div>
      </div>
      <div id="accueil" className="oneBlocks">
        <div className="acBloc"></div>
      </div>
      <div id="apropos" className="oneBlock">
        <div className="onBlock_title">
          <h3>a propos</h3>
        </div>
        <Apropos />
        <div className="onBlock_title">
          <h3> </h3>
        </div>
        <div className="a_container">
          <div className="a_container_link">
            {detail === 100 ? (
              <button className="btnActive" onClick={() => setDetail(100)}>
                <h4>Le marché du lait </h4>
              </button>
            ) : (
              <button onClick={() => setDetail(100)}>
                <h4>Le marché du lait</h4>
              </button>
            )}
            {detail === 101 ? (
              <button className="btnActive" onClick={() => setDetail(101)}>
                <h4>Nos objectifs</h4>
              </button>
            ) : (
              <button onClick={() => setDetail(101)}>
                <h4>Nos objectifs</h4>
              </button>
            )}

            {detail === 102 ? (
              <button className="btnActive" onClick={() => setDetail(102)}>
                <h4>Comment investir ?</h4>
              </button>
            ) : (
              <button onClick={() => setDetail(102)}>
                <h4>Comment investir ?</h4>
              </button>
            )}
          </div>
          {
           detail==100?(
<div className="a_container_txtd">
            <h3>Le marché du lait</h3>

            <div className="a_container_txt_des">
              <div>
                <img src={march} alt="lacther" height="auto" width="240" />
              </div>
              <div>
                <p>
                  transformation et commercialisation du lait de vache local en
                  produits dérivées (beurre, cèmes, yaourt...).Lacthel est bien
                  déterminée à changer cet état de chose et conquérir ce marché,
                  par patriotisme économique et pour l’honneur de notre pays et
                  de notre continent !
                </p>
              </div>
            </div>
          </div>
      
           ):(
        <div>
            {
                detail==101?(
                    <div className="a_container_txtd">
                    <h3>Nos objectifs</h3>
        
                    <div className="a_container_txt_des">
                      <div>
                        <img src={objecti} alt="lacther" height="auto" width="240" />
                      </div>
                      <div>
                        <p>
                          transformation et commercialisation du lait de vache local en
                          produits dérivées (beurre, cèmes, yaourt...).Lacthel est bien
                          déterminée à changer cet état de chose et conquérir ce marché,
                          par patriotisme économique et pour l’honneur de notre pays et
                          de notre continent !
                        </p>
                      </div>
                    </div>
                  </div>
              
        
                )
                :(
                    <div className="a_container_txtd">
            <h3>Comment investir</h3>

            <div className="a_container_txt_des">
              <div>
                <img src={inves} alt="lacther" height="auto" width="240" />
              </div>
              <div>
                <p>
                  transformation et commercialisation du lait de vache local en
                  produits dérivées (beurre, cèmes, yaourt...).Lacthel est bien
                  déterminée à changer cet état de chose et conquérir ce marché,
                  par patriotisme économique et pour l’honneur de notre pays et
                  de notre continent !
                </p>
              </div>
            </div>
          </div>
      

                )
            }
        </div>
           )
          }
        </div>
      </div>
      <div id="nosproduit" className="oneBlock">
        <div className="onBlock_title">
          <h3>nos produits</h3>
        </div>
      </div>
      <div id="noschiffre" className="oneBlock">
        <div className="onBlock_title">
          <h3>nos chiffres</h3>
        </div>
      </div>
      <div id="contact" className="oneBlock contact">
        <div className="contact_b">
          <div className="onBlock_title">
            <h3>contacts</h3>
          </div>
          <div className="contac">
            <div className="c_item">
              <div className="c_icon">
                <Icon.GeoAlt size="25" />
              </div>
              <div className="c_title">
                <h4>Adresse</h4>
              </div>
              <div className="c_info">
                <h5>maroua</h5>
              </div>
            </div>
            <div className="c_item">
              <div className="c_icon">
                <Icon.Envelope size="25" />
              </div>
              <div className="c_title">
                <h4>Email</h4>
              </div>
              <div className="c_info">
                <h5>lacthel@gmail.com</h5>
              </div>
            </div>
            <div className="c_item">
              <div className="c_icon">
                <Icon.Telephone size="25" />
              </div>
              <div className="c_title">
                <h4>Phone</h4>
              </div>
              <div className="c_info">
                <h5>(+237) 699 345 690</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="c_section">
          <div className="c_s">
            <div className="c_logo">
              <img src={logoE} width="150" height="50" />
            </div>
            <div className="c_info">
              <h5>Cameroun</h5>
            </div>
            <div className="c_info">
              <h5>Maroua</h5>
            </div>
            <div className="c_info space">
              <h5>
                <strong>Phone</strong>: (+237) 699 345 690
              </h5>
            </div>
            <div className="c_info">
              <h5>
                <strong>Email</strong>: lacthel@gmail.com
              </h5>
            </div>
            <div className="btn_reseaux">
              <button className="btn">
                <Icon.Twitter />{" "}
              </button>
              <button className="btn">
                <Icon.Facebook />{" "}
              </button>
              <button className="btn">
                <Icon.Instagram />{" "}
              </button>
              <button className="btn">
                <Icon.Telegram />{" "}
              </button>
              <button className="btn">
                <Icon.Linkedin />{" "}
              </button>
            </div>
          </div>
          <div className="c_lienB">
            <div>
              <h4>Les liens utiles</h4>
            </div>
            <div className="navB">
              <li>
                <a href="#accueil" onClick={() => setNaviga(1)}>
                  <Icon.ChevronRight size="10" /> accueil
                </a>
              </li>
              <li>
                <a href="#apropos" onClick={() => setNaviga(2)}>
                  <Icon.ChevronRight size="10" /> a prospos
                </a>
              </li>
              <li>
                <a href="#nosproduit" onClick={() => setNaviga(3)}>
                  <Icon.ChevronRight size="10" /> nos produits
                </a>
              </li>
              <li>
                <a href="#noschiffre" onClick={() => setNaviga(4)}>
                  <Icon.ChevronRight size="10" /> nos chiffres
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setNaviga(5)}>
                  <Icon.ChevronRight size="10" /> contacts
                </a>
              </li>
            </div>
          </div>
          <div>
            <div>
              <h4>Suggestions</h4>
            </div>
            <div className="c_b">
              <Form.Group>
                <Form.Control type="text" />
              </Form.Group>
              <button className="btn ">souscrire</button>
            </div>
          </div>
        </div>
      </div>
      <div className="devBlock"></div>
    </div>
  );
};

export default HomePage;
