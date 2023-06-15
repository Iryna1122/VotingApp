<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                var_dump($token);
                return response()->json(['error' => 'Invalid credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }
        return response()->json(['token' => $token]);
    }

//    public function login(Request $request)
//    {
//        $credentials = $request->only('email', 'password');
//
//        try {
//            if (! $token = JWTAuth::attempt($credentials)) {
//                return response()->json(['error' => 'Invalid credentials'], 401);
//            }
//        } catch (JWTException $e) {
//            return response()->json(['error' => 'Could not create token'], 500);
//        }
//
//        return response()->json(['token' => $token]);
//    }
//
//    public function getUser()
//    {
//        $user = Auth::guard('api')->user();
//
//        return response()->json(['user' => $user]);
//    }
}
