import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
const editProfile26e2fa4bacd10b0ccf60f969e03c7bae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url(options),
    method: 'get',
})

editProfile26e2fa4bacd10b0ccf60f969e03c7bae.definition = {
    methods: ["get","head"],
    url: '/admin/profile/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url = (options?: RouteQueryOptions) => {
    return editProfile26e2fa4bacd10b0ccf60f969e03c7bae.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
editProfile26e2fa4bacd10b0ccf60f969e03c7bae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
editProfile26e2fa4bacd10b0ccf60f969e03c7bae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
const editProfile26e2fa4bacd10b0ccf60f969e03c7baeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
editProfile26e2fa4bacd10b0ccf60f969e03c7baeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/admin/profile/edit'
*/
editProfile26e2fa4bacd10b0ccf60f969e03c7baeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile26e2fa4bacd10b0ccf60f969e03c7bae.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editProfile26e2fa4bacd10b0ccf60f969e03c7bae.form = editProfile26e2fa4bacd10b0ccf60f969e03c7baeForm
/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
const editProfile9baab5f17ab91a71aab49147b2828bcf = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile9baab5f17ab91a71aab49147b2828bcf.url(options),
    method: 'get',
})

editProfile9baab5f17ab91a71aab49147b2828bcf.definition = {
    methods: ["get","head"],
    url: '/company/profile/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
editProfile9baab5f17ab91a71aab49147b2828bcf.url = (options?: RouteQueryOptions) => {
    return editProfile9baab5f17ab91a71aab49147b2828bcf.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
editProfile9baab5f17ab91a71aab49147b2828bcf.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editProfile9baab5f17ab91a71aab49147b2828bcf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
editProfile9baab5f17ab91a71aab49147b2828bcf.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editProfile9baab5f17ab91a71aab49147b2828bcf.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
const editProfile9baab5f17ab91a71aab49147b2828bcfForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile9baab5f17ab91a71aab49147b2828bcf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
editProfile9baab5f17ab91a71aab49147b2828bcfForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile9baab5f17ab91a71aab49147b2828bcf.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editProfile
* @see app/Http/Controllers/CompanyDashboardController.php:47
* @route '/company/profile/edit'
*/
editProfile9baab5f17ab91a71aab49147b2828bcfForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editProfile9baab5f17ab91a71aab49147b2828bcf.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editProfile9baab5f17ab91a71aab49147b2828bcf.form = editProfile9baab5f17ab91a71aab49147b2828bcfForm

export const editProfile = {
    '/admin/profile/edit': editProfile26e2fa4bacd10b0ccf60f969e03c7bae,
    '/company/profile/edit': editProfile9baab5f17ab91a71aab49147b2828bcf,
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/admin/profile'
*/
const updateProfile2b603298152ec5dd9b14768a8a90e70d = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile2b603298152ec5dd9b14768a8a90e70d.url(options),
    method: 'put',
})

updateProfile2b603298152ec5dd9b14768a8a90e70d.definition = {
    methods: ["put"],
    url: '/admin/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/admin/profile'
*/
updateProfile2b603298152ec5dd9b14768a8a90e70d.url = (options?: RouteQueryOptions) => {
    return updateProfile2b603298152ec5dd9b14768a8a90e70d.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/admin/profile'
*/
updateProfile2b603298152ec5dd9b14768a8a90e70d.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfile2b603298152ec5dd9b14768a8a90e70d.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/admin/profile'
*/
const updateProfile2b603298152ec5dd9b14768a8a90e70dForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile2b603298152ec5dd9b14768a8a90e70d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/admin/profile'
*/
updateProfile2b603298152ec5dd9b14768a8a90e70dForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfile2b603298152ec5dd9b14768a8a90e70d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateProfile2b603298152ec5dd9b14768a8a90e70d.form = updateProfile2b603298152ec5dd9b14768a8a90e70dForm
/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/company/profile'
*/
const updateProfilee139b11bcab348c3e2cfbe184140187e = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfilee139b11bcab348c3e2cfbe184140187e.url(options),
    method: 'put',
})

updateProfilee139b11bcab348c3e2cfbe184140187e.definition = {
    methods: ["put"],
    url: '/company/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/company/profile'
*/
updateProfilee139b11bcab348c3e2cfbe184140187e.url = (options?: RouteQueryOptions) => {
    return updateProfilee139b11bcab348c3e2cfbe184140187e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/company/profile'
*/
updateProfilee139b11bcab348c3e2cfbe184140187e.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateProfilee139b11bcab348c3e2cfbe184140187e.url(options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/company/profile'
*/
const updateProfilee139b11bcab348c3e2cfbe184140187eForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfilee139b11bcab348c3e2cfbe184140187e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateProfile
* @see app/Http/Controllers/CompanyDashboardController.php:61
* @route '/company/profile'
*/
updateProfilee139b11bcab348c3e2cfbe184140187eForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateProfilee139b11bcab348c3e2cfbe184140187e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateProfilee139b11bcab348c3e2cfbe184140187e.form = updateProfilee139b11bcab348c3e2cfbe184140187eForm

export const updateProfile = {
    '/admin/profile': updateProfile2b603298152ec5dd9b14768a8a90e70d,
    '/company/profile': updateProfilee139b11bcab348c3e2cfbe184140187e,
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/company/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::index
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
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
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
export const jobPostings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jobPostings.url(options),
    method: 'get',
})

jobPostings.definition = {
    methods: ["get","head"],
    url: '/company/info-lowongan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
jobPostings.url = (options?: RouteQueryOptions) => {
    return jobPostings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
jobPostings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jobPostings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
jobPostings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: jobPostings.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
const jobPostingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jobPostings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
jobPostingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jobPostings.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::jobPostings
* @see app/Http/Controllers/CompanyDashboardController.php:103
* @route '/company/info-lowongan'
*/
jobPostingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jobPostings.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

jobPostings.form = jobPostingsForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
export const createJobPosting = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createJobPosting.url(options),
    method: 'get',
})

createJobPosting.definition = {
    methods: ["get","head"],
    url: '/company/info-lowongan/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
createJobPosting.url = (options?: RouteQueryOptions) => {
    return createJobPosting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
createJobPosting.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: createJobPosting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
createJobPosting.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: createJobPosting.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
const createJobPostingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createJobPosting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
createJobPostingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createJobPosting.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::createJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:127
* @route '/company/info-lowongan/create'
*/
createJobPostingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: createJobPosting.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

createJobPosting.form = createJobPostingForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::storeJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:141
* @route '/company/info-lowongan'
*/
export const storeJobPosting = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeJobPosting.url(options),
    method: 'post',
})

storeJobPosting.definition = {
    methods: ["post"],
    url: '/company/info-lowongan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::storeJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:141
* @route '/company/info-lowongan'
*/
storeJobPosting.url = (options?: RouteQueryOptions) => {
    return storeJobPosting.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::storeJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:141
* @route '/company/info-lowongan'
*/
storeJobPosting.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: storeJobPosting.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::storeJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:141
* @route '/company/info-lowongan'
*/
const storeJobPostingForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeJobPosting.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::storeJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:141
* @route '/company/info-lowongan'
*/
storeJobPostingForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: storeJobPosting.url(options),
    method: 'post',
})

storeJobPosting.form = storeJobPostingForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
export const editJobPosting = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editJobPosting.url(args, options),
    method: 'get',
})

editJobPosting.definition = {
    methods: ["get","head"],
    url: '/company/info-lowongan/{jobPosting}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
editJobPosting.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return editJobPosting.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
editJobPosting.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: editJobPosting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
editJobPosting.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: editJobPosting.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
const editJobPostingForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editJobPosting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
editJobPostingForm.get = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editJobPosting.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::editJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:199
* @route '/company/info-lowongan/{jobPosting}/edit'
*/
editJobPostingForm.head = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: editJobPosting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

editJobPosting.form = editJobPostingForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:213
* @route '/company/info-lowongan/{jobPosting}'
*/
export const updateJobPosting = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateJobPosting.url(args, options),
    method: 'put',
})

