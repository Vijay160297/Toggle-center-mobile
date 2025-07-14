// ---server code for customer login upto
// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // ------------------ DB Connection ------------------
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'mobile_store'
// });

// db.connect(err => {
//   if (err) throw err;
//   console.log('✅ MySQL Connected...');
// });

// // ------------------ USER LOGIN ------------------
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
//   db.query(sql, [email, password], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });

//     if (result.length > 0) {
//       const user = result[0];
//       const isAdmin = user.email === 'admin@example.com'; // ✅ set your admin email here

//       return res.json({
//         success: true,
//         user: {
//           id: user.id,
//           email: user.email,
//           role: isAdmin ? 'admin' : 'user'
//         }
//       });
//     } else {
//       res.status(401).json({ error: 'Invalid email or password' });
//     }
//   });
// });

// // ------------------ CUSTOMER LOGIN ------------------
// app.post('/api/customer-login', (req, res) => {
//   const { name, place, email } = req.body;

//   if (!name || !place || !email) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const sql = 'INSERT INTO customers (name, place, email) VALUES (?, ?, ?)';
//   db.query(sql, [name, place, email], (err, result) => {
//     if (err) return res.status(500).json({ message: err.message });
//     console.log('Customer login body:', req.body);


//     const customer = { id: result.insertId, name, place, email };
//     res.json({ message: 'Customer login successful', customer });
//   });
// });

// // ------------------ ADD TO CART ------------------
// app.post('/api/cart', (req, res) => {
//   const { productId, name, price, quantity, userEmail } = req.body;
//   const sql = 'INSERT INTO cart (product_id, name, price, quantity, user_email) VALUES (?, ?, ?, ?, ?)';
//   db.query(sql, [productId, name, price, quantity, userEmail], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ message: 'Added to cart successfully' });
//   });
// });

// // ------------------ PURCHASE HISTORY (ADMIN VIEW) ------------------
// app.get('/api/purchases', (req, res) => {
//   const sql = 'SELECT * FROM cart';
//   db.query(sql, (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json(result);
//   });
// });

// // ------------------ START SERVER ------------------
// app.listen(5000, () => {
//   console.log('🚀 Server running at http://localhost:5000');
// });

// ---after***

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ------------------ DB Connection ------------------
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mobile_store'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL Connected...');
});

// ------------------ USER LOGIN ------------------
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.length > 0) {
      const user = result[0];
      const isAdmin = user.email === 'admin@example.com'; // ✅ set your admin email here

      return res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          role: isAdmin ? 'admin' : 'user'
        }
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

// ------------------ CUSTOMER LOGIN ------------------
app.post('/api/customer-login', (req, res) => {
  const { name, place, email } = req.body;

  if (!name || !place || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO customers (name, place, email) VALUES (?, ?, ?)';
  db.query(sql, [name, place, email], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    console.log('Customer login body:', req.body);


    const customer = { id: result.insertId, name, place, email };
    res.json({ message: 'Customer login successful', customer });
  });
});

// ------------------ ADD TO CART ------------------
app.post('/api/cart', (req, res) => {
  const { productId, name, price, quantity, userEmail } = req.body;
  const sql = 'INSERT INTO cart (product_id, name, price, quantity, user_email) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [productId, name, price, quantity, userEmail], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Added to cart successfully' });
  });
});

// ------------------ PURCHASE HISTORY (ADMIN VIEW) ------------------
app.get('/api/purchases', (req, res) => {
  const sql = 'SELECT * FROM cart';
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// ------------------ START SERVER ------------------
app.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
// Express backend
app.post('/admin/login', (req, res) => {
  const { email } = req.body;

  // You can use a real DB or hardcode
  const adminEmail = 'admin@example.com'; // Set your admin email here

  if (email === adminEmail) {
    res.json({ success: true, role: 'admin', name: 'Vijay' });
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
});

app.post('/admin-login', (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM admins WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ error: 'Server error' });

    if (results.length > 0) {
      const admin = results[0];
      res.json({ success: true, admin: { id: admin.id, email: admin.email, role: 'admin' } });
    } else {
      res.status(401).json({ success: false, message: 'Invalid admin credentials' });
    }
  });
});
