<?php

namespace App\Http\Controllers;

use App\Models\cart;
use App\Models\refand;
use Illuminate\Http\Request;
use App\Models\shop;
use App\Models\review;
use App\Http\Requests\RefandRequest;
use App\Http\Requests\ReviewRequest;

use Carbon\carbon;

class shopsController extends Controller
{


    //start shop part.....--
    public function shop()
    {
        $var = shop::all();
        // dd($var);
        return view('customer.allshops', compact('var'));
    }

    public function api_shop()
    {
        $var = shop::all();
        return response()->json([
            'status'=> 200,
            'product'=> $var,
            
    
            ]);
      
    }
    //end shop part......

    //start campaigns part.....
    public function camp()
    {
        return view('customer.campaigns');
    }
    //start cart part...
    public function cart(Request $request)
    {
        if (!empty($request->session()->get('name'))) {
            $cart_item = cart::where("customer_id", $request->session()->get('id'))->get();
            return view('customer.cart',compact("cart_item"));
        } else {
            return redirect("/login");
        }
    }
    //end cart  part...
    //start checkout part...
    public function check()
    {
        return view('customer.checkout');
    }
    //end checkout part...

    // review controller..
    public function review(ReviewRequest $request)
    {
        //insert
        review::insert([
            'customer_name' => $request->customer_name,
            'product_id' => $request->product_id,
            'product_catagory' => $request->product_catagory,
            'product_review' => $request->product_review,
            'created_at' => Carbon::now()
        ]);
        return redirect('/dashboard');
    }
    public function review_api(ReviewRequest $request)
    {
        
            $customer = new review();
            $customer->customer_name  = $request->input('customer_name');
            $customer->product_id  = $request->input('product_id');
            $customer->product_catagory  = $request->input('product_catagory');
            $customer->product_review  = $request->input('product_review');
            $customer->save();
            return response()->json([
                'status' => 200,
                'message' => 'Reviews form Submitted',
        
        ]);
        
    }

    //refand controller
    public function refand(RefandRequest $request)
    {
        //insert
        refand::insert([
            'invoice' => $request->invoice,
            'payment_ethode' => $request->payment_method,
            'phone' => $request->phone,
            'message' => $request->message,
            'created_at' => Carbon::now()
        ]);
        return redirect('/contact');
    }
    //refand API...
    public function refand_api(RefandRequest $request)
    {
        //insert
        
        $mes = new refand();
        $mes->invoice = $request->input('invoice');
        $mes->payment_ethode = $request->input('payment_method');
        $mes->phone = $request->input('phone');
        $mes->message = $request->input('message');
        $mes->save();
        
        return response()->json([
                    'status' => 200,
                    'message' => ' form Submitted',
        ]);
       
    }
}
