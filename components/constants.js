'use strict';

awesome.constants.component={
    //validators make example for these. the regular expressions ***************
    /**
     * regular expression for validating user name
     *
     * @example
     *
     * const constanst = awesome.constansts.components;
     *
     * //input pattern for a valid username, alphanumeric
     * <input class = 'yourUserNameInput'
     *  	pattern = constansts.VALIDATE_EMAIL
     * ></input>
     * // a user submission of userName will not be accepter but rather userName@group would
     * @memeber awesome.constants.component.VALIDATE_USERNAME
     * @type {EventName}
     */
    VALIDATE_USERNAME:'[a-zA-Z0-9\\@\\.\\-\\_]{6,30}',
    /**
     *
     * regular expression for validating user email
     *
     * @example
     *
     * const constanst = awesome.constansts.components;
     *
     * //input patter for a valid email address, alphanumeric
     * <input class = 'yourEmailInput'
     *  	pattern = constansts.VALIDATE_EMAIL
     * ></input>
     * // an email submission of user@site will not be accepted but rather user@site.company would
     *
     * @memeber awesome.constansts.component.VALIDATE_EMAIL
     * @type {EventName}
     */
    VALIDATE_EMAIL:'([a-zA-Z0-9\.\-\_]{1,20})\@([a-zA-Z0-9\.\-\_]{2,50})\.([a-zA-Z]{2,10})',
    /**
     * regular expression for validating url
     *
     * @example
     *
     * const constanst = awesome.constansts.components;
     *
     * //input pattern for a valid url
     * <input
     *  	pattern = constansts.VALIDATE_URL
     * ></input>
     * // a url submission of www.nodejs.org would not be accepter but rather
     * // https://nodejs.org or http://www.yourSite.yourDomain
     *
     * @memeber awesome.constansts.component.VALIDATE_URL
     * @type {EventName}
     */
    VALIDATE_URL:'^(https?:\/\/)?([\da-z\.-]+)\.(.{2,100})$',
    /**
     * regular expression for validating url
     *
     * @example
     *
     * const constanst = awesome.constansts.components;
     *
     * //input pattern for a valid currency
     * <input
     *  	pattern = constansts.VALIDATE_CURRENCY
     * ></input>
     *
     * @memeber awesome.constansts.component.VALIDATE_CURRENCY
     * @type {EventName}
     */
    VALIDATE_CURRENCY:'([0-9]){1,}|([0-9]{1,}\.[0-9]{2})'
};
