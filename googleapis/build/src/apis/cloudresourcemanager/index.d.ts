/*! THIS FILE IS AUTO-GENERATED */
import { AuthPlus } from 'googleapis-common';
import { cloudresourcemanager_v1 } from './v1';
import { cloudresourcemanager_v1beta1 } from './v1beta1';
import { cloudresourcemanager_v2 } from './v2';
import { cloudresourcemanager_v2beta1 } from './v2beta1';
export declare const VERSIONS: {
    v1: typeof cloudresourcemanager_v1.Cloudresourcemanager;
    v1beta1: typeof cloudresourcemanager_v1beta1.Cloudresourcemanager;
    v2: typeof cloudresourcemanager_v2.Cloudresourcemanager;
    v2beta1: typeof cloudresourcemanager_v2beta1.Cloudresourcemanager;
};
export declare function cloudresourcemanager(version: 'v1'): cloudresourcemanager_v1.Cloudresourcemanager;
export declare function cloudresourcemanager(options: cloudresourcemanager_v1.Options): cloudresourcemanager_v1.Cloudresourcemanager;
export declare function cloudresourcemanager(version: 'v1beta1'): cloudresourcemanager_v1beta1.Cloudresourcemanager;
export declare function cloudresourcemanager(options: cloudresourcemanager_v1beta1.Options): cloudresourcemanager_v1beta1.Cloudresourcemanager;
export declare function cloudresourcemanager(version: 'v2'): cloudresourcemanager_v2.Cloudresourcemanager;
export declare function cloudresourcemanager(options: cloudresourcemanager_v2.Options): cloudresourcemanager_v2.Cloudresourcemanager;
export declare function cloudresourcemanager(version: 'v2beta1'): cloudresourcemanager_v2beta1.Cloudresourcemanager;
export declare function cloudresourcemanager(options: cloudresourcemanager_v2beta1.Options): cloudresourcemanager_v2beta1.Cloudresourcemanager;
declare const auth: AuthPlus;
export { auth };
