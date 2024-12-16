// TODO: this file :)
// Importing required modules
const express = require('express');
const employees = require('./employees.js'); // Placeholder data

const app = express();
const PORT = 3000;

// Routes

// 1. GET / - Sends "Hello employees!"
app.get('/', (req, res) => {
    res.send('Hello employees!');
});

// 2. GET /employees - Sends the array of employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// 3. GET /employees/:id - Sends the employee with the given id or a 404 message if not found
app.get('/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id, 10);
    const employee = employees.find(emp => emp.id === employeeId);

    if (!employee) {
        return res.status(404).send({ message: 'Employee not found' });
    }

    res.json(employee);
});

// 4. GET /employees/random - Sends a random employee from the array
app.get('/employees/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length);
    const randomEmployee = employees[randomIndex];
    res.json(randomEmployee);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
