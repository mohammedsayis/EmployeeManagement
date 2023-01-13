import React from 'react'
import { useState , useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import Employee from './Employee';
import {  useNavigate } from 'react-router-dom';

function Edit() {

  const [id , setId]=useState()
  const [uname , setUname]=useState()
  const [age , setAge] =useState()
  const [desg , setDesg] =useState()
  const [salary , setSalary] =useState()

  useEffect(()=>{   //to print data in to the form 
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary( JSON.parse(localStorage.getItem('salary')))


  },[])
  // console.log(uname);
  // console.log(id);
  // console.log(salary);
  // console.log(desg);
  // console.log(age);

  var index = Employee.map(item=>item.id).indexOf(id) 
  // console.log(index);
  // console.log(id);
  let history = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()  //to Remove Automatical Refreshing in the Page
    // console.log(e);
    let emp = Employee[index]
    emp.uname=uname
    emp.age = age
    emp.desg = desg
    emp.salary = salary

    console.log(emp);
    alert('Update Successfuly')
    history('/')
  }

  return (
    <>
    <h1 className='text-center m-4'>Update Employ Management</h1>
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
        <Form.Control type="text" value={uname} onChange={(e)=>setUname(e.target.value)} />   
                  {/* onChange = to change input box values  */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" value={desg} onChange={(e)=>setDesg(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)} >
        Update
      </Button>
    </Form>
     </div>
      </Col>
    </Row>
    </>
  )
}

export default Edit