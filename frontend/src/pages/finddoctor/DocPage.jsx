import "./docpage.css"
import data from "./Data.json"
import  img from "./../../assets/pictures/profile.jpeg"
import Navbar from '../Navbar/Navbar';
export  default function DocPage(){
    return(
        <>
        <Navbar></Navbar>
        <section className="docpage">
            {data.map((Data)=>(

                <div className="docpage-card">
                    <div className="docpage-card-img">
                    <img src={Data.img} alt="profile pic"/>
                    </div>
                
                <h2>{Data.discription}</h2>
                <div className="docpage-container">
                
                    <ul className="ul1">
                        <li>Spec: {Data.speciality}</li>
                        <li>Exp: {Data.exp}</li>
                    </ul>
                    <ul className="ul2">
                        <li>Avg fees: {Data.avgfees}</li>
                        <li>Location: {Data.location}</li>
                    </ul>
                    
                </div>
                
            </div>
            ))}
            
            
        </section>
        </>
    );
}