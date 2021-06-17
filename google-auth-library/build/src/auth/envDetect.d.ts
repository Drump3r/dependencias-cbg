export declare enum GCPEnv {
    APP_ENGINE = "APP_ENGINE",
    KUBERNETES_ENGINE = "KUBERNETES_ENGINE",
    CLOUD_FUNCTIONS = "CLOUD_FUNCTIONS",
    COMPUTE_ENGINE = "COMPUTE_ENGINE",
    NONE = "NONE"
}
export declare function clear(): void;
export declare function getEnv(): Promise<GCPEnv>;
