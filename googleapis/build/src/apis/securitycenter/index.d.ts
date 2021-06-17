/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { securitycenter_v1 } from './v1';
import { securitycenter_v1beta1 } from './v1beta1';
import { securitycenter_v1p1alpha1 } from './v1p1alpha1';
import { securitycenter_v1p1beta1 } from './v1p1beta1';
export declare const VERSIONS: {
    v1: typeof securitycenter_v1.Securitycenter;
    v1beta1: typeof securitycenter_v1beta1.Securitycenter;
    v1p1alpha1: typeof securitycenter_v1p1alpha1.Securitycenter;
    v1p1beta1: typeof securitycenter_v1p1beta1.Securitycenter;
};
export declare function securitycenter(version: 'v1'): securitycenter_v1.Securitycenter;
export declare function securitycenter(options: securitycenter_v1.Options): securitycenter_v1.Securitycenter;
export declare function securitycenter(version: 'v1beta1'): securitycenter_v1beta1.Securitycenter;
export declare function securitycenter(options: securitycenter_v1beta1.Options): securitycenter_v1beta1.Securitycenter;
export declare function securitycenter(version: 'v1p1alpha1'): securitycenter_v1p1alpha1.Securitycenter;
export declare function securitycenter(options: securitycenter_v1p1alpha1.Options): securitycenter_v1p1alpha1.Securitycenter;
export declare function securitycenter(version: 'v1p1beta1'): securitycenter_v1p1beta1.Securitycenter;
export declare function securitycenter(options: securitycenter_v1p1beta1.Options): securitycenter_v1p1beta1.Securitycenter;
declare const auth: AuthPlus;
export { auth };
