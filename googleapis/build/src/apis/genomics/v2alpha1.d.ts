/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace genomics_v2alpha1 {
    export interface Options extends GlobalOptions {
        version: 'v2alpha1';
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
     * Genomics API
     *
     * Uploads, processes, queries, and searches Genomics data in the cloud.
     *
     * @example
     * const {google} = require('googleapis');
     * const genomics = google.genomics('v2alpha1');
     *
     * @namespace genomics
     * @type {Function}
     * @version v2alpha1
     * @variation v2alpha1
     * @param {object=} options Options for Genomics
     */
    export class Genomics {
        context: APIRequestContext;
        pipelines: Resource$Pipelines;
        projects: Resource$Projects;
        workers: Resource$Workers;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Carries information about an accelerator that can be attached to a VM.
     */
    export interface Schema$Accelerator {
        /**
         * How many accelerators of this type to attach.
         */
        count?: string | null;
        /**
         * The accelerator type string (for example, &quot;nvidia-tesla-k80&quot;).  Only NVIDIA GPU accelerators are currently supported. If an NVIDIA GPU is attached, the required runtime libraries will be made available to all containers under `/usr/local/nvidia`. The driver version to install must be specified using the NVIDIA driver version parameter on the virtual machine specification. Note that attaching a GPU increases the worker VM startup time by a few minutes.
         */
        type?: string | null;
    }
    /**
     * Specifies a single action that runs a Docker container.
     */
    export interface Schema$Action {
        /**
         * If specified, overrides the `CMD` specified in the container. If the container also has an `ENTRYPOINT` the values are used as entrypoint arguments. Otherwise, they are used as a command and arguments to run inside the container.
         */
        commands?: string[] | null;
        /**
         * If the specified image is hosted on a private registry other than Google Container Registry, the credentials required to pull the image must be specified here as an encrypted secret.  The secret must decrypt to a JSON-encoded dictionary containing both `username` and `password` keys.
         */
        credentials?: Schema$Secret;
        /**
         * If specified, overrides the `ENTRYPOINT` specified in the container.
         */
        entrypoint?: string | null;
        /**
         * The environment to pass into the container. This environment is merged with values specified in the google.genomics.v2alpha1.Pipeline message, overwriting any duplicate values.  In addition to the values passed here, a few other values are automatically injected into the environment. These cannot be hidden or overwritten.  `GOOGLE_PIPELINE_FAILED` will be set to &quot;1&quot; if the pipeline failed because an action has exited with a non-zero status (and did not have the `IGNORE_EXIT_STATUS` flag set). This can be used to determine if additional debug or logging actions should execute.  `GOOGLE_LAST_EXIT_STATUS` will be set to the exit status of the last non-background action that executed. This can be used by workflow engine authors to determine whether an individual action has succeeded or failed.
         */
        environment?: {
            [key: string]: string;
        } | null;
        /**
         * The set of flags to apply to this action.
         */
        flags?: string[] | null;
        /**
         * Required. The URI to pull the container image from. Note that all images referenced by actions in the pipeline are pulled before the first action runs. If multiple actions reference the same image, it is only pulled once, ensuring that the same image is used for all actions in a single pipeline.  The image URI can be either a complete host and image specification (e.g., quay.io/biocontainers/samtools), a library and image name (e.g., google/cloud-sdk) or a bare image name (&#39;bash&#39;) to pull from the default library.  No schema is required in any of these cases.  If the specified image is not public, the service account specified for the Virtual Machine must have access to pull the images from GCR, or appropriate credentials must be specified in the google.genomics.v2alpha1.Action.credentials field.
         */
        imageUri?: string | null;
        /**
         * Labels to associate with the action. This field is provided to assist workflow engine authors in identifying actions (for example, to indicate what sort of action they perform, such as localization or debugging). They are returned in the operation metadata, but are otherwise ignored.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * A list of mounts to make available to the action.  In addition to the values specified here, every action has a special virtual disk mounted under `/google` that contains log files and other operational components.  &lt;ul&gt;   &lt;li&gt;&lt;code&gt;/google/logs&lt;/code&gt; All logs written during the pipeline   execution.&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/output&lt;/code&gt; The combined standard output and   standard error of all actions run as part of the pipeline   execution.&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/action/x/stdout&lt;/code&gt; The complete contents of   each individual action&#39;s standard output.&lt;/li&gt;   &lt;li&gt;&lt;code&gt;/google/logs/action/x/stderr&lt;/code&gt; The complete contents of   each individual action&#39;s standard error output.&lt;/li&gt; &lt;/ul&gt;
         */
        mounts?: Schema$Mount[];
        /**
         * An optional name for the container. The container hostname will be set to this name, making it useful for inter-container communication. The name must contain only upper and lowercase alphanumeric characters and hypens and cannot start with a hyphen.
         */
        name?: string | null;
        /**
         * An optional identifier for a PID namespace to run the action inside. Multiple actions should use the same string to share a namespace.  If unspecified, a separate isolated namespace is used.
         */
        pidNamespace?: string | null;
        /**
         * A map of containers to host port mappings for this container. If the container already specifies exposed ports, use the `PUBLISH_EXPOSED_PORTS` flag instead.  The host port number must be less than 65536. If it is zero, an unused random port is assigned. To determine the resulting port number, consult the `ContainerStartedEvent` in the operation metadata.
         */
        portMappings?: {
            [key: string]: number;
        } | null;
        /**
         * The maximum amount of time to give the action to complete. If the action fails to complete before the timeout, it will be terminated and the exit status will be non-zero. The pipeline will continue or terminate based on the rules defined by the `ALWAYS_RUN` and `IGNORE_EXIT_STATUS` flags.
         */
        timeout?: string | null;
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    /**
     * The parameters to the CheckIn method.
     */
    export interface Schema$CheckInRequest {
        /**
         * The deadline has expired and the worker needs more time.
         */
        deadlineExpired?: Schema$Empty;
        /**
         * A workflow specific event occurred.
         */
        event?: {
            [key: string]: any;
        } | null;
        /**
         * A list of timestamped events.
         */
        events?: Schema$TimestampedEvent[];
        /**
         * The operation has finished with the given result.
         */
        result?: Schema$Status;
        /**
         * Data about the status of the worker VM.
         */
        workerStatus?: Schema$WorkerStatus;
    }
    /**
     * The response to the CheckIn method.
     */
    export interface Schema$CheckInResponse {
        /**
         * The deadline by which the worker must request an extension.  The backend will allow for network transmission time and other delays, but the worker must attempt to transmit the extension request no later than the deadline.
         */
        deadline?: string | null;
        /**
         * The metadata that describes the operation assigned to the worker.
         */
        metadata?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Describes a Compute Engine resource that is being managed by a running pipeline.
     */
    export interface Schema$ComputeEngine {
        /**
         * The names of the disks that were created for this pipeline.
         */
        diskNames?: string[] | null;
        /**
         * The instance on which the operation is running.
         */
        instanceName?: string | null;
        /**
         * The machine type of the instance.
         */
        machineType?: string | null;
        /**
         * The availability zone in which the instance resides.
         */
        zone?: string | null;
    }
    /**
     * An event generated when a container is forcibly terminated by the worker. Currently, this only occurs when the container outlives the timeout specified by the user.
     */
    export interface Schema$ContainerKilledEvent {
        /**
         * The numeric ID of the action that started the container.
         */
        actionId?: number | null;
    }
    /**
     * An event generated when a container starts.
     */
    export interface Schema$ContainerStartedEvent {
        /**
         * The numeric ID of the action that started this container.
         */
        actionId?: number | null;
        /**
         * The public IP address that can be used to connect to the container. This field is only populated when at least one port mapping is present. If the instance was created with a private address, this field will be empty even if port mappings exist.
         */
        ipAddress?: string | null;
        /**
         * The container-to-host port mappings installed for this container. This set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag as well as any specified in the `Action` definition.
         */
        portMappings?: {
            [key: string]: number;
        } | null;
    }
    /**
     * An event generated when a container exits.
     */
    export interface Schema$ContainerStoppedEvent {
        /**
         * The numeric ID of the action that started this container.
         */
        actionId?: number | null;
        /**
         * The exit status of the container.
         */
        exitStatus?: number | null;
        /**
         * The tail end of any content written to standard error by the container. If the content emits large amounts of debugging noise or contains sensitive information, you can prevent the content from being printed by setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag.  Note that only a small amount of the end of the stream is captured here. The entire stream is stored in the `/google/logs` directory mounted into each action, and can be copied off the machine as described elsewhere.
         */
        stderr?: string | null;
    }
    /**
     * An event generated whenever a resource limitation or transient error delays execution of a pipeline that was otherwise ready to run.
     */
    export interface Schema$DelayedEvent {
        /**
         * A textual description of the cause of the delay. The string can change without notice because it is often generated by another service (such as Compute Engine).
         */
        cause?: string | null;
        /**
         * If the delay was caused by a resource shortage, this field lists the Compute Engine metrics that are preventing this operation from running (for example, `CPUS` or `INSTANCES`). If the particular metric is not known, a single `UNKNOWN` metric will be present.
         */
        metrics?: string[] | null;
    }
    /**
     * Carries information about a disk that can be attached to a VM.  See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
     */
    export interface Schema$Disk {
        /**
         * A user-supplied name for the disk. Used when mounting the disk into actions. The name must contain only upper and lowercase alphanumeric characters and hypens and cannot start with a hyphen.
         */
        name?: string | null;
        /**
         * The size, in GB, of the disk to attach. If the size is not specified, a default is chosen to ensure reasonable I/O performance.  If the disk type is specified as `local-ssd`, multiple local drives are automatically combined to provide the requested size. Note, however, that each physical SSD is 375GB in size, and no more than 8 drives can be attached to a single instance.
         */
        sizeGb?: number | null;
        /**
         * An optional image to put on the disk before attaching it to the VM.
         */
        sourceImage?: string | null;
        /**
         * The Compute Engine disk type. If unspecified, `pd-standard` is used.
         */
        type?: string | null;
    }
    /**
     * The status of a disk on a VM.
     */
    export interface Schema$DiskStatus {
        /**
         * Free disk space.
         */
        freeSpaceBytes?: string | null;
        /**
         * Total disk space.
         */
        totalSpaceBytes?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
     */
    export interface Schema$Empty {
    }
    /**
     * Carries information about events that occur during pipeline execution.
     */
    export interface Schema$Event {
        /**
         * A human-readable description of the event. Note that these strings can change at any time without notice. Any application logic must use the information in the `details` field.
         */
        description?: string | null;
        /**
         * Machine-readable details about the event.
         */
        details?: {
            [key: string]: any;
        } | null;
        /**
         * The time at which the event occurred.
         */
        timestamp?: string | null;
    }
    /**
     * An event generated when the execution of a pipeline has failed. Note that other events can continue to occur after this event.
     */
    export interface Schema$FailedEvent {
        /**
         * The human-readable description of the cause of the failure.
         */
        cause?: string | null;
        /**
         * The Google standard error code that best describes this failure.
         */
        code?: string | null;
    }
    /**
     * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can&#39;t be represented as JSON, such as raw binary or an HTML page.   This message can be used both in streaming and non-streaming API methods in the request as well as the response.  It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.  Example:      message GetResourceRequest {       // A unique request id.       string request_id = 1;        // The raw HTTP body is bound to this field.       google.api.HttpBody http_body = 2;     }      service ResourceService {       rpc GetResource(GetResourceRequest) returns (google.api.HttpBody);       rpc UpdateResource(google.api.HttpBody) returns       (google.protobuf.Empty);     }  Example with streaming methods:      service CaldavService {       rpc GetCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);       rpc UpdateCalendar(stream google.api.HttpBody)         returns (stream google.api.HttpBody);     }  Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
     */
    export interface Schema$HttpBody {
        /**
         * The HTTP Content-Type header value specifying the content type of the body.
         */
        contentType?: string | null;
        /**
         * The HTTP request/response body as raw binary.
         */
        data?: string | null;
        /**
         * Application specific response metadata. Must be set in the first response for streaming APIs.
         */
        extensions?: Array<{
            [key: string]: any;
        }> | null;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * Carries information about the pipeline execution that is returned in the long running operation&#39;s metadata field.
     */
    export interface Schema$Metadata {
        /**
         * The time at which the operation was created by the API.
         */
        createTime?: string | null;
        /**
         * The time at which execution was completed and resources were cleaned up.
         */
        endTime?: string | null;
        /**
         * The list of events that have happened so far during the execution of this operation.
         */
        events?: Schema$Event[];
        /**
         * The user-defined labels associated with this operation.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The pipeline this operation represents.
         */
        pipeline?: Schema$Pipeline;
        /**
         * The first time at which resources were allocated to execute the pipeline.
         */
        startTime?: string | null;
    }
    /**
     * Carries information about a particular disk mount inside a container.
     */
    export interface Schema$Mount {
        /**
         * The name of the disk to mount, as specified in the resources section.
         */
        disk?: string | null;
        /**
         * The path to mount the disk inside the container.
         */
        path?: string | null;
        /**
         * If true, the disk is mounted read-only inside the container.
         */
        readOnly?: boolean | null;
    }
    /**
     * VM networking options.
     */
    export interface Schema$Network {
        /**
         * The network name to attach the VM&#39;s network interface to. The value will be prefixed with `global/networks/` unless it contains a `/`, in which case it is assumed to be a fully specified network resource URL.  If unspecified, the global default network is used.
         */
        name?: string | null;
        /**
         * If the specified network is configured for custom subnet creation, the name of the subnetwork to attach the instance to must be specified here.  The value is prefixed with `regions/x/subnetworks/` unless it contains a `/`, in which case it is assumed to be a fully specified subnetwork resource URL.  If the `*` character appears in the value, it is replaced with the region that the virtual machine has been allocated in.
         */
        subnetwork?: string | null;
        /**
         * If set to true, do not attach a public IP address to the VM. Note that without a public IP address, additional configuration is required to allow the VM to access Google services.  See https://cloud.google.com/vpc/docs/configure-private-google-access for more information.
         */
        usePrivateAddress?: boolean | null;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * An OperationMetadata or Metadata object. This will always be returned with the Operation.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. For example&amp;#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
         */
        name?: string | null;
        /**
         * An Empty object.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * An event that occurred during an Operation.
     */
    export interface Schema$OperationEvent {
        /**
         * Required description of event.
         */
        description?: string | null;
        /**
         * Optional time of when event finished. An event can have a start time and no finish time. If an event has a finish time, there must be a start time.
         */
        endTime?: string | null;
        /**
         * Optional time of when event started.
         */
        startTime?: string | null;
    }
    /**
     * Metadata describing an Operation.
     */
    export interface Schema$OperationMetadata {
        /**
         * This field is deprecated. Use `labels` instead. Optionally provided by the caller when submitting the request that creates the operation.
         */
        clientId?: string | null;
        /**
         * The time at which the job was submitted to the Genomics service.
         */
        createTime?: string | null;
        /**
         * The time at which the job stopped running.
         */
        endTime?: string | null;
        /**
         * Optional event messages that were generated during the job&#39;s execution. This also contains any warnings that were generated during import or export.
         */
        events?: Schema$OperationEvent[];
        /**
         * Optionally provided by the caller when submitting the request that creates the operation.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The Google Cloud Project in which the job is scoped.
         */
        projectId?: string | null;
        /**
         * The original request that started the operation. Note that this will be in current version of the API. If the operation was started with v1beta2 API and a GetOperation is performed on v1 API, a v1 request will be returned.
         */
        request?: {
            [key: string]: any;
        } | null;
        /**
         * Runtime metadata on this Operation.
         */
        runtimeMetadata?: {
            [key: string]: any;
        } | null;
        /**
         * The time at which the job began to run.
         */
        startTime?: string | null;
    }
    /**
     * Specifies a series of actions to execute, expressed as Docker containers.
     */
    export interface Schema$Pipeline {
        /**
         * The list of actions to execute, in the order they are specified.
         */
        actions?: Schema$Action[];
        /**
         * The environment to pass into every action. Each action can also specify additional environment variables but cannot delete an entry from this map (though they can overwrite it with a different value).
         */
        environment?: {
            [key: string]: string;
        } | null;
        /**
         * The resources required for execution.
         */
        resources?: Schema$Resources;
        /**
         * The maximum amount of time to give the pipeline to complete.  This includes the time spent waiting for a worker to be allocated.  If the pipeline fails to complete before the timeout, it will be cancelled and the error code will be set to DEADLINE_EXCEEDED.  If unspecified, it will default to 7 days.
         */
        timeout?: string | null;
    }
    /**
     * An event generated when the worker starts pulling an image.
     */
    export interface Schema$PullStartedEvent {
        /**
         * The URI of the image that was pulled.
         */
        imageUri?: string | null;
    }
    /**
     * An event generated when the worker stops pulling an image.
     */
    export interface Schema$PullStoppedEvent {
        /**
         * The URI of the image that was pulled.
         */
        imageUri?: string | null;
    }
    /**
     * The system resources for the pipeline run.  At least one zone or region must be specified or the pipeline run will fail.
     */
    export interface Schema$Resources {
        /**
         * The project ID to allocate resources in.
         */
        projectId?: string | null;
        /**
         * The list of regions allowed for VM allocation. If set, the `zones` field must not be set.
         */
        regions?: string[] | null;
        /**
         * The virtual machine specification.
         */
        virtualMachine?: Schema$VirtualMachine;
        /**
         * The list of zones allowed for VM allocation. If set, the `regions` field must not be set.
         */
        zones?: string[] | null;
    }
    /**
     * The arguments to the `RunPipeline` method. The requesting user must have the `iam.serviceAccounts.actAs` permission for the Cloud Genomics service account or the request will fail.
     */
    export interface Schema$RunPipelineRequest {
        /**
         * User-defined labels to associate with the returned operation. These labels are not propagated to any Google Cloud Platform resources used by the operation, and can be modified at any time.  To associate labels with resources created while executing the operation, see the appropriate resource message (for example, `VirtualMachine`).
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Required. The description of the pipeline to run.
         */
        pipeline?: Schema$Pipeline;
    }
    /**
     * The response to the RunPipeline method, returned in the operation&#39;s result field on success.
     */
    export interface Schema$RunPipelineResponse {
    }
    /**
     * Runtime metadata that will be populated in the runtimeMetadata field of the Operation associated with a RunPipeline execution.
     */
    export interface Schema$RuntimeMetadata {
        /**
         * Execution information specific to Google Compute Engine.
         */
        computeEngine?: Schema$ComputeEngine;
    }
    /**
     * Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.
     */
    export interface Schema$Secret {
        /**
         * The value of the cipherText response from the `encrypt` method. This field is intentionally unaudited.
         */
        cipherText?: string | null;
        /**
         * The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the `decrypt` method on the specified key.
         */
        keyName?: string | null;
    }
    /**
     * Carries information about a Google Cloud service account.
     */
    export interface Schema$ServiceAccount {
        /**
         * Email address of the service account. If not specified, the default Compute Engine service account for the project will be used.
         */
        email?: string | null;
        /**
         * List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.
         */
        scopes?: string[] | null;
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
    /**
     * An event that occured in the operation assigned to the worker and the time of occurance.
     */
    export interface Schema$TimestampedEvent {
        /**
         * The event data.
         */
        data?: {
            [key: string]: any;
        } | null;
        /**
         * The time when the event happened.
         */
        timestamp?: string | null;
    }
    /**
     * An event generated when the execution of a container results in a non-zero exit status that was not otherwise ignored. Execution will continue, but only actions that are flagged as `ALWAYS_RUN` will be executed. Other actions will be skipped.
     */
    export interface Schema$UnexpectedExitStatusEvent {
        /**
         * The numeric ID of the action that started the container.
         */
        actionId?: number | null;
        /**
         * The exit status of the container.
         */
        exitStatus?: number | null;
    }
    /**
     * The response to the UploadSOSReport method.
     */
    export interface Schema$UploadSOSReportResponse {
    }
    /**
     * Carries information about a Compute Engine VM resource.
     */
    export interface Schema$VirtualMachine {
        /**
         * The list of accelerators to attach to the VM.
         */
        accelerators?: Schema$Accelerator[];
        /**
         * The size of the boot disk, in GB. The boot disk must be large enough to accommodate all of the Docker images from each action in the pipeline at the same time. If not specified, a small but reasonable default value is used.
         */
        bootDiskSizeGb?: number | null;
        /**
         * The host operating system image to use.  Currently, only Container-Optimized OS images can be used.  The default value is `projects/cos-cloud/global/images/family/cos-stable`, which selects the latest stable release of Container-Optimized OS.  This option is provided to allow testing against the beta release of the operating system to ensure that the new version does not interact negatively with production pipelines.  To test a pipeline against the beta release of Container-Optimized OS, use the value `projects/cos-cloud/global/images/family/cos-beta`.
         */
        bootImage?: string | null;
        /**
         * The CPU platform to request. An instance based on a newer platform can be allocated, but never one with fewer capabilities. The value of this parameter must be a valid Compute Engine CPU platform name (such as &quot;Intel Skylake&quot;). This parameter is only useful for carefully optimized work loads where the CPU platform has a significant impact.  For more information about the effect of this parameter, see https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform.
         */
        cpuPlatform?: string | null;
        /**
         * The list of disks to create and attach to the VM.
         */
        disks?: Schema$Disk[];
        /**
         * The Compute Engine Disk Images to use as a Docker cache. The disks will be mounted into the Docker folder in a way that the images present in the cache will not need to be pulled. The digests of the cached images must match those of the tags used or the latest version will still be pulled. Only a single image is supported.
         */
        dockerCacheImages?: string[] | null;
        /**
         * Whether Stackdriver monitoring should be enabled on the VM.
         */
        enableStackdriverMonitoring?: boolean | null;
        /**
         * Optional set of labels to apply to the VM and any attached disk resources. These labels must adhere to the [name and value restrictions](https://cloud.google.com/compute/docs/labeling-resources) on VM labels imposed by Compute Engine.  Labels keys with the prefix &#39;google-&#39; are reserved for use by Google.  Labels applied at creation time to the VM. Applied on a best-effort basis to attached disk resources shortly after VM creation.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Required. The machine type of the virtual machine to create. Must be the short name of a standard machine type (such as &quot;n1-standard-1&quot;) or a custom machine type (such as &quot;custom-1-4096&quot;, where &quot;1&quot; indicates the number of vCPUs and &quot;4096&quot; indicates the memory in MB). See [Creating an instance with a custom machine type](https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type#create) for more specifications on creating a custom machine type.
         */
        machineType?: string | null;
        /**
         * The VM network configuration.
         */
        network?: Schema$Network;
        /**
         * The NVIDIA driver version to use when attaching an NVIDIA GPU accelerator. The version specified here must be compatible with the GPU libraries contained in the container being executed, and must be one of the drivers hosted in the `nvidia-drivers-us-public` bucket on Google Cloud Storage.
         */
        nvidiaDriverVersion?: string | null;
        /**
         * If true, allocate a preemptible VM.
         */
        preemptible?: boolean | null;
        /**
         * The service account to install on the VM. This account does not need any permissions other than those required by the pipeline.
         */
        serviceAccount?: Schema$ServiceAccount;
    }
    /**
     * An event generated after a worker VM has been assigned to run the pipeline.
     */
    export interface Schema$WorkerAssignedEvent {
        /**
         * The worker&#39;s instance name.
         */
        instance?: string | null;
        /**
         * The machine type that was assigned for the worker.
         */
        machineType?: string | null;
        /**
         * The zone the worker is running in.
         */
        zone?: string | null;
    }
    /**
     * An event generated when the worker VM that was assigned to the pipeline has been released (deleted).
     */
    export interface Schema$WorkerReleasedEvent {
        /**
         * The worker&#39;s instance name.
         */
        instance?: string | null;
        /**
         * The zone the worker was running in.
         */
        zone?: string | null;
    }
    /**
     * The status of the worker VM.
     */
    export interface Schema$WorkerStatus {
        /**
         * Status of attached disks.
         */
        attachedDisks?: {
            [key: string]: Schema$DiskStatus;
        } | null;
        /**
         * Status of the boot disk.
         */
        bootDisk?: Schema$DiskStatus;
        /**
         * Free RAM.
         */
        freeRamBytes?: string | null;
        /**
         * Total RAM.
         */
        totalRamBytes?: string | null;
        /**
         * System uptime.
         */
        uptimeSeconds?: string | null;
    }
    export class Resource$Pipelines {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * genomics.pipelines.run
         * @desc Runs a pipeline.  The returned Operation's metadata field will contain a google.genomics.v2alpha1.Metadata object describing the status of the pipeline execution.  The [response] field will contain a google.genomics.v2alpha1.RunPipelineResponse object if the pipeline completes successfully.  **Note:** Before you can use this method, the Genomics Service Agent must have access to your project. This is done automatically when the Cloud Genomics API is first enabled, but if you delete this permission, or if you enabled the Cloud Genomics API before the v2alpha1 API launch, you must disable and re-enable the API to grant the Genomics Service Agent the required permissions. Authorization requires the following [Google IAM](https://cloud.google.com/iam/) permission:  * `genomics.operations.create`  [1]: /genomics/gsa
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.pipelines.run({
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "labels": {},
         *       //   "pipeline": {}
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
         * @alias genomics.pipelines.run
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().RunPipelineRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run(params: Params$Resource$Pipelines$Run, options: StreamMethodOptions): GaxiosPromise<Readable>;
        run(params?: Params$Resource$Pipelines$Run, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        run(params: Params$Resource$Pipelines$Run, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        run(params: Params$Resource$Pipelines$Run, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        run(params: Params$Resource$Pipelines$Run, callback: BodyResponseCallback<Schema$Operation>): void;
        run(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Pipelines$Run extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$RunPipelineRequest;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        operations: Resource$Projects$Operations;
        workers: Resource$Projects$Workers;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * genomics.projects.operations.cancel
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;  * `genomics.operations.cancel`
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.projects.operations.cancel({
         *     // The name of the operation resource to be cancelled.
         *     name: 'projects/my-project/operations/my-operation',
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
         *   // {}
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias genomics.projects.operations.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {().CancelOperationRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Projects$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * genomics.projects.operations.get
         * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;  * `genomics.operations.get`
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.projects.operations.get({
         *     // The name of the operation resource.
         *     name: 'projects/my-project/operations/my-operation',
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
         * @alias genomics.projects.operations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params: Params$Resource$Projects$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * genomics.projects.operations.list
         * @desc Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;  * `genomics.operations.list`
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.projects.operations.list({
         *     // A string for filtering Operations.
         *     // In v2alpha1, the following filter fields are supported&#58;
         *     //
         *     // * createTime&#58; The time this job was created
         *     // * events&#58; The set of event (names) that have occurred while running
         *     //   the pipeline.  The &#58; operator can be used to determine if a
         *     //   particular event has occurred.
         *     // * error&#58; If the pipeline is running, this value is NULL.  Once the
         *     //   pipeline finishes, the value is the standard Google error code.
         *     // * labels.key or labels."key with space" where key is a label key.
         *     // * done&#58; If the pipeline is running, this value is false. Once the
         *     //   pipeline finishes, the value is true.
         *     //
         *     // In v1 and v1alpha2, the following filter fields are supported&#58;
         *     //
         *     // * projectId&#58; Required. Corresponds to
         *     //   OperationMetadata.projectId.
         *     // * createTime&#58; The time this job was created, in seconds from the
         *     //   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
         *     //   operators.
         *     // * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only
         *     //   one status may be specified.
         *     // * labels.key where key is a label key.
         *     //
         *     // Examples&#58;
         *     //
         *     // * `projectId = my-project AND createTime >= 1432140000`
         *     // * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
         *     // * `projectId = my-project AND labels.color = *`
         *     // * `projectId = my-project AND labels.color = red`
         *     filter: 'placeholder-value',
         *     // The name of the operation's parent resource.
         *     name: 'projects/my-project/operations',
         *     // The maximum number of results to return. The maximum value is 256.
         *     pageSize: 'placeholder-value',
         *     // The standard list page token.
         *     pageToken: 'placeholder-value',
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "nextPageToken": "my_nextPageToken",
         *   //   "operations": []
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias genomics.projects.operations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter A string for filtering Operations. In v2alpha1, the following filter fields are supported&#58;  * createTime&#58; The time this job was created * events&#58; The set of event (names) that have occurred while running   the pipeline.  The &#58; operator can be used to determine if a   particular event has occurred. * error&#58; If the pipeline is running, this value is NULL.  Once the   pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done&#58; If the pipeline is running, this value is false. Once the   pipeline finishes, the value is true.  In v1 and v1alpha2, the following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
         * @param {string} params.name The name of the operation's parent resource.
         * @param {integer=} params.pageSize The maximum number of results to return. The maximum value is 256.
         * @param {string=} params.pageToken The standard list page token.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params: Params$Resource$Projects$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Projects$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Operations$List extends StandardParameters {
        /**
         * A string for filtering Operations. In v2alpha1, the following filter fields are supported&#58;  * createTime&#58; The time this job was created * events&#58; The set of event (names) that have occurred while running   the pipeline.  The &#58; operator can be used to determine if a   particular event has occurred. * error&#58; If the pipeline is running, this value is NULL.  Once the   pipeline finishes, the value is the standard Google error code. * labels.key or labels."key with space" where key is a label key. * done&#58; If the pipeline is running, this value is false. Once the   pipeline finishes, the value is true.  In v1 and v1alpha2, the following filter fields are supported&#58;  * projectId&#58; Required. Corresponds to   OperationMetadata.projectId. * createTime&#58; The time this job was created, in seconds from the   [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`   operators. * status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only   one status may be specified. * labels.key where key is a label key.  Examples&#58;  * `projectId = my-project AND createTime >= 1432140000` * `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING` * `projectId = my-project AND labels.color = *` * `projectId = my-project AND labels.color = red`
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The maximum number of results to return. The maximum value is 256.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Workers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * genomics.projects.workers.checkIn
         * @desc The worker uses this method to retrieve the assigned operation and provide periodic status updates.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.projects.workers.checkIn({
         *     // The VM identity token for authenticating the VM instance.
         *     // https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         *     id: 'projects/my-project/workers/my-worker',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "deadlineExpired": {},
         *       //   "event": {},
         *       //   "events": [],
         *       //   "result": {},
         *       //   "workerStatus": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deadline": "my_deadline",
         *   //   "metadata": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias genomics.projects.workers.checkIn
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         * @param {().CheckInRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        checkIn(params: Params$Resource$Projects$Workers$Checkin, options: StreamMethodOptions): GaxiosPromise<Readable>;
        checkIn(params?: Params$Resource$Projects$Workers$Checkin, options?: MethodOptions): GaxiosPromise<Schema$CheckInResponse>;
        checkIn(params: Params$Resource$Projects$Workers$Checkin, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        checkIn(params: Params$Resource$Projects$Workers$Checkin, options: MethodOptions | BodyResponseCallback<Schema$CheckInResponse>, callback: BodyResponseCallback<Schema$CheckInResponse>): void;
        checkIn(params: Params$Resource$Projects$Workers$Checkin, callback: BodyResponseCallback<Schema$CheckInResponse>): void;
        checkIn(callback: BodyResponseCallback<Schema$CheckInResponse>): void;
    }
    export interface Params$Resource$Projects$Workers$Checkin extends StandardParameters {
        /**
         * The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         */
        id?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CheckInRequest;
    }
    export class Resource$Workers {
        context: APIRequestContext;
        projects: Resource$Workers$Projects;
        constructor(context: APIRequestContext);
        /**
         * genomics.workers.checkIn
         * @desc The worker uses this method to retrieve the assigned operation and provide periodic status updates.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.workers.checkIn({
         *     // The VM identity token for authenticating the VM instance.
         *     // https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         *     id: 'placeholder-value',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "deadlineExpired": {},
         *       //   "event": {},
         *       //   "events": [],
         *       //   "result": {},
         *       //   "workerStatus": {}
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "deadline": "my_deadline",
         *   //   "metadata": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias genomics.workers.checkIn
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         * @param {().CheckInRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        checkIn(params: Params$Resource$Workers$Checkin, options: StreamMethodOptions): GaxiosPromise<Readable>;
        checkIn(params?: Params$Resource$Workers$Checkin, options?: MethodOptions): GaxiosPromise<Schema$CheckInResponse>;
        checkIn(params: Params$Resource$Workers$Checkin, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        checkIn(params: Params$Resource$Workers$Checkin, options: MethodOptions | BodyResponseCallback<Schema$CheckInResponse>, callback: BodyResponseCallback<Schema$CheckInResponse>): void;
        checkIn(params: Params$Resource$Workers$Checkin, callback: BodyResponseCallback<Schema$CheckInResponse>): void;
        checkIn(callback: BodyResponseCallback<Schema$CheckInResponse>): void;
    }
    export interface Params$Resource$Workers$Checkin extends StandardParameters {
        /**
         * The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         */
        id?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CheckInRequest;
    }
    export class Resource$Workers$Projects {
        context: APIRequestContext;
        workers: Resource$Workers$Projects$Workers;
        constructor(context: APIRequestContext);
    }
    export class Resource$Workers$Projects$Workers {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * genomics.workers.projects.workers.uploadSosReport
         * @desc The worker uses this method to upload SOS reports for unexpected errors.
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/genomics.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const genomics = google.genomics('v2alpha1');
         *
         * async function main() {
         *   const auth = new google.auth.GoogleAuth({
         *     // Scopes can be specified either as an array or as a single, space-delimited string.
         *     scopes: [
         *       'https://www.googleapis.com/auth/cloud-platform',
         *       'https://www.googleapis.com/auth/genomics',
         *     ],
         *   });
         *
         *   // Acquire an auth client, and bind it to all future calls
         *   const authClient = await auth.getClient();
         *   google.options({auth: authClient});
         *
         *   // Do the magic
         *   const res = await genomics.workers.projects.workers.uploadSosReport({
         *     // The VM identity token for authenticating the VM instance.
         *     // https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         *     id: 'projects/my-project/workers/my-worker',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "contentType": "my_contentType",
         *       //   "data": "my_data",
         *       //   "extensions": []
         *       // }
         *     },
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
         * @alias genomics.workers.projects.workers.uploadSosReport
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         * @param {().HttpBody} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        uploadSosReport(params: Params$Resource$Workers$Projects$Workers$Uploadsosreport, options: StreamMethodOptions): GaxiosPromise<Readable>;
        uploadSosReport(params?: Params$Resource$Workers$Projects$Workers$Uploadsosreport, options?: MethodOptions): GaxiosPromise<Schema$UploadSOSReportResponse>;
        uploadSosReport(params: Params$Resource$Workers$Projects$Workers$Uploadsosreport, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        uploadSosReport(params: Params$Resource$Workers$Projects$Workers$Uploadsosreport, options: MethodOptions | BodyResponseCallback<Schema$UploadSOSReportResponse>, callback: BodyResponseCallback<Schema$UploadSOSReportResponse>): void;
        uploadSosReport(params: Params$Resource$Workers$Projects$Workers$Uploadsosreport, callback: BodyResponseCallback<Schema$UploadSOSReportResponse>): void;
        uploadSosReport(callback: BodyResponseCallback<Schema$UploadSOSReportResponse>): void;
    }
    export interface Params$Resource$Workers$Projects$Workers$Uploadsosreport extends StandardParameters {
        /**
         * The VM identity token for authenticating the VM instance. https://cloud.google.com/compute/docs/instances/verifying-instance-identity
         */
        id?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$HttpBody;
    }
    export {};
}
