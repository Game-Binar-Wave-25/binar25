import React from "react";
import { NavbarComponent } from "../components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from "next/link";

export default function Profile(){

    return(
        <>
            <NavbarComponent></NavbarComponent>
            
            <Link href="/UpdateProfile"><h1>update profile</h1></Link>

        </>
    )
}