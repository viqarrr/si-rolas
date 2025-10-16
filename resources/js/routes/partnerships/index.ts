import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/kerja-sama/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartnershipController::create
* @see app/Http/Controllers/PartnershipController.php:23
* @route '/kerja-sama/create'
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
* @see \App\Http\Controllers\PartnershipController::store
* @see app/Http/Controllers/PartnershipController.php:31
* @route '/kerja-sama'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kerja-sama',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PartnershipController::store
* @see app/Http/Controllers/PartnershipController.php:31
* @route '/kerja-sama'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartnershipController::store
* @see app/Http/Controllers/PartnershipController.php:31
* @route '/kerja-sama'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::store
* @see app/Http/Controllers/PartnershipController.php:31
* @route '/kerja-sama'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartnershipController::store
* @see app/Http/Controllers/PartnershipController.php:31
* @route '/kerja-sama'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const partnerships = {
    create: Object.assign(create, create),
    store: Object.assign(store, store),
}

export default partnerships