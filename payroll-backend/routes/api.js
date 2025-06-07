const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Profile Routes
router.get('/profile', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [1]); // TODO: Get from auth
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/profile', async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;
    await pool.query(
      'UPDATE users SET name = ?, email = ?, phone = ?, role = ? WHERE id = ?',
      [name, email, phone, role, 1]
    );
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Settings Routes
router.get('/settings', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM company_settings WHERE id = 1');
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/settings', async (req, res) => {
  try {
    const { companyName, address, gstin, email, phone } = req.body;
    await pool.query(
      'UPDATE company_settings SET company_name = ?, address = ?, gstin = ?, email = ?, phone = ? WHERE id = 1',
      [companyName, address, gstin, email, phone]
    );
    res.json({ message: 'Settings updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Employees Routes
router.get('/employees', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT e.Employee_ID, e.Employee_Name, e.Employee_Address, e.Employee_Phone, e.Employee_DOB, e.Department_ID, d.Department_Name
       FROM employees e
       LEFT JOIN department d ON e.Department_ID = d.Department_ID`
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/employees', async (req, res) => {
  try {
    const { Employee_Name, Employee_Address, Employee_Phone, Employee_DOB, Department_ID } = req.body;
    const [result] = await pool.query(
      'INSERT INTO employees (Employee_Name, Employee_Address, Employee_Phone, Employee_DOB, Department_ID) VALUES (?, ?, ?, ?, ?)',
      [Employee_Name, Employee_Address, Employee_Phone, Employee_DOB, Department_ID]
    );
    res.json({ id: result.insertId, message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/employees/:id', async (req, res) => {
  try {
    const { Employee_Name, Employee_Address, Employee_Phone, Employee_DOB, Department_ID } = req.body;
    await pool.query(
      'UPDATE employees SET Employee_Name = ?, Employee_Address = ?, Employee_Phone = ?, Employee_DOB = ?, Department_ID = ? WHERE Employee_ID = ?',
      [Employee_Name, Employee_Address, Employee_Phone, Employee_DOB, Department_ID, req.params.id]
    );
    res.json({ message: 'Employee updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM employees WHERE Employee_ID = ?', [req.params.id]);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Departments Routes
router.get('/departments', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM department');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/departments', async (req, res) => {
  try {
    const { Department_Name, Department_Location } = req.body;
    const [result] = await pool.query('INSERT INTO department (Department_Name, Department_Location) VALUES (?, ?)', [Department_Name, Department_Location]);
    res.json({ id: result.insertId, Department_Name, Department_Location });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { Department_Name, Department_Location } = req.body;
    await pool.query('UPDATE department SET Department_Name = ?, Department_Location = ? WHERE Department_ID = ?', [Department_Name, Department_Location, id]);
    res.json({ id, Department_Name, Department_Location });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/departments/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM department WHERE Department_ID = ?', [id]);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Attendance Routes
router.get('/attendance', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM attendance');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/attendance', async (req, res) => {
  try {
    const { Employee_ID, Check_in, Check_out } = req.body;
    const [result] = await pool.query(
      'INSERT INTO attendance (Employee_ID, Check_in, Check_out) VALUES (?, ?, ?)',
      [Employee_ID, Check_in, Check_out]
    );
    res.json({ id: result.insertId, message: 'Attendance record added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/attendance/:id', async (req, res) => {
  try {
    const { Employee_ID, Check_in, Check_out } = req.body;
    await pool.query(
      'UPDATE attendance SET Employee_ID = ?, Check_in = ?, Check_out = ? WHERE Attendance_ID = ?',
      [Employee_ID, Check_in, Check_out, req.params.id]
    );
    res.json({ message: 'Attendance record updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/attendance/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM attendance WHERE Attendance_ID = ?', [req.params.id]);
    res.json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Leave Routes
router.get('/leaves', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM leave_management');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/leaves', async (req, res) => {
  try {
    const { Employee_ID, Leave_Type, Leave_Desc } = req.body;
    const [result] = await pool.query(
      'INSERT INTO leave_management (Employee_ID, Leave_Type, Leave_Desc) VALUES (?, ?, ?)',
      [Employee_ID, Leave_Type, Leave_Desc]
    );
    res.json({ id: result.insertId, message: 'Leave record added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/leaves/:id', async (req, res) => {
  try {
    const { Employee_ID, Leave_Type, Leave_Desc } = req.body;
    await pool.query(
      'UPDATE leave_management SET Employee_ID = ?, Leave_Type = ?, Leave_Desc = ? WHERE Leave_ID = ?',
      [Employee_ID, Leave_Type, Leave_Desc, req.params.id]
    );
    res.json({ message: 'Leave record updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/leaves/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM leave_management WHERE Leave_ID = ?', [req.params.id]);
    res.json({ message: 'Leave record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reports Routes
router.get('/reports', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM payroll_report');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Analytics Routes
router.get('/analytics/dashboard', async (req, res) => {
  try {
    const [employeeCount] = await pool.query('SELECT COUNT(*) as count FROM employees');
    const [departmentCount] = await pool.query('SELECT COUNT(*) as count FROM department');
    const [presentToday] = await pool.query(`
      SELECT COUNT(*) as count 
      FROM attendance 
      WHERE DATE(Check_in) = CURDATE()
    `);
    const [onLeave] = await pool.query(`
      SELECT COUNT(*) as count 
      FROM leave_management 
      WHERE CURDATE() BETWEEN Leave_ID AND Leave_ID
    `);

    res.json({
      totalEmployees: employeeCount[0].count,
      totalDepartments: departmentCount[0].count,
      presentToday: presentToday[0].count,
      onLeave: onLeave[0].count
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/analytics/salary', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        d.Department_Name as department,
        AVG(s.Salary_Final_Amount) as avg_salary,
        MIN(s.Salary_Final_Amount) as min_salary,
        MAX(s.Salary_Final_Amount) as max_salary
      FROM employees e
      JOIN department d ON e.Department_ID = d.Department_ID
      JOIN salary s ON e.Employee_ID = s.Salary_employeeID
      GROUP BY d.Department_ID, d.Department_Name
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Monthly Payroll Trend Endpoint
router.get('/payroll-trend', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT DATE_FORMAT(Generated_On, '%b %Y') as month, SUM(Final_Amount) as total
      FROM payroll_report
      GROUP BY YEAR(Generated_On), MONTH(Generated_On)
      ORDER BY YEAR(Generated_On) DESC, MONTH(Generated_On) DESC
      LIMIT 6
    `);
    res.json(rows.reverse());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Payroll calculation data for an employee
router.get('/payroll-calc/:employeeId', async (req, res) => {
  const employeeId = req.params.employeeId;
  try {
    // Fetch salary
    const [salaryRows] = await pool.query('SELECT Salary_Final_Amount as amount FROM salary WHERE Salary_employeeID = ?', [employeeId]);
    // Fetch total bonus
    const [bonusRows] = await pool.query('SELECT SUM(Amount) as total FROM bonus WHERE Employee_ID = ?', [employeeId]);
    // Fetch total deduction
    const [deductionRows] = await pool.query('SELECT SUM(Amount) as total FROM deductions WHERE Employee_ID = ?', [employeeId]);

    res.json({
      salary: salaryRows[0]?.amount || 0,
      bonus: bonusRows[0]?.total || 0,
      deduction: deductionRows[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/dashboard-metrics', async (req, res) => {
  try {
    // Total employees
    const [empCount] = await pool.query('SELECT COUNT(*) as total FROM employees');
    // Total departments
    const [deptCount] = await pool.query('SELECT COUNT(*) as total FROM department');
    // Payroll paid (total, since salary table has no date)
    const [payrollSum] = await pool.query('SELECT SUM(Salary_Final_Amount) as total FROM salary');
    // Total bonuses this month
    const [bonusSum] = await pool.query("SELECT SUM(Amount) as total FROM bonus WHERE MONTH(CURDATE()) = MONTH(NOW()) AND YEAR(CURDATE()) = YEAR(NOW())");
    // Total deductions this month
    const [deductionSum] = await pool.query("SELECT SUM(Amount) as total FROM deductions WHERE MONTH(CURDATE()) = MONTH(NOW()) AND YEAR(CURDATE()) = YEAR(NOW())");
    // Attendance count this month
    const [attendance] = await pool.query("SELECT COUNT(*) as present FROM attendance WHERE MONTH(Check_in) = MONTH(NOW()) AND YEAR(Check_in) = YEAR(NOW())");
    // Department-wise employee count
    const [deptDist] = await pool.query("SELECT d.Department_Name, COUNT(e.Employee_ID) as count FROM employees e LEFT JOIN department d ON e.Department_ID = d.Department_ID GROUP BY d.Department_Name");
    // Recent hires
    const [recentHires] = await pool.query("SELECT * FROM employees ORDER BY Employee_ID DESC LIMIT 5");
    // Top earners
    const [topEarners] = await pool.query("SELECT e.Employee_Name, s.Salary_Final_Amount FROM employees e JOIN salary s ON e.Employee_ID = s.Salary_employeeID ORDER BY s.Salary_Final_Amount DESC LIMIT 5");
    // Payroll trend (last 6 months, using attendance for month grouping)
    const [payrollTrend] = await pool.query(`
      SELECT 
        month,
        SUM(total) as total
      FROM (
        SELECT 
          DATE_FORMAT(a.Check_in, '%b %Y') as month,
          s.Salary_Final_Amount as total,
          a.Check_in
        FROM (
          SELECT Employee_ID, MIN(Check_in) as Check_in
          FROM attendance
          WHERE Check_in >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH)
          GROUP BY Employee_ID, YEAR(Check_in), MONTH(Check_in)
        ) a
        JOIN salary s ON a.Employee_ID = s.Salary_employeeID
      ) t
      GROUP BY month
      ORDER BY MIN(Check_in)
    `);

    res.json({
      totalEmployees: empCount[0].total,
      totalDepartments: deptCount[0].total,
      payrollThisMonth: payrollSum[0].total || 0,
      bonusThisMonth: bonusSum[0].total || 0,
      deductionThisMonth: deductionSum[0].total || 0,
      attendanceThisMonth: attendance[0].present || 0,
      departmentDistribution: deptDist,
      recentHires,
      topEarners,
      payrollTrend
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const user = users[0];
    // Plain text password check (for demo; use bcrypt in production)
    if (user.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
    res.json({ id: user.id, name: user.name, email: user.email });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upcoming Birthdays (current month)
router.get('/upcoming-birthdays', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT Employee_Name, Employee_DOB, Employee_Address
      FROM employees
      WHERE MONTH(Employee_DOB) = MONTH(CURDATE())
      ORDER BY DAY(Employee_DOB)
      LIMIT 5
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Recent Leave Requests (using leave_management)
router.get('/recent-leave-requests', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT l.Leave_ID, l.Leave_Type, l.Leave_Desc, e.Employee_Name
      FROM leave_management l
      JOIN employees e ON l.Employee_ID = e.Employee_ID
      ORDER BY l.Leave_ID DESC
      LIMIT 5
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Attendance Report
router.get('/attendance-report', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT a.Attendance_ID, e.Employee_Name, a.Check_in, a.Check_out
      FROM attendance a
      JOIN employees e ON a.Employee_ID = e.Employee_ID
      ORDER BY a.Check_in DESC
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Leave Report (fixed for leave_management table)
router.get('/leave-report', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT l.Leave_ID, e.Employee_Name, l.Leave_Type, l.Leave_Desc
      FROM leave_management l
      JOIN employees e ON l.Employee_ID = e.Employee_ID
      ORDER BY l.Leave_ID DESC
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Department-wise Salary Report
router.get('/department-salary-report', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT d.Department_Name, COUNT(e.Employee_ID) as employee_count, SUM(s.Salary_Final_Amount) as total_salary, AVG(s.Salary_Final_Amount) as avg_salary
      FROM employees e
      JOIN department d ON e.Department_ID = d.Department_ID
      JOIN salary s ON e.Employee_ID = s.Salary_employeeID
      GROUP BY d.Department_ID, d.Department_Name
      ORDER BY d.Department_Name
    `);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Bonus & Deduction Report (fixed for available columns)
router.get('/bonus-deduction-report', async (req, res) => {
  try {
    const [bonusRows] = await pool.query(`
      SELECT b.Bonus_ID, b.Employee_ID, e.Employee_Name, b.Amount
      FROM bonus b
      JOIN employees e ON b.Employee_ID = e.Employee_ID
      ORDER BY b.Bonus_ID DESC
    `);
    const [deductionRows] = await pool.query(`
      SELECT d.Deduction_ID, d.Employee_ID, e.Employee_Name, d.Amount, d.Reason
      FROM deductions d
      JOIN employees e ON d.Employee_ID = e.Employee_ID
      ORDER BY d.Deduction_ID DESC
    `);
    res.json({ bonuses: bonusRows, deductions: deductionRows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Bonus CRUD
router.post('/bonus', async (req, res) => {
  try {
    const { Employee_ID, Amount } = req.body;
    const [result] = await pool.query(
      'INSERT INTO bonus (Employee_ID, Amount) VALUES (?, ?)',
      [Employee_ID, Amount]
    );
    res.json({ id: result.insertId, message: 'Bonus added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/bonus/:id', async (req, res) => {
  try {
    const { Employee_ID, Amount } = req.body;
    await pool.query(
      'UPDATE bonus SET Employee_ID = ?, Amount = ? WHERE Bonus_ID = ?',
      [Employee_ID, Amount, req.params.id]
    );
    res.json({ message: 'Bonus updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/bonus/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM bonus WHERE Bonus_ID = ?', [req.params.id]);
    res.json({ message: 'Bonus deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deductions CRUD
router.post('/deductions', async (req, res) => {
  try {
    const { Employee_ID, Amount, Reason } = req.body;
    const [result] = await pool.query(
      'INSERT INTO deductions (Employee_ID, Amount, Reason) VALUES (?, ?, ?)',
      [Employee_ID, Amount, Reason]
    );
    res.json({ id: result.insertId, message: 'Deduction added successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/deductions/:id', async (req, res) => {
  try {
    const { Employee_ID, Amount, Reason } = req.body;
    await pool.query(
      'UPDATE deductions SET Employee_ID = ?, Amount = ?, Reason = ? WHERE Deduction_ID = ?',
      [Employee_ID, Amount, Reason, req.params.id]
    );
    res.json({ message: 'Deduction updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/deductions/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM deductions WHERE Deduction_ID = ?', [req.params.id]);
    res.json({ message: 'Deduction deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; 