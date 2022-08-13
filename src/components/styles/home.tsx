import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { HashRouter as Router } from "react-router-dom";
import "./login.css";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userName, userId, userE } from "../../atoms/users";
import av from "../../assets/img/av.png";
import { LoginService } from "../../services/user.service";
const Home = () => {
  const [numero, setNumero] = useState("");
  const [chargement, setChargement] = useState(true);
  const [mdp, setMdp] = useState("");
  const [name, setName] = useRecoilState(userName);
  const [userID, setUserID] = useRecoilState(userId);
  const [user, setUser] = useRecoilState(userE);
  let history = useHistory();

  const actual = () => {
    let promess = new Promise((resolve, reject) => {
      resolve(action());
    });
    promess.then(() => {
      setChargement(true);
      history.push("/main");
    });
    return <div></div>;
  };
  const action = async () => {
    setChargement(false);
    const result = await LoginService.login(numero,mdp);
    setUser(result);
    setUserID(result.id);
    console.log(userID)
    await result;
  };
const verification=()=>{
  if(numero=="697831623"&&mdp=="123456"){
    history.push("/admin");
  }else{
    history.push("/main");
  }
}
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="logCnt">
      <Router>
        <div className="logBlog">
          <div className="logAvatar">
            {" "}
            <div className="app__img">
            <img src={av} width={50} height={50} />
          </div>
          </div>
          <h4>
            Bienvenu au parking
          </h4>
        
          {chargement ? (
            <div className="choix">
 <div><a className="bt" onClick={()=>history.push("/login")} >
                Admin
              </a></div>
              <div><a className="bt" onClick={()=>history.push("/main")} >
                Client
              </a></div>
            </div>
          ) : (
            <div>
              <CircularProgress />
            </div>
          )}
          <div></div>
        </div>
      </Router>
    </div>
  );
};
export default Home;
