import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Editproduct extends Component
 {
     state={
         product_name:'',
         MRP:''
        //  email:'',
        //  role:''

     }

     handleInput=(e)=>{
          this.setState({
              [e.target.name]: e.target.value
          });

     }

     async componentDidMount(){
         const product_id=this.props.match.params.id;
        //  console.log(user_id);
         const res=await axios.get(`http://localhost:8000/api/edit-product/${product_id}`);
         if(res.data.status===200){
               this.setState({
                product_name: res.data.product.product_name,
                MRP: res.data.product.MRP
                // email:res.data.user.email,
                // role:res.data.user.role
               });
         }
     }

     updateProduct=async (e)=>{
         e.preventDefault();

         document.getElementById('updatebtn').disabled=true;
document.getElementById('updatebtn').innerText="Updating";

         const product_id=this.props.match.params.id;
         const res= await axios.put(`http://localhost:8000/api/update-product/${product_id}`,this.state);
         if(res.data.status=== 200)
         {
            console.log(res.data.message);
            document.getElementById('updatebtn').disabled=false;
            document.getElementById('updatebtn').innerText="Update Product";

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
                                <h4>Edit Products
                                    <Link to={'/view-product'} className="btn btn-primary btn-sm float-end">BACK</Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateProduct}>
                                    <div className="form-group mb-3">
                                        <label>Product Name</label>
                                        <input type="text" name="product_name" onChange={this.handleInput} value={this.state.product_name} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>MRP</label>
                                        <input type="text" name="MRP" onChange={this.handleInput} value={this.state.MRP} className="form-control"  />

                                    </div>
                                    {/* <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Role</label>
                                        <input type="text" name="role" onChange={this.handleInput} value={this.state.role} className="form-control"  />

                                    </div> */}
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Update Product</button>

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

 export default Editproduct;