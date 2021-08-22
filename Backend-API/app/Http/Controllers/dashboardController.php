<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
 use App\Models\cart;

class dashboardController extends Controller
{
    //method
    public function __construct()
    {
        $this->middleware("Customer");
    }
    public function dash(){
        return view('customer.profile.dashboard');
    }
     //last work
    //...show product list..
    public function productslist()
    {
        $hp = cart::all();
        //dd($asus);
        return view('customer.profile.dashboard', compact('hp'));
    }

    public function api_productslist()
    {
        $ras = cart::all();
       return json_encode($ras);
       
    }
    //---end product list..
}
