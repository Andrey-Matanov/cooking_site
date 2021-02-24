<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;
use \App\Http\Middleware\Authenticate;
use App\Models\User;
use App\Http\Middleware\Admin;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService) {
        $this->middleware ('auth:api')->only('store', 'update', 'destroy');

        $this->userService = $userService;
    }

    // protected $isAdmin = session('isAdmin');

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status' => true, 'data' => User::all()]);
    }

       /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = json_decode($request->getContent(),true);
        $user = new User;
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = $data['password'];
        $user->remember_token = $data['remember_token'];
        $user->role = $data['role'];
        $user->isAdmin = $data['isAdmin'];
        ($user->save()) ? $status = true : $status = false;
        return response()->json(['status' => $status]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['status' => true, 'data' => User::Find($id)]);
    }

       /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = json_decode($request->getContent(),true);
        $user = User::find($id);
        if (isset($data['name'])) {
            $user->name = $data['name'];
        }
        if (isset($data['email'])) {
            $user->email = $data['email'];
        }
        if (isset($data['password'])) {
            $user->password = \Hash::make($data['password']);
        }
        ($user->save()) ? $status = true : $status = false;
        return response()->json(['status' => $status]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = (int)$id;
        $user=auth()->user();
        if($user['id'] == $id) {
            User::destroy($id) ? $status = true : $status = false;
        }elseif($user['is_Admin']){
            User::destroy($id) ? $status = true : $status = false;
        }else{
            $status = false;
        }
        return response()->json(['status' => $status]);
    }

    public function ratingList()
    {
        $result = $this->userService->giveRating();

        if ($result) {
            return response()->json(['status' => 'success','rating'=>$result]);
        }
        return response()->json(['status' => 'fail']);
    }

}
