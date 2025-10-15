import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/struktur-organisasi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::index
* @see app/Http/Controllers/OrganizationalStructureController.php:18
* @route '/admin/struktur-organisasi'
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
* @route '/admin/struktur-organisasi/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/struktur-organisasi/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::create
* @see app/Http/Controllers/OrganizationalStructureController.php:37
* @route '/admin/struktur-organisasi/create'
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
* @route '/admin/struktur-organisasi'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/struktur-organisasi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/admin/struktur-organisasi'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/admin/struktur-organisasi'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/admin/struktur-organisasi'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::store
* @see app/Http/Controllers/OrganizationalStructureController.php:44
* @route '/admin/struktur-organisasi'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
export const edit = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/struktur-organisasi/{organizationalStructure}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
edit.url = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { organizationalStructure: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { organizationalStructure: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            organizationalStructure: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        organizationalStructure: typeof args.organizationalStructure === 'object'
        ? args.organizationalStructure.id
        : args.organizationalStructure,
    }

    return edit.definition.url
            .replace('{organizationalStructure}', parsedArgs.organizationalStructure.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
edit.get = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
edit.head = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
const editForm = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
editForm.get = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::edit
* @see app/Http/Controllers/OrganizationalStructureController.php:78
* @route '/admin/struktur-organisasi/{organizationalStructure}/edit'
*/
editForm.head = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
export const update = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/struktur-organisasi/{organizationalStructure}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
update.url = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { organizationalStructure: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { organizationalStructure: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            organizationalStructure: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        organizationalStructure: typeof args.organizationalStructure === 'object'
        ? args.organizationalStructure.id
        : args.organizationalStructure,
    }

    return update.definition.url
            .replace('{organizationalStructure}', parsedArgs.organizationalStructure.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
update.put = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
update.patch = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::update
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
const updateForm = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
updateForm.put = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/OrganizationalStructureController.php:91
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
updateForm.patch = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/OrganizationalStructureController.php:138
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
export const destroy = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/struktur-organisasi/{organizationalStructure}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:138
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
destroy.url = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { organizationalStructure: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { organizationalStructure: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            organizationalStructure: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        organizationalStructure: typeof args.organizationalStructure === 'object'
        ? args.organizationalStructure.id
        : args.organizationalStructure,
    }

    return destroy.definition.url
            .replace('{organizationalStructure}', parsedArgs.organizationalStructure.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:138
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
destroy.delete = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\OrganizationalStructureController::destroy
* @see app/Http/Controllers/OrganizationalStructureController.php:138
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
const destroyForm = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/OrganizationalStructureController.php:138
* @route '/admin/struktur-organisasi/{organizationalStructure}'
*/
destroyForm.delete = (args: { organizationalStructure: number | { id: number } } | [organizationalStructure: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const organizationalStructures = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default organizationalStructures