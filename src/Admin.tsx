import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import "./App.css";
import av from "./assets/img/av.png";
import mtn from "./assets/img/mtn.png";
import oran from "./assets/img/oran.png";
import { placesState } from "./atoms/place";
import { reservationsState } from "./atoms/reservation";
import { userId } from "./atoms/users";
import { CreateReservationService } from "./services/createreservation.service";
import { PlacesService } from "./services/place.service";
import { ReservationsService } from "./services/reservation.service";
const Admin =()=> {
  const [statut,setStatut]=useState(true)
  const [show,setShow]=useState(false)
  const [placeID,setPlaceID]=useState("")
  const [chargement, setChargement] = useState(true);
  const [userID, setUserID] = useRecoilState(userId);
  const [reservations, setReservations] = useRecoilState(reservationsState);
  const [places, setPlaces] = useRecoilState(placesState);
  let history=useHistory()
  let  code="2200"
  useEffect(() => {
    const fetchData = async () => {
      const result = await ReservationsService.reservations()
      setReservations(result);
      console.log("les reservations", reservations);
      await result;
     
      console.log("le code", code);
      const plac = await PlacesService.places()
      setPlaces(plac);
      console.log("les positions", reservations);
      await plac;
    };
    fetchData();
  }, []);
  const actual = () => {
    let promess = new Promise((resolve, reject) => {
      resolve(action());
    });
    promess.then(() => {
      setChargement(true);
     setShow(false)
     refreshPage()
    });
    return <div></div>;
  };
  const action = async () => {
    setChargement(false);
    const result = await CreateReservationService.newReservation(userID,statut,code,placeID)
    console.log("lllllllllllllllllllllllll",userID,statut,code,placeID)
    await result;
  };
 const veri=(num:string)=> {

  for(let r of reservations){
    if(r.place.numero==num){
      if(r.statut){
        return true
      }else{
        return false
      }
    }
  }
 }
 const nombre=()=> {
let nb=0
  for(let r of reservations){
    for(let p of places){
      if(r.place.numero==p.numero){
      if(r.statut){
        nb+=1
      }
    }
    }
    
  }
  return (5-Number(nb))
 }
 const identifiantP=(p:string)=>{
  setShow(true )
  setPlaceID(p)
 }
  const refreshPage = () => {
    window.location.reload();
  };
 
    return (
      <div className="app">
        <div className="app__header">
          <div className="app__img">
            <img src={av} width={50} height={50} />
          </div>

          <h3>BIENVENU AU PARKING DE NGUEYEP & KAMLA</h3>
        </div>
        <div className="app__body__b">
          <div className="app__body">
            <p>place disponible {nombre()}/5</p>
            {places.map((p:any)=>(
              
                     <div>
                       {veri(p.numero)?
                      <Button
                      className="place"
                      variant="danger"
                      disabled
                      onClick={() => setShow(true )}
                    >
                      {p.numero}
                    </Button>:
                    <Button
                    className="place"
                    variant="primary"
                    onClick={() => identifiantP(p.id)}
                   
                  >
                    {p.numero}
                  </Button>  
                      }
                     
                   </div>
            ))}
            
          </div>
          <div>
            
          </div>
        </div>
        <div className="app__footer">
          <h3>contacts</h3>
          <div>
            <h4>+237 697 831 623</h4>
            <h4>+237 697 978 963</h4>
          </div>
          <h3>Email</h3>
          <div>
            <h4>solkamlafrankdamien@gmail.com</h4>
            <h4>modestengueyep1@gmail.com</h4>
          </div>
        </div>

        <Modal
          show={show}
          onHide={() =>setShow(false )}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="app__hcl">
                <div className="app__img_i">
                  <img src={mtn} width={70} height={60} />
                </div>
                <div className="app__img_i">
                  <img src={oran} width={70} height={60} />
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                <div><h4>MONTANT</h4></div>
                <div><h4>1000 FCFA</h4></div>
            </div>
            <div><h4>NUMERO</h4></div>
            <Form>
            <Form.Group className="mb-3 formulaire">
                <div className="frm"><h4>+237</h4></div>
                
              <Form.Control
                type="text"
                maxLength={9}
                minLength={9}
              ></Form.Control>
            </Form.Group>
            </Form>
            </Modal.Body>
          <Modal.Footer>
            {chargement?
            <Button
              variant="primary"
              onClick={() =>actual()}
            >
              Reserver
            </Button>:
            <CircularProgress />
            }
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default Admin
