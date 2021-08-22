import axios from 'axios';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

 class User extends Component
 {
     state={

        users: [],
        loading: true
     }

     async componentDidMount(){
          const res= await axios.get('http://localhost:8000/api/users');
          //console.log(res);
          if(res.data.status===200)
          {
             this.setState({
                 users: res.data.users,
                 loading: false
             });
          }
     }

     deleteUser= async (e,id)=>{
         const deleteExecuted=e.currentTarget;
         deleteExecuted.innerText="Deleting";

         const res=await axios.delete(`http://localhost:8000/api/delete-user/${id}`);
         if(res.data.status===200){
             deleteExecuted.closest("tr").remove();
             console.log(res.data.message);
         }
     }


    render(){
        var user_HTMLTABLE="";

        if(this.state.loading){
            user_HTMLTABLE=<tr><td colSpan="7"><h2>Loading...</h2></td></tr>;
        }
        else{
            user_HTMLTABLE=this.state.users.map((item)=>{
                return(
                   <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.username}</td>
                       <td>{item.password}</td>
                       <td>{item.email}</td>
                       <td>{item.role}</td>

                       <td>
                           <Link to={`edit-user/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                       </td>
                       <td>
                           <button type="button" onClick={(e)=>this.deleteUser(e,item.id)} className="btn btn-danger btn-sm">Delete</button>
                       </td>
                   </tr>
                );
            });
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Users Data
                                    <Link to={'add-user'} className="btn btn-primary btn-sm float-end">Add User</Link>
                                    <Link to={'view-product'} className="btn btn-primary btn-sm float-end">View Product</Link>


                                </h4>

                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Edit</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                            {user_HTMLTABLE}
                                    </tbody>

                                </table>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        );
    }
 }

 export default User;