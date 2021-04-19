<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListsRequest;
use App\Models\Todolist;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class TodolistController extends Controller
{
    /*
     * api/lists?filter=1 для predefine-листов
     * api/lists?filter=0 для обычных листов
     * api/lists?filter=all для всех листов юзера
    */
    public function getLists(){
        return Todolist::getLists($_GET['filter'], Auth::id());
    }

    public function createList(ListsRequest $request)
    {
            $list = Todolist::create($request->all());

            return response()->json($list, 201);
    }

    public function updateList(Request $request, $list_id)
    {
        $list = Todolist::findOrFail($list_id);
        $list->update($request->all());

        return response()->json($list, 202);
    }

    public function delete(int $list_id)
    {
        Todolist::findOrFail($list_id)->delete();

        return response(['success'=>'Deleted successfully'],202);
    }
}
