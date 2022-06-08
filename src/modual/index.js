import React from 'react'
import { Outlet, Route } from 'react-router-dom';
import Auths from './../auth/index';

export default function MainPage() {
  
    return (
        <>
            <div>MAin Page</div>
                <Outlet/>           
        </>
    )
}
