"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
var applicationTokenCredentials_1 = require("./credentials/applicationTokenCredentials");
exports.ApplicationTokenCredentials = applicationTokenCredentials_1.ApplicationTokenCredentials;
var applicationTokenCertificateCredentials_1 = require("./credentials/applicationTokenCertificateCredentials");
exports.ApplicationTokenCertificateCredentials = applicationTokenCertificateCredentials_1.ApplicationTokenCertificateCredentials;
var deviceTokenCredentials_1 = require("./credentials/deviceTokenCredentials");
exports.DeviceTokenCredentials = deviceTokenCredentials_1.DeviceTokenCredentials;
var keyVaultFactory_1 = require("./credentials/keyVaultFactory");
exports.createAuthenticator = keyVaultFactory_1.createAuthenticator;
var msiAppServiceTokenCredentials_1 = require("./credentials/msiAppServiceTokenCredentials");
exports.MSIAppServiceTokenCredentials = msiAppServiceTokenCredentials_1.MSIAppServiceTokenCredentials;
var msiTokenCredentials_1 = require("./credentials/msiTokenCredentials");
exports.MSITokenCredentials = msiTokenCredentials_1.MSITokenCredentials;
var msiVmTokenCredentials_1 = require("./credentials/msiVmTokenCredentials");
exports.MSIVmTokenCredentials = msiVmTokenCredentials_1.MSIVmTokenCredentials;
var tokenCredentialsBase_1 = require("./credentials/tokenCredentialsBase");
exports.TokenCredentialsBase = tokenCredentialsBase_1.TokenCredentialsBase;
var userTokenCredentials_1 = require("./credentials/userTokenCredentials");
exports.UserTokenCredentials = userTokenCredentials_1.UserTokenCredentials;
var authConstants_1 = require("./util/authConstants");
exports.AuthConstants = authConstants_1.AuthConstants;
var azureCliCredentials_1 = require("./credentials/azureCliCredentials");
exports.AzureCliCredentials = azureCliCredentials_1.AzureCliCredentials;
var login_1 = require("./login");
exports.interactiveLogin = login_1.interactive;
exports.interactiveLoginWithAuthResponse = login_1.withInteractiveWithAuthResponse;
exports.loginWithUsernamePassword = login_1.withUsernamePassword;
exports.loginWithUsernamePasswordWithAuthResponse = login_1.withUsernamePasswordWithAuthResponse;
exports.loginWithServicePrincipalSecret = login_1.withServicePrincipalSecret;
exports.loginWithServicePrincipalSecretWithAuthResponse = login_1.withServicePrincipalSecretWithAuthResponse;
exports.loginWithAuthFile = login_1.withAuthFile;
exports.loginWithAuthFileWithAuthResponse = login_1.withAuthFileWithAuthResponse;
exports.loginWithVmMSI = login_1.loginWithVmMSI;
exports.loginWithAppServiceMSI = login_1.loginWithAppServiceMSI;
exports.loginWithServicePrincipalCertificate = login_1.withServicePrincipalCertificate;
exports.loginWithServicePrincipalCertificateWithAuthResponse = login_1.withServicePrincipalCertificateWithAuthResponse;
//# sourceMappingURL=msRestNodeAuth.js.map