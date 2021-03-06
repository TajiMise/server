import { Response } from 'express';

/**
 * clear every cookie issued by us
 * @param res express response object
 */
export const clearOauthCookies = async (res: Response) => {
    const options = { path: '/' };

    res.clearCookie('rt', options)
        .clearCookie('at', options)
        .clearCookie('strategy', options)
        .clearCookie('logged_in', options);
};

/**
 * clear locale cookie
 * @param res express response object
 */
export const clearLocaleCookie = async (res: Response) => {
    const options = { path: '/' };

    res.clearCookie('locale', options);
};
