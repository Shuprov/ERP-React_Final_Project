import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

 class Addproduct extends Component
 {
     state={
         product_name:'',
         MRP:''

     }

     handleInput=(e)=>{
          this.setState({
              [e.target.name]: e.target.value
          });

     }

     saveProduct=async (e)=>{
         e.preventDefault();
         const res= await axios.post('http://localhost:8000/api/add-product',this.state);
         if(res.data.status=== 200)
         {
            console.log(res.data.message);
            this.setState({
                product_name:'',
                MRP:''
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
                                <h4>Add Products
                                    <Link to={'/view-product'} className="btn btn-primary btn-sm float-end">BACK</Link>

                                </h4>

                            </div>
                            <div className="card-body">
                                <form onSubmit={this.saveProduct}>
                                    <div className="form-group mb-3">
                                        <label>Product Name</label>
                                        <input type="text" name="product_name" onChange={this.handleInput} value={this.state.product_name} className="form-control"  />

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>MRP</label>
                                        <input type="text" name="MRP" onChange={this.handleInput} value={this.state.MRP} className="form-control"  />

                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Save Product</button>

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

 export default Addproduct;