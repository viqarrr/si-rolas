import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/jurusan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::index
* @see app/Http/Controllers/MajorController.php:13
* @route '/admin/jurusan'
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
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/jurusan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::create
* @see app/Http/Controllers/MajorController.php:22
* @route '/admin/jurusan/create'
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
* @see \App\Http\Controllers\MajorController::store
* @see app/Http/Controllers/MajorController.php:27
* @route '/admin/jurusan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/jurusan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MajorController::store
* @see app/Http/Controllers/MajorController.php:27
* @route '/admin/jurusan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::store
* @see app/Http/Controllers/MajorController.php:27
* @route '/admin/jurusan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MajorController::store
* @see app/Http/Controllers/MajorController.php:27
* @route '/admin/jurusan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MajorController::store
* @see app/Http/Controllers/MajorController.php:27
* @route '/admin/jurusan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
export const edit = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/jurusan/{jurusan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
edit.url = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jurusan: args }
    }

    if (Array.isArray(args)) {
        args = {
            jurusan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jurusan: args.jurusan,
    }

    return edit.definition.url
            .replace('{jurusan}', parsedArgs.jurusan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
edit.get = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
edit.head = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
const editForm = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
editForm.get = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\MajorController::edit
* @see app/Http/Controllers/MajorController.php:35
* @route '/admin/jurusan/{jurusan}/edit'
*/
editForm.head = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
export const update = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/jurusan/{jurusan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
update.url = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jurusan: args }
    }

    if (Array.isArray(args)) {
        args = {
            jurusan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jurusan: args.jurusan,
    }

    return update.definition.url
            .replace('{jurusan}', parsedArgs.jurusan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
update.put = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
update.patch = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
const updateForm = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
updateForm.put = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MajorController::update
* @see app/Http/Controllers/MajorController.php:42
* @route '/admin/jurusan/{jurusan}'
*/
updateForm.patch = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\MajorController::destroy
* @see app/Http/Controllers/MajorController.php:50
* @route '/admin/jurusan/{jurusan}'
*/
export const destroy = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/jurusan/{jurusan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\MajorController::destroy
* @see app/Http/Controllers/MajorController.php:50
* @route '/admin/jurusan/{jurusan}'
*/
destroy.url = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jurusan: args }
    }

    if (Array.isArray(args)) {
        args = {
            jurusan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jurusan: args.jurusan,
    }

    return destroy.definition.url
            .replace('{jurusan}', parsedArgs.jurusan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\MajorController::destroy
* @see app/Http/Controllers/MajorController.php:50
* @route '/admin/jurusan/{jurusan}'
*/
destroy.delete = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\MajorController::destroy
* @see app/Http/Controllers/MajorController.php:50
* @route '/admin/jurusan/{jurusan}'
*/
const destroyForm = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MajorController::destroy
* @see app/Http/Controllers/MajorController.php:50
* @route '/admin/jurusan/{jurusan}'
*/
destroyForm.delete = (args: { jurusan: string | number } | [jurusan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const majors = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default majors