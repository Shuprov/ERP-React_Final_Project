<?php

namespace App\Http\Controllers;


use App\Http\Requests\UserContact;
use Carbon\carbon;
use App\Models\contact;

use Illuminate\Http\Request;

class contactController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware("Contact");
    // }
    //
  public function contact(){
      return view('customer.contact');
  }


  public function message(UserContact $request)
    {
        // dd($request->all());
        //insert
        contact::insert([
            'name' => $request->c_name,
            'email'=>$request->c_email,
            'phone'=> $request->c_phone,
            'subject'=> $request->c_subject,
            'message'=> $request->c_message,            
            'created_at'=> Carbon::now()
        ]);
        return redirect('/contact');
    }
    //API
    public function message_api(Request $request)
    {
        // dd($request->all());
        //insert
        $cont = new contact();
            $cont->name  = $request->input('c_name');
            $cont->email = $request->input('c_email');
            $cont->phone = $request->input('c_phone');
            $cont->subject = $request->input('c_subject');
            $cont->message = $request->input('c_message');
            $cont->save();
    
            return response()->json([
                'status' => 200,
                'message' => ' form Submitted',
            ]);
    }
}
