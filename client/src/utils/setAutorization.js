import { instance } from '../api/api';

export function setAuthorizationToken(token) {
    if (token) {
        instance.interceptors.request.use(function (config) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
            return config;
        });
    }
}