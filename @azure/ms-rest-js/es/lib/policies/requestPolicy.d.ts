import { HttpOperationResponse } from "../httpOperationResponse";
import { HttpPipelineLogger } from "../httpPipelineLogger";
import { HttpPipelineLogLevel } from "../httpPipelineLogLevel";
import { WebResource } from "../webResource";
/**
 * Creates a new RequestPolicy per-request that uses the provided nextPolicy.
 */
export declare type RequestPolicyFactory = {
    create(nextPolicy: RequestPolicy, options: RequestPolicyOptions): RequestPolicy;
};
export interface RequestPolicy {
    sendRequest(httpRequest: WebResource): Promise<HttpOperationResponse>;
}
export declare abstract class BaseRequestPolicy implements RequestPolicy {
    readonly _nextPolicy: RequestPolicy;
    readonly _options: RequestPolicyOptions;
    protected constructor(_nextPolicy: RequestPolicy, _options: RequestPolicyOptions);
    abstract sendRequest(webResource: WebResource): Promise<HttpOperationResponse>;
    /**
     * Get whether or not a log with the provided log level should be logged.
     * @param logLevel The log level of the log that will be logged.
     * @returns Whether or not a log with the provided log level should be logged.
     */
    shouldLog(logLevel: HttpPipelineLogLevel): boolean;
    /**
     * Attempt to log the provided message to the provided logger. If no logger was provided or if
     * the log level does not meat the logger's threshold, then nothing will be logged.
     * @param logLevel The log level of this log.
     * @param message The message of this log.
     */
    log(logLevel: HttpPipelineLogLevel, message: string): void;
}
/**
 * Optional properties that can be used when creating a RequestPolicy.
 */
export declare class RequestPolicyOptions {
    private _logger?;
    constructor(_logger?: HttpPipelineLogger | undefined);
    /**
     * Get whether or not a log with the provided log level should be logged.
     * @param logLevel The log level of the log that will be logged.
     * @returns Whether or not a log with the provided log level should be logged.
     */
    shouldLog(logLevel: HttpPipelineLogLevel): boolean;
    /**
     * Attempt to log the provided message to the provided logger. If no logger was provided or if
     * the log level does not meat the logger's threshold, then nothing will be logged.
     * @param logLevel The log level of this log.
     * @param message The message of this log.
     */
    log(logLevel: HttpPipelineLogLevel, message: string): void;
}
//# sourceMappingURL=requestPolicy.d.ts.map