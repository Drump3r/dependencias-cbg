/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace fcm_v1 {
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
     * Firebase Cloud Messaging API
     *
     * FCM send API that provides a cross-platform messaging solution to reliably deliver messages at no cost.
     *
     * @example
     * const {google} = require('googleapis');
     * const fcm = google.fcm('v1');
     *
     * @namespace fcm
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Fcm
     */
    export class Fcm {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
     */
    export interface Schema$AndroidConfig {
        /**
         * An identifier of a group of messages that can be collapsed, so that only the last message gets sent when delivery can be resumed. A maximum of 4 different collapse keys is allowed at any given time.
         */
        collapseKey?: string | null;
        /**
         * Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.
         */
        data?: {
            [key: string]: string;
        } | null;
        /**
         * If set to true, messages will be allowed to be delivered to the app while the device is in direct boot mode. See [Support Direct Boot mode](https://developer.android.com/training/articles/direct-boot).
         */
        directBootOk?: boolean | null;
        /**
         * Options for features provided by the FCM SDK for Android.
         */
        fcmOptions?: Schema$AndroidFcmOptions;
        /**
         * Notification to send to android devices.
         */
        notification?: Schema$AndroidNotification;
        /**
         * Message priority. Can take &quot;normal&quot; and &quot;high&quot; values. For more information, see [Setting the priority of a message](https://goo.gl/GjONJv).
         */
        priority?: string | null;
        /**
         * Package name of the application where the registration token must match in order to receive the message.
         */
        restrictedPackageName?: string | null;
        /**
         * How long (in seconds) the message should be kept in FCM storage if the device is offline. The maximum time to live supported is 4 weeks, and the default value is 4 weeks if not set. Set it to 0 if want to send the message immediately. In JSON format, the Duration type is encoded as a string rather than an object, where the string ends in the suffix &quot;s&quot; (indicating seconds) and is preceded by the number of seconds, with nanoseconds expressed as fractional seconds. For example, 3 seconds with 0 nanoseconds should be encoded in JSON format as &quot;3s&quot;, while 3 seconds and 1 nanosecond should be expressed in JSON format as &quot;3.000000001s&quot;. The ttl will be rounded down to the nearest second.
         */
        ttl?: string | null;
    }
    /**
     * Options for features provided by the FCM SDK for Android.
     */
    export interface Schema$AndroidFcmOptions {
        /**
         * Label associated with the message&#39;s analytics data.
         */
        analyticsLabel?: string | null;
    }
    /**
     * Notification to send to android devices.
     */
    export interface Schema$AndroidNotification {
        /**
         * The notification&#39;s body text. If present, it will override google.firebase.fcm.v1.Notification.body.
         */
        body?: string | null;
        /**
         * Variable string values to be used in place of the format specifiers in body_loc_key to use to localize the body text to the user&#39;s current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
         */
        bodyLocArgs?: string[] | null;
        /**
         * The key to the body string in the app&#39;s string resources to use to localize the body text to the user&#39;s current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.
         */
        bodyLocKey?: string | null;
        /**
         * The [notification&#39;s channel id](https://developer.android.com/guide/topics/ui/notifiers/notifications#ManageChannels) (new in Android O). The app must create a channel with this channel ID before any notification with this channel ID is received. If you don&#39;t send this channel ID in the request, or if the channel ID provided has not yet been created by the app, FCM uses the channel ID specified in the app manifest.
         */
        channelId?: string | null;
        /**
         * The action associated with a user click on the notification. If specified, an activity with a matching intent filter is launched when a user clicks on the notification.
         */
        clickAction?: string | null;
        /**
         * The notification&#39;s icon color, expressed in #rrggbb format.
         */
        color?: string | null;
        /**
         * If set to true, use the Android framework&#39;s default LED light settings for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_light_settings` is set to true and `light_settings` is also set, the user-specified `light_settings` is used instead of the default value.
         */
        defaultLightSettings?: boolean | null;
        /**
         * If set to true, use the Android framework&#39;s default sound for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml).
         */
        defaultSound?: boolean | null;
        /**
         * If set to true, use the Android framework&#39;s default vibrate pattern for the notification. Default values are specified in [config.xml](https://android.googlesource.com/platform/frameworks/base/+/master/core/res/res/values/config.xml). If `default_vibrate_timings` is set to true and `vibrate_timings` is also set, the default value is used instead of the user-specified `vibrate_timings`.
         */
        defaultVibrateTimings?: boolean | null;
        /**
         * Set the time that the event in the notification occurred. Notifications in the panel are sorted by this time. A point in time is represented using [protobuf.Timestamp](https://developers.google.com/protocol-buffers/docs/reference/java/com/google/protobuf/Timestamp).
         */
        eventTime?: string | null;
        /**
         * The notification&#39;s icon. Sets the notification icon to myicon for drawable resource myicon. If you don&#39;t send this key in the request, FCM displays the launcher icon specified in your app manifest.
         */
        icon?: string | null;
        /**
         * Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.
         */
        image?: string | null;
        /**
         * Settings to control the notification&#39;s LED blinking rate and color if LED is available on the device. The total blinking time is controlled by the OS.
         */
        lightSettings?: Schema$LightSettings;
        /**
         * Set whether or not this notification is relevant only to the current device. Some notifications can be bridged to other devices for remote display, such as a Wear OS watch. This hint can be set to recommend this notification not be bridged. See [Wear OS guides](https://developer.android.com/training/wearables/notifications/bridger#existing-method-of-preventing-bridging)
         */
        localOnly?: boolean | null;
        /**
         * Sets the number of items this notification represents. May be displayed as a badge count for launchers that support badging.See [Notification Badge](https://developer.android.com/training/notify-user/badges). For example, this might be useful if you&#39;re using just one notification to represent multiple new messages but you want the count here to represent the number of total new messages. If zero or unspecified, systems that support badging use the default, which is to increment a number displayed on the long-press menu each time a new notification arrives.
         */
        notificationCount?: number | null;
        /**
         * Set the relative priority for this notification. Priority is an indication of how much of the user&#39;s attention should be consumed by this notification. Low-priority notifications may be hidden from the user in certain situations, while the user might be interrupted for a higher-priority notification. The effect of setting the same priorities may differ slightly on different platforms. Note this priority differs from `AndroidMessagePriority`. This priority is processed by the client after the message has been delivered, whereas [AndroidMessagePriority](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#androidmessagepriority) is an FCM concept that controls when the message is delivered.
         */
        notificationPriority?: string | null;
        /**
         * The sound to play when the device receives the notification. Supports &quot;default&quot; or the filename of a sound resource bundled in the app. Sound files must reside in /res/raw/.
         */
        sound?: string | null;
        /**
         * When set to false or unset, the notification is automatically dismissed when the user clicks it in the panel. When set to true, the notification persists even when the user clicks it.
         */
        sticky?: boolean | null;
        /**
         * Identifier used to replace existing notifications in the notification drawer. If not specified, each request creates a new notification. If specified and a notification with the same tag is already being shown, the new notification replaces the existing one in the notification drawer.
         */
        tag?: string | null;
        /**
         * Sets the &quot;ticker&quot; text, which is sent to accessibility services. Prior to API level 21 (`Lollipop`), sets the text that is displayed in the status bar when the notification first arrives.
         */
        ticker?: string | null;
        /**
         * The notification&#39;s title. If present, it will override google.firebase.fcm.v1.Notification.title.
         */
        title?: string | null;
        /**
         * Variable string values to be used in place of the format specifiers in title_loc_key to use to localize the title text to the user&#39;s current localization. See [Formatting and Styling](https://goo.gl/MalYE3) for more information.
         */
        titleLocArgs?: string[] | null;
        /**
         * The key to the title string in the app&#39;s string resources to use to localize the title text to the user&#39;s current localization. See [String Resources](https://goo.gl/NdFZGI) for more information.
         */
        titleLocKey?: string | null;
        /**
         * Set the vibration pattern to use. Pass in an array of [protobuf.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration) to turn on or off the vibrator. The first value indicates the `Duration` to wait before turning the vibrator on. The next value indicates the `Duration` to keep the vibrator on. Subsequent values alternate between `Duration` to turn the vibrator off and to turn the vibrator on. If `vibrate_timings` is set and `default_vibrate_timings` is set to `true`, the default value is used instead of the user-specified `vibrate_timings`.
         */
        vibrateTimings?: string[] | null;
        /**
         * Set the [Notification.visibility](https://developer.android.com/reference/android/app/Notification.html#visibility) of the notification.
         */
        visibility?: string | null;
    }
    /**
     * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
     */
    export interface Schema$ApnsConfig {
        /**
         * Options for features provided by the FCM SDK for iOS.
         */
        fcmOptions?: Schema$ApnsFcmOptions;
        /**
         * HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) for supported headers, e.g. &quot;apns-priority&quot;: &quot;10&quot;.
         */
        headers?: {
            [key: string]: string;
        } | null;
        /**
         * APNs payload as a JSON object, including both `aps` dictionary and custom payload. See [Payload Key Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification). If present, it overrides google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body.
         */
        payload?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Options for features provided by the FCM SDK for iOS.
     */
    export interface Schema$ApnsFcmOptions {
        /**
         * Label associated with the message&#39;s analytics data.
         */
        analyticsLabel?: string | null;
        /**
         * Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.
         */
        image?: string | null;
    }
    /**
     * Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of &quot;java.awt.Color&quot; in Java; it can also be trivially provided to UIColor&#39;s &quot;+colorWithRed:green:blue:alpha&quot; method in iOS; and, with just a little work, it can be easily formatted into a CSS &quot;rgba()&quot; string in JavaScript, as well.  Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space.  Note: when color equality needs to be decided, implementations, unless documented otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5.  Example (Java):       import com.google.type.Color;       // ...      public static java.awt.Color fromProto(Color protocolor) {        float alpha = protocolor.hasAlpha()            ? protocolor.getAlpha().getValue()            : 1.0;         return new java.awt.Color(            protocolor.getRed(),            protocolor.getGreen(),            protocolor.getBlue(),            alpha);      }       public static Color toProto(java.awt.Color color) {        float red = (float) color.getRed();        float green = (float) color.getGreen();        float blue = (float) color.getBlue();        float denominator = 255.0;        Color.Builder resultBuilder =            Color                .newBuilder()                .setRed(red / denominator)                .setGreen(green / denominator)                .setBlue(blue / denominator);        int alpha = color.getAlpha();        if (alpha != 255) {          result.setAlpha(              FloatValue                  .newBuilder()                  .setValue(((float) alpha) / denominator)                  .build());        }        return resultBuilder.build();      }      // ...  Example (iOS / Obj-C):       // ...      static UIColor* fromProto(Color* protocolor) {         float red = [protocolor red];         float green = [protocolor green];         float blue = [protocolor blue];         FloatValue* alpha_wrapper = [protocolor alpha];         float alpha = 1.0;         if (alpha_wrapper != nil) {           alpha = [alpha_wrapper value];         }         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];      }       static Color* toProto(UIColor* color) {          CGFloat red, green, blue, alpha;          if (![color getRed:&amp;red green:&amp;green blue:&amp;blue alpha:&amp;alpha]) {            return nil;          }          Color* result = [[Color alloc] init];          [result setRed:red];          [result setGreen:green];          [result setBlue:blue];          if (alpha &lt;= 0.9999) {            [result setAlpha:floatWrapperWithValue(alpha)];          }          [result autorelease];          return result;     }     // ...   Example (JavaScript):      // ...      var protoToCssColor = function(rgb_color) {        var redFrac = rgb_color.red || 0.0;        var greenFrac = rgb_color.green || 0.0;        var blueFrac = rgb_color.blue || 0.0;        var red = Math.floor(redFrac * 255);        var green = Math.floor(greenFrac * 255);        var blue = Math.floor(blueFrac * 255);         if (!(&#39;alpha&#39; in rgb_color)) {           return rgbToCssColor_(red, green, blue);        }         var alphaFrac = rgb_color.alpha.value || 0.0;        var rgbParams = [red, green, blue].join(&#39;,&#39;);        return [&#39;rgba(&#39;, rgbParams, &#39;,&#39;, alphaFrac, &#39;)&#39;].join(&#39;&#39;);     };      var rgbToCssColor_ = function(red, green, blue) {       var rgbNumber = new Number((red &lt;&lt; 16) | (green &lt;&lt; 8) | blue);       var hexString = rgbNumber.toString(16);       var missingZeros = 6 - hexString.length;       var resultBuilder = [&#39;#&#39;];       for (var i = 0; i &lt; missingZeros; i++) {          resultBuilder.push(&#39;0&#39;);       }       resultBuilder.push(hexString);       return resultBuilder.join(&#39;&#39;);     };      // ...
     */
    export interface Schema$Color {
        /**
         * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:    pixel color = alpha * (this color) + (1.0 - alpha) * (background color)  This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
         */
        alpha?: number | null;
        /**
         * The amount of blue in the color as a value in the interval [0, 1].
         */
        blue?: number | null;
        /**
         * The amount of green in the color as a value in the interval [0, 1].
         */
        green?: number | null;
        /**
         * The amount of red in the color as a value in the interval [0, 1].
         */
        red?: number | null;
    }
    /**
     * Platform independent options for features provided by the FCM SDKs.
     */
    export interface Schema$FcmOptions {
        /**
         * Label associated with the message&#39;s analytics data.
         */
        analyticsLabel?: string | null;
    }
    /**
     * Settings to control notification LED.
     */
    export interface Schema$LightSettings {
        /**
         * Required. Set `color` of the LED with [google.type.Color](https://github.com/googleapis/googleapis/blob/master/google/type/color.proto).
         */
        color?: Schema$Color;
        /**
         * Required. Along with `light_on_duration `, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
         */
        lightOffDuration?: string | null;
        /**
         * Required. Along with `light_off_duration`, define the blink rate of LED flashes. Resolution defined by [proto.Duration](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#google.protobuf.Duration)
         */
        lightOnDuration?: string | null;
    }
    /**
     * Message to send by Firebase Cloud Messaging Service.
     */
    export interface Schema$Message {
        /**
         * Input only. Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
         */
        android?: Schema$AndroidConfig;
        /**
         * Input only. [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
         */
        apns?: Schema$ApnsConfig;
        /**
         * Condition to send a message to, e.g. &quot;&#39;foo&#39; in topics &amp;&amp; &#39;bar&#39; in topics&quot;.
         */
        condition?: string | null;
        /**
         * Input only. Arbitrary key/value payload. The key should not be a reserved word (&quot;from&quot;, &quot;message_type&quot;, or any word starting with &quot;google&quot; or &quot;gcm&quot;).
         */
        data?: {
            [key: string]: string;
        } | null;
        /**
         * Input only. Template for FCM SDK feature options to use across all platforms.
         */
        fcmOptions?: Schema$FcmOptions;
        /**
         * Output Only. The identifier of the message sent, in the format of `projects/x/messages/{message_id}`.
         */
        name?: string | null;
        /**
         * Input only. Basic notification template to use across all platforms.
         */
        notification?: Schema$Notification;
        /**
         * Registration token to send a message to.
         */
        token?: string | null;
        /**
         * Topic name to send a message to, e.g. &quot;weather&quot;. Note: &quot;/topics/&quot; prefix should not be provided.
         */
        topic?: string | null;
        /**
         * Input only. [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
         */
        webpush?: Schema$WebpushConfig;
    }
    /**
     * Basic notification template to use across all platforms.
     */
    export interface Schema$Notification {
        /**
         * The notification&#39;s body text.
         */
        body?: string | null;
        /**
         * Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. JPEG, PNG, BMP have full support across platforms. Animated GIF and video only work on iOS. WebP and HEIF have varying levels of support across platforms and platform versions. Android has 1MB image size limit. Quota usage and implications/costs for hosting image on Firebase Storage: https://firebase.google.com/pricing
         */
        image?: string | null;
        /**
         * The notification&#39;s title.
         */
        title?: string | null;
    }
    /**
     * Request to send a message to specified target.
     */
    export interface Schema$SendMessageRequest {
        /**
         * Required. Message to send.
         */
        message?: Schema$Message;
        /**
         * Flag for testing the request without actually delivering the message.
         */
        validateOnly?: boolean | null;
    }
    /**
     * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
     */
    export interface Schema$WebpushConfig {
        /**
         * Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.
         */
        data?: {
            [key: string]: string;
        } | null;
        /**
         * Options for features provided by the FCM SDK for Web.
         */
        fcmOptions?: Schema$WebpushFcmOptions;
        /**
         * HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. &quot;TTL&quot;: &quot;15&quot;.
         */
        headers?: {
            [key: string]: string;
        } | null;
        /**
         * Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, &quot;title&quot; and &quot;body&quot; fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body].
         */
        notification?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Options for features provided by the FCM SDK for Web.
     */
    export interface Schema$WebpushFcmOptions {
        /**
         * Label associated with the message&#39;s analytics data.
         */
        analyticsLabel?: string | null;
        /**
         * The link to open when the user clicks on the notification. For all URL values, HTTPS is required.
         */
        link?: string | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        messages: Resource$Projects$Messages;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Messages {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * fcm.projects.messages.send
         * @desc Send a message to specified target (a registration token, topic or condition).
         * @example
         * // Before running the sample:
         * // - Enable the API at:
         * //   https://console.developers.google.com/apis/api/fcm.googleapis.com
         * // - Login into gcloud by running:
         * //   `$ gcloud auth application-default login`
         * // - Install the npm module by running:
         * //   `$ npm install googleapis`
         *
         * const {google} = require('googleapis');
         * const fcm = google.fcm('v1');
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
         *   const res = await fcm.projects.messages.send({
         *     // Required. It contains the Firebase project id (i.e. the unique identifier
         *     // for your Firebase project), in the format of `projects/{project_id}`.
         *     // For legacy support, the numeric project number with no padding is also
         *     // supported in the format of `projects/{project_number}`.
         *     parent: 'projects/my-project',
         *
         *     // Request body metadata
         *     requestBody: {
         *       // request body parameters
         *       // {
         *       //   "message": {},
         *       //   "validateOnly": false
         *       // }
         *     },
         *   });
         *   console.log(res.data);
         *
         *   // Example response
         *   // {
         *   //   "android": {},
         *   //   "apns": {},
         *   //   "condition": "my_condition",
         *   //   "data": {},
         *   //   "fcmOptions": {},
         *   //   "name": "my_name",
         *   //   "notification": {},
         *   //   "token": "my_token",
         *   //   "topic": "my_topic",
         *   //   "webpush": {}
         *   // }
         * }
         *
         * main().catch(e => {
         *   console.error(e);
         *   throw e;
         * });
         *
         * @alias fcm.projects.messages.send
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number}`.
         * @param {().SendMessageRequest} params.requestBody Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        send(params: Params$Resource$Projects$Messages$Send, options: StreamMethodOptions): GaxiosPromise<Readable>;
        send(params?: Params$Resource$Projects$Messages$Send, options?: MethodOptions): GaxiosPromise<Schema$Message>;
        send(params: Params$Resource$Projects$Messages$Send, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        send(params: Params$Resource$Projects$Messages$Send, options: MethodOptions | BodyResponseCallback<Schema$Message>, callback: BodyResponseCallback<Schema$Message>): void;
        send(params: Params$Resource$Projects$Messages$Send, callback: BodyResponseCallback<Schema$Message>): void;
        send(callback: BodyResponseCallback<Schema$Message>): void;
    }
    export interface Params$Resource$Projects$Messages$Send extends StandardParameters {
        /**
         * Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. For legacy support, the numeric project number with no padding is also supported in the format of `projects/{project_number}`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SendMessageRequest;
    }
    export {};
}
