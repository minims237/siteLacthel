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
const Login = () => {
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
  if(numero=="admin"&&mdp=="Lgtr2022"){
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Identifiant"
                onChange={(e) => setNumero(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setMdp(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          {chargement ? (
            <div>
              <a className="bt" onClick={()=>verification()} >
                Singn In
              </a>
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
export default Login;
