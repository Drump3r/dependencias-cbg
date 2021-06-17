/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace firestore_v1beta2 {
    export interface Options extends GlobalOptions {
        version: 'v1beta2';
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
     * Cloud Firestore API
     *
     * Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.
     *
     * @example
     * const {google} = require('googleapis');
     * const firestore = google.firestore('v1beta2');
     *
     * @namespace firestore
     * @type {Function}
     * @version v1beta2
     * @variation v1beta2
     * @param {object=} options Options for Firestore
     */
    export class Firestore {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
     */
    export interface Schema$Empty {
    }
    /**
     * Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ExportDocumentsMetadata {
        /**
         * Which collection ids are being exported.
         */
        collectionIds?: string[] | null;
        /**
         * The time this operation completed. Will be unset if operation still in progress.
         */
        endTime?: string | null;
        /**
         * The state of the export operation.
         */
        operationState?: string | null;
        /**
         * Where the entities are being exported to.
         */
        outputUriPrefix?: string | null;
        /**
         * The progress, in bytes, of this operation.
         */
        progressBytes?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The progress, in documents, of this operation.
         */
        progressDocuments?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The time this operation started.
         */
        startTime?: string | null;
    }
    /**
     * The request for FirestoreAdmin.ExportDocuments.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ExportDocumentsRequest {
        /**
         * Which collection ids to export. Unspecified means all collections.
         */
        collectionIds?: string[] | null;
        /**
         * The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time.
         */
        outputUriPrefix?: string | null;
    }
    /**
     * Returned in the google.longrunning.Operation response field.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ExportDocumentsResponse {
        /**
         * Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully.
         */
        outputUriPrefix?: string | null;
    }
    /**
     * Represents a single field in the database.  Fields are grouped by their &quot;Collection Group&quot;, which represent all collections in the database with the same id.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2Field {
        /**
         * The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes.
         */
        indexConfig?: Schema$GoogleFirestoreAdminV1beta2IndexConfig;
        /**
         * A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`  A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field.  Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.  Examples: (Note: Comments here are written in markdown syntax, so there is an  additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field.  A special `Field` contains the default indexing settings for all fields. This field&#39;s resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
         */
        name?: string | null;
    }
    /**
     * Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2FieldOperationMetadata {
        /**
         * The progress, in bytes, of this operation.
         */
        bytesProgress?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The progress, in documents, of this operation.
         */
        documentProgress?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The time this operation completed. Will be unset if operation still in progress.
         */
        endTime?: string | null;
        /**
         * The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
         */
        field?: string | null;
        /**
         * A list of IndexConfigDelta, which describe the intent of this operation.
         */
        indexConfigDeltas?: Schema$GoogleFirestoreAdminV1beta2IndexConfigDelta[];
        /**
         * The time this operation started.
         */
        startTime?: string | null;
        /**
         * The state of the operation.
         */
        state?: string | null;
    }
    /**
     * Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ImportDocumentsMetadata {
        /**
         * Which collection ids are being imported.
         */
        collectionIds?: string[] | null;
        /**
         * The time this operation completed. Will be unset if operation still in progress.
         */
        endTime?: string | null;
        /**
         * The location of the documents being imported.
         */
        inputUriPrefix?: string | null;
        /**
         * The state of the import operation.
         */
        operationState?: string | null;
        /**
         * The progress, in bytes, of this operation.
         */
        progressBytes?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The progress, in documents, of this operation.
         */
        progressDocuments?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The time this operation started.
         */
        startTime?: string | null;
    }
    /**
     * The request for FirestoreAdmin.ImportDocuments.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ImportDocumentsRequest {
        /**
         * Which collection ids to import. Unspecified means all collections included in the import.
         */
        collectionIds?: string[] | null;
        /**
         * Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta2.ExportDocumentsResponse.output_uri_prefix.
         */
        inputUriPrefix?: string | null;
    }
    /**
     * Cloud Firestore indexes enable simple and complex queries against documents in a database.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2Index {
        /**
         * The fields supported by this index.  For composite indexes, this is always 2 or more fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified).  For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field.
         */
        fields?: Schema$GoogleFirestoreAdminV1beta2IndexField[];
        /**
         * Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty.
         */
        name?: string | null;
        /**
         * Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id.  Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index.
         */
        queryScope?: string | null;
        /**
         * Output only. The serving state of the index.
         */
        state?: string | null;
    }
    /**
     * The index configuration for this field.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2IndexConfig {
        /**
         * Output only. Specifies the resource name of the `Field` from which this field&#39;s index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false).
         */
        ancestorField?: string | null;
        /**
         * The indexes supported for this field.
         */
        indexes?: Schema$GoogleFirestoreAdminV1beta2Index[];
        /**
         * Output only When true, the `Field`&#39;s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`.
         */
        reverting?: boolean | null;
        /**
         * Output only. When true, the `Field`&#39;s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`&#39;s index configuration is defined explicitly.
         */
        usesAncestorConfig?: boolean | null;
    }
    /**
     * Information about an index configuration change.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2IndexConfigDelta {
        /**
         * Specifies how the index is changing.
         */
        changeType?: string | null;
        /**
         * The index being changed.
         */
        index?: Schema$GoogleFirestoreAdminV1beta2Index;
    }
    /**
     * A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2IndexField {
        /**
         * Indicates that this field supports operations on `array_value`s.
         */
        arrayConfig?: string | null;
        /**
         * Can be __name__. For single field indexes, this must match the name of the field or may be omitted.
         */
        fieldPath?: string | null;
        /**
         * Indicates that this field supports ordering by the specified order or comparing using =, &lt;, &lt;=, &gt;, &gt;=.
         */
        order?: string | null;
    }
    /**
     * Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2IndexOperationMetadata {
        /**
         * The time this operation completed. Will be unset if operation still in progress.
         */
        endTime?: string | null;
        /**
         * The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         */
        index?: string | null;
        /**
         * The progress, in bytes, of this operation.
         */
        progressBytes?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The progress, in documents, of this operation.
         */
        progressDocuments?: Schema$GoogleFirestoreAdminV1beta2Progress;
        /**
         * The time this operation started.
         */
        startTime?: string | null;
        /**
         * The state of the operation.
         */
        state?: string | null;
    }
    /**
     * The response for FirestoreAdmin.ListFields.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse {
        /**
         * The requested fields.
         */
        fields?: Schema$GoogleFirestoreAdminV1beta2Field[];
        /**
         * A page token that may be used to request another page of results. If blank, this is the last page.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response for FirestoreAdmin.ListIndexes.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse {
        /**
         * The requested indexes.
         */
        indexes?: Schema$GoogleFirestoreAdminV1beta2Index[];
        /**
         * A page token that may be used to request another page of results. If blank, this is the last page.
         */
        nextPageToken?: string | null;
    }
    /**
     * Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used.
     */
    export interface Schema$GoogleFirestoreAdminV1beta2Progress {
        /**
         * The amount of work completed.
         */
        completedWork?: string | null;
        /**
         * The amount of work estimated.
         */
        estimatedWork?: string | null;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$GoogleLongrunningOperation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
         */
        name?: string | null;
        /**
         * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details.  There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        databases: Resource$Projects$Databases;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Databases {
        context: APIRequestContext;
        collectionGroups: Resource$Projects$Databases$Collectiongroups;
        constructor(context: APIRequestContext);
        /**
         * firestore.projects.databases.exportDocuments
         * @desc Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.exportDocuments({
         *     // Database to export. Should be of the form:
         *     // `projects/{project_id}/databases/{database_id}`.
         *     name: 'projects/my-project/databases/my-database',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "collectionIds": [],
         *       //   "outputUriPrefix": "my_outputUriPrefix"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.exportDocuments
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
         * @param {().GoogleFirestoreAdminV1beta2ExportDocumentsRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        exportDocuments(params: Params$Resource$Projects$Databases$Exportdocuments, options: StreamMethodOptions): GaxiosPromise<Readable>;
        exportDocuments(params?: Params$Resource$Projects$Databases$Exportdocuments, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        exportDocuments(params: Params$Resource$Projects$Databases$Exportdocuments, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        exportDocuments(params: Params$Resource$Projects$Databases$Exportdocuments, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        exportDocuments(params: Params$Resource$Projects$Databases$Exportdocuments, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        exportDocuments(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * firestore.projects.databases.importDocuments
         * @desc Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.importDocuments({
         *     // Database to import into. Should be of the form:
         *     // `projects/{project_id}/databases/{database_id}`.
         *     name: 'projects/my-project/databases/my-database',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "collectionIds": [],
         *       //   "inputUriPrefix": "my_inputUriPrefix"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.importDocuments
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
         * @param {().GoogleFirestoreAdminV1beta2ImportDocumentsRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        importDocuments(params: Params$Resource$Projects$Databases$Importdocuments, options: StreamMethodOptions): GaxiosPromise<Readable>;
        importDocuments(params?: Params$Resource$Projects$Databases$Importdocuments, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        importDocuments(params: Params$Resource$Projects$Databases$Importdocuments, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        importDocuments(params: Params$Resource$Projects$Databases$Importdocuments, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        importDocuments(params: Params$Resource$Projects$Databases$Importdocuments, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        importDocuments(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
    }
    export interface Params$Resource$Projects$Databases$Exportdocuments extends StandardParameters {
        /**
         * Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirestoreAdminV1beta2ExportDocumentsRequest;
    }
    export interface Params$Resource$Projects$Databases$Importdocuments extends StandardParameters {
        /**
         * Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirestoreAdminV1beta2ImportDocumentsRequest;
    }
    export class Resource$Projects$Databases$Collectiongroups {
        context: APIRequestContext;
        fields: Resource$Projects$Databases$Collectiongroups$Fields;
        indexes: Resource$Projects$Databases$Collectiongroups$Indexes;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Databases$Collectiongroups$Fields {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * firestore.projects.databases.collectionGroups.fields.get
         * @desc Gets the metadata and configuration for a Field.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.fields.get({
         *     // A name of the form
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
         *     name:
         *       'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup/fields/my-field',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "indexConfig": {},
         *   //   "name": "my_name"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.fields.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta2Field>;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>): void;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Get, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Field>): void;
        /**
         * firestore.projects.databases.collectionGroups.fields.list
         * @desc Lists the field configuration and metadata for this database.  Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.fields.list({
         *     // The filter to apply to list results. Currently,
         *     // FirestoreAdmin.ListFields only supports listing fields
         *     // that have been explicitly overridden. To issue this query, call
         *     // FirestoreAdmin.ListFields with the filter set to
         *     // `indexConfig.usesAncestorConfig:false`.
         *     filter: 'placeholder-value',
         *     // The number of results to return.
         *     pageSize: 'placeholder-value',
         *     // A page token, returned from a previous call to
         *     // FirestoreAdmin.ListFields, that may be used to get the next
         *     // page of results.
         *     pageToken: 'placeholder-value',
         *     // A parent name of the form
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         *     parent:
         *       'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "fields": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.fields.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
         * @param {integer=} params.pageSize The number of results to return.
         * @param {string=} params.pageToken A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
         * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$List, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListFieldsResponse>): void;
        /**
         * firestore.projects.databases.collectionGroups.fields.patch
         * @desc Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`.  This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata.  To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x`.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.fields.patch({
         *     // A field name of the form
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`
         *     //
         *     // A field path may be a simple field name, e.g. `address` or a path to fields
         *     // within map_value , e.g. `address.city`,
         *     // or a special field path. The only valid special field is `*`, which
         *     // represents any field.
         *     //
         *     // Field paths may be quoted using ` (backtick). The only character that needs
         *     // to be escaped within a quoted field path is the backtick character itself,
         *     // escaped using a backslash. Special characters in field paths that
         *     // must be quoted include: `*`, `.`,
         *     // ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.
         *     //
         *     // Examples:
         *     // (Note: Comments here are written in markdown syntax, so there is an
         *     //  additional layer of backticks to represent a code block)
         *     // `\`address.city\`` represents a field named `address.city`, not the map key
         *     // `city` in the field `address`.
         *     // `\`*\`` represents a field named `*`, not any field.
         *     //
         *     // A special `Field` contains the default indexing settings for all fields.
         *     // This field's resource name is:
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x`
         *     // Indexes defined on this `Field` will be applied to all fields which do not
         *     // have their own `Field` index configuration.
         *     name:
         *       'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup/fields/my-field',
         *     // A mask, relative to the field. If specified, only configuration specified
         *     // by this field_mask will be updated in the field.
         *     updateMask: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "indexConfig": {},
         *       //   "name": "my_name"
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.fields.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`  A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field.  Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.  Examples: (Note: Comments here are written in markdown syntax, so there is an  additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field.  A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
         * @param {string=} params.updateMask A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
         * @param {().GoogleFirestoreAdminV1beta2Field} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        patch(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        patch(params: Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        patch(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Get extends StandardParameters {
        /**
         * A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$List extends StandardParameters {
        /**
         * The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
         */
        filter?: string;
        /**
         * The number of results to return.
         */
        pageSize?: number;
        /**
         * A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
         */
        pageToken?: string;
        /**
         * A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Fields$Patch extends StandardParameters {
        /**
         * A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`  A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field.  Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters.  Examples: (Note: Comments here are written in markdown syntax, so there is an  additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field.  A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/x` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
         */
        name?: string;
        /**
         * A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirestoreAdminV1beta2Field;
    }
    export class Resource$Projects$Databases$Collectiongroups$Indexes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * firestore.projects.databases.collectionGroups.indexes.create
         * @desc Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.indexes.create(
         *     {
         *       // A parent name of the form
         *       // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         *       parent:
         *         'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup',
         *
         *       // Request body metadata
         *       requestBody: {
         *         // request body parameters
         *         // {
         *         //   "fields": [],
         *         //   "name": "my_name",
         *         //   "queryScope": "my_queryScope",
         *         //   "state": "my_state"
         *         // }
         *       },
         *     }
         *   );
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "done": false,
         *   //   "error": {},
         *   //   "metadata": {},
         *   //   "name": "my_name",
         *   //   "response": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.indexes.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         * @param {().GoogleFirestoreAdminV1beta2Index} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create, options?: MethodOptions): GaxiosPromise<Schema$GoogleLongrunningOperation>;
        create(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create, options: MethodOptions | BodyResponseCallback<Schema$GoogleLongrunningOperation>, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create, callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        create(callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>): void;
        /**
         * firestore.projects.databases.collectionGroups.indexes.delete
         * @desc Deletes a composite index.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.indexes.delete(
         *     {
         *       // A name of the form
         *       // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         *       name:
         *         'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup/indexes/my-indexe',
         *     }
         *   );
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
         * @alias firestore.projects.databases.collectionGroups.indexes.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * firestore.projects.databases.collectionGroups.indexes.get
         * @desc Gets a composite index.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.indexes.get({
         *     // A name of the form
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         *     name:
         *       'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup/indexes/my-indexe',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "fields": [],
         *   //   "name": "my_name",
         *   //   "queryScope": "my_queryScope",
         *   //   "state": "my_state"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.indexes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta2Index>;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Index>, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Index>): void;
        get(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Index>): void;
        get(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2Index>): void;
        /**
         * firestore.projects.databases.collectionGroups.indexes.list
         * @desc Lists composite indexes.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/firestore.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const firestore = google.firestore('v1beta2');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/datastore',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await firestore.projects.databases.collectionGroups.indexes.list({
         *     // The filter to apply to list results.
         *     filter: 'placeholder-value',
         *     // The number of results to return.
         *     pageSize: 'placeholder-value',
         *     // A page token, returned from a previous call to
         *     // FirestoreAdmin.ListIndexes, that may be used to get the next
         *     // page of results.
         *     pageToken: 'placeholder-value',
         *     // A parent name of the form
         *     // `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         *     parent:
         *       'projects/my-project/databases/my-database/collectionGroups/my-collectionGroup',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "indexes": [],
         *   //   "nextPageToken": "my_nextPageToken"
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias firestore.projects.databases.collectionGroups.indexes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter The filter to apply to list results.
         * @param {integer=} params.pageSize The number of results to return.
         * @param {string=} params.pageToken A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
         * @param {string} params.parent A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse>;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse>, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse>): void;
        list(params: Params$Resource$Projects$Databases$Collectiongroups$Indexes$List, callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleFirestoreAdminV1beta2ListIndexesResponse>): void;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Create extends StandardParameters {
        /**
         * A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleFirestoreAdminV1beta2Index;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Delete extends StandardParameters {
        /**
         * A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$Get extends StandardParameters {
        /**
         * A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Databases$Collectiongroups$Indexes$List extends StandardParameters {
        /**
         * The filter to apply to list results.
         */
        filter?: string;
        /**
         * The number of results to return.
         */
        pageSize?: number;
        /**
         * A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
         */
        pageToken?: string;
        /**
         * A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
         */
        parent?: string;
    }
    export {};
}
