import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/karya',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::index
* @see app/Http/Controllers/WorkController.php:22
* @route '/admin/karya'
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
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/karya/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::create
* @see app/Http/Controllers/WorkController.php:47
* @route '/admin/karya/create'
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
* @see \App\Http\Controllers\WorkController::store
* @see app/Http/Controllers/WorkController.php:54
* @route '/admin/karya'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/karya',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\WorkController::store
* @see app/Http/Controllers/WorkController.php:54
* @route '/admin/karya'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::store
* @see app/Http/Controllers/WorkController.php:54
* @route '/admin/karya'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkController::store
* @see app/Http/Controllers/WorkController.php:54
* @route '/admin/karya'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkController::store
* @see app/Http/Controllers/WorkController.php:54
* @route '/admin/karya'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
export const edit = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/karya/{karya}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
edit.url = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { karya: args }
    }

    if (Array.isArray(args)) {
        args = {
            karya: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        karya: args.karya,
    }

    return edit.definition.url
            .replace('{karya}', parsedArgs.karya.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
edit.get = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
edit.head = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
const editForm = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
editForm.get = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkController::edit
* @see app/Http/Controllers/WorkController.php:91
* @route '/admin/karya/{karya}/edit'
*/
editForm.head = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
export const update = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/karya/{karya}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
update.url = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { karya: args }
    }

    if (Array.isArray(args)) {
        args = {
            karya: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        karya: args.karya,
    }

    return update.definition.url
            .replace('{karya}', parsedArgs.karya.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
update.put = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
update.patch = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
const updateForm = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
updateForm.put = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkController::update
* @see app/Http/Controllers/WorkController.php:118
* @route '/admin/karya/{karya}'
*/
updateForm.patch = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\WorkController::destroy
* @see app/Http/Controllers/WorkController.php:155
* @route '/admin/karya/{karya}'
*/
export const destroy = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/karya/{karya}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\WorkController::destroy
* @see app/Http/Controllers/WorkController.php:155
* @route '/admin/karya/{karya}'
*/
destroy.url = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { karya: args }
    }

    if (Array.isArray(args)) {
        args = {
            karya: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        karya: args.karya,
    }

    return destroy.definition.url
            .replace('{karya}', parsedArgs.karya.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkController::destroy
* @see app/Http/Controllers/WorkController.php:155
* @route '/admin/karya/{karya}'
*/
destroy.delete = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\WorkController::destroy
* @see app/Http/Controllers/WorkController.php:155
* @route '/admin/karya/{karya}'
*/
const destroyForm = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\WorkController::destroy
* @see app/Http/Controllers/WorkController.php:155
* @route '/admin/karya/{karya}'
*/
destroyForm.delete = (args: { karya: string | number } | [karya: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const WorkController = { index, create, store, edit, update, destroy }

export default WorkController