<?php

namespace App\Http\Controllers;

use App\Models\Petition;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SendController extends Controller
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

        $number = $request->input('numberOfPetition');
        $title = $request->input('nameOfPetition');
        $text = $request->input('textOfPetition');
        $petition = new Petition;
        $petition->numberOfPetition = $number;
        $petition->nameOfPetition = $title;
        $petition->textOfPetition = $text;
        $petition->userId = 1;

        //$petition->save();
        return response()->json(['message' => json_encode($request)]);
    }
}
