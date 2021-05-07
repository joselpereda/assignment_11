async function fetchEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        const employees = await response.jason();
        return employees;
    
    } catch (error) {
        console.error(error);
    }

}
export {fetchEmployees};
