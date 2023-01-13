import React from 'react'
import Employee from './Employee'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FaUserPlus ,FaUserEdit ,FaTrashAlt } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import { AlignCenter, TextCenter } from 'react-bootstrap-icons';
function Home() {
    const history = useNavigate(

    )
    const handleDelete=(id)=>{
        alert("Delete")
        let index = Employee.map(item=>item.id).indexOf(id)
        console.log(index);
        Employee.splice(index,1)
        console.log(Employee);
        history('/')
    }
    const handleEdit=(id,uname,age,desg,salary)=>{
      localStorage.setItem('id',id)
      localStorage.setItem('uname',uname)
      localStorage.setItem('age',age)
      localStorage.setItem('desg',desg)
      localStorage.setItem('salary',JSON.stringify(salary))

    }
  return (
    <div>
      <div className="head" >
        <h1 className='text-center m-4'  >Employe Managment System</h1>
      </div>
      <div className="content" >
        <p className="p-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra ornare neque, suscipit pretium dolor lobortis quis. Nulla ac tellus id diam finibus accumsan eu sit amet augue. Donec eu justo eget diam tincidunt cursus a efficitur lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed porttitor ligula nibh, ac sollicitudin erat rutrum nec. Sed sed condimentum mi, in venenatis neque. Pellentesque at elementum eros. Etiam commodo velit eget nisl imperdiet interdum a at metus. Suspendisse et dolor mi. Vivamus mollis metus a est vestibulum fringilla.

Pellentesque quis viverra mi. Vestibulum a tempor ligula, quis lobortis metus. Quisque blandit tempus ex a sollicitudin. Nam dignissim nulla sit amet tortor aliquet, et consectetur sapien volutpat. In nibh risus, porttitor eu tellus ac, pellentesque viverra mi. Phasellus dictum turpis mauris, eget ornare mi elementum et. Aliquam sed sapien posuere, viverra sapien sodales, finibus justo. Aliquam sed iaculis turpis, a suscipit massa. Integer libero orci, euismod vel interdum at, tempus sed erat. Aliquam erat volutpat. Integer nec ex pellentesque, sollicitudin tellus placerat, scelerisque odio.</p>
      </div>
        <Link to={'/add'}>
        <Button className='btn btn-info'>Add <FaUserPlus/> </Button>
        </Link>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>Uname</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        Employee && Employee.length>0 ?
        Employee.map((item)=>(
            <tr>
                <td>{item.uname}</td>
                <td>{item.age}</td>
                <td>{item.desg}</td>
                <td>{item.salary}</td>
                <td>
                    <Link to={'/edit'}>
                    <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)} className='btn btn-info'>Edit <FaUserEdit/></Button>
                    </Link>
                    
                <Button onClick={()=>handleDelete(item.id)} className='btn btn-dark'>Delete <FaTrashAlt/></Button></td>
                

            </tr>
            

        )) :'Error'
       }
      </tbody>
    </Table>
    </div>
  )
}

export default Home