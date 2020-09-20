<?php

namespace App\Http\Requests;

use App\Models\Company;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreCompanyRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('company_create');
    }

    public function rules()
    {
        return [
            'name'            => [
                'string',
                'required',
            ],
            'description'     => [
                'string',
                'nullable',
            ],
            'city_id'         => [
                'integer',
                'exists:cities,id',
                'nullable',
            ],
            'categories'      => [
                'array',
            ],
            'categories.*.id' => [
                'integer',
                'exists:categories,id',
            ],
            'logo'            => [
                'array',
                'nullable',
            ],
            'logo.*.id'       => [
                'integer',
                'exists:media,id',
            ],
        ];
    }
}
