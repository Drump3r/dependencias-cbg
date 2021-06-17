"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPlus = void 0;
const google_auth_library_1 = require("google-auth-library");
class AuthPlus extends google_auth_library_1.GoogleAuth {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line: variable-name
        this.JWT = google_auth_library_1.JWT;
        // tslint:disable-next-line: variable-name
        this.Compute = google_auth_library_1.Compute;
        // tslint:disable-next-line: variable-name
        this.OAuth2 = google_auth_library_1.OAuth2Client;
        // tslint:disable-next-line: variable-name
        this.GoogleAuth = google_auth_library_1.GoogleAuth;
    }
    /**
     * Override getClient(), memoizing an instance of auth for
     * subsequent calls to getProjectId().
     */
    async getClient(options) {
        this._cachedAuth = new google_auth_library_1.GoogleAuth(options);
        return this._cachedAuth.getClient();
    }
    getProjectId(callback) {
        if (callback) {
            return this._cachedAuth
                ? this._cachedAuth.getProjectId(callback)
                : super.getProjectId(callback);
        }
        else {
            return this._cachedAuth
                ? this._cachedAuth.getProjectId()
                : super.getProjectId();
        }
    }
}
exports.AuthPlus = AuthPlus;
//# sourceMappingURL=authplus.js.map