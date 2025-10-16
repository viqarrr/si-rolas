import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/info-lowongan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::index
* @see app/Http/Controllers/JobPostingController.php:247
* @route '/info-lowongan'
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
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
export const show = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/info-lowongan/{jobPosting}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
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
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
show.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
show.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
const showForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
*/
showForm.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\JobPostingController::show
* @see app/Http/Controllers/JobPostingController.php:291
* @route '/info-lowongan/{jobPosting}'
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

const infoLowongan = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default infoLowongan