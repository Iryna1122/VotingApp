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
use Symfony\Component\HttpFoundation\RedirectResponse;

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


    public function destroy($id):RedirectResponse
    {

        $petition = Petition::findOrFail($id);
        $petition->delete();
        return redirect('/posts/info');
        //return redirect()->route('posts.index');
        //return redirect('/posts/info');
        //return to_route('Posts/NewComponent');
        //return Inertia::location('/');
        //return Redirect::route('/posts');
        //return redirect('/');
        //return Inertia::render('Hello people');
    }

    public function save(Request $request)
    {
        $user = Auth::user();

        $petition = new Petition;
        $petition->numberOfPetition = $request->post('numberOfPetition');
        $petition->nameOfPetition = $request->post('nameOfPetition');
        $petition->textOfPetition = $request->post('textOfPetition');
        $petition->userId = $user->id;
        $petition->created_at = new \DateTime();
        $petition->updated_at = new \DateTime();
        $petition->save();
        //return ($request);
        return redirect('/posts/info');
    }


    //EDIT
    public function edit($id):Response
    {
        $petition = Petition::findOrFail($id);
        return Inertia::render('Posts/UpdateComponent', [
            'petition' => $petition,
        ]);
    }


    public function update(Request $request,$id):RedirectResponse
    {
//
//        $request->validate([
//            'numberOfPetition'=>'required|integer|min:1',
//            'nameOfPetition'=>'required|string|max:255',
//            'textOfPetition'=>'required|text'
//        ]);
        //dd($request);
        $petition = Petition::findOrFail($id);

        $petition->numberOfPetition = $request->post('numberOfPetition');
        $petition->nameOfPetition = $request->post('nameOfPetition');
        $petition->textOfPetition =$request->post('textOfPetition');
     //   $petition->userId = $user->id;
//       $petition->created_at = new \DateTime();
        $petition->updated_at = new \DateTime();
        $petition->update($request->all());

       return redirect('/posts/info');
    }

    public function details($id):Response
    {
        $petition = Petition::findOrFail($id);

        //dd($petition);
        return Inertia::render('Posts/DetailsComponent', [
            'petition' => $petition,
        ]);

    }
    public function voting(): Response
    {
        $data = [
            'petitions' => Petition::all()
        ];

        return Inertia::render('Posts/VotingComponent', ['data' => $data]);

    }
}
