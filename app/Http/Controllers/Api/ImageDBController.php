<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ImageDB;
use Illuminate\Http\Request;

class ImageDBController extends Controller
{
    public function addimagetodb(Request $request)
    {
        $data = json_decode($request->getContent(),true);
        $imagedb = new ImageDB();
        $imagedb->image = $data['data'];
        if($imagedb->save()){
            return response()->json(['id' => $imagedb->id]);
        }else{
            return false;
        }
    }
    public function loadimagedb($id)
    {
        $data = ImageDB::find($id);
        if (!is_null($data)) {
            return response()->json(['status' => true, 'data' => $data->image]);
        } else {
            return response()->json(['status' => false, 'error' => 'File Not Found']);
        }
    }

}

