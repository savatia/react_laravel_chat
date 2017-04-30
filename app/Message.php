<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    // add the mimeType attribute to the array
    protected $appends = array('user');

    // code for $this->mimeType attribute
    public function getUserAttribute($value) {
        return User::find($this->user_id);
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
