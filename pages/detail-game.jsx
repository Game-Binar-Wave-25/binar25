import React from "react";
import { NavbarComponent } from "../components";
import Link from "next/link";
import { GameData } from "../components/GameData"

export default function detailGame(props){
    console.log(GameData[1].linkImg);
    return(
        <>
            <NavbarComponent/>
            <div className="section" style={{ marginTop:"100px !important", color:"white"}}>
                <div className="container mt-5 mb-4">
                    <h1 className="text-center" style={{ marginBottom:"80px !important"}}>Title Game</h1>
                    <div className="row">
                        <div className="col-5" style={{ paddingLeft:"50px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel sit atque unde. Repudiandae minima a natus dolorum? Iusto odit voluptates minima laboriosam accusantium debitis, nulla maxime doloribus sit ipsum.
                        </div>
                        <div className="col-1">
                            <img 
                            src={GameData[1].linkImg} 
                            style={{ 
                                borderRadius:"15px", 
                                width:"500px", 
                                height:"auto",
                                boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="container d-flex justify-content-center" style={{ marginTop:"50px"}}>
                    <button type="button" class="btn btn-success">Play Now</button>
                </div>
            </div>
        </>
    )
}