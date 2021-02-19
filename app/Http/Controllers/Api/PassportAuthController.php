<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;

class PassportAuthController extends Controller
{
    /**
     * Registration Req
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Hash::make($request->password)
        ]);

        $token = $user->createToken('Laravel8PassportAuth')->accessToken;


        return response()->json(['token' => $token], 200);
    }

    /**
     * Login Req
     */
    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (auth()->attempt($data)) {
            $token = auth()->user()->createToken('Laravel8PassportAuth')->accessToken;
            $user = auth()->user();
            return response()->json(['token' => $token,'userid' => $user['id'], 'username'=> $user['name'],
            'useremail'=> $user['email'], 'userrole'=> 1, 'userIsAdmin'=> $user['isAdmin'] ], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    public function userinfo()
    {

        $user = auth()->user();

        return response()->json(['user' => $user], 200);

    }
}
