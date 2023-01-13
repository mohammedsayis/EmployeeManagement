import React from 'react'
import { useState , useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Employee from './Employee';
import {  useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';


function Add() {

  const [id , setId]=useState()
  const [uname , setUname]=useState()
  const [age , setAge] =useState()
  const [desg , setDesg] =useState()
  const [salary , setSalary] =useState(0)

  let history = useNavigate()

  const handleAdd=(e)=>{
    e.preventDefault()
    let ids = uuid()
    console.log(ids);
    let uniqueId = ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary

    })
    history('/')
  }
  return (
    <>
    <h1 className='text-center m-4'>Add Employ Management</h1>
    <p></p>
    <Row>
      <Col>
         <div className="container">
         <Image width={'600px'} height={'500px'}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-d5qr9WzS926jiHDPlYrCL01Eb0M8C8c4w&usqp=CAU'></Image>

         </div>
      </Col>
      <Col>

     <div className="container" >
     <Form>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
         onChange={(e)=>setUname(e.target.value)} 
        />   
                  {/* onChange = to change input box values  */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" onChange={(e)=>setDesg(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
        Add Employee
      </Button>
    </Form>
     </div>
      </Col>
    </Row>
    </>
  )
}

export default Add