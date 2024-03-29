<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use App\Models\Petition;
use App\Models\Petitioncount;
use App\Models\Petitionuser;
use App\Models\Role;
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

    public function addRole()
    {
        return Inertia::render('Posts/RoleComponent');
    }

    public function saveRole(Request $request)
    {
        $role=new Role();
        $role->nameOfRole=$request->post('nameOfRole');

        $role->save();
        return redirect('/posts/info');
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


    public function destroy($id): RedirectResponse
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
    public function edit($id): Response
    {
        $petition = Petition::findOrFail($id);
        return Inertia::render('Posts/UpdateComponent', [
            'petition' => $petition,
        ]);
    }


    public function update(Request $request, $id): RedirectResponse
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
        $petition->textOfPetition = $request->post('textOfPetition');
        //   $petition->userId = $user->id;
//       $petition->created_at = new \DateTime();
        $petition->updated_at = new \DateTime();
        $petition->update($request->all());

        return redirect('/posts/info');
    }

    public function details($id): Response
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

    public function votingCount(Request $request)
    {
        $user = Auth::user();
        $userId= $user->id;
        $petitionId = $request->post('petitionId');

        $existingPetitionCount = Petitioncount::where('petitionId', $petitionId)->first();



        //Petitionuser


        $existingPetitionUser = Petitionuser::where('petitionId', $petitionId)
            ->where('userId', $userId)
            ->first();
        if ($existingPetitionUser) {

            // Користувач вже голосував за цю петицію
            echo ('Ви вже віддали свій голос за цю петицію.');
            // return redirect('/dashboard');
        }
        else{
            if ($existingPetitionCount) {
                // Якщо запис з таким petitionId вже існує, інкрементуйте countVotes
                $existingPetitionCount->countVotes++;
                $existingPetitionCount->save();


            } else {
                // Якщо запису з таким petitionId немає, створіть новий запис
                $newPetitionCount = new Petitioncount();
                $newPetitionCount->countVotes = 1;
                $newPetitionCount->petitionId = $petitionId;
                $newPetitionCount->save();
            }

            /////////////////////////////
            $petitionuser=new Petitionuser();
            $petitionuser->userId=$userId;
            $petitionuser->petitionId=$petitionId;

            $petitionuser->save();
        }

        return redirect('/dashboard');
    }


}
