
var express = require('express');
var router = express.Router();

var decorateBooks = require('../viewmodels/book');

router.get('/list', function (req, res) {

    req.app.models.book.find().then(function (books) {
       // console.log(books);
        
        res.render('books/list', {
            books: decorateBooks(books),
            messages: req.flash('info')
        });
        
    });


});

// Hiba felvitele
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('books/new', {
        validationErrors: validationErrors,
        data: data,
    });
})

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;
    req.app.models.book.destroy({ id: id})
    .then(function (book){
        req.flash('info', 'Sikeres törlés!');
        res.redirect('/books/list');
        
    })
    .catch(function (err) {
        console.log(err);
    });
    
});

router.get('/:id', function(req, res) {
    var id = req.params.id;

    req.app.models.book.findOne({ id: id}).then(function (book) {
        res.render('books/show', {
            book: book,
        }); 
    });
    
});



// Hiba felvitele POST
router.post('/new', function(req, res) {
    //console.log(req.body);
    
   // adatok ellenőrzése
    req.checkBody('iro', 'Hibás író').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('cim').escape();
    req.checkBody('cim', 'Hibás cím').notEmpty().withMessage('Kötelező megadni!');
    req.sanitizeBody('egyeb').escape();
    req.checkBody('egyeb', 'Hibás egyeb').notEmpty().withMessage('Kötelező megadni!');
    
    
    var validationErrors = req.validationErrors(true);
    //console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/books/new');
    }
    else {
        req.app.models.book.create({
            status: 'new',
            writer: req.body.iro,
            booktitle: req.body.cim,
            other: req.body.egyeb,
            //user: req.body.user
            
        })
        .then(function (book) {
            //siker
            req.flash('info', 'Könyv sikeresen felvéve!');
            res.redirect('/books/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err)
        });
    }
})




router.post('/:id', function(req, res) {
    var id = req.params.id;
    if(req.body.iro != null){
        var writer = req.body.iro;
    }
    if(req.body.cim != null){
        var booktitle = req.body.cim;
    }
    if(req.body.egyeb != null){
        var other = req.body.egyeb;
    }
    
    if(req.body.iro != null){
        req.app.models.book.update({id: id},{writer: writer})
        .then(function (book){
            //
        })
        .catch(function (err){
            console.log(err);
        })
        
    }
    if(req.body.cim != null){
        req.app.models.book.update({id: id},{booktitle: booktitle})
        .then(function (book){
            //
        })
        .catch(function (err){
            console.log(err);
        })
        
    }
    if(req.body.egyeb != null){
        req.app.models.book.update({id: id},{other: other})
        .then(function (book){
            //
        })
        .catch(function (err){
            console.log(err);
        })
    }
    
    req.flash('info', 'Sikeres módosítás!');
    res.redirect('/books/list');

    
});




module.exports = router;