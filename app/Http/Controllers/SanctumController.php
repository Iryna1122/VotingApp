<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SanctumController extends Controller
{
    public function getCsrfCookie(Request $request)
    {
        return response()->json(['csrf_token' => csrf_token()], 200);
    }
}
