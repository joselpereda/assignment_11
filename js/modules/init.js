async function fetchEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        const employees = await response.jason();
    
    } catch (error) {
        console.error(error);
    }

}
fetchEmployees();
