const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

let translatedFirstText =   'Mangoes are my <span class="highlight">favourite</span> fruit.';
let localeError = 'Invalid value for locale field'
let missingError = 'Required field(s) missing';
let emptyText = 'No text to translate';
let noTranslation = "Everything looks good to me!";

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
  
 suite('Routing Tests', function(){
     suite('POST /api/translate=> complete details', function() {
     
        test('Translation with complete details', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text: "Mangoes are my favorite fruit.",
               locale:"american-to-british"})
        .end(function(err, res){
          assert.deepEqual(res.body.translation,translatedFirstText);
          done();
        })
          
        })
       
       
       });
   
      suite('POST /api/translate=> valid text and invalid locale', function() {
     
        test('Translation with valid text and invalid locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text: "Mangoes are my favorite fruit.",
               locale:"american-to-brit"})
        .end(function(err, res){
          assert.deepEqual(res.body.error,localeError);
          done();
        })
          
        })
       });
   
      suite('POST /api/translate=> missing text', function() {
     
        test('Translation with missing text', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text: undefined,
               locale:"american-to-british"})
        .end(function(err, res){
          assert.deepEqual(res.body.error,missingError);
          done();
        })
          
        })
       });  
    
   
      suite('POST /api/translate=> missing locale', function() {
     
        test('Translation with missing locale', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text: "Mangoes are my favorite fruit.",
               locale:undefined})
        .end(function(err, res){
          assert.deepEqual(res.body.error,missingError);
          done();
        })
          
        })
       });  
   
      
      suite('POST /api/translate=> empty text', function() {
     
        test('Translation with empty text', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text: "",
               locale:"american-to-british"})
        .end(function(err, res){
          assert.deepEqual(res.body.error,emptyText);
          done();
        })
          
        })
       });  
   
      suite('POST /api/translate=>text that needs no translation', function() {
     
        test('Translation with text that needs no translation', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({text:"Can you toss this in the trashcan for me?",
               locale:"british-to-american"})
        .end(function(err, res){
          assert.deepEqual(res.body.translation,noTranslation);
          done();
        })
          
        })
       });  
   
   
   });
});
