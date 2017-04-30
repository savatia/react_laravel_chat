<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;
use App\Message;

class MessageController extends Controller
{

    public function index(){  
       $messages = Message::all();
       if($messages->first()){
            $last_message = $messages->last();
            Session::set('timestamp', $last_message->created_at);
        }
        return $messages;
    }

    public function create(){
        
    }

    public function poll(){
        $messages = [];
        $timestamp =   Session::get('timestamp');
        if(!$timestamp){
            $messages = Message::all();
        }
        else {
            $messages = Message::where('created_at', '>', $timestamp)->get();
        }

        if($messages->first()){
            $last_message = $messages->last();
            Session::set('timestamp', $last_message->created_at);
        }
        return $messages;
    }

    public function store(Request $request){
        $message = new Message();
        $message->text = $request->message;
        $message->user()->associate(Auth::user());
        $message->save();

        $messages = [];
        $timestamp =   Session::get('timestamp');
        if(!$timestamp){
            $messages = Message::all();
        }
        else {
            $messages = Message::where('created_at', '>', $timestamp)->get();
        }

        if($messages->first()){
            $last_message = $messages->last();
            Session::set('timestamp', $last_message->created_at);
        }
        return $messages;
    }

    public function show(){
        
    }

    public function edit(){
        
    }

    public function update(){
        
    }

    public function delete(){
        
    }
}
