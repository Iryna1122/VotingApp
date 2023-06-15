<?php

namespace App\Http\Controllers;

use App\Models\Petition;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use \Inertia\Response;
class SendController extends Controller
{
    public function index(): Response
    {
        $data = [
            'users' => User::all(),
        ];

        return Inertia::render('Send/SendComponent', ['data' => $data]);

    }

    public function show(string $id): Response
    {
        return Inertia::render('/data', [
            'user' => User::findOrFail($id)
        ]);
    }
}
