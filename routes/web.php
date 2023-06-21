<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SanctumController;
use App\Http\Controllers\SendController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Route::get('/posts',function()
//{
//    return Inertia::render('Posts/PostComponent');
//});
Route::get('/sanctum/csrf-cookie', [SanctumController::class, 'getCsrfCookie']);
Route::get('/posts',[PostController::class,'index'])->name('post.index');

Route::get('/posts/info',[PostController::class,'info'])->name('post.info');
Route::post('/posts/save', [PostController::class, 'save'])->name('post.save');

Route::get('/posts/edit/{id}', [PostController::class, 'edit'])->name('post.edit');
Route::post('/posts/update/{id}', [PostController::class, 'update'])->name('post.update');//UPDATE

Route::get('/posts/details/{id}',[PostController::class,'details'])->name('post.details');//DETAILS

Route::delete('/posts/destroy/{id}',[PostController::class, 'destroy'])->name('post.destroy');  //DELETE

Route::resource('/posts', PostController::class);
Route::group(['middleware' => 'jwt.auth'], function () {
});

//Route::post('login', 'AuthController@login');
//Route::get('user', 'AuthController@getUser')->middleware('jwt.auth');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
