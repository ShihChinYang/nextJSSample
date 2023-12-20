import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useRouter} from "next/router";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import BSafesStyle from '../styles/BSafes.module.css'

import { debugLog} from '../lib/helper'

import ContentPageLayout from '../components/layouts/contentPageLayout';
import KeyInput from "../components/keyInput";

export default function LogIn() {
    const debugOn = false;
    const router = useRouter();
    const dispatch = useDispatch();
    
    const [keyPassword, setKeyPassword] = useState("");
    const nicknameRef = useRef(null);


    const keyPasswordChanged = ( password ) => {
        debugLog(debugOn, "keyPassword: ", password);
        setKeyPassword(password);
    }

    const handleSubmit = async e => { 
        debugLog(debugOn,  "handleSubmit");
    }

    const handleCreate = () => {
        router.push('/keySetup');
    }

    useEffect(()=> {
        //nicknameRef.current.focus();
    }, []);

    return (
        <div className={BSafesStyle.safeBackground}>
        <ContentPageLayout showNaveBar={false} showNavbarMenu={false} showPathRow={false}> 
            <Container >
                <br />
                <br />  
                <br />   
                <br />  
                <br />
                <Row>
                    <Col sm={{ span:10, offset:1 }} lg={{ span: 6, offset: 3 }}>
                        <Card className='p-3'> 
                            <h1>Your BSafes</h1>
                            <hr></hr>
                            <Form>
                                <Form.Group className="mb-3" controlId="Nickname">
                                    <Form.Label>Nickname</Form.Label>
                                    <Form.Control ref={nicknameRef} type="text" placeholder='' autoComplete="off" className={BSafesStyle.inputBox}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="keyPassword">
                                    <Form.Label>Key Password</Form.Label>
                                    <KeyInput onKeyChanged={keyPasswordChanged}/>
                                </Form.Group>
                            </Form>
                            <Row className='p-2'>
                                <Col className='text-center'>
                                    <Button variant="dark" onClick={handleSubmit}>
                                        Unlock
                                    </Button>
                                </Col>
                            </Row>
                            <Row className='p-2'>
                                <h4>New user ?
                                    <Button variant='link' onClick={handleCreate}>
                                    Create
                                    </Button>
                                </h4>
                            </Row>        
                        </Card>
                    </Col>           
                </Row>
                <br />
                <br />
                <br />
            </Container>
        </ContentPageLayout>
        </div>
    )
}