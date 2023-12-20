import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useRouter} from "next/router";

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Blocks } from  'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import BSafesStyle from '../../styles/BSafes.module.css'

import { debugLog } from '../../lib/helper';
import { getErrorMessages } from '../../lib/activities';

const ContentPageLayout = ({children, publicPage=false, publicHooks=null, showNaveBar=true, showNavbarMenu=true, showPathRow=true}) => {
    const debugOn = false;
    debugLog(debugOn, "Rendering ContentPageLayout");
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div>
            <Navbar key={false} expand="false" bg="light" className={`${BSafesStyle.bsafesNavbar} py-2`}>
                <Container fluid> 
                    <Navbar.Brand href='/'><h2>BSafes</h2></Navbar.Brand>
                </Container>
            </Navbar>
            {children}
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                />
            </div>
        </div>
    )
};

export default ContentPageLayout;