import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const jobPostings = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
}

export default jobPostings