import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/postingan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::index
* @see app/Http/Controllers/PostController.php:20
* @route '/postingan'
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
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/postingan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::create
* @see app/Http/Controllers/PostController.php:40
* @route '/postingan/create'
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
* @see \App\Http\Controllers\PostController::store
* @see app/Http/Controllers/PostController.php:48
* @route '/postingan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/postingan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PostController::store
* @see app/Http/Controllers/PostController.php:48
* @route '/postingan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::store
* @see app/Http/Controllers/PostController.php:48
* @route '/postingan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::store
* @see app/Http/Controllers/PostController.php:48
* @route '/postingan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::store
* @see app/Http/Controllers/PostController.php:48
* @route '/postingan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
export const edit = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/postingan/{postingan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
edit.url = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postingan: args }
    }

    if (Array.isArray(args)) {
        args = {
            postingan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postingan: args.postingan,
    }

    return edit.definition.url
            .replace('{postingan}', parsedArgs.postingan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
edit.get = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
edit.head = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
const editForm = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
editForm.get = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::edit
* @see app/Http/Controllers/PostController.php:86
* @route '/postingan/{postingan}/edit'
*/
editForm.head = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
export const update = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/postingan/{postingan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
update.url = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postingan: args }
    }

    if (Array.isArray(args)) {
        args = {
            postingan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postingan: args.postingan,
    }

    return update.definition.url
            .replace('{postingan}', parsedArgs.postingan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
update.put = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
update.patch = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
const updateForm = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
updateForm.put = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::update
* @see app/Http/Controllers/PostController.php:105
* @route '/postingan/{postingan}'
*/
updateForm.patch = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PostController::destroy
* @see app/Http/Controllers/PostController.php:156
* @route '/postingan/{postingan}'
*/
export const destroy = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/postingan/{postingan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PostController::destroy
* @see app/Http/Controllers/PostController.php:156
* @route '/postingan/{postingan}'
*/
destroy.url = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { postingan: args }
    }

    if (Array.isArray(args)) {
        args = {
            postingan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        postingan: args.postingan,
    }

    return destroy.definition.url
            .replace('{postingan}', parsedArgs.postingan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::destroy
* @see app/Http/Controllers/PostController.php:156
* @route '/postingan/{postingan}'
*/
destroy.delete = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PostController::destroy
* @see app/Http/Controllers/PostController.php:156
* @route '/postingan/{postingan}'
*/
const destroyForm = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PostController::destroy
* @see app/Http/Controllers/PostController.php:156
* @route '/postingan/{postingan}'
*/
destroyForm.delete = (args: { postingan: string | number } | [postingan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PostController = { index, create, store, edit, update, destroy }

export default PostController