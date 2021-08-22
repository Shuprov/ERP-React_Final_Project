<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\shopsController;
use App\Http\Controllers\dashboardController;
use App\Http\Controllers\contactController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
    
});

Route ::post('/registation', [UserController::class, 'store']);
Route ::post('/contact', [contactController::class, 'message_api']);
Route ::post('/contact1', [shopsController::class, 'refand_api']);
Route::post('/login', [UserController::class, 'loginVerify_api']);
Route::post('/reviewdashboard', [shopsController::class, 'review_api']);
Route::get('/product', [productController::class, 'api_products']);
Route::get('/shop', [shopsController::class, 'api_shop']);
Route::get('/dashboard', [dashboardController::class, 'api_productslist']);
