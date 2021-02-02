<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>Тестовая форма для переименования категорий Каталога</h1>
<br>
<br>

<form action="{{route('renameCategory')}}" method="POST">
    Выберите позицию каталога, которую нужно переименовать:
    <br>
    <br>
@php
use App\Models\Catalog;
$categories = Catalog::get();
@endphp
    <select name="id" id="id">
    @forelse($categories as $category)
            <option value="{{$category->id}}">{{ $category->name }}</option>
    @empty

    @endforelse
    </select>

    Новое наименование позиции:
    <br>
    <input type="text" name="name">
    <br>
    <br>
    <button type="submit">Заменить название</button>
</form>


</body>
</html>
