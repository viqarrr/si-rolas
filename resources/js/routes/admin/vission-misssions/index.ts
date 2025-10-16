import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/visi-misi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::index
* @see app/Http/Controllers/VisionMissionController.php:13
* @route '/admin/visi-misi'
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
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/visi-misi/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::create
* @see app/Http/Controllers/VisionMissionController.php:20
* @route '/admin/visi-misi/create'
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
* @see \App\Http\Controllers\VisionMissionController::store
* @see app/Http/Controllers/VisionMissionController.php:25
* @route '/admin/visi-misi'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/visi-misi',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VisionMissionController::store
* @see app/Http/Controllers/VisionMissionController.php:25
* @route '/admin/visi-misi'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::store
* @see app/Http/Controllers/VisionMissionController.php:25
* @route '/admin/visi-misi'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisionMissionController::store
* @see app/Http/Controllers/VisionMissionController.php:25
* @route '/admin/visi-misi'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisionMissionController::store
* @see app/Http/Controllers/VisionMissionController.php:25
* @route '/admin/visi-misi'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
export const edit = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/visi-misi/{visi_misi}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
edit.url = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visi_misi: args }
    }

    if (Array.isArray(args)) {
        args = {
            visi_misi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visi_misi: args.visi_misi,
    }

    return edit.definition.url
            .replace('{visi_misi}', parsedArgs.visi_misi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
edit.get = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
edit.head = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
const editForm = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
editForm.get = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\VisionMissionController::edit
* @see app/Http/Controllers/VisionMissionController.php:33
* @route '/admin/visi-misi/{visi_misi}/edit'
*/
editForm.head = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
export const update = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/visi-misi/{visi_misi}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
update.url = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visi_misi: args }
    }

    if (Array.isArray(args)) {
        args = {
            visi_misi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visi_misi: args.visi_misi,
    }

    return update.definition.url
            .replace('{visi_misi}', parsedArgs.visi_misi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
update.put = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
update.patch = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
const updateForm = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
updateForm.put = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisionMissionController::update
* @see app/Http/Controllers/VisionMissionController.php:40
* @route '/admin/visi-misi/{visi_misi}'
*/
updateForm.patch = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\VisionMissionController::destroy
* @see app/Http/Controllers/VisionMissionController.php:48
* @route '/admin/visi-misi/{visi_misi}'
*/
export const destroy = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/visi-misi/{visi_misi}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VisionMissionController::destroy
* @see app/Http/Controllers/VisionMissionController.php:48
* @route '/admin/visi-misi/{visi_misi}'
*/
destroy.url = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { visi_misi: args }
    }

    if (Array.isArray(args)) {
        args = {
            visi_misi: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        visi_misi: args.visi_misi,
    }

    return destroy.definition.url
            .replace('{visi_misi}', parsedArgs.visi_misi.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VisionMissionController::destroy
* @see app/Http/Controllers/VisionMissionController.php:48
* @route '/admin/visi-misi/{visi_misi}'
*/
destroy.delete = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\VisionMissionController::destroy
* @see app/Http/Controllers/VisionMissionController.php:48
* @route '/admin/visi-misi/{visi_misi}'
*/
const destroyForm = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\VisionMissionController::destroy
* @see app/Http/Controllers/VisionMissionController.php:48
* @route '/admin/visi-misi/{visi_misi}'
*/
destroyForm.delete = (args: { visi_misi: string | number } | [visi_misi: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const vissionMisssions = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default vissionMisssions