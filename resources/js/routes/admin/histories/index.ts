import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/sejarah',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::index
* @see app/Http/Controllers/HistoryController.php:18
* @route '/admin/sejarah'
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
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/sejarah/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::create
* @see app/Http/Controllers/HistoryController.php:35
* @route '/admin/sejarah/create'
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
* @see \App\Http\Controllers\HistoryController::store
* @see app/Http/Controllers/HistoryController.php:40
* @route '/admin/sejarah'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/sejarah',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\HistoryController::store
* @see app/Http/Controllers/HistoryController.php:40
* @route '/admin/sejarah'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::store
* @see app/Http/Controllers/HistoryController.php:40
* @route '/admin/sejarah'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HistoryController::store
* @see app/Http/Controllers/HistoryController.php:40
* @route '/admin/sejarah'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HistoryController::store
* @see app/Http/Controllers/HistoryController.php:40
* @route '/admin/sejarah'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
export const edit = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/sejarah/{sejarah}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
edit.url = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sejarah: args }
    }

    if (Array.isArray(args)) {
        args = {
            sejarah: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sejarah: args.sejarah,
    }

    return edit.definition.url
            .replace('{sejarah}', parsedArgs.sejarah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
edit.get = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
edit.head = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
const editForm = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
editForm.get = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\HistoryController::edit
* @see app/Http/Controllers/HistoryController.php:73
* @route '/admin/sejarah/{sejarah}/edit'
*/
editForm.head = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
export const update = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/sejarah/{sejarah}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
update.url = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sejarah: args }
    }

    if (Array.isArray(args)) {
        args = {
            sejarah: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sejarah: args.sejarah,
    }

    return update.definition.url
            .replace('{sejarah}', parsedArgs.sejarah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
update.put = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
update.patch = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
const updateForm = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
updateForm.put = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HistoryController::update
* @see app/Http/Controllers/HistoryController.php:86
* @route '/admin/sejarah/{sejarah}'
*/
updateForm.patch = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\HistoryController::destroy
* @see app/Http/Controllers/HistoryController.php:132
* @route '/admin/sejarah/{sejarah}'
*/
export const destroy = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/sejarah/{sejarah}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\HistoryController::destroy
* @see app/Http/Controllers/HistoryController.php:132
* @route '/admin/sejarah/{sejarah}'
*/
destroy.url = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { sejarah: args }
    }

    if (Array.isArray(args)) {
        args = {
            sejarah: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        sejarah: args.sejarah,
    }

    return destroy.definition.url
            .replace('{sejarah}', parsedArgs.sejarah.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\HistoryController::destroy
* @see app/Http/Controllers/HistoryController.php:132
* @route '/admin/sejarah/{sejarah}'
*/
destroy.delete = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\HistoryController::destroy
* @see app/Http/Controllers/HistoryController.php:132
* @route '/admin/sejarah/{sejarah}'
*/
const destroyForm = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\HistoryController::destroy
* @see app/Http/Controllers/HistoryController.php:132
* @route '/admin/sejarah/{sejarah}'
*/
destroyForm.delete = (args: { sejarah: string | number } | [sejarah: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const histories = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default histories