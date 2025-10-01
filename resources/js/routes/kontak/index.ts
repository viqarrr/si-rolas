import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/kontak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::index
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
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
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/kontak/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::create
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/create'
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
* @see \App\Http\Controllers\ContactController::store
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/kontak',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ContactController::store
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::store
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::store
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::store
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
export const edit = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/kontak/{kontak}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
edit.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    if (Array.isArray(args)) {
        args = {
            kontak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kontak: args.kontak,
    }

    return edit.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
edit.get = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
edit.head = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
const editForm = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
editForm.get = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ContactController::edit
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}/edit'
*/
editForm.head = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
export const update = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/kontak/{kontak}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
update.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    if (Array.isArray(args)) {
        args = {
            kontak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kontak: args.kontak,
    }

    return update.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
update.put = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
update.patch = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
const updateForm = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
updateForm.put = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::update
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
updateForm.patch = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ContactController::destroy
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
export const destroy = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/kontak/{kontak}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ContactController::destroy
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
destroy.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    if (Array.isArray(args)) {
        args = {
            kontak: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        kontak: args.kontak,
    }

    return destroy.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ContactController::destroy
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
destroy.delete = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ContactController::destroy
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
const destroyForm = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ContactController::destroy
* @see app/Http/Controllers/ContactController.php:0
* @route '/kontak/{kontak}'
*/
destroyForm.delete = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const kontak = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default kontak