<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    
    
    public function index(){
        return view('welcome');
    }

    public function authorized(){
        
        if(Auth::check()){
            $user = User::find(Auth::id());
            return response()->json(['user' => $user], 200);
        }
        else{
            return response()->json(['user' => null],401);
        }
    }

}
