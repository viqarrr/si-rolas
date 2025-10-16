import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/kerja-sama',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::index
* @see app/Http/Controllers/PartnershipController.php:114
* @route '/admin/kerja-sama'
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
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
export const show = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/kerja-sama/{partnership}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
show.url = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnership: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partnership: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partnership: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnership: typeof args.partnership === 'object'
        ? args.partnership.id
        : args.partnership,
    }

    return show.definition.url
            .replace('{partnership}', parsedArgs.partnership.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
show.get = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
show.head = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
const showForm = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
showForm.get = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::show
* @see app/Http/Controllers/PartnershipController.php:146
* @route '/admin/kerja-sama/{partnership}'
*/
showForm.head = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PartnershipController::approve
* @see app/Http/Controllers/PartnershipController.php:160
* @route '/admin/kerja-sama/{partnership}/approve'
*/
export const approve = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/admin/kerja-sama/{partnership}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PartnershipController::approve
* @see app/Http/Controllers/PartnershipController.php:160
* @route '/admin/kerja-sama/{partnership}/approve'
*/
approve.url = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnership: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partnership: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partnership: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnership: typeof args.partnership === 'object'
        ? args.partnership.id
        : args.partnership,
    }

    return approve.definition.url
            .replace('{partnership}', parsedArgs.partnership.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::approve
* @see app/Http/Controllers/PartnershipController.php:160
* @route '/admin/kerja-sama/{partnership}/approve'
*/
approve.post = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::approve
* @see app/Http/Controllers/PartnershipController.php:160
* @route '/admin/kerja-sama/{partnership}/approve'
*/
const approveForm = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::approve
* @see app/Http/Controllers/PartnershipController.php:160
* @route '/admin/kerja-sama/{partnership}/approve'
*/
approveForm.post = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\PartnershipController::reject
* @see app/Http/Controllers/PartnershipController.php:215
* @route '/admin/kerja-sama/{partnership}/reject'
*/
export const reject = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/kerja-sama/{partnership}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PartnershipController::reject
* @see app/Http/Controllers/PartnershipController.php:215
* @route '/admin/kerja-sama/{partnership}/reject'
*/
reject.url = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { partnership: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { partnership: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            partnership: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        partnership: typeof args.partnership === 'object'
        ? args.partnership.id
        : args.partnership,
    }

    return reject.definition.url
            .replace('{partnership}', parsedArgs.partnership.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::reject
* @see app/Http/Controllers/PartnershipController.php:215
* @route '/admin/kerja-sama/{partnership}/reject'
*/
reject.post = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::reject
* @see app/Http/Controllers/PartnershipController.php:215
* @route '/admin/kerja-sama/{partnership}/reject'
*/
const rejectForm = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::reject
* @see app/Http/Controllers/PartnershipController.php:215
* @route '/admin/kerja-sama/{partnership}/reject'
*/
rejectForm.post = (args: { partnership: number | { id: number } } | [partnership: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

const partnerships = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    approve: Object.assign(approve, approve),
    reject: Object.assign(reject, reject),
}

export default partnerships