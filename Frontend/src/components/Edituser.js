import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Edituser extends Component
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

     async componentDidMount(){
         const user_id=this.props.match.params.id;
        //  console.log(user_id);
         const res=await axios.get(`http://localhost:8000/api/edit-user/${user_id}`);
         if(res.data.status===200){
               this.setState({
                name: res.data.user.username,
                password: res.data.user.password,
                email:res.data.user.email,
                role:res.data.user.role
               });
         }
     }

     updateUser=async (e)=>{
         e.preventDefault();

         document.getElementById('updatebtn').disabled=true;
document.getElementById('updatebtn').innerText="Updating";

         const user_id=this.props.match.params.id;
         const res= await axios.put(`http://localhost:8000/api/update-user/${user_id}`,this.state);
         if(res.data.status=== 200)
         {
            console.log(res.data.message);
            document.getElementById('updatebtn').disabled=false;
            document.getElementById('updatebtn').innerText="Update User";

            // this.setState({
            //     name:'',
            //     password:'',
            //     email:'',
            //     role:''
            // });
         }
     }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Users
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateUser}>
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
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update User</button>

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

 export default Edituser;