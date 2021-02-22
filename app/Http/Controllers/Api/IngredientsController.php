<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ingredients;
use App\Models\Recipe;
use Illuminate\Http\Request;

class IngredientsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status' => true, 'data' => Ingredients::all()]);
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
        $ingredient = new Ingredients();
        $ingredient->name = $data['name'];
        $ingredient->unit_id = $data['unit_id'];
        $ingredient->product_fat = $data['product_fat'];
        $ingredient->product_protein = $data['product_protein'];
        $ingredient->product_carb = $data['product_carb'];
        $ingredient->calorie = $data['calorie'];

        if( $ingredient->save()){
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
        return response()->json(['status' => true, 'data' => Ingredients::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$id)
    {
        $id = (int)$id;
        $data = json_decode($request->getContent(),true);
        $ingredient = Ingredients::findOrFail($id);
        $ingredient->name = $data['name'];
        $ingredient->unit_id = $data['unit_id'];
        $ingredient->product_fat = $data['product_fat'];
        $ingredient->product_protein = $data['product_protein'];
        $ingredient->product_carb = $data['product_carb'];
        $ingredient->calorie = $data['calorie'];
        if( $ingredient->save()){
            return response()->json(['status' => true]);
        }else{
            return response()->json(['status' => false]);
        }
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
        if( Ingredients::destroy($id))
        {
            return response()->json(['status' => true]);
        }else{
            return response()->json(['status' => false]);
        }
    }
}
