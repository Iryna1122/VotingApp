<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Petition;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Http\FormRequest;
use Inertia\Response;

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

    public function info(): Response
    {
        $data = [
            'petitions' => Petition::all()
        ];

        return Inertia::render('Posts/NewComponent', ['data' => $data]);

    }

    public function destroy($id)
    {

        $petition=Petition::findOrFail($id);
        $petition->delete();
        //dd($id);

        $data = [
            'petitions' => Petition::all()
        ];
        return Redirect::route('/posts');
        //return redirect('/');
        //return Inertia::render('Posts/NewComponent',['data' => $data]);
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


    //EDIT
    public function update($id)
    {
        $petition=Petition::findOrFail($id);
        return Inertia::render('Posts/UpdateComponent', [
            'petition' => $petition,
        ]);
    }


    public function edit(Request $request,$id)
    {
        $petition=Petition::findOrFail($id);

        $user = Auth::user();

        $petition->numberOfPetition = $request->post('numberOfPetition');
        $petition->nameOfPetition = $request->post('nameOfPetition');
        $petition->textOfPetition =$request->post('textOfPetition');
        $petition->userId = $user->id;
//        $petition->created_at = new \DateTime();
        $petition->updated_at = new \DateTime();
        $petition->save();
        return ($request);
    }

    public function details($id)
    {
        $petition=Petition::findOrFail($id);

        return Inertia::render('Posts/DetailsComponent', [
            'petition' => $petition,
        ]);

    }
}
