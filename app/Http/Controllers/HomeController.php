<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('welcome');
    }

    public function users(){
        
        if(request()->ajax()){
            $users = User::orderBy('id', 'DESC')->paginate(8);
            return response()->json(['users' => $users], 200);
        }
        else{
            return view('welcome');
        }
        
    }

    public function userDelete($id){
        User::find($id)->delete();
        return response()->json(['status' => 'Success'], 200);
    }
}
