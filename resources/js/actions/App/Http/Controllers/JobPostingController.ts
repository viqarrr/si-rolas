import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/info-lowongan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::create
* @see app/Http/Controllers/JobPostingController.php:23
* @route '/info-lowongan/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\JobPostingController::store
* @see app/Http/Controllers/JobPostingController.php:31
* @route '/info-lowongan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/info-lowongan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\JobPostingController::store
* @see app/Http/Controllers/JobPostingController.php:31
* @route '/info-lowongan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::store
* @see app/Http/Controllers/JobPostingController.php:31
* @route '/info-lowongan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::store
* @see app/Http/Controllers/JobPostingController.php:31
* @route '/info-lowongan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JobPostingController::store
* @see app/Http/Controllers/JobPostingController.php:31
* @route '/info-lowongan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
export const publicIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

publicIndex.definition = {
    methods: ["get","head"],
    url: '/info-lowongan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
publicIndex.url = (options?: RouteQueryOptions) => {
    return publicIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
publicIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
publicIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
const publicIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
publicIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicIndex
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
publicIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicIndex.form = publicIndexForm

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
export const publicShow = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicShow.url(args, options),
    method: 'get',
})

publicShow.definition = {
    methods: ["get","head"],
    url: '/info-lowongan/{jobPosting}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
publicShow.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return publicShow.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
publicShow.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
publicShow.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: publicShow.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
const publicShowForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
publicShowForm.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::publicShow
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
publicShowForm.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: publicShow.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

publicShow.form = publicShowForm

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

const JobPostingController = { create, store, publicIndex, publicShow, index, show, approve, reject }

export default JobPostingController