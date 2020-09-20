<?php

namespace App\Http\Middleware;

use Closure;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        app()->setLocale(session('language') ?? config('panel.primary_language'));

        return $next($request);
    }
}
