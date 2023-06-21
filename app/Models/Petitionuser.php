<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Petitionuser extends Model
{
    use HasFactory;

    protected $fillable=[
        'petitionId',
        'userId'
        ];
}
