<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reviews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class ReviewsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->only('store','update','destroy');
    }
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

        $user = auth()->user();

        $review = new Reviews();
        $review->recipe_id = $data['recipe_id'];
        $review->author_id = $user->id;
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
        if (! Gate::allows('update-review', $id)) {
            abort(403);
        }
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
