<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['status' => true, 'data' => Reviews::all()]);
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
        $review = new Reviews();
        $review->recipe_id = $data['recipe_id'];
        $review->author_id = 1;
        $review->description = $data['description'];
        ($review->save()) ? $status = true : $status = false;
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
        return response()->json(['status' => true, 'data' => Reviews::find($id)]);
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
        $review = Reviews::find($id);
        $review->recipe_id = $data['recipe_id'];
        $review->description = $data['description'];
        ($review->save()) ? $status = true : $status = false;

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
        Reviews::destroy($id) ? $status = true : $status = false;

        return response()->json(['status' => $status]);
    }
}
