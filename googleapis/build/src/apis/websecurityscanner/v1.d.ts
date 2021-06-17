/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace websecurityscanner_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Web Security Scanner API
     *
     * Scans your Compute and App Engine apps for common web vulnerabilities.
     *
     * @example
     * const {google} = require('googleapis');
     * const websecurityscanner = google.websecurityscanner('v1');
     *
     * @namespace websecurityscanner
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Websecurityscanner
     */
    export class Websecurityscanner {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Scan authentication configuration.
     */
    export interface Schema$Authentication {
        /**
         * Authentication using a custom account.
         */
        customAccount?: Schema$CustomAccount;
        /**
         * Authentication using a Google account.
         */
        googleAccount?: Schema$GoogleAccount;
        /**
         * Authentication using Identity-Aware-Proxy (IAP).
         */
        iapCredential?: Schema$IapCredential;
    }
    /**
     * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
     */
    export interface Schema$CrawledUrl {
        /**
         * Output only. The body of the request that was used to visit the URL.
         */
        body?: string | null;
        /**
         * Output only. The http method of the request that was used to visit the URL, in uppercase.
         */
        httpMethod?: string | null;
        /**
         * Output only. The URL that was crawled.
         */
        url?: string | null;
    }
    /**
     * Describes authentication configuration that uses a custom account.
     */
    export interface Schema$CustomAccount {
        /**
         * Required. The login form URL of the website.
         */
        loginUrl?: string | null;
        /**
         * Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs.
         */
        password?: string | null;
        /**
         * Required. The user name of the custom account.
         */
        username?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
     */
    export interface Schema$Empty {
    }
    /**
     * A Finding resource represents a vulnerability instance identified during a ScanRun.
     */
    export interface Schema$Finding {
        /**
         * Output only. The body of the request that triggered the vulnerability.
         */
        body?: string | null;
        /**
         * Output only. The description of the vulnerability.
         */
        description?: string | null;
        /**
         * Output only. The URL where the browser lands when the vulnerability is detected.
         */
        finalUrl?: string | null;
        /**
         * Output only. The type of the Finding. Detailed and up-to-date information on findings can be found here: https://cloud.google.com/security-command-center/docs/how-to-remediate-web-security-scanner-findings
         */
        findingType?: string | null;
        /**
         * Output only. An addon containing information reported for a vulnerability with an HTML form, if any.
         */
        form?: Schema$Form;
        /**
         * Output only. If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported.
         */
        frameUrl?: string | null;
        /**
         * Output only. The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability.
         */
        fuzzedUrl?: string | null;
        /**
         * Output only. The http method of the request that triggered the vulnerability, in uppercase.
         */
        httpMethod?: string | null;
        /**
         * Output only. The resource name of the Finding. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}&#39;. The finding IDs are generated by the system.
         */
        name?: string | null;
        /**
         * Output only. An addon containing information about outdated libraries.
         */
        outdatedLibrary?: Schema$OutdatedLibrary;
        /**
         * Output only. The URL containing human-readable payload that user can leverage to reproduce the vulnerability.
         */
        reproductionUrl?: string | null;
        /**
         * Output only. The severity level of the reported vulnerability.
         */
        severity?: string | null;
        /**
         * Output only. The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns.
         */
        trackingId?: string | null;
        /**
         * Output only. An addon containing detailed information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
         */
        violatingResource?: Schema$ViolatingResource;
        /**
         * Output only. An addon containing information about vulnerable or missing HTTP headers.
         */
        vulnerableHeaders?: Schema$VulnerableHeaders;
        /**
         * Output only. An addon containing information about request parameters which were found to be vulnerable.
         */
        vulnerableParameters?: Schema$VulnerableParameters;
        /**
         * Output only. An addon containing information reported for an XSS, if any.
         */
        xss?: Schema$Xss;
    }
    /**
     * A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun.
     */
    export interface Schema$FindingTypeStats {
        /**
         * Output only. The count of findings belonging to this finding type.
         */
        findingCount?: number | null;
        /**
         * Output only. The finding type associated with the stats.
         */
        findingType?: string | null;
    }
    /**
     * ! Information about a vulnerability with an HTML.
     */
    export interface Schema$Form {
        /**
         * ! The URI where to send the form when it&#39;s submitted.
         */
        actionUri?: string | null;
        /**
         * ! The names of form fields related to the vulnerability.
         */
        fields?: string[] | null;
    }
    /**
     * Describes authentication configuration that uses a Google account.
     */
    export interface Schema$GoogleAccount {
        /**
         * Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs.
         */
        password?: string | null;
        /**
         * Required. The user name of the Google account.
         */
        username?: string | null;
    }
    /**
     * Describes a HTTP Header.
     */
    export interface Schema$Header {
        /**
         * Header name.
         */
        name?: string | null;
        /**
         * Header value.
         */
        value?: string | null;
    }
    /**
     * Describes authentication configuration for Identity-Aware-Proxy (IAP).
     */
    export interface Schema$IapCredential {
        /**
         * Authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
         */
        iapTestServiceAccountInfo?: Schema$IapTestServiceAccountInfo;
    }
    /**
     * Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
     */
    export interface Schema$IapTestServiceAccountInfo {
        /**
         * Required. Describes OAuth2 client id of resources protected by Identity-Aware-Proxy (IAP).
         */
        targetAudienceClientId?: string | null;
    }
    /**
     * Response for the `ListCrawledUrls` method.
     */
    export interface Schema$ListCrawledUrlsResponse {
        /**
         * The list of CrawledUrls returned.
         */
        crawledUrls?: Schema$CrawledUrl[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response for the `ListFindings` method.
     */
    export interface Schema$ListFindingsResponse {
        /**
         * The list of Findings returned.
         */
        findings?: Schema$Finding[];
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response for the `ListFindingTypeStats` method.
     */
    export interface Schema$ListFindingTypeStatsResponse {
        /**
         * The list of FindingTypeStats returned.
         */
        findingTypeStats?: Schema$FindingTypeStats[];
    }
    /**
     * Response for the `ListScanConfigs` method.
     */
    export interface Schema$ListScanConfigsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of ScanConfigs returned.
         */
        scanConfigs?: Schema$ScanConfig[];
    }
    /**
     * Response for the `ListScanRuns` method.
     */
    export interface Schema$ListScanRunsResponse {
        /**
         * Token to retrieve the next page of results, or empty if there are no more results in the list.
         */
        nextPageToken?: string | null;
        /**
         * The list of ScanRuns returned.
         */
        scanRuns?: Schema$ScanRun[];
    }
    /**
     * Information reported for an outdated library.
     */
    export interface Schema$OutdatedLibrary {
        /**
         * URLs to learn more information about the vulnerabilities in the library.
         */
        learnMoreUrls?: string[] | null;
        /**
         * The name of the outdated library.
         */
        libraryName?: string | null;
        /**
         * The version number.
         */
        version?: string | null;
    }
    /**
     * A ScanConfig resource contains the configurations to launch a scan.
     */
    export interface Schema$ScanConfig {
        /**
         * The authentication configuration. If specified, service will use the authentication configuration during scanning.
         */
        authentication?: Schema$Authentication;
        /**
         * The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls
         */
        blacklistPatterns?: string[] | null;
        /**
         * Required. The user provided display name of the ScanConfig.
         */
        displayName?: string | null;
        /**
         * Controls export of scan configurations and results to Security Command Center.
         */
        exportToSecurityCommandCenter?: string | null;
        /**
         * Whether the scan config is managed by Web Security Scanner, output only.
         */
        managedScan?: boolean | null;
        /**
         * The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error.
         */
        maxQps?: number | null;
        /**
         * The resource name of the ScanConfig. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}&#39;. The ScanConfig IDs are generated by the system.
         */
        name?: string | null;
        /**
         * The risk level selected for the scan
         */
        riskLevel?: string | null;
        /**
         * The schedule of the ScanConfig.
         */
        schedule?: Schema$Schedule;
        /**
         * Required. The starting URLs from which the scanner finds site pages.
         */
        startingUrls?: string[] | null;
        /**
         * Whether the scan configuration has enabled static IP address scan feature. If enabled, the scanner will access applications from static IP addresses.
         */
        staticIpScan?: boolean | null;
        /**
         * The user agent used during scanning.
         */
        userAgent?: string | null;
    }
    /**
     * Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
     */
    export interface Schema$ScanConfigError {
        /**
         * Output only. Indicates the reason code for a configuration failure.
         */
        code?: string | null;
        /**
         * Output only. Indicates the full name of the ScanConfig field that triggers this error, for example &quot;scan_config.max_qps&quot;. This field is provided for troubleshooting purposes only and its actual value can change in the future.
         */
        fieldName?: string | null;
    }
    /**
     * A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12
     */
    export interface Schema$ScanRun {
        /**
         * Output only. The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user.
         */
        endTime?: string | null;
        /**
         * Output only. If result_state is an ERROR, this field provides the primary reason for scan&#39;s termination and more details, if such are available.
         */
        errorTrace?: Schema$ScanRunErrorTrace;
        /**
         * Output only. The execution state of the ScanRun.
         */
        executionState?: string | null;
        /**
         * Output only. Whether the scan run has found any vulnerabilities.
         */
        hasVulnerabilities?: boolean | null;
        /**
         * Output only. The resource name of the ScanRun. The name follows the format of &#39;projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}&#39;. The ScanRun IDs are generated by the system.
         */
        name?: string | null;
        /**
         * Output only. The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100.
         */
        progressPercent?: number | null;
        /**
         * Output only. The result state of the ScanRun. This field is only available after the execution state reaches &quot;FINISHED&quot;.
         */
        resultState?: string | null;
        /**
         * Output only. The time at which the ScanRun started.
         */
        startTime?: string | null;
        /**
         * Output only. The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now.
         */
        urlsCrawledCount?: string | null;
        /**
         * Output only. The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads.
         */
        urlsTestedCount?: string | null;
        /**
         * Output only. A list of warnings, if such are encountered during this scan run.
         */
        warningTraces?: Schema$ScanRunWarningTrace[];
    }
    /**
     * Output only. Defines an error trace message for a ScanRun.
     */
    export interface Schema$ScanRunErrorTrace {
        /**
         * Output only. Indicates the error reason code.
         */
        code?: string | null;
        /**
         * Output only. If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most common HTTP error code, if such is available. For example, if this code is 404, the scan has encountered too many NOT_FOUND responses.
         */
        mostCommonHttpErrorCode?: number | null;
        /**
         * Output only. If the scan encounters SCAN_CONFIG_ISSUE error, this field has the error message encountered during scan configuration validation that is performed before each scan run.
         */
        scanConfigError?: Schema$ScanConfigError;
    }
    /**
     * Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.
     */
    export interface Schema$ScanRunWarningTrace {
        /**
         * Output only. Indicates the warning code.
         */
        code?: string | null;
    }
    /**
     * Scan schedule configuration.
     */
    export interface Schema$Schedule {
        /**
         * Required. The duration of time between executions in days.
         */
        intervalDurationDays?: number | null;
        /**
         * A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately.
         */
        scheduleTime?: string | null;
    }
    /**
     * Request for the `StartScanRun` method.
     */
    export interface Schema$StartScanRunRequest {
    }
    /**
     * Request for the `StopScanRun` method.
     */
    export interface Schema$StopScanRunRequest {
    }
    /**
     * Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc.
     */
    export interface Schema$ViolatingResource {
        /**
         * The MIME type of this resource.
         */
        contentType?: string | null;
        /**
         * URL of this violating resource.
         */
        resourceUrl?: string | null;
    }
    /**
     * Information about vulnerable or missing HTTP Headers.
     */
    export interface Schema$VulnerableHeaders {
        /**
         * List of vulnerable headers.
         */
        headers?: Schema$Header[];
        /**
         * List of missing headers.
         */
        missingHeaders?: Schema$Header[];
    }
    /**
     * Information about vulnerable request parameters.
     */
    export interface Schema$VulnerableParameters {
        /**
         * The vulnerable parameter names.
         */
        parameterNames?: string[] | null;
    }
    /**
     * Information reported for an XSS.
     */
    export interface Schema$Xss {
        /**
         * The attack vector of the payload triggering this XSS.
         */
        attackVector?: string | null;
        /**
         * An error message generated by a javascript breakage.
         */
        errorMessage?: string | null;
        /**
         * Stack traces leading to the point where the XSS occurred.
         */
        stackTraces?: string[] | null;
        /**
         * The reproduction url for the seeding POST request of a Stored XSS.
         */
        storedXssSeedingUrl?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        scanConfigs: Resource$Projects$Scanconfigs;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Scanconfigs {
        context: APIRequestContext;
        scanRuns: Resource$Projects$Scanconfigs$Scanruns;
        constructor(context: APIRequestContext);
        /**
         * websecurityscanner.projects.scanConfigs.create
         * @desc Creates a new ScanConfig.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.create({
         *     // Required. The parent resource name where the scan is created, which should be a
         *     // project resource name in the format 'projects/{projectId}'.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "authentication": {},
         *       //   "blacklistPatterns": [],
         *       //   "displayName": "my_displayName",
         *       //   "exportToSecurityCommandCenter": "my_exportToSecurityCommandCenter",
         *       //   "managedScan": false,
         *       //   "maxQps": 0,
         *       //   "name": "my_name",
         *       //   "riskLevel": "my_riskLevel",
         *       //   "schedule": {},
         *       //   "startingUrls": [],
         *       //   "staticIpScan": false,
         *       //   "userAgent": "my_userAgent"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "authentication": {},
         *   //   "blacklistPatterns": [],
         *   //   "displayName": "my_displayName",
         *   //   "exportToSecurityCommandCenter": "my_exportToSecurityCommandCenter",
         *   //   "managedScan": false,
         *   //   "maxQps": 0,
         *   //   "name": "my_name",
         *   //   "riskLevel": "my_riskLevel",
         *   //   "schedule": {},
         *   //   "startingUrls": [],
         *   //   "staticIpScan": false,
         *   //   "userAgent": "my_userAgent"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
         * @param {().ScanConfig} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params: Params$Resource$Projects$Scanconfigs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Scanconfigs$Create, options?: MethodOptions): GaxiosPromise<Schema$ScanConfig>;
        create(params: Params$Resource$Projects$Scanconfigs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Scanconfigs$Create, options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        create(params: Params$Resource$Projects$Scanconfigs$Create, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        create(callback: BodyResponseCallback<Schema$ScanConfig>): void;
        /**
         * websecurityscanner.projects.scanConfigs.delete
         * @desc Deletes an existing ScanConfig and its child resources.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.delete({
         *     // Required. The resource name of the ScanConfig to be deleted. The name follows the
         *     // format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params: Params$Resource$Projects$Scanconfigs$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Scanconfigs$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Scanconfigs$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Scanconfigs$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Scanconfigs$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * websecurityscanner.projects.scanConfigs.get
         * @desc Gets a ScanConfig.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.get({
         *     // Required. The resource name of the ScanConfig to be returned. The name follows the
         *     // format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "authentication": {},
         *   //   "blacklistPatterns": [],
         *   //   "displayName": "my_displayName",
         *   //   "exportToSecurityCommandCenter": "my_exportToSecurityCommandCenter",
         *   //   "managedScan": false,
         *   //   "maxQps": 0,
         *   //   "name": "my_name",
         *   //   "riskLevel": "my_riskLevel",
         *   //   "schedule": {},
         *   //   "startingUrls": [],
         *   //   "staticIpScan": false,
         *   //   "userAgent": "my_userAgent"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Scanconfigs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Scanconfigs$Get, options?: MethodOptions): GaxiosPromise<Schema$ScanConfig>;
        get(params: Params$Resource$Projects$Scanconfigs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Get, options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Get, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        get(callback: BodyResponseCallback<Schema$ScanConfig>): void;
        /**
         * websecurityscanner.projects.scanConfigs.list
         * @desc Lists ScanConfigs under a given project.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.list({
         *     // The maximum number of ScanConfigs to return, can be limited by server.
         *     // If not specified or not positive, the implementation will select a
         *     // reasonable value.
         *     pageSize: 'placeholder-value',
         *     // A token identifying a page of results to be returned. This should be a
         *     // `next_page_token` value returned from a previous List request.
         *     // If unspecified, the first page of results is returned.
         *     pageToken: 'placeholder-value',
         *     // Required. The parent resource name, which should be a project resource name in the
         *     // format 'projects/{projectId}'.
         *     parent: 'projects/my-project',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "scanConfigs": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         * @param {string} params.parent Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Scanconfigs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Scanconfigs$List, options?: MethodOptions): GaxiosPromise<Schema$ListScanConfigsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Scanconfigs$List, options: MethodOptions | BodyResponseCallback<Schema$ListScanConfigsResponse>, callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$List, callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListScanConfigsResponse>): void;
        /**
         * websecurityscanner.projects.scanConfigs.patch
         * @desc Updates a ScanConfig. This method support partial update of a ScanConfig.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.patch({
         *     // The resource name of the ScanConfig. The name follows the format of
         *     // 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
         *     // generated by the system.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig',
         *     // Required. The update mask applies to the resource. For the `FieldMask` definition,
         *     // see
         *     // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "authentication": {},
         *       //   "blacklistPatterns": [],
         *       //   "displayName": "my_displayName",
         *       //   "exportToSecurityCommandCenter": "my_exportToSecurityCommandCenter",
         *       //   "managedScan": false,
         *       //   "maxQps": 0,
         *       //   "name": "my_name",
         *       //   "riskLevel": "my_riskLevel",
         *       //   "schedule": {},
         *       //   "startingUrls": [],
         *       //   "staticIpScan": false,
         *       //   "userAgent": "my_userAgent"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "authentication": {},
         *   //   "blacklistPatterns": [],
         *   //   "displayName": "my_displayName",
         *   //   "exportToSecurityCommandCenter": "my_exportToSecurityCommandCenter",
         *   //   "managedScan": false,
         *   //   "maxQps": 0,
         *   //   "name": "my_name",
         *   //   "riskLevel": "my_riskLevel",
         *   //   "schedule": {},
         *   //   "startingUrls": [],
         *   //   "staticIpScan": false,
         *   //   "userAgent": "my_userAgent"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
         * @param {string=} params.updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         * @param {().ScanConfig} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params: Params$Resource$Projects$Scanconfigs$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Scanconfigs$Patch, options?: MethodOptions): GaxiosPromise<Schema$ScanConfig>;
        patch(params: Params$Resource$Projects$Scanconfigs$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Scanconfigs$Patch, options: MethodOptions | BodyResponseCallback<Schema$ScanConfig>, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        patch(params: Params$Resource$Projects$Scanconfigs$Patch, callback: BodyResponseCallback<Schema$ScanConfig>): void;
        patch(callback: BodyResponseCallback<Schema$ScanConfig>): void;
        /**
         * websecurityscanner.projects.scanConfigs.start
         * @desc Start a ScanRun according to the given ScanConfig.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.start({
         *     // Required. The resource name of the ScanConfig to be used. The name follows the
         *     // format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "endTime": "my_endTime",
         *   //   "errorTrace": {},
         *   //   "executionState": "my_executionState",
         *   //   "hasVulnerabilities": false,
         *   //   "name": "my_name",
         *   //   "progressPercent": 0,
         *   //   "resultState": "my_resultState",
         *   //   "startTime": "my_startTime",
         *   //   "urlsCrawledCount": "my_urlsCrawledCount",
         *   //   "urlsTestedCount": "my_urlsTestedCount",
         *   //   "warningTraces": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.start
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         * @param {().StartScanRunRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        start(params: Params$Resource$Projects$Scanconfigs$Start, options: StreamMethodOptions): GaxiosPromise<Readable>;
        start(params?: Params$Resource$Projects$Scanconfigs$Start, options?: MethodOptions): GaxiosPromise<Schema$ScanRun>;
        start(params: Params$Resource$Projects$Scanconfigs$Start, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        start(params: Params$Resource$Projects$Scanconfigs$Start, options: MethodOptions | BodyResponseCallback<Schema$ScanRun>, callback: BodyResponseCallback<Schema$ScanRun>): void;
        start(params: Params$Resource$Projects$Scanconfigs$Start, callback: BodyResponseCallback<Schema$ScanRun>): void;
        start(callback: BodyResponseCallback<Schema$ScanRun>): void;
    }
    export interface Params$Resource$Projects$Scanconfigs$Create extends StandardParameters {
        /**
         * Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ScanConfig;
    }
    export interface Params$Resource$Projects$Scanconfigs$Delete extends StandardParameters {
        /**
         * Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$Get extends StandardParameters {
        /**
         * Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$List extends StandardParameters {
        /**
         * The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         */
        pageToken?: string;
        /**
         * Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$Patch extends StandardParameters {
        /**
         * The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
         */
        name?: string;
        /**
         * Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ScanConfig;
    }
    export interface Params$Resource$Projects$Scanconfigs$Start extends StandardParameters {
        /**
         * Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StartScanRunRequest;
    }
    export class Resource$Projects$Scanconfigs$Scanruns {
        context: APIRequestContext;
        crawledUrls: Resource$Projects$Scanconfigs$Scanruns$Crawledurls;
        findings: Resource$Projects$Scanconfigs$Scanruns$Findings;
        findingTypeStats: Resource$Projects$Scanconfigs$Scanruns$Findingtypestats;
        constructor(context: APIRequestContext);
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.get
         * @desc Gets a ScanRun.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.get({
         *     // Required. The resource name of the ScanRun to be returned. The name follows the
         *     // format of
         *     // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "endTime": "my_endTime",
         *   //   "errorTrace": {},
         *   //   "executionState": "my_executionState",
         *   //   "hasVulnerabilities": false,
         *   //   "name": "my_name",
         *   //   "progressPercent": 0,
         *   //   "resultState": "my_resultState",
         *   //   "startTime": "my_startTime",
         *   //   "urlsCrawledCount": "my_urlsCrawledCount",
         *   //   "urlsTestedCount": "my_urlsTestedCount",
         *   //   "warningTraces": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Get, options?: MethodOptions): GaxiosPromise<Schema$ScanRun>;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Get, options: MethodOptions | BodyResponseCallback<Schema$ScanRun>, callback: BodyResponseCallback<Schema$ScanRun>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Get, callback: BodyResponseCallback<Schema$ScanRun>): void;
        get(callback: BodyResponseCallback<Schema$ScanRun>): void;
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.list
         * @desc Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.list({
         *     // The maximum number of ScanRuns to return, can be limited by server.
         *     // If not specified or not positive, the implementation will select a
         *     // reasonable value.
         *     pageSize: 'placeholder-value',
         *     // A token identifying a page of results to be returned. This should be a
         *     // `next_page_token` value returned from a previous List request.
         *     // If unspecified, the first page of results is returned.
         *     pageToken: 'placeholder-value',
         *     // Required. The parent resource name, which should be a scan resource name in the
         *     // format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         *     parent: 'projects/my-project/scanConfigs/my-scanConfig',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "scanRuns": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         * @param {string} params.parent Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Scanconfigs$Scanruns$List, options?: MethodOptions): GaxiosPromise<Schema$ListScanRunsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$List, options: MethodOptions | BodyResponseCallback<Schema$ListScanRunsResponse>, callback: BodyResponseCallback<Schema$ListScanRunsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$List, callback: BodyResponseCallback<Schema$ListScanRunsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListScanRunsResponse>): void;
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.stop
         * @desc Stops a ScanRun. The stopped ScanRun is returned.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.stop({
         *     // Required. The resource name of the ScanRun to be stopped. The name follows the
         *     // format of
         *     // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         *     name: 'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {}
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "endTime": "my_endTime",
         *   //   "errorTrace": {},
         *   //   "executionState": "my_executionState",
         *   //   "hasVulnerabilities": false,
         *   //   "name": "my_name",
         *   //   "progressPercent": 0,
         *   //   "resultState": "my_resultState",
         *   //   "startTime": "my_startTime",
         *   //   "urlsCrawledCount": "my_urlsCrawledCount",
         *   //   "urlsTestedCount": "my_urlsTestedCount",
         *   //   "warningTraces": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.stop
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         * @param {().StopScanRunRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop(params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop, options: StreamMethodOptions): GaxiosPromise<Readable>;
        stop(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Stop, options?: MethodOptions): GaxiosPromise<Schema$ScanRun>;
        stop(params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        stop(params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop, options: MethodOptions | BodyResponseCallback<Schema$ScanRun>, callback: BodyResponseCallback<Schema$ScanRun>): void;
        stop(params: Params$Resource$Projects$Scanconfigs$Scanruns$Stop, callback: BodyResponseCallback<Schema$ScanRun>): void;
        stop(callback: BodyResponseCallback<Schema$ScanRun>): void;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Get extends StandardParameters {
        /**
         * Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$List extends StandardParameters {
        /**
         * The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         */
        pageToken?: string;
        /**
         * Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Stop extends StandardParameters {
        /**
         * Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$StopScanRunRequest;
    }
    export class Resource$Projects$Scanconfigs$Scanruns$Crawledurls {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list
         * @desc List CrawledUrls under a given ScanRun.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list(
         *     {
         *       // The maximum number of CrawledUrls to return, can be limited by server.
         *       // If not specified or not positive, the implementation will select a
         *       // reasonable value.
         *       pageSize: 'placeholder-value',
         *       // A token identifying a page of results to be returned. This should be a
         *       // `next_page_token` value returned from a previous List request.
         *       // If unspecified, the first page of results is returned.
         *       pageToken: 'placeholder-value',
         *       // Required. The parent resource name, which should be a scan run resource name in the
         *       // format
         *       // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         *       parent:
         *         'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "crawledUrls": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.crawledUrls.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List, options?: MethodOptions): GaxiosPromise<Schema$ListCrawledUrlsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List, options: MethodOptions | BodyResponseCallback<Schema$ListCrawledUrlsResponse>, callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List, callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListCrawledUrlsResponse>): void;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Crawledurls$List extends StandardParameters {
        /**
         * The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         */
        pageToken?: string;
        /**
         * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         */
        parent?: string;
    }
    export class Resource$Projects$Scanconfigs$Scanruns$Findings {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.findings.get
         * @desc Gets a Finding.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.findings.get(
         *     {
         *       // Required. The resource name of the Finding to be returned. The name follows the
         *       // format of
         *       // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
         *       name:
         *         'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun/findings/my-finding',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "body": "my_body",
         *   //   "description": "my_description",
         *   //   "finalUrl": "my_finalUrl",
         *   //   "findingType": "my_findingType",
         *   //   "form": {},
         *   //   "frameUrl": "my_frameUrl",
         *   //   "fuzzedUrl": "my_fuzzedUrl",
         *   //   "httpMethod": "my_httpMethod",
         *   //   "name": "my_name",
         *   //   "outdatedLibrary": {},
         *   //   "reproductionUrl": "my_reproductionUrl",
         *   //   "severity": "my_severity",
         *   //   "trackingId": "my_trackingId",
         *   //   "violatingResource": {},
         *   //   "vulnerableHeaders": {},
         *   //   "vulnerableParameters": {},
         *   //   "xss": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.findings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get, options?: MethodOptions): GaxiosPromise<Schema$Finding>;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get, options: MethodOptions | BodyResponseCallback<Schema$Finding>, callback: BodyResponseCallback<Schema$Finding>): void;
        get(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get, callback: BodyResponseCallback<Schema$Finding>): void;
        get(callback: BodyResponseCallback<Schema$Finding>): void;
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.findings.list
         * @desc List Findings under a given ScanRun.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.findings.list(
         *     {
         *       // The filter expression. The expression must be in the format: <field>
         *       // <operator> <value>.
         *       // Supported field: 'finding_type'.
         *       // Supported operator: '='.
         *       filter: 'placeholder-value',
         *       // The maximum number of Findings to return, can be limited by server.
         *       // If not specified or not positive, the implementation will select a
         *       // reasonable value.
         *       pageSize: 'placeholder-value',
         *       // A token identifying a page of results to be returned. This should be a
         *       // `next_page_token` value returned from a previous List request.
         *       // If unspecified, the first page of results is returned.
         *       pageToken: 'placeholder-value',
         *       // Required. The parent resource name, which should be a scan run resource name in the
         *       // format
         *       // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         *       parent:
         *         'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "findings": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.findings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter expression. The expression must be in the format: <field> <operator> <value>. Supported field: 'finding_type'. Supported operator: '='.
         * @param {integer=} params.pageSize The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         * @param {string=} params.pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List, options?: MethodOptions): GaxiosPromise<Schema$ListFindingsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List, options: MethodOptions | BodyResponseCallback<Schema$ListFindingsResponse>, callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List, callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFindingsResponse>): void;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findings$Get extends StandardParameters {
        /**
         * Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findings$List extends StandardParameters {
        /**
         * The filter expression. The expression must be in the format: <field> <operator> <value>. Supported field: 'finding_type'. Supported operator: '='.
         */
        filter?: string;
        /**
         * The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
         */
        pageSize?: number;
        /**
         * A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
         */
        pageToken?: string;
        /**
         * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         */
        parent?: string;
    }
    export class Resource$Projects$Scanconfigs$Scanruns$Findingtypestats {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list
         * @desc List all FindingTypeStats under a given ScanRun.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/websecurityscanner.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const websecurityscanner = google.websecurityscanner('v1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list(
         *     {
         *       // Required. The parent resource name, which should be a scan run resource name in the
         *       // format
         *       // 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         *       parent:
         *         'projects/my-project/scanConfigs/my-scanConfig/scanRuns/my-scanRun',
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "findingTypeStats": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias websecurityscanner.projects.scanConfigs.scanRuns.findingTypeStats.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List, options?: MethodOptions): GaxiosPromise<Schema$ListFindingTypeStatsResponse>;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List, options: MethodOptions | BodyResponseCallback<Schema$ListFindingTypeStatsResponse>, callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>): void;
        list(params: Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List, callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListFindingTypeStatsResponse>): void;
    }
    export interface Params$Resource$Projects$Scanconfigs$Scanruns$Findingtypestats$List extends StandardParameters {
        /**
         * Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
         */
        parent?: string;
    }
    export {};
}