<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Petition extends Model
{
    protected $fillable = [
        'numberOfPetition',
        'nameOfPetition',
        'textOfPetition',
    ];
    public $timestamps = true;
    use HasFactory;
}
