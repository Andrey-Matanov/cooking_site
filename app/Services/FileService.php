<?php


namespace App\Services;


use Illuminate\Support\Facades\Storage;

class FileService
{
    public function saveFile($file)
    {
        $extension = $file->extension();
        do {
            $fileName = substr(md5(microtime() . rand(0, 9999)), 0, 20).'.'.$extension;
        } while ((Storage::disk('public')->exists("images/$fileName")));

        $path = $file->storeAs('images',$fileName,'public');

        if ($path)
        {
            return $path;
        } else
        {
            return false;
        }
    }
}
