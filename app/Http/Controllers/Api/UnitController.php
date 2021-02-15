<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status' => true, 'data' => Unit::all()]);
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
        $unit = new Unit();
        $unit->name = $data['name'];
        if( $unit->save()){
            return response()->json(['status' => true]);
        }else{
            return response()->json(['status' => false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $id = (int)$id;
        return response()->json(['status' => true, 'data' => Unit::find($id)]);
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
        $id = (int)$id;
        $data = json_decode($request->getContent(),true);
        $unit = Unit::find($id);
        $unit->name = $data['name'];

        ($unit->save()) ? $status = true : $status = false;

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
        Unit::destroy($id) ? $status = true : $status = false;

        return response()->json(['status' => $status]);
    }
}
