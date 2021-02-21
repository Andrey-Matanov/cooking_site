<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Services\FileService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FilesController extends Controller
{
    protected $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function saveFile(Request $request)
    {
        if (!($request->hasFile('image')))
        {
            return response()->json([
                'status' => 'fail'
            ]);
        }

        $file = $request->file('image');
        $extension = $file->extension();

        $path = $this->fileService->saveFile($file);

        if (!($path)) {
            return response()->json([
                'status' => 'fail'
            ]);
        }

        return response()->json([
            'status' => 'success',
            'path' => $path
        ]);
    }
}
