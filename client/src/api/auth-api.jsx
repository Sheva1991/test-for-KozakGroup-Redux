import { instance } from './api';


export const authAPI = {
    login(login, password) {
        return instance.post(`/auth/login`, { login, password })
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`/auth`)
    },
    register() {
        return instance.post(`/auth/register`)
    },
}
