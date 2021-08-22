<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\Product_Table;

class ProductController extends Controller
{
    
//
public function index(Request $req){
   
    if($req->session()->has('email')){
        $users= Product_Table::all();
        //return view('userlist')->with('userlist',$users);
        return view('products.productlist')->with('productlist',$users);
    }
    else{
        $req->session()->flash('msg','Invalid request');
        return redirect('/login');
    }
}

public function verify(Request $req){

$validation= Validator::make($req->all(),[
    'product_name'=>'required|max:10',
    'MRP'=>'required|max:10'
    // 'email'=>'required|min:5',
    // 'role'=>'required|max:5'
]);

if($validation->fails())
{
    return back()
    ->with('errors',$validation->errors())
    ->withInput()
    ;
}

}

public function create(){
    return view('products.create');
}

public function edit($id){
    //echo $id;
    $user=Product_Table::find($id);
    return view('products.edit')->with('user',$user);
}

public function update(Request $req,$id){
    //echo $id;
    $user=Product_Table::find($id);
    $user->product_name=$req->product_name;
    $user->MRP=$req->MRP;
    // $user->email=$req->email;
    // $user->role=$req->role;
    $user->save();

    return redirect('/productlist');

}

// public function delete($id){
//     echo $id;
// }

// public function destroy(Request $req,$id){
//     echo $id;
// }

public function getUserList(){
    return [
        ['id'=>1,'username'=>'shuprov','password'=>'123','email'=>'asif@gmail.com','role'=>'admin'],
        ['id'=>2,'username'=>'asif','password'=>'1234','email'=>'abc@gmail.com','role'=>'user'],
        ['id'=>3,'username'=>'paul','password'=>'12345','email'=>'xyz@gmail.com','role'=>'user']

    ];
}

public function submit(Request $req){
    $data= $req->all();
    Product_Table::create($data);
    return redirect ('/productlist');
}

public function delete($id)
{
    Product_Table::find($id)->delete();
    return redirect()->back();
}


}
