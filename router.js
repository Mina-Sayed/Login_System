let express = require('express');
let router = express.Router();


const credentials = {
    email: 'menaboss13@gmail.com', 
    password: '01273173382'
};

// Login User

router.post('/login', (req, res) => {

    if (req.body.email === credentials.email && req.body.password === credentials.password) {
        
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');

        // res.end('Login successful');

    } else {

        res.end('Invalid Password Or Email');
    }
});


// Route for dashboard

router.get('/dashboard', (req, res) => {

    if (req.session.user) {
        
        res.render('dashboard', { user: req.session.user });
    } else { 

        res.send('Unauthrized User');
    }

});


// Route For Logout

router.get('/logout', (req, res) => {

    req.session.destroy(function (err) {
        
        if (err) {

            console.log(err);
            res.send('Error Ohh No');
        } else {

            res.render('base', { title: 'Express', logout: 'Logout Successfully' });
        }
    })
})


module.exports = router;