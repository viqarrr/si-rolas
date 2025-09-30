import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/pesan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/pesan'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
export const show = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/pesan/{inquiry}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
show.url = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inquiry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inquiry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inquiry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inquiry: typeof args.inquiry === 'object'
        ? args.inquiry.id
        : args.inquiry,
    }

    return show.definition.url
            .replace('{inquiry}', parsedArgs.inquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
show.get = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
show.head = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
const showForm = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
showForm.get = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/pesan/{inquiry}'
*/
showForm.head = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/pesan/{inquiry}'
*/
export const update = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/pesan/{inquiry}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/pesan/{inquiry}'
*/
update.url = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inquiry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inquiry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inquiry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inquiry: typeof args.inquiry === 'object'
        ? args.inquiry.id
        : args.inquiry,
    }

    return update.definition.url
            .replace('{inquiry}', parsedArgs.inquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/pesan/{inquiry}'
*/
update.patch = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/pesan/{inquiry}'
*/
const updateForm = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/pesan/{inquiry}'
*/
updateForm.patch = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/pesan/{inquiry}'
*/
export const destroy = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/pesan/{inquiry}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/pesan/{inquiry}'
*/
destroy.url = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { inquiry: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { inquiry: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            inquiry: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        inquiry: typeof args.inquiry === 'object'
        ? args.inquiry.id
        : args.inquiry,
    }

    return destroy.definition.url
            .replace('{inquiry}', parsedArgs.inquiry.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/pesan/{inquiry}'
*/
destroy.delete = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/pesan/{inquiry}'
*/
const destroyForm = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/pesan/{inquiry}'
*/
destroyForm.delete = (args: { inquiry: number | { id: number } } | [inquiry: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const InquiryController = { index, show, update, destroy }

export default InquiryController