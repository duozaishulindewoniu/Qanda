import {httpGet, httpPost, httpPut, httpDelete} from './httpUtils';
import baseUrl from './config.http';

const userUrl = baseUrl + '/user';

const loginUrl = userUrl + '/login';
export let userLogin = options => httpPost(loginUrl, {}, options);

const logoutUrl = userUrl + '/logout';
export let userLogout = () => httpGet(logoutUrl, {}, {});

const registerUrl = userUrl + '/register';
export let userRegister = options => httpPost(registerUrl, {}, options);

const userInfoUrl = userUrl + '/profile';
export let modifyUserInfo = options => httpPut(userInfoUrl, {}, options);
export let getUserInfo = options => httpGet(userInfoUrl, {}, options);
export let deleteQuestion = qid => httpDelete(`${userInfoUrl}/question/${qid}`, {}, {});
export let deleteAnswer = aid => httpDelete(`${userInfoUrl}/answer/${aid}`, {}, {});

const avatarUrl = userUrl + "/avatar";
export let modifyAvatar = options => httpPut(avatarUrl, {}, options);

const passwordUrl = userUrl + '/password';
export let resetPassword = options => httpPost(passwordUrl, {}, options);