import { instance } from './api';

export const employeeAPI = {
    getEmployeesTotalCount(currentPage) {
        return instance.get(`employee?page=${currentPage}`).then(res => res.data)
    },
    getEmployeesPages(currentPage, pageSize) {
        return instance.get(`employee?page=${currentPage}&limit=${pageSize}`).then(res => res.data)
    },
    createEmployees(fullname, gender, contacts, dateOfCreate, salary, position) {
        return instance.post(`employee/create`, { fullname, gender, contacts, dateOfCreate, salary, position }).then(res => res.data)
    },
    updateEmployee(id, fullname, gender, contacts, dateOfCreate, salary, position) {
        return instance.post(`employee/update/${id}`, { fullname, gender, contacts, dateOfCreate, salary, position }).then(res => res.data)
    },
    searchEmployee(search) {
        return instance.get(`employee/search?search=${search}`).then(res => res.data)
    },
    deleteEmployee(id) {
        return instance.delete(`employee/delete/${id}`, {}).then(res => res.data)
    }
}