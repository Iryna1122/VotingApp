<?php

namespace App\Http\Controllers;

use App\Models\Petition;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SendController extends Controller
{
    public function index()
    {
        $data = User::all(); // Припустимо, у вас є модель Data, яка відповідає таблиці з даними

        return response()->json($data);
    }
}
