<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UserLogin;
use App\Models\room;
use Carbon\carbon;
use Validator;




class UserController extends Controller
{
    // <start login page>...
    public function log()
    {
        return view('customer.login');
    }
    //api
    public function customerview()
    {
        $registation = Registation::all();
        return response()->json([
            
            'status' => 200,
            'registation' =>$registation,
        ]);
    }
     /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('registation');
    }

    public function loginVerify(UserLogin $req)
    {
        // $req->validate([
        //     'register_id'=>'required',
        //     'register_password'=>'required'
        //  ]);

        //.......sir <code class="
        // dd($req->all());
        $result = DB::table('rooms')
            ->where('name', $req->register_id)
            ->where('passwoard', $req->register_password)
            ->first();
        // dd($result);
        //(isset($result->name))
        if (isset($result)) {
            $req->session()->put('name', $result->name);
            $req->session()->put('id', $result->id);
            //set session or cookie
            
            return redirect('/dashboard');
        } else {
            $req->session()->flash('msg', 'Invalid username or password!');
            return redirect('/login');
        }
        //-----sir code end

    }
    // <end start login page>...
    //start register page work..............
    //method
    public function reg()
    {
        return view('customer.register');
    }
    //start customer register ....
    public function store(UserRequest $request)
    {
        //insert
           // return $request->all();
            $customer = new room();
            $customer->name  = $request->input('user_name');
            $customer->address = $request->input('user_address');
            $customer->dob = $request->input('user_dob');
            $customer->contact_number = $request->input('user_mob');
            $customer->email = $request->input('user_email');
            $customer->passwoard = $request->input('user_password');
            $customer->save();
    
            return response()->json([
                'status' => 200,
                'message' => 'Registation form Submitted',
        ]);
       
    }
    //end customer register...
    public function loginVerify_api(Request $req)
    {
      
        // dd($req->all());
        $result = DB::table('rooms')
            ->where('name', $req->register_id)
            ->where('passwoard', $req->register_password)
            ->first();
        //  dd($result);
        //(isset($result->name)) Success
        
        if (isset($result)) {
           
            return response()->json([
                'status' => 200,
                'message' => 'Success',
        ]);
        } else {
            return response()->json([
                'status' => 200,
                'message' => 'Error',
        ]);
        }
       

    }

    //validation
    public function verify(UserRequest $req)
    {


        //working validation....


    }

    //end register page work...........
}
