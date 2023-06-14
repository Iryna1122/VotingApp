<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Petition;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Http\FormRequest;

class PostController extends Controller
{
    public function index()
    {

        return Inertia::render('Posts/PostComponent');
    }


    public function store(Request $request)
    {
        User::create($request->validate([
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
        ]));

        return to_route('users.index');
    }

    public function info()
    {
        return Inertia::render('Posts/NewComponent');
    }

    public function save(Request $request)
    {
        $user = Auth::user();

        $petition = new Petition;
        $petition->numberOfPetition = $request->post('numberOfPetition');
        $petition->nameOfPetition = $request->post('nameOfPetition');
        $petition->textOfPetition =$request->post('textOfPetition');
        $petition->userId = $user->id;
        $petition->created_at = new \DateTime();
        $petition->updated_at = new \DateTime();
        $petition->save();
        return ($request);
    }
//    public function save(Request $request)
//    {
//        //dd($request);
//
//        // Отримання даних з форми
//        $number = $request->input('numberOfPetition');
//        $title = $request->input('nameOfPetition');
//        $text = $request->input('textOfPetition');
//        // Отримати значення з сесії
////        $userId = Session::get('userId');
////        var_dump($userId);
//        // Збереження даних у базу даних
//        $petition = new Petition;
//        $petition->numberOfPetition = $number;
//        $petition->nameOfPetition = $title;
//        $petition->textOfPetition = $text;
//        $petition->userId=1;
//        $petition->save();
//        $this->middleware('auth');
//        // Повернення відповіді або перенаправлення на іншу сторінку
//        return response()->json(['message' => 'Data saved successfully']);
//    }

}
