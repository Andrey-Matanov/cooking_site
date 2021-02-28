<?php


namespace App\Services;


use Illuminate\Support\Facades\Storage;

class FileService
{
    public function saveFile($imageString)
    {
        list($type, $file_data) = explode(';', $imageString);
        list(, $file_data) = explode(',', $file_data);
        list($typeFile,$extension) = explode('/', $type);

        if ($typeFile != 'image') {
            return false;
        }

        do {
            $imageName = substr(md5(microtime() . rand(0, 9999)), 0, 20).'.'.$extension;
        } while ((Storage::disk('public')->exists("images/$imageName")));

        $path = Storage::put("public/images/$imageName", base64_decode($file_data),'public');

        if ($path)
        {
            return $imageName;
        } else
        {
            return false;
        }
    }

}
