<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
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
}
