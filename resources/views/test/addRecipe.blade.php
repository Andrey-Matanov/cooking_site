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
    <h1>Тестовая форма для добавления нового рецепта.</h1>
    <br>
    <form action="{{route('addRecipe')}}" method="POST">
        @php
          use App\Models\User;
            $authors = User::all();
        @endphp

        Автор:
        <select name="author">
            @forelse($authors as $author)
                <option value="{{$author->id}}">{{ $author->name }}</option>
            @empty
                <option value="0">-</option>
            @endforelse
        </select>
        <br>
        Наименование блюда: <input type="text" name="name">
        <br><br>
        Описание блюда:
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <br><br>
        Время приготовления (мин.):
        <select name="time" id="time">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10" selected>10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
        </select>
        <br><br>
        Сложность:
        <select name="difficulty" id="difficulty">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5" selected>5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        <br><br>

        @php
        use App\Models\Catalog;
        $categories = Catalog::all();
        @endphp

        Раздел каталога:
        <select name="categories" id="categories">
            @forelse($categories as $category)
                <option value="{{$category->id}}">{{ $category->name }}</option>
            @empty
                <option value="0">-</option>
            @endforelse
        </select>

        <br><br>

        @php
            use Illuminate\Support\Facades\DB;
            $ingredients = DB::table('ingredients')->select('ingredients.id as id', 'ingredients.name', 'units.name as units_name')->join('units','ingredients.unit_id','=','units.id')->get();
        @endphp

        <fieldset>
            <legend>Ингредиенты</legend>
            <select name="ingredients[0].name">
                @forelse($ingredients as $ingredient)
                    <option value="{{$ingredient->id}}">{{ $ingredient->name }}({{$ingredient->units_name}})</option>
                @empty
                    <option value="0">-</option>
                @endforelse
            </select>
            <input type="text" name="ingredients[0].amount" value="5">
            <br>
            <select name="ingredients[1].name">
                @forelse($ingredients as $ingredient)
                    <option value="{{$ingredient->id}}">{{ $ingredient->name }}({{$ingredient->units_name}})</option>
                @empty
                    <option value="0">-</option>
                @endforelse
            </select>
            <input type="text" name="ingredients[1].amount" value="5">
            <br>
            <select name="ingredients[2].name">
                @forelse($ingredients as $ingredient)
                    <option value="{{$ingredient->id}}">{{ $ingredient->name }}({{$ingredient->units_name}})</option>
                @empty
                    <option value="0">-</option>
                @endforelse
            </select>
            <input type="text" name="ingredients[2].amount" value="5">
            <br>

        </fieldset>

        <fieldset>
            <legend>Этапы</legend>
            <fieldset>
                <legend>Этап 1</legend>
                Заголовок:
                <input type="text" name="steps[0].title" value="">
                <br>
                Описание:
                <textarea name="steps[0].description" cols="30" rows="10"></textarea>

            </fieldset>

            <fieldset>
                <legend>Этап 2</legend>
                Заголовок:
                <input type="text" name="steps[1].title" value="">
                <br>
                Описание:
                <textarea name="steps[1].description" cols="30" rows="10"></textarea>

            </fieldset>

            <fieldset>
                <legend>Этап 3</legend>
                Заголовок:
                <input type="text" name="steps[2].title" value="">
                <br>
                Описание:
                <textarea name="steps[2].description" cols="30" rows="10"></textarea>

            </fieldset>


        </fieldset>



        <button type="submit">Добавить</button>
    </form>
</body>
</html>
