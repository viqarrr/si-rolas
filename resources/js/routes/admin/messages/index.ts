import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/pesan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::index
* @see app/Http/Controllers/InquiryController.php:14
* @route '/admin/pesan'
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
* @see \App\Http\Controllers\InquiryController::store
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/pesan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\InquiryController::store
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::store
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::store
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::store
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
export const show = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/pesan/{pesan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
show.url = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pesan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pesan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pesan: args.pesan,
    }

    return show.definition.url
            .replace('{pesan}', parsedArgs.pesan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
show.get = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
show.head = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
const showForm = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
showForm.get = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::show
* @see app/Http/Controllers/InquiryController.php:33
* @route '/admin/pesan/{pesan}'
*/
showForm.head = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
export const edit = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/pesan/{pesan}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
edit.url = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pesan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pesan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pesan: args.pesan,
    }

    return edit.definition.url
            .replace('{pesan}', parsedArgs.pesan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
edit.get = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
edit.head = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
const editForm = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
editForm.get = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\InquiryController::edit
* @see app/Http/Controllers/InquiryController.php:0
* @route '/admin/pesan/{pesan}/edit'
*/
editForm.head = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
export const update = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/pesan/{pesan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
update.url = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pesan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pesan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pesan: args.pesan,
    }

    return update.definition.url
            .replace('{pesan}', parsedArgs.pesan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
update.put = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
update.patch = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
const updateForm = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
updateForm.put = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::update
* @see app/Http/Controllers/InquiryController.php:46
* @route '/admin/pesan/{pesan}'
*/
updateForm.patch = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/admin/pesan/{pesan}'
*/
export const destroy = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/pesan/{pesan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/admin/pesan/{pesan}'
*/
destroy.url = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pesan: args }
    }

    if (Array.isArray(args)) {
        args = {
            pesan: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        pesan: args.pesan,
    }

    return destroy.definition.url
            .replace('{pesan}', parsedArgs.pesan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/admin/pesan/{pesan}'
*/
destroy.delete = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/admin/pesan/{pesan}'
*/
const destroyForm = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\InquiryController::destroy
* @see app/Http/Controllers/InquiryController.php:54
* @route '/admin/pesan/{pesan}'
*/
destroyForm.delete = (args: { pesan: string | number } | [pesan: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const messages = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default messages