import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Adduser extends Component
 {
     state={
         name:'',
         password:'',
         email:'',
         role:''

     }

     handleInput=(e)=>{
          this.setState({
              [e.target.name]: e.target.value
          });

     }

     saveUser=async (e)=>{
         e.preventDefault();
         const res= await axios.post('http://localhost:8000/api/add-user',this.state);
         if(res.data.status=== 200)
         {
            console.log(res.data.message);
            this.setState({
                name:'',
                password:'',
                email:'',
                role:''
            });
         }
     }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Users
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveUser}>
                                    <div className="form-group mb-3">
                                        <label>Username</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="text" name="password" onChange={this.handleInput} value={this.state.password} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Role</label>
                                        <input type="text" name="role" onChange={this.handleInput} value={this.state.role} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save User</button>

                                    </div>
                                </form>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        );
    }
 }

 export default Adduser;