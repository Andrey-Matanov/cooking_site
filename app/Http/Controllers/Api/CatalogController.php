<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\RenameCategoryRequest;
use App\Models\Catalog;
use Illuminate\Http\Request;

class CatalogController extends Controller
{
    public function showAllCatalog()
    {
        return Catalog::get();
    }

    public function deletePositionFromCatalog($id)
    {
        $id = (int)$id;
        Catalog::destroy($id);

        return response()->json(['status' => true]);
    }

    public function addPositionCatalog(AddCategoryRequest $request)
    {
        $data = $request->only(['name']);
        $Catalog = new Catalog();
        $Catalog->name = $data['name'];
        $Catalog->save();

        return response()->json(['status' => true]);
    }

    public function renameCategory(RenameCategoryRequest $request)
    {
        $data = $request->only(['id','name']);
        $id = $data['id'];
        $name = $data['name'];
        $category = Catalog::find($id);
        $category->name = $name;
        $category->save();

        return response()->json(['status' => true]);
    }

}
