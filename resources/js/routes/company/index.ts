import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import profile from './profile'
import jobPostings from './job-postings'
/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/company/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CompanyDashboardController::dashboard
* @see app/Http/Controllers/CompanyDashboardController.php:17
* @route '/company/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

const company = {
    dashboard: Object.assign(dashboard, dashboard),
    profile: Object.assign(profile, profile),
    jobPostings: Object.assign(jobPostings, jobPostings),
}

export default company