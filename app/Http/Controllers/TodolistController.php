<?php

namespace App\Http\Controllers;

use App\Http\Requests\ListsRequest;
use App\Models\Todolist;
use Illuminate\Support\Facades\Auth;

class TodolistController extends Controller
{
    public function getListsByUser()
    {
        $userLists = Todolist::where('user_id', Auth::id())->get();
        $response = $userLists->count() > 0 ? $userLists
                    : response()->json(null, 200);

        return $response;
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

        return response(['success'=>'Список успешно удален'],202);
    }

    public function getPredefinedLists(int $predefined)
    {
        $predefinedLists = (new Todolist())->getPredefinedList($predefined);
        $response = $predefinedLists->count() > 0 ? response()->json($predefinedLists, 200)
                    : response()->json(['Message'=>'Ничего не найдено.'], 404);

        return $response;
    }
}
