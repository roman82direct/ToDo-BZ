<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListsRequest;
use App\Models\Todolist;
use Illuminate\Support\Facades\Auth;

class TodolistController extends Controller
{
    public function getListsByUser()
    {
        return Todolist::getLists(0, Auth::id());
    }

    public function getListById($list_id)
    {
        return Todolist::findOrFail($list_id);
    }

    public function createList(ListsRequest $request)
    {
            $list = Todolist::create($request->all());

            return response()->json($list, 201);
    }

    public function updateList(ListsRequest $request, $list_id)
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

    public function getLists(int $predefined)
    {
        return Todolist::getLists($predefined, Auth::id());
    }
}
