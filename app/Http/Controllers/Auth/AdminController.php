<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function adminPanel(){
        return route('adminPanel');
    }
}
