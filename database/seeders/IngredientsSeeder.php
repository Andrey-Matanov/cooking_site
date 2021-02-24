<?php

namespace Database\Seeders;

use App\Models\Ingredients;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
/*        \DB::table('ingredients')->insert($this->getData());*/

        $foods = [
            "1"=> [
                "name"=> "Абрикосы",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "10.5",
                "calorie"=> "46.0"
            ],
            "2"=> [
                "name"=> "Абрикосы сушёные - курага",
                "product_protein"=> "5.2",
                "product_fat"=> "0.0",
                "product_carb"=> "55.0",
                "calorie"=> "234.0"
            ],
            "3"=> [
                "name"=> "Айва",
                "product_protein"=> "0.6",
                "product_fat"=> "0.0",
                "product_carb"=> "8.9",
                "calorie"=> "38.0"
            ],
            "4"=> [
                "name"=> "Алыча",
                "product_protein"=> "0.2",
                "product_fat"=> "0.0",
                "product_carb"=> "7.4",
                "calorie"=> "34.0"
            ],
            "5"=> [
                "name"=> "Ананас",
                "product_protein"=> "0.4",
                "product_fat"=> "0.0",
                "product_carb"=> "11.8",
                "calorie"=> "48.0"
            ],
            "6"=> [
                "name"=> "Ананасовый сок",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "12.8",
                "calorie"=> "51.0"
            ],
            "7"=> [
                "name"=> "Апельсин",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "8.4",
                "calorie"=> "38.0"
            ],
            "8"=> [
                "name"=> "Апельсиновый сок",
                "product_protein"=> "0.6",
                "product_fat"=> "0.0",
                "product_carb"=> "10.0",
                "calorie"=> "43.0"
            ],
            "9"=> [
                "name"=> "Арбуз",
                "product_protein"=> "0.7",
                "product_fat"=> "0.0",
                "product_carb"=> "9.2",
                "calorie"=> "38.0"
            ],
            "10"=> [
                "name"=> "Арихис жареный солёный",
                "product_protein"=> "27.6",
                "product_fat"=> "42.5",
                "product_carb"=> "15.0",
                "calorie"=> "600.0"
            ],
            "11"=> [
                "name"=> "Баклажаны",
                "product_protein"=> "0.6",
                "product_fat"=> "0.1",
                "product_carb"=> "5.5",
                "calorie"=> "24.0"
            ],
            "12"=> [
                "name"=> "Банан",
                "product_protein"=> "1.5",
                "product_fat"=> "0.0",
                "product_carb"=> "22.4",
                "calorie"=> "91.0"
            ],
            "13"=> [
                "name"=> "Белые свежие грибы",
                "product_protein"=> "3.2",
                "product_fat"=> "0.7",
                "product_carb"=> "1.6",
                "calorie"=> "25.0"
            ],
            "14"=> [
                "name"=> "Белые сушёные грибы",
                "product_protein"=> "27.6",
                "product_fat"=> "6.8",
                "product_carb"=> "10.0",
                "calorie"=> "209.0"
            ],
            "15"=> [
                "name"=> "Бобы",
                "product_protein"=> "6.0",
                "product_fat"=> "0.1",
                "product_carb"=> "8.3",
                "calorie"=> "58.0"
            ],
            "16"=> [
                "name"=> "Бразильский",
                "product_protein"=> "14.3",
                "product_fat"=> "66.9",
                "product_carb"=> "7.8",
                "calorie"=> "703.0"
            ],
            "17"=> [
                "name"=> "Брусника",
                "product_protein"=> "0.7",
                "product_fat"=> "0.0",
                "product_carb"=> "8.6",
                "calorie"=> "40.0"
            ],
            "18"=> [
                "name"=> "Брюква",
                "product_protein"=> "1.2",
                "product_fat"=> "0.1",
                "product_carb"=> "8.1",
                "calorie"=> "37.0"
            ],
            "22"=> [
                "name"=> "Ветчина",
                "product_protein"=> "10.0",
                "product_fat"=> "35.0",
                "product_carb"=> "0.0",
                "calorie"=> "355.0"
            ],
            "23"=> [
                "name"=> "Вино белое ",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "0.0",
                "calorie"=> "108.0"
            ],
            "24"=> [
                "name"=> "Виноград",
                "product_protein"=> "0.4",
                "product_fat"=> "0.0",
                "product_carb"=> "17.5",
                "calorie"=> "69.0"
            ],
            "27"=> [
                "name"=> "Вишня",
                "product_protein"=> "0.8",
                "product_fat"=> "0.0",
                "product_carb"=> "11.3",
                "calorie"=> "49.0"
            ],
            "28"=> [
                "name"=> "Вишня мороженная",
                "product_protein"=> "0.9",
                "product_fat"=> "0.4",
                "product_carb"=> "10.9",
                "calorie"=> "47.0"
            ],
            "32"=> [
                "name"=> "Голубика",
                "product_protein"=> "1.0",
                "product_fat"=> "0.0",
                "product_carb"=> "7.7",
                "calorie"=> "37.0"
            ],
            "33"=> [
                "name"=> "Горбуша натуральная консервы",
                "product_protein"=> "21.00",
                "product_fat"=> "6.0",
                "product_carb"=> "0.0",
                "calorie"=> "138.0"
            ],
            "34"=> [
                "name"=> "Горох",
                "product_protein"=> "23.0",
                "product_fat"=> "1.2",
                "product_carb"=> "56.3",
                "calorie"=> "303.0"
            ],
            "35"=> [
                "name"=> "Горошек зелёный",
                "product_protein"=> "5.0",
                "product_fat"=> "0.2",
                "product_carb"=> "13.3",
                "calorie"=> "72.0"
            ],
            "36"=> [
                "name"=> "Горошек зелёный консервированный",
                "product_protein"=> "5.5",
                "product_fat"=> "0.6",
                "product_carb"=> "11.5",
                "calorie"=> "73.0"
            ],
            "37"=> [
                "name"=> "Горчица русская",
                "product_protein"=> "9.3",
                "product_fat"=> "8.0",
                "product_carb"=> "11.0",
                "calorie"=> "175.0"
            ],
            "38"=> [
                "name"=> "Горчичное зерно",
                "product_protein"=> "0.0",
                "product_fat"=> "99.8",
                "product_carb"=> "0.0",
                "calorie"=> "898.0"
            ],
            "39"=> [
                "name"=> "Гранат",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "11.8",
                "calorie"=> "52.0"
            ],
            "41"=> [
                "name"=> "Грейпфрукт",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "7.3",
                "calorie"=> "35.0"
            ],
            "43"=> [
                "name"=> "Грецкий орех",
                "product_protein"=> "14.8",
                "product_fat"=> "64.0",
                "product_carb"=> "13.7",
                "calorie"=> "698.0"
            ],
            "44"=> [
                "name"=> "Гречиха",
                "product_protein"=> "11.6",
                "product_fat"=> "2.3",
                "product_carb"=> "59.5",
                "calorie"=> "290.0"
            ],
            "45"=> [
                "name"=> "Гречка - крупа ядрица",
                "product_protein"=> "12.5",
                "product_fat"=> "2.1",
                "product_carb"=> "62.0",
                "calorie"=> "351.0"
            ],
            "46"=> [
                "name"=> "Грузди свежие",
                "product_protein"=> "1.8",
                "product_fat"=> "0.8",
                "product_carb"=> "1.1",
                "calorie"=> "19.0"
            ],
            "47"=> [
                "name"=> "Груша",
                "product_protein"=> "0.4",
                "product_fat"=> "0.0",
                "product_carb"=> "10.7",
                "calorie"=> "42.0"
            ],
            "48"=> [
                "name"=> "Дрожжи",
                "product_protein"=> "43.0",
                "product_fat"=> "5.7",
                "product_carb"=> "38.0",
                "calorie"=> "361.0"
            ],
            "49"=> [
                "name"=> "Дыня",
                "product_protein"=> "0.6",
                "product_fat"=> "0.0",
                "product_carb"=> "9.6",
                "calorie"=> "39.0"
            ],
            "50"=> [
                "name"=> "Ежевика",
                "product_protein"=> "2.0",
                "product_fat"=> "0.0",
                "product_carb"=> "5.3",
                "calorie"=> "33.0"
            ],
            "51"=> [
                "name"=> "Земляника",
                "product_protein"=> "1.8",
                "product_fat"=> "0.0",
                "product_carb"=> "8.1",
                "calorie"=> "41.0"
            ],
            "53"=> [
                "name"=> "Изюм",
                "product_protein"=> "2.5",
                "product_fat"=> "0.2",
                "product_carb"=> "76.5",
                "calorie"=> "321.0"
            ],
            "55"=> [
                "name"=> "Индейка - рулет копчёно-варёный",
                "product_protein"=> "5.0",
                "product_fat"=> "17.0",
                "product_carb"=> "0.0",
                "calorie"=> "190.0"
            ],
            "56"=> [
                "name"=> "Инжир",
                "product_protein"=> "0.7",
                "product_fat"=> "0.0",
                "product_carb"=> "13.9",
                "calorie"=> "56.0"
            ],
            "57"=> [
                "name"=> "Инжир",
                "product_protein"=> "3.0",
                "product_fat"=> "1.0",
                "product_carb"=> "50.0",
                "calorie"=> "210.0"
            ],
            "62"=> [
                "name"=> "Йогурт молочный полужирный",
                "product_protein"=> "3.4",
                "product_fat"=> "1.5",
                "product_carb"=> "12.3",
                "calorie"=> "74.0"
            ],
            "63"=> [
                "name"=> "Кабачки",
                "product_protein"=> "0.6",
                "product_fat"=> "0.3",
                "product_carb"=> "5.7",
                "calorie"=> "27.0"
            ],
            "64"=> [
                "name"=> "Какао порошок",
                "product_protein"=> "24.7",
                "product_fat"=> "15.0",
                "product_carb"=> "28.5",
                "calorie"=> "364.0"
            ],
            "65"=> [
                "name"=> "Какао сухой растворимый с сахаром",
                "product_protein"=> "5.0",
                "product_fat"=> "3.0",
                "product_carb"=> "83.5",
                "calorie"=> "380.0"
            ],
            "66"=> [
                "name"=> "Кальмар ",
                "product_protein"=> "18.0",
                "product_fat"=> "2.0",
                "product_carb"=> "0.0",
                "calorie"=> "98.0"
            ],
            "70"=> [
                "name"=> "Капуста белокочанная ",
                "product_protein"=> "1.8",
                "product_fat"=> "0.0",
                "product_carb"=> "5.4",
                "calorie"=> "28.0"
            ],
            "71"=> [
                "name"=> "Капуста брокколи",
                "product_protein"=> "2.6",
                "product_fat"=> "0.5",
                "product_carb"=> "4.5",
                "calorie"=> "28.0"
            ],
            "72"=> [
                "name"=> "Капуста брюссельская",
                "product_protein"=> "4.8",
                "product_fat"=> "0.0",
                "product_carb"=> "6.7",
                "calorie"=> "46.0"
            ],
            "73"=> [
                "name"=> "Капуста кольраби",
                "product_protein"=> "2.8",
                "product_fat"=> "0.0",
                "product_carb"=> "8.3",
                "calorie"=> "43.0"
            ],
            "74"=> [
                "name"=> "Капуста краснокочанная",
                "product_protein"=> "1.8",
                "product_fat"=> "0.0",
                "product_carb"=> "6.1",
                "calorie"=> "31.0"
            ],
            "75"=> [
                "name"=> "Капуста морская",
                "product_protein"=> "0.9",
                "product_fat"=> "0.2",
                "product_carb"=> "0.0",
                "calorie"=> "5.0"
            ],
            "76"=> [
                "name"=> "Капуста цветная",
                "product_protein"=> "2.5",
                "product_fat"=> "0.0",
                "product_carb"=> "4.9",
                "calorie"=> "29.0"
            ],
            "77"=> [
                "name"=> "Карп",
                "product_protein"=> "16.0",
                "product_fat"=> "3.6",
                "product_carb"=> "1.3",
                "calorie"=> "96.0"
            ],
            "78"=> [
                "name"=> "Картофель",
                "product_protein"=> "2.0",
                "product_fat"=> "0.1",
                "product_carb"=> "19.7",
                "calorie"=> "83.0"
            ],
            "83"=> [
                "name"=> "Кефир 1%",
                "product_protein"=> "3.0",
                "product_fat"=> "1.0",
                "product_carb"=> "3.8",
                "calorie"=> "39.0"
            ],
            "84"=> [
                "name"=> "Кефир 3,2%",
                "product_protein"=> "3.2",
                "product_fat"=> "3.2",
                "product_carb"=> "5.4",
                "calorie"=> "64.0"
            ],
            "86"=> [
                "name"=> "Кешью",
                "product_protein"=> "17.5",
                "product_fat"=> "42.2",
                "product_carb"=> "30.5",
                "calorie"=> "572.0"
            ],
            "87"=> [
                "name"=> "Кизил",
                "product_protein"=> "1.0",
                "product_fat"=> "0.0",
                "product_carb"=> "9.7",
                "calorie"=> "45.0"
            ],
            "88"=> [
                "name"=> "Клубника мороженная",
                "product_protein"=> "0.9",
                "product_fat"=> "0.4",
                "product_carb"=> "7.7",
                "calorie"=> "41.3"
            ],
            "89"=> [
                "name"=> "Клюква",
                "product_protein"=> "0.5",
                "product_fat"=> "0.0",
                "product_carb"=> "4.8",
                "calorie"=> "28.0"
            ],
            "109"=> [
                "name"=> "Кофе в зёрных",
                "product_protein"=> "13.9",
                "product_fat"=> "14.4",
                "product_carb"=> "4.1",
                "calorie"=> "223.0"
            ],
            "110"=> [
                "name"=> "Кофе растворимый ",
                "product_protein"=> "14.6",
                "product_fat"=> "0.0",
                "product_carb"=> "10.3",
                "calorie"=> "100.0"
            ],
            "111"=> [
                "name"=> "Краб",
                "product_protein"=> "16.0",
                "product_fat"=> "0.5",
                "product_carb"=> "0.0",
                "calorie"=> "69.0"
            ],
            "112"=> [
                "name"=> "Крабовые палочки имитация",
                "product_protein"=> "7.0",
                "product_fat"=> "1.0",
                "product_carb"=> "10.0",
                "calorie"=> "377.0"
            ],
            "114"=> [
                "name"=> "Креветки",
                "product_protein"=> "18.9",
                "product_fat"=> "0.8",
                "product_carb"=> "0.0",
                "calorie"=> "83.0"
            ],
            "115"=> [
                "name"=> "Крыжовник",
                "product_protein"=> "0.7",
                "product_fat"=> "0.0",
                "product_carb"=> "9.9",
                "calorie"=> "44.0"
            ],
            "116"=> [
                "name"=> "Кукуруза",
                "product_protein"=> "10.3",
                "product_fat"=> "4.9",
                "product_carb"=> "67.5",
                "calorie"=> "338.0"
            ],
            "117"=> [
                "name"=> "Кукуруза сладкая консервированная",
                "product_protein"=> "4.7",
                "product_fat"=> "1.6",
                "product_carb"=> "23.6",
                "calorie"=> "128.0"
            ],
            "118"=> [
                "name"=> "Кукурузное масло",
                "product_protein"=> "0.0",
                "product_fat"=> "99.9",
                "product_carb"=> "0.0",
                "calorie"=> "899.0"
            ],
            "119"=> [
                "name"=> "Курага",
                "product_protein"=> "5.5",
                "product_fat"=> "0.5",
                "product_carb"=> "63.5",
                "calorie"=> "291.0"
            ],
            "121"=> [
                "name"=> "Лапша яичная",
                "product_protein"=> "10.4",
                "product_fat"=> "1.6",
                "product_carb"=> "70.3",
                "calorie"=> "337.0"
            ],
            "122"=> [
                "name"=> "Ледяная рыба",
                "product_protein"=> "15.9",
                "product_fat"=> "0.9",
                "product_carb"=> "1.3",
                "calorie"=> "104.0"
            ],
            "123"=> [
                "name"=> "Ликёр маленькая рюмка",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "0.0",
                "calorie"=> "70.0"
            ],
            "124"=> [
                "name"=> "Лимон",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "3.6",
                "calorie"=> "31.0"
            ],
            "127"=> [
                "name"=> "Лук зелёный",
                "product_protein"=> "1.3",
                "product_fat"=> "0.0",
                "product_carb"=> "4.3",
                "calorie"=> "22.0"
            ],
            "128"=> [
                "name"=> "Лук репчатый",
                "product_protein"=> "1.7",
                "product_fat"=> "0.0",
                "product_carb"=> "9.5",
                "calorie"=> "43.0"
            ],
            "130"=> [
                "name"=> "Майонез любительский",
                "product_protein"=> "3.1",
                "product_fat"=> "47.0",
                "product_carb"=> "3.0",
                "calorie"=> "449.0"
            ],
            "131"=> [
                "name"=> "Майонез салатный ",
                "product_protein"=> "2.3",
                "product_fat"=> "55.0",
                "product_carb"=> "4.2",
                "calorie"=> "537.4"
            ],
            "141"=> [
                "name"=> "Малина",
                "product_protein"=> "0.8",
                "product_fat"=> "0.0",
                "product_carb"=> "9.0",
                "calorie"=> "41.0"
            ],
            "143"=> [
                "name"=> "Мандарин",
                "product_protein"=> "0.8",
                "product_fat"=> "0.0",
                "product_carb"=> "8.6",
                "calorie"=> "38.0"
            ],
            "145"=> [
                "name"=> "Маслины солёные",
                "product_protein"=> "1.23",
                "product_fat"=> "16.43",
                "product_carb"=> "4.78",
                "calorie"=> "172.91"
            ],
            "146"=> [
                "name"=> "Масло сливочное Вологодское",
                "product_protein"=> "0.5",
                "product_fat"=> "82.5",
                "product_carb"=> "0.8",
                "calorie"=> "748.0"
            ],
            "147"=> [
                "name"=> "Масло сливочное крестьянское ",
                "product_protein"=> "0.8",
                "product_fat"=> "72.5",
                "product_carb"=> "1.3",
                "calorie"=> "661.0"
            ],
            "148"=> [
                "name"=> "Маслята свежие",
                "product_protein"=> "0.9",
                "product_fat"=> "0.4",
                "product_carb"=> "3.2",
                "calorie"=> "19.0"
            ],
            "149"=> [
                "name"=> "Мёд",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "71.0",
                "calorie"=> "284.0"
            ],
            "150"=> [
                "name"=> "Миндаль жареный",
                "product_protein"=> "25.6",
                "product_fat"=> "32.2",
                "product_carb"=> "14.8",
                "calorie"=> "635.0"
            ],
            "151"=> [
                "name"=> "Мирабель",
                "product_protein"=> "1.0",
                "product_fat"=> "0.0",
                "product_carb"=> "8.6",
                "calorie"=> "40.0"
            ],
            "152"=> [
                "name"=> "Молоко 1,5%",
                "product_protein"=> "2.9",
                "product_fat"=> "1.5",
                "product_carb"=> "4.7",
                "calorie"=> "44.0"
            ],
            "153"=> [
                "name"=> "Молоко 3,2% жирности",
                "product_protein"=> "2.8",
                "product_fat"=> "3.2",
                "product_carb"=> "4.7",
                "calorie"=> "58.0"
            ],
            "154"=> [
                "name"=> "Молоко 3,5% жирности",
                "product_protein"=> "2.8",
                "product_fat"=> "3.5",
                "product_carb"=> "4.7",
                "calorie"=> "62.0"
            ],
            "155"=> [
                "name"=> "Молоко сгущённое \"Сгущёнка Молочная страна\"",
                "product_protein"=> "4.2",
                "product_fat"=> "8.5",
                "product_carb"=> "55.7",
                "calorie"=> "307.6"
            ],
            "156"=> [
                "name"=> "Молоко сгущённое \"Сгущёнка Смоленская\"",
                "product_protein"=> "7.4",
                "product_fat"=> "8.5",
                "product_carb"=> "55.8",
                "calorie"=> "325.0"
            ],
            "157"=> [
                "name"=> "Морковь жёлтая",
                "product_protein"=> "1.3",
                "product_fat"=> "0.1",
                "product_carb"=> "6.0",
                "calorie"=> "33.0"
            ],
            "158"=> [
                "name"=> "Морковь красная",
                "product_protein"=> "1.3",
                "product_fat"=> "0.1",
                "product_carb"=> "7.0",
                "calorie"=> "33.0"
            ],
            "161"=> [
                "name"=> "Морошка",
                "product_protein"=> "0.8",
                "product_fat"=> "0.0",
                "product_carb"=> "6.8",
                "calorie"=> "31.0"
            ],
            "164"=> [
                "name"=> "Нут",
                "product_protein"=> "20.1",
                "product_fat"=> "5.0",
                "product_carb"=> "54.2",
                "calorie"=> "329.0"
            ],
            "165"=> [
                "name"=> "Облепиха",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "5.5",
                "calorie"=> "30.0"
            ],
            "166"=> [
                "name"=> "Овёс",
                "product_protein"=> "10.1",
                "product_fat"=> "4.7",
                "product_carb"=> "57.8",
                "calorie"=> "300.0"
            ],
            "167"=> [
                "name"=> "Овсянные хлопья ",
                "product_protein"=> "11.0",
                "product_fat"=> "6.2",
                "product_carb"=> "51.0",
                "calorie"=> "305.0"
            ],
            "168"=> [
                "name"=> "Огурцы",
                "product_protein"=> "0.8",
                "product_fat"=> "0.0",
                "product_carb"=> "3.0",
                "calorie"=> "15.0"
            ],
            "169"=> [
                "name"=> "Огурцы маринованные",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "4.0",
                "calorie"=> "18.0"
            ],
            "170"=> [
                "name"=> "Огурцы солёные",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "4.0",
                "calorie"=> "15.0"
            ],
            "174"=> [
                "name"=> "Оливковое масло",
                "product_protein"=> "0.0",
                "product_fat"=> "99.9",
                "product_carb"=> "0.0",
                "calorie"=> "898.0"
            ],
            "175"=> [
                "name"=> "Опята свежие",
                "product_protein"=> "2.2",
                "product_fat"=> "0.7",
                "product_carb"=> "1.3",
                "calorie"=> "20.0"
            ],
            "177"=> [
                "name"=> "Пастернак корень",
                "product_protein"=> "1.4",
                "product_fat"=> "0.0",
                "product_carb"=> "11.0",
                "calorie"=> "47.0"
            ],
            "178"=> [
                "name"=> "Патиссоны",
                "product_protein"=> "0.6",
                "product_fat"=> "0.0",
                "product_carb"=> "4.3",
                "calorie"=> "19.0"
            ],
            "179"=> [
                "name"=> "Пекан (китайский орех)",
                "product_protein"=> "9.2",
                "product_fat"=> "71.2",
                "product_carb"=> "12.3",
                "calorie"=> "736.0"
            ],
            "180"=> [
                "name"=> "Перец",
                "product_protein"=> "1.3",
                "product_fat"=> "0.0",
                "product_carb"=> "4.7",
                "calorie"=> "27.0"
            ],
            "181"=> [
                "name"=> "Персики",
                "product_protein"=> "0.9",
                "product_fat"=> "0.0",
                "product_carb"=> "10.4",
                "calorie"=> "44.0"
            ],
            "182"=> [
                "name"=> "Петрушка зелень",
                "product_protein"=> "3.7",
                "product_fat"=> "0.0",
                "product_carb"=> "8.1",
                "calorie"=> "45.0"
            ],
            "183"=> [
                "name"=> "Петрушка корень",
                "product_protein"=> "1.5",
                "product_fat"=> "0.0",
                "product_carb"=> "11.0",
                "calorie"=> "47.0"
            ],
            "187"=> [
                "name"=> "Повидло вишнёвое с яблоком",
                "product_protein"=> "0.0",
                "product_fat"=> "0.0",
                "product_carb"=> "50.0",
                "calorie"=> "184.0"
            ],
            "188"=> [
                "name"=> "Подберёзовики свежие",
                "product_protein"=> "2.3",
                "product_fat"=> "0.9",
                "product_carb"=> "3.7",
                "calorie"=> "31.0"
            ],
            "189"=> [
                "name"=> "Подберёзовики сушёные",
                "product_protein"=> "24.0",
                "product_fat"=> "9.3",
                "product_carb"=> "37.2",
                "calorie"=> "319.0"
            ],
            "190"=> [
                "name"=> "Подосиновики свежие",
                "product_protein"=> "3.3",
                "product_fat"=> "0.5",
                "product_carb"=> "3.4",
                "calorie"=> "31.0"
            ],
            "191"=> [
                "name"=> "Подосиновики сушёные",
                "product_protein"=> "32.5",
                "product_fat"=> "4.9",
                "product_carb"=> "33.2",
                "calorie"=> "299.0"
            ],
            "192"=> [
                "name"=> "Подсолнечное масло",
                "product_protein"=> "0.0",
                "product_fat"=> "99.9",
                "product_carb"=> "0.0",
                "calorie"=> "899.0"
            ],
            "194"=> [
                "name"=> "Просо",
                "product_protein"=> "11.2",
                "product_fat"=> "3.8",
                "product_carb"=> "60.7",
                "calorie"=> "307.0"
            ],
            "195"=> [
                "name"=> "Простокваша 3,2%",
                "product_protein"=> "3.3",
                "product_fat"=> "3.2",
                "product_carb"=> "5.5",
                "calorie"=> "64.5"
            ],
            "196"=> [
                "name"=> "Пшеница",
                "product_protein"=> "11.6",
                "product_fat"=> "1.6",
                "product_carb"=> "68.7",
                "calorie"=> "318.0"
            ],
            "197"=> [
                "name"=> "Пшеничная мука",
                "product_protein"=> "11.0",
                "product_fat"=> "2.0",
                "product_carb"=> "72.0",
                "calorie"=> "350.0"
            ],
            "198"=> [
                "name"=> "Пшено - крупа шлифованная",
                "product_protein"=> "11.5",
                "product_fat"=> "3.3",
                "product_carb"=> "64.8",
                "calorie"=> "348.0"
            ],
            "200"=> [
                "name"=> "Рапсовое масло",
                "product_protein"=> "0.0",
                "product_fat"=> "99.85",
                "product_carb"=> "0.0",
                "calorie"=> "899.0"
            ],
            "201"=> [
                "name"=> "Ревень черешковый",
                "product_protein"=> "0.7",
                "product_fat"=> "0.0",
                "product_carb"=> "2.9",
                "calorie"=> "16.0"
            ],
            "202"=> [
                "name"=> "Редис",
                "product_protein"=> "1.2",
                "product_fat"=> "0.0",
                "product_carb"=> "4.1",
                "calorie"=> "20.0"
            ],
            "203"=> [
                "name"=> "Редька",
                "product_protein"=> "1.9",
                "product_fat"=> "0.0",
                "product_carb"=> "7.0",
                "calorie"=> "34.0"
            ],
            "204"=> [
                "name"=> "Репа",
                "product_protein"=> "1.5",
                "product_fat"=> "0.0",
                "product_carb"=> "5.9",
                "calorie"=> "28.0"
            ],
            "205"=> [
                "name"=> "Рис ",
                "product_protein"=> "7.3",
                "product_fat"=> "2.6",
                "product_carb"=> "63.1",
                "calorie"=> "284.0"
            ],
            "207"=> [
                "name"=> "Рис длиннозерновой шлифованный",
                "product_protein"=> "7.0",
                "product_fat"=> "0.5",
                "product_carb"=> "78.5",
                "calorie"=> "347.0"
            ],
            "208"=> [
                "name"=> "Рис коричневый слабошлифованный",
                "product_protein"=> "7.4",
                "product_fat"=> "2.2",
                "product_carb"=> "72.0",
                "calorie"=> "337.0"
            ],
            "209"=> [
                "name"=> "Рожь",
                "product_protein"=> "9.9",
                "product_fat"=> "1.6",
                "product_carb"=> "70.9",
                "calorie"=> "320.0"
            ],
            "210"=> [
                "name"=> "Рыжики свежие",
                "product_protein"=> "1.9",
                "product_fat"=> "0.8",
                "product_carb"=> "2.0",
                "calorie"=> "22.0"
            ],
            "211"=> [
            "name"=> "Рябина садовая",
            "product_protein"=> "1.4",
            "product_fat"=> "0.0",
            "product_carb"=> "12.5",
            "calorie"=> "58.0"
        ],
            "212"=> [
        "name"=> "Рябина черноплодная",
        "product_protein"=> "1.5",
        "product_fat"=> "0.0",
        "product_carb"=> "12.0",
        "calorie"=> "54.0"
    ],
            "213"=> [
        "name"=> "Ряженка 3,2%",
        "product_protein"=> "3.2",
        "product_fat"=> "3.2",
        "product_carb"=> "5.4",
        "calorie"=> "64.0"
    ],
            "215"=> [
        "name"=> "Салат",
        "product_protein"=> "1.5",
        "product_fat"=> "0.0",
        "product_carb"=> "2.2",
        "calorie"=> "14.0"
    ],

            "217"=> [
        "name"=> "Сахар",
        "product_protein"=> "0.0",
        "product_fat"=> "0.0",
        "product_carb"=> "99.8",
        "calorie"=> "374.0"
    ],
            "218"=> [
        "name"=> "Сахар рафинад быстрорастворимый ",
        "product_protein"=> "0.0",
        "product_fat"=> "0.0",
        "product_carb"=> "99.95",
        "calorie"=> "400.0"
    ],
            "219"=> [
        "name"=> "Свекла",
        "product_protein"=> "1.7",
        "product_fat"=> "0.0",
        "product_carb"=> "10.8",
        "calorie"=> "4.8"
    ],
            "220"=> [
        "name"=> "Свинина - балык особый",
        "product_protein"=> "10.0",
        "product_fat"=> "15.0",
        "product_carb"=> "0.0",
        "calorie"=> "175.0"
    ],
            "221"=> [
        "name"=> "Свинина - буженина",
        "product_protein"=> "15.0",
        "product_fat"=> "23.0",
        "product_carb"=> "0.0",
        "calorie"=> "267.0"
    ],
            "222"=> [
        "name"=> "Свинина - карбонад варёно-копчёный",
        "product_protein"=> "15.0",
        "product_fat"=> "20.0",
        "product_carb"=> "0.0",
        "calorie"=> "240.0"
    ],
            "223"=> [
        "name"=> "Свинина - корейка сырокопчёная",
        "product_protein"=> "12.3",
        "product_fat"=> "40.6",
        "product_carb"=> "0.0",
        "calorie"=> "415.0"
    ],
            "224"=> [
        "name"=> "Свиной язык консервированный",
        "product_protein"=> "12.0",
        "product_fat"=> "15.0",
        "product_carb"=> "0.0",
        "calorie"=> "185.0"
    ],
            "225"=> [
        "name"=> "Сельдерей зелень",
        "product_protein"=> "0.0",
        "product_fat"=> "0.0",
        "product_carb"=> "2.0",
        "calorie"=> "8.0"
    ],
            "226"=> [
        "name"=> "Сельдерей корень",
        "product_protein"=> "1.3",
        "product_fat"=> "0.0",
        "product_carb"=> "6.7",
        "calorie"=> "31.0"
    ],
            "230"=> [
        "name"=> "Семечки подсолнечника",
        "product_protein"=> "24.0",
        "product_fat"=> "47.3",
        "product_carb"=> "16.1",
        "calorie"=> "601.0"
    ],
            "231"=> [
        "name"=> "Семечки тыквы",
        "product_protein"=> "29.0",
        "product_fat"=> "46.7",
        "product_carb"=> "13.1",
        "calorie"=> "596.0"
    ],
            "232"=> [
        "name"=> "Слива",
        "product_protein"=> "0.8",
        "product_fat"=> "0.0",
        "product_carb"=> "9.9",
        "calorie"=> "43.0"
    ],
            "233"=> [
        "name"=> "Сливки 11%",
        "product_protein"=> "3.0",
        "product_fat"=> "11.0",
        "product_carb"=> "4.0",
        "calorie"=> "130.0"
    ],
            "234"=> [
        "name"=> "Сливки 22%",
        "product_protein"=> "2.8",
        "product_fat"=> "22.0",
        "product_carb"=> "3.7",
        "calorie"=> "220.0"
    ],
            "235"=> [
        "name"=> "Сливки взбитые с заменителем сахара",
        "product_protein"=> "2.3",
        "product_fat"=> "26.5",
        "product_carb"=> "4.60",
        "calorie"=> "266.0"
    ],
            "236"=> [
        "name"=> "Сметана 10%",
        "product_protein"=> "3.0",
        "product_fat"=> "10.0",
        "product_carb"=> "2.9",
        "calorie"=> "116.0"
    ],
            "237"=> [
        "name"=> "Сметана 15%",
        "product_protein"=> "2.9",
        "product_fat"=> "15.0",
        "product_carb"=> "3.0",
        "calorie"=> "142.0"
    ],
            "238"=> [
        "name"=> "Сметана 20%",
        "product_protein"=> "2.8",
        "product_fat"=> "20.0",
        "product_carb"=> "3.2",
        "calorie"=> "210.0"
    ],
            "239"=> [
        "name"=> "Сметана 25%",
        "product_protein"=> "2.6",
        "product_fat"=> "25.0",
        "product_carb"=> "2.7",
        "calorie"=> "294.0"
    ],
            "240"=> [
        "name"=> "Сметана 30%",
        "product_protein"=> "2.4",
        "product_fat"=> "30.0",
        "product_carb"=> "3.1",
        "calorie"=> "346.0"
    ],
            "241"=> [
        "name"=> "Смородина белая",
        "product_protein"=> "0.3",
        "product_fat"=> "0.0",
        "product_carb"=> "8.7",
        "calorie"=> "39.0"
    ],
            "242"=> [
        "name"=> "Смородина красная",
        "product_protein"=> "0.6",
        "product_fat"=> "0.0",
        "product_carb"=> "8.0",
        "calorie"=> "38.0"
    ],
            "243"=> [
        "name"=> "Смородина чёрная",
        "product_protein"=> "1.0",
        "product_fat"=> "0.0",
        "product_carb"=> "8.0",
        "calorie"=> "40.0"
    ],
            "245"=> [
        "name"=> "Сморчки свежие",
        "product_protein"=> "2.9",
        "product_fat"=> "0.4",
        "product_carb"=> "2.0",
        "calorie"=> "22.0"
    ],
            "246"=> [
        "name"=> "Соевое масло",
        "product_protein"=> "0.0",
        "product_fat"=> "99.9",
        "product_carb"=> "0.0",
        "calorie"=> "899.0"
    ],
            "247"=> [
        "name"=> "Соевый соус",
        "product_protein"=> "4.9",
        "product_fat"=> "0.0",
        "product_carb"=> "5.0",
        "calorie"=> "39.4"
    ],
            "251"=> [
        "name"=> "Соя",
        "product_protein"=> "34.9",
        "product_fat"=> "17.3",
        "product_carb"=> "26.5",
        "calorie"=> "395.0"
    ],
            "252"=> [
        "name"=> "Спаржа",
        "product_protein"=> "1.9",
        "product_fat"=> "0.0",
        "product_carb"=> "3.6",
        "calorie"=> "21.0"
    ],
            "253"=> [
        "name"=> "Судак",
        "product_protein"=> "18.4",
        "product_fat"=> "1.1",
        "product_carb"=> "1.3",
        "calorie"=> "126.0"
    ],
            "254"=> [
        "name"=> "Сыр голландский",
        "product_protein"=> "23.5",
        "product_fat"=> "30.9",
        "product_carb"=> "0.0",
        "calorie"=> "360.0"
    ],
            "256"=> [
        "name"=> "Сыр мягкий домашний",
        "product_protein"=> "17.0",
        "product_fat"=> "4.0",
        "product_carb"=> "1.8",
        "calorie"=> "114.3"
    ],
            "259"=> [
        "name"=> "Сыр полутвёрдый сливочный",
        "product_protein"=> "24.0",
        "product_fat"=> "33.0",
        "product_carb"=> "0.0",
        "calorie"=> "390.0"
    ],
            "260"=> [
        "name"=> "Сыр с плесенью Blue",
        "product_protein"=> "21.5",
        "product_fat"=> "50.0",
        "product_carb"=> "20.0",
        "calorie"=> "347.0"
    ],
            "261"=> [
        "name"=> "Сыр твёрдый \"Радамер\"",
        "product_protein"=> "25.0",
        "product_fat"=> "26.0",
        "product_carb"=> "0.0",
        "calorie"=> "339.0"
    ],
            "262"=> [
        "name"=> "Сыроежки свежие",
        "product_protein"=> "1.7",
        "product_fat"=> "0.3",
        "product_carb"=> "2.0",
        "calorie"=> "17.0"
    ],
            "264"=> [
        "name"=> "Творог жирный",
        "product_protein"=> "14.0",
        "product_fat"=> "18.0",
        "product_carb"=> "2.85",
        "calorie"=> "232.0"
    ],
            "265"=> [
        "name"=> "Творог нежирный сухой",
        "product_protein"=> "18.0",
        "product_fat"=> "0.6",
        "product_carb"=> "1.85",
        "calorie"=> "88.0"
    ],
            "266"=> [
        "name"=> "Творог обезжиренный жидкий",
        "product_protein"=> "17.0",
        "product_fat"=> "0.0",
        "product_carb"=> "1.80",
        "calorie"=> "79.0"
    ],
            "267"=> [
        "name"=> "Творог полужирный",
        "product_protein"=> "16.7",
        "product_fat"=> "9.0",
        "product_carb"=> "2.0",
        "calorie"=> "159.0"
    ],
            "268"=> [
        "name"=> "Тёрн",
        "product_protein"=> "1.5",
        "product_fat"=> "0.0",
        "product_carb"=> "9.3",
        "calorie"=> "47.0"
    ],
            "270"=> [
        "name"=> "Томатная паста",
        "product_protein"=> "3.5",
        "product_fat"=> "0.6",
        "product_carb"=> "13.9",
        "calorie"=> "87.0"
    ],
             "272"=> [
        "name"=> "Томаты",
        "product_protein"=> "0.6",
        "product_fat"=> "0.0",
        "product_carb"=> "4.2",
        "calorie"=> "19.0"
    ],
            "273"=> [
        "name"=> "Томаты - кетчуп",
        "product_protein"=> "0.0",
        "product_fat"=> "0.0",
        "product_carb"=> "18.0",
        "calorie"=> "75.0"
    ],
            "278"=> [
        "name"=> "Тунец в собственном соку консервы",
        "product_protein"=> "23.5",
        "product_fat"=> "0.6",
        "product_carb"=> "0.0",
        "calorie"=> "99.0"
    ],
            "279"=> [
        "name"=> "Тыква",
        "product_protein"=> "1.0",
        "product_fat"=> "0.0",
        "product_carb"=> "6.5",
        "calorie"=> "29.0"
    ],
            "280"=> [
        "name"=> "Укроп",
        "product_protein"=> "2.5",
        "product_fat"=> "0.5",
        "product_carb"=> "4.5",
        "calorie"=> "32.0"
    ],
            "282"=> [
        "name"=> "Фасоль",
        "product_protein"=> "22.3",
        "product_fat"=> "1.7",
        "product_carb"=> "54.5",
        "calorie"=> "309.0"
    ],
            "283"=> [
        "name"=> "Фасоль в томатном соусе (консервированная)",
        "product_protein"=> "4.6",
        "product_fat"=> "0.2",
        "product_carb"=> "13.1",
        "calorie"=> "73.0"
    ],
            "284"=> [
        "name"=> "Фасоль красная",
        "product_protein"=> "22.3",
        "product_fat"=> "1.7",
        "product_carb"=> "54.7",
        "calorie"=> "309.0"
    ],
            "285"=> [
        "name"=> "Финики",
        "product_protein"=> "2.5",
        "product_fat"=> "0.0",
        "product_carb"=> "72.1",
        "calorie"=> "281.0"
    ],
             "287"=> [
        "name"=> "Фисташки жареные солёные",
        "product_protein"=> "21.2",
        "product_fat"=> "38.8",
        "product_carb"=> "14.3",
        "calorie"=> "655.0"
    ],
            "288"=> [
        "name"=> "Форель",
        "product_protein"=> "19.5",
        "product_fat"=> "5.5",
        "product_carb"=> "0.0",
        "calorie"=> "130.0"
    ],
            "289"=> [
        "name"=> "Форель слабосолёная",
        "product_protein"=> "23.5",
        "product_fat"=> "11.5",
        "product_carb"=> "0.0",
        "calorie"=> "203.0"
    ],
            "290"=> [
        "name"=> "Фундук жареный",
        "product_protein"=> "16.1",
        "product_fat"=> "66.9",
        "product_carb"=> "9.9",
        "calorie"=> "704.0"
    ],

            "292"=> [
        "name"=> "Хлеб пшеничный",
        "product_protein"=> "8.1",
        "product_fat"=> "1.2",
        "product_carb"=> "42.0",
        "calorie"=> "203.0"
    ],
            "296"=> [
        "name"=> "Хлеб ржано-пшеничный",
        "product_protein"=> "7.0",
        "product_fat"=> "1.1",
        "product_carb"=> "40.3",
        "calorie"=> "193.0"
    ],
            "299"=> [
        "name"=> "Хлопковое масло",
        "product_protein"=> "0.0",
        "product_fat"=> "99.9",
        "product_carb"=> "9.0",
        "calorie"=> "899.0"
    ],
            "301"=> [
        "name"=> "Хрен",
        "product_protein"=> "2.5",
        "product_fat"=> "0.0",
        "product_carb"=> "16.3",
        "calorie"=> "71.0"
    ],
            "302"=> [
        "name"=> "Хрен с майонезом",
        "product_protein"=> "2.5",
        "product_fat"=> "11.7",
        "product_carb"=> "16.3",
        "calorie"=> "178.0"
    ],
            "303"=> [
        "name"=> "Хурьма японская",
        "product_protein"=> "0.5",
        "product_fat"=> "0.0",
        "product_carb"=> "15.9",
        "calorie"=> "62.0"
    ],
            "304"=> [
        "name"=> "Цыплёнок грудки филе",
        "product_protein"=> "21.3",
        "product_fat"=> "2.5",
        "product_carb"=> "0.0",
        "calorie"=> "107.7"
    ],
            "307"=> [
        "name"=> "Чай",
        "product_protein"=> "20.0",
        "product_fat"=> "0.0",
        "product_carb"=> "6.9",
        "calorie"=> "109.0"
    ],
            "308"=> [
        "name"=> "Черемша",
        "product_protein"=> "2.4",
        "product_fat"=> "0.0",
        "product_carb"=> "6.5",
        "calorie"=> "34.0"
    ],
            "309"=> [
        "name"=> "Черешня",
        "product_protein"=> "1.1",
        "product_fat"=> "0.0",
        "product_carb"=> "12.3",
        "calorie"=> "52.0"
    ],
            "310"=> [
        "name"=> "Черника",
        "product_protein"=> "1.1",
        "product_fat"=> "0.0",
        "product_carb"=> "8.6",
        "calorie"=> "40.0"
    ],
            "311"=> [
        "name"=> "Чернослив",
        "product_protein"=> "1.9",
        "product_fat"=> "0.5",
        "product_carb"=> "59.5",
        "calorie"=> "256.0"
    ],
             "313"=> [
        "name"=> "Чеснок",
        "product_protein"=> "6.5",
        "product_fat"=> "0.0",
        "product_carb"=> "21.2",
        "calorie"=> "106.0"
    ],
            "314"=> [
        "name"=> "Чечевица",
        "product_protein"=> "24.8",
        "product_fat"=> "1.1",
        "product_carb"=> "53.7",
        "calorie"=> "310.0"
    ],
            "315"=> [
        "name"=> "Чечевица красная",
        "product_protein"=> "21.0",
        "product_fat"=> "2.0",
        "product_carb"=> "49.0",
        "calorie"=> "298.0"
    ],
            "316"=> [
        "name"=> "Чина",
        "product_protein"=> "25.1",
        "product_fat"=> "0.9",
        "product_carb"=> "52.1",
        "calorie"=> "304.0"
    ],
            "317"=> [
        "name"=> "Шампиньоны консервированные",
        "product_protein"=> "2.3",
        "product_fat"=> "0.5",
        "product_carb"=> "0.5",
        "calorie"=> "16.0"
    ],
            "319"=> [
        "name"=> "Шелковица",
        "product_protein"=> "0.7",
        "product_fat"=> "0.0",
        "product_carb"=> "12.7",
        "calorie"=> "53.0"
    ],
            "320"=> [
        "name"=> "Шиповник свежий",
        "product_protein"=> "1.6",
        "product_fat"=> "0.0",
        "product_carb"=> "24.0",
        "calorie"=> "101.0"
    ],
            "321"=> [
        "name"=> "Шиповник сушёный",
        "product_protein"=> "0.4",
        "product_fat"=> "0.0",
        "product_carb"=> "60.0",
        "calorie"=> "253.0"
    ],
            "322"=> [
        "name"=> "Шоколад ",
        "product_protein"=> "5.4",
        "product_fat"=> "35.4",
        "product_carb"=> "52.60",
        "calorie"=> "544.0"
    ],
            "323"=> [
        "name"=> "Шоколад с изюмом",
        "product_protein"=> "4.5",
        "product_fat"=> "25.9",
        "product_carb"=> "56.90",
        "calorie"=> "471.0"
    ],
            "324"=> [
        "name"=> "Шоколад с фундуком",
        "product_protein"=> "8.8",
        "product_fat"=> "42.3",
        "product_carb"=> "43.7",
        "calorie"=> "585.0"
    ],
            "325"=> [
        "name"=> "Шпинат",
        "product_protein"=> "2.9",
        "product_fat"=> "0.0",
        "product_carb"=> "2.3",
        "calorie"=> "21.0"
    ],
            "326"=> [
        "name"=> "Шпроты в масле",
        "product_protein"=> "17.0",
        "product_fat"=> "32.0",
        "product_carb"=> "0.0",
        "calorie"=> "356.0"
    ],
            "327"=> [
        "name"=> "Щавель",
        "product_protein"=> "1.5",
        "product_fat"=> "0.0",
        "product_carb"=> "5.3",
        "calorie"=> "28.0"
    ],
            "328"=> [
        "name"=> "Щука",
        "product_protein"=> "18.0",
        "product_fat"=> "1.0",
        "product_carb"=> "0.0",
        "calorie"=> "81.0"
    ],
            "329"=> [
        "name"=> "Яблоки",
        "product_protein"=> "0.4",
        "product_fat"=> "0.0",
        "product_carb"=> "11.3",
        "calorie"=> "46.0"
    ],
            "330"=> [
        "name"=> "Яйца куриные",
        "product_protein"=> "12.7",
        "product_fat"=> "11.5",
        "product_carb"=> "0.7",
        "calorie"=> "157.0"
    ],
            "331"=> [
        "name"=> "Ячмень",
        "product_protein"=> "11.5",
        "product_fat"=> "2.0",
        "product_carb"=> "65.8",
        "calorie"=> "311.0"
    ]
        ];
        foreach ($foods as $food) {
            Ingredients::create($food);
        }
    }

    public function getData():array
    {
/*        $faker = Factory::create('ru_Ru');

        $units = DB::table('units')->select('id')->get();

        $data = [];
        for ($i = 0; $i < 200; $i++){
            $name =  $faker->sentence(mt_rand(1,2));
            $unit_id = ($units[Rand(0,count($units)-1)])->id;
            $product_fat = Rand(1,8);
            $product_protein = Rand(1,8);
            $product_carb = Rand(1,8);
            $calorie = Rand(1,8);
            $data[] =[
                'name' => $name,
                'unit_id' => $unit_id,
                'product_fat' => $product_fat,
                'product_protein' => $product_protein,
                'product_carb' => $product_carb,
                'calorie' => $calorie
            ];
        }
        return $data;*/


    }


}
