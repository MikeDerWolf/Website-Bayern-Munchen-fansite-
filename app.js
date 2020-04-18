var express = require('express');
var app = express();

const session = require('express-session');
const frm = require('formidable');
const fs = require('fs');
const http=require('http');
const server = new http.createServer(app);
const crpt = require('crypto'); 


app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use('/css', express.static('css'));
app.use('/media', express.static('media'));
app.use('/scripts', express.static('scripts'));


app.use(session({
  secret: 'qwerty',
  resave: true,
  saveUninitialized: false
}));


function in_json(fis){
	let fis_txt = fs.readFileSync(fis);    //luam continutul fisierului Json
	return JSON.parse(fis_txt);           //cream obiect JavaScript
}

function out_json(obj, fis){
	let text_data = JSON.stringify(obj);      //transformam obiectul JavaScript in string pt fisierul Json
	fs.writeFileSync(fis, text_data);        //salvam in fisierul Json
}


app.get('/logout', function(req, res) {
    req.session.destroy();
	res.redirect('/');
});



app.get('/', function(req, res) {
    res.render('pag/index',{user: req.session.username});
});

app.post('/', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json');
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/index',{user: req.session.username});
	});
});



app.get('/despre_club', function(req, res) {
    res.render('pag/despre_club',{user: req.session.username});
});

app.post('/despre_club', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json')
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/despre_club',{user: req.session.username});
	});
});



app.get('/echipa', function(req, res) {
    res.render('pag/echipa',{user: req.session.username});
});

app.post('/echipa', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json')
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/echipa',{user: req.session.username});
	});
});



app.get('/meciuri', function(req, res) {
    res.render('pag/meciuri',{user: req.session.username});
});

app.post('/meciuri', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json')
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/meciuri',{user: req.session.username});
	});
});



app.get('/galerie', function(req, res) {
    res.render('pag/galerie',{user: req.session.username});
});

app.post('/galerie', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json')
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/galerie',{user: req.session.username});
	});
});



app.get('/contact', function(req, res) {
    res.render('pag/contact',{user: req.session.username});
});

app.post('/contact', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		
		ob=in_json('useri.json')
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		let user=ob.useri.find(function(x){
			
			return (x.username==fields.username&& x.parola == cr_password );
		});
		if(user){
			console.log(user);
			console.log(user.parola);
			console.log(cr_password);
			req.session.username=user;
		}
		
		console.log(req.session.username);
		
		res.render('pag/contact',{user: req.session.username});
	});
});



app.get('/sign_up', function(req, res) {
    res.render('pag/sign_up');
});

app.post('/sign_up', function(req, res) {
	var form = new frm.IncomingForm();
	form.parse(req, function(err, fields, files) {

		let ob = in_json('useri.json');
		var cod = crpt.createCipher('aes-128-cbc', 'mypassword');
		var cr_password= cod.update(fields.parola, 'utf8', 'hex');
		cr_password+=cod.final('hex');
		console.log(fields.parola+ " "+cr_password);
		
		ob.lastId++;
		ob.useri.push({id:ob.lastId, nume:fields.nume, prenume:fields.prenume, username:fields.username, parola: cr_password});
		
		res.render('pag/sign_up', {user: req.session.username, rsstatus:"ok"});

		out_json(ob,'useri.json');
    });
});



app.use(function(req,res){
    res.status(404).render('pag/404');
});

server.listen(process.env.PORT || 5000);
console.log('Serverul a pornit pe portul ' + server.address().port);