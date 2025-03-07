// Login route for store owners
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Store = require('./models/Store');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const store = await Store.findOne({ where: { email } });
    
    if (!store || !(await bcrypt.compare(password, store.password))) {
      return res.status(400).send('Invalid credentials');
    }
    
    const token = jwt.sign({ id: store.id, name: store.name }, 'secretKey');
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
