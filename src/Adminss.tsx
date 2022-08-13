import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { string } from "yup";
import "./App.css";
import av from "./assets/img/av.png";
import mtn from "./assets/img/mtn.png";
import oran from "./assets/img/oran.png";
import { placesState } from "./atoms/place";
import { reservationsState } from "./atoms/reservation";
import { userId } from "./atoms/users";
import { CreateReservationService } from "./services/createreservation.service";
import { PlacesService } from "./services/place.service";
import { DeleteReservationService, ReservationsService, updateReservationService } from "./services/reservation.service";
const Admin =()=> {
  const [statut,setStatut]=useState(true)
  const [show,setShow]=useState(false)
  const [sho,setSho]=useState(false)
  const [placeID,setPlaceID]=useState("")
  const [id,setId]=useState("")
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
  const enr=(id:string)=>{
    setPlaceID(id)
    actual()
  }
  
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
 const veris=(num:string)=> {

  for(let r of reservations){
    if(r.place.numero==num){
      console.log("fdfdfd",r.id)
      setId(r.id)
      setSho(true)
     return r.id
    }
  }
 }
 const misactual = () => {
  let promess = new Promise((resolve, reject) => {
    console.log("sais pas.....",id)
   
    resolve(action2());
  });
  promess.then(() => {
    setChargement(true);
   setSho(false)
   refreshPage()
  });}
  const action2 = async () => {
    setChargement(false);
    console.log("dfd",id)
    const result = await DeleteReservationService.DeleteReservation(id)
    console.log("dfd",result)
    await result;
  };

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
 const identifiantpl=(p:string)=>{
  setSho(true )
  setPlaceID(p)
  console.log("fdqdfdfqsd",placeID)
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
          <div className="item">
              <div className="itemO">position</div>
              <div className="itemO">statut</div>
              <div className="itemO">actions</div>
            </div>
            {places.map((p:any)=>(
              
                     <div>
                       {veri(p.numero)?
                      <div  className="item">
                        <div className="itemO">{p.numero}</div>
                        <div className="itemO"><Button className="stat" variant='danger' disabled></Button></div>
                        <div className="itemO"><Button
                      className="place"
                      variant="danger"
              
                      onClick={() => veris(p.numero)}
                    >
                     liberer
                    </Button></div>
                      </div>
                        :
                        <div  className="item">
                        <div className="itemO">{p.numero}</div>
                        <div className="itemO"><Button className="stat" variant='primary' disabled></Button></div>
                        <div className="itemO"><Button
                      className="place"
                      variant="primary"
                
                      onClick={() => identifiantP(p.id)}
                    >
                     reserver
                    </Button></div>
                      </div>
                     
                      }
                     
                   </div>
            ))}
            
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
            <h4>sohkamlafrankdamien@gmail.com</h4>
            <h4>modestengueyep1@gmail.com</h4>
          </div>
        </div>

        <Modal
          show={sho}
          onHide={() =>setSho(false )}
        >
          <Modal.Header closeButton>
            <Modal.Title>
          
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                      <h4>etes vous sur ?...</h4>
            </Modal.Body>
          <Modal.Footer>
            {chargement?
            <Button
              variant="danger"
              onClick={() =>misactual()}
            >
              valider
            </Button>:
            <CircularProgress />
            }
            
          </Modal.Footer>
        </Modal>

        <Modal
          show={show}
          onHide={() =>setShow(false )}
        >
          <Modal.Header closeButton>
          
          </Modal.Header>
          <Modal.Body>
                      <h4>etes vous sur ?...</h4>
            </Modal.Body>
          <Modal.Footer>
            {chargement?
            <Button
              variant="primary"
              onClick={() =>actual()}
            >
              valider
            </Button>:
            <CircularProgress />
            }
            
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default Admin