updateJobPosting.definition = {
    methods: ["put"],
    url: '/company/info-lowongan/{jobPosting}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:213
* @route '/company/info-lowongan/{jobPosting}'
*/
updateJobPosting.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return updateJobPosting.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:213
* @route '/company/info-lowongan/{jobPosting}'
*/
updateJobPosting.put = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateJobPosting.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:213
* @route '/company/info-lowongan/{jobPosting}'
*/
const updateJobPostingForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateJobPosting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::updateJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:213
* @route '/company/info-lowongan/{jobPosting}'
*/
updateJobPostingForm.put = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateJobPosting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateJobPosting.form = updateJobPostingForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::toggleJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:255
* @route '/company/info-lowongan/{jobPosting}/toggle'
*/
export const toggleJobPosting = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleJobPosting.url(args, options),
    method: 'post',
})

toggleJobPosting.definition = {
    methods: ["post"],
    url: '/company/info-lowongan/{jobPosting}/toggle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::toggleJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:255
* @route '/company/info-lowongan/{jobPosting}/toggle'
*/
toggleJobPosting.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return toggleJobPosting.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::toggleJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:255
* @route '/company/info-lowongan/{jobPosting}/toggle'
*/
toggleJobPosting.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleJobPosting.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::toggleJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:255
* @route '/company/info-lowongan/{jobPosting}/toggle'
*/
const toggleJobPostingForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleJobPosting.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::toggleJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:255
* @route '/company/info-lowongan/{jobPosting}/toggle'
*/
toggleJobPostingForm.post = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: toggleJobPosting.url(args, options),
    method: 'post',
})

toggleJobPosting.form = toggleJobPostingForm

/**
* @see \App\Http\Controllers\CompanyDashboardController::destroyJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:275
* @route '/company/info-lowongan/{jobPosting}'
*/
export const destroyJobPosting = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyJobPosting.url(args, options),
    method: 'delete',
})

destroyJobPosting.definition = {
    methods: ["delete"],
    url: '/company/info-lowongan/{jobPosting}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::destroyJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:275
* @route '/company/info-lowongan/{jobPosting}'
*/
destroyJobPosting.url = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jobPosting: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { jobPosting: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            jobPosting: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        jobPosting: typeof args.jobPosting === 'object'
        ? args.jobPosting.id
        : args.jobPosting,
    }

    return destroyJobPosting.definition.url
            .replace('{jobPosting}', parsedArgs.jobPosting.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::destroyJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:275
* @route '/company/info-lowongan/{jobPosting}'
*/
destroyJobPosting.delete = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyJobPosting.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::destroyJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:275
* @route '/company/info-lowongan/{jobPosting}'
*/
const destroyJobPostingForm = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyJobPosting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::destroyJobPosting
* @see app/Http/Controllers/CompanyDashboardController.php:275
* @route '/company/info-lowongan/{jobPosting}'
*/
destroyJobPostingForm.delete = (args: { jobPosting: number | { id: number } } | [jobPosting: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyJobPosting.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyJobPosting.form = destroyJobPostingForm

const CompanyDashboardController = { editProfile, updateProfile, index, jobPostings, createJobPosting, storeJobPosting, editJobPosting, updateJobPosting, toggleJobPosting, destroyJobPosting }

export default CompanyDashboardController