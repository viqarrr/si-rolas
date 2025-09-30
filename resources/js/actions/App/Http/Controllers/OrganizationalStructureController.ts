import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/struktur-organisasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/struktur-organisasi'
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
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/struktur-organisasi/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/struktur-organisasi/create'
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
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/struktur-organisasi'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/struktur-organisasi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/struktur-organisasi'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/struktur-organisasi'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/struktur-organisasi'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/struktur-organisasi'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
export const edit = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/struktur-organisasi/{struktur_organisasi}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
edit.url = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { struktur_organisasi: args }
    }

    if (Array.isArray(args)) {
        args = {
            struktur_organisasi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        struktur_organisasi: args.struktur_organisasi,
    }

    return edit.definition.url
            .replace('{struktur_organisasi}', parsedArgs.struktur_organisasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
edit.get = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
edit.head = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
const editForm = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
editForm.get = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/struktur-organisasi/{struktur_organisasi}/edit'
*/
editForm.head = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
export const update = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/struktur-organisasi/{struktur_organisasi}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
update.url = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { struktur_organisasi: args }
    }

    if (Array.isArray(args)) {
        args = {
            struktur_organisasi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        struktur_organisasi: args.struktur_organisasi,
    }

    return update.definition.url
            .replace('{struktur_organisasi}', parsedArgs.struktur_organisasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
update.put = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
update.patch = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
const updateForm = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
updateForm.put = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:94
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
updateForm.patch = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:141
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
export const destroy = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/struktur-organisasi/{struktur_organisasi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:141
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
destroy.url = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { struktur_organisasi: args }
    }

    if (Array.isArray(args)) {
        args = {
            struktur_organisasi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        struktur_organisasi: args.struktur_organisasi,
    }

    return destroy.definition.url
            .replace('{struktur_organisasi}', parsedArgs.struktur_organisasi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:141
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
destroy.delete = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:141
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
const destroyForm = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:141
* @route '/struktur-organisasi/{struktur_organisasi}'
*/
destroyForm.delete = (args: { struktur_organisasi: string | number } | [struktur_organisasi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const OrganizationalStructureController = { index, create, store, edit, update, destroy }

export default OrganizationalStructureController