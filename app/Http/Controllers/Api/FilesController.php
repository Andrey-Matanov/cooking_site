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
        $data = json_decode($request->getContent(),true);

        $path = $this->fileService->saveFile($data['data']);

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
