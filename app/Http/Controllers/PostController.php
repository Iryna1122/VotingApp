<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Petition;
use Illuminate\Support\Facades\Session;
class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Posts/PostComponent');
    }

    public function info()
    {
        return Inertia::render('Posts/NewComponent');
    }

    public function save(Request $request)
    {
        //dd($request);

        // Отримання даних з форми
        $number = $request->input('numberOfPetition');
        $title = $request->input('nameOfPetition');
        $text = $request->input('textOfPetition');
        // Отримати значення з сесії
        $userId = Session::get('userId');
        var_dump($userId);
        // Збереження даних у базу даних
        $petition = new Petition;
        $petition->numberOfPetition = $number;
        $petition->nameOfPetition = $title;
        $petition->textOfPetition = $text;
        $petition->userId=$userId;
        $petition->save();

        dd($petition);

        // Повернення відповіді або перенаправлення на іншу сторінку

        return response()->json(['message' => 'Data saved successfully']);
    }

}
