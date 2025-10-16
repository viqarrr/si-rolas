import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/info-lowongan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:127
* @route '/admin/info-lowongan'
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
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
export const show = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/info-lowongan/{jobPosting}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
show.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return show.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
show.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
show.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
const showForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
showForm.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:166
* @route '/admin/info-lowongan/{jobPosting}'
*/
showForm.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\JobPostingController::approve
* @see app/Http/Controllers/JobPostingController.php:180
* @route '/admin/info-lowongan/{jobPosting}/approve'
*/
export const approve = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/admin/info-lowongan/{jobPosting}/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\JobPostingController::approve
* @see app/Http/Controllers/JobPostingController.php:180
* @route '/admin/info-lowongan/{jobPosting}/approve'
*/
approve.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return approve.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::approve
* @see app/Http/Controllers/JobPostingController.php:180
* @route '/admin/info-lowongan/{jobPosting}/approve'
*/
approve.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::approve
* @see app/Http/Controllers/JobPostingController.php:180
* @route '/admin/info-lowongan/{jobPosting}/approve'
*/
const approveForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::approve
* @see app/Http/Controllers/JobPostingController.php:180
* @route '/admin/info-lowongan/{jobPosting}/approve'
*/
approveForm.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, options),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\JobPostingController::reject
* @see app/Http/Controllers/JobPostingController.php:228
* @route '/admin/info-lowongan/{jobPosting}/reject'
*/
export const reject = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

reject.definition = {
    methods: ["post"],
    url: '/admin/info-lowongan/{jobPosting}/reject',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\JobPostingController::reject
* @see app/Http/Controllers/JobPostingController.php:228
* @route '/admin/info-lowongan/{jobPosting}/reject'
*/
reject.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return reject.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::reject
* @see app/Http/Controllers/JobPostingController.php:228
* @route '/admin/info-lowongan/{jobPosting}/reject'
*/
reject.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::reject
* @see app/Http/Controllers/JobPostingController.php:228
* @route '/admin/info-lowongan/{jobPosting}/reject'
*/
const rejectForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::reject
* @see app/Http/Controllers/JobPostingController.php:228
* @route '/admin/info-lowongan/{jobPosting}/reject'
*/
rejectForm.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, options),
    method: 'post',
})

reject.form = rejectForm

const jobPostings = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    approve: Object.assign(approve, approve),
    reject: Object.assign(reject, reject),
}

export default jobPostings