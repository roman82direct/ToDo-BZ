<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ListsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'numeric | min:0 | not_in:0',
            'name' => 'string | min:3 | max:255',
            'user_id' => 'numeric | min:0 | not_in:0',
            'pattern_id' => 'numeric | min:0 | not_in:0',
            'predefined' => 'boolean'
        ];
    }
}
