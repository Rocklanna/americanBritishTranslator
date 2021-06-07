const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

let translator = new Translator();

suite('Unit Tests', () => {

   suite('American to British', function() {
     
    test('Translate Mangoes are my favorite fruit.', function(done) {
    let wordString = 'Mangoes are my favorite fruit.';
    let TranslatedText =   'Mangoes are my <span class="highlight">favourite</span> fruit.' ;
           assert.deepEqual(translator.americanToBritish(wordString), TranslatedText);
      done();
    });
     
     test('Translate I ate yogurt for breakfast.', function(done) {
    let wordString = 'I ate yogurt for breakfast.';
    let TranslatedText ='I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
     
    test("Translate We had a party at my friend's condo.", function(done) {
    let wordString = "We had a party at my friend's condo.";
    let TranslatedText = 'We had a party at my friend\'s <span class="highlight">flat</span>.' ;
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
       test("Translate Can you toss this in the trashcan for me?", function(done) {
    let wordString = "Can you toss this in the trashcan for me?";
    let TranslatedText =  'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
     test("Translate The parking lot was full.", function(done) {
    let wordString = "The parking lot was full.";
    let TranslatedText =  'The <span class="highlight">car park</span> was full.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
     test("Translate Like a high tech Rube Goldberg machine.", function(done) {
    let wordString = "Like a high tech Rube Goldberg machine.";
    let TranslatedText = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
      test("Translate To play hooky means to skip class or work.", function(done) {
    let wordString = "To play hooky means to skip class or work.";
    let TranslatedText =  'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
      test("Translate No Mr. Bond, I expect you to die.", function(done) {
    let wordString = "No Mr. Bond, I expect you to die.";
    let TranslatedText =  'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
      test("Translate Dr. Grosh will see you now.", function(done) {
    let wordString = "Dr. Grosh will see you now.";
    let TranslatedText = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
      test("Translate Lunch is at 12:15 today.", function(done) {
    let wordString = "Lunch is at 12:15 today.";
    let TranslatedText = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.deepEqual(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
     }); 
  
       suite('British to American', function() {
      test("Translate We watched the footie match for a while.", function(done) {
    let wordString = "We watched the footie match for a while.";
    let TranslatedText =  'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Translate Paracetamol takes up to an hour to work.", function(done) {
    let wordString = "Paracetamol takes up to an hour to work.";
    let TranslatedText ='<span class="highlight">Acetaminophen</span> takes up to an hour to work.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Translate First, caramelise the onions.", function(done) {
    let wordString = "First, caramelise the onions.";
    let TranslatedText ='First, <span class="highlight">caramelize</span> the onions.';
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Translate I spent the bank holiday at the funfair.", function(done) {
    let wordString = "I spent the bank holiday at the funfair.";
    let TranslatedText ='I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    }); 
    test("Translate I had a bicky then went to the chippy.", function(done) { //error
    let wordString = "I had a bicky then went to the chippy.";
    let TranslatedText = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Translate I've just got bits and bobs in my bum bag.", function(done) {
    let wordString = "I've just got bits and bobs in my bum bag.";
    let TranslatedText ='I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Translate The car boot sale at Boxted Airfield was called off.", function(done) {
    let wordString = "The car boot sale at Boxted Airfield was called off.";
    let TranslatedText ='The <span class="highlight">swap meet</span> at Boxted Airfield was called off.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });    
    test("Translate Have you met Mrs Kalyani?", function(done) { // error
    let wordString = "Have you met Mrs Kalyani?";
    let TranslatedText ='Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });  
    test("Translate Prof Joyner of King's College, London.", function(done) { 
    let wordString = "Prof Joyner of King's College, London.";
    let TranslatedText = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });  
    test("Translate Tea time is usually around 4 or 4.30.", function(done) {
    let wordString = "Tea time is usually around 4 or 4.30.";
    let TranslatedText ='Tea time is usually around 4 or <span class="highlight">4:30</span>.' ;
      assert.deepEqual(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });      
   }); 
    suite('American to British', function() {
    test('Highlight Mangoes are my favorite fruit.', function(done) {
    let wordString = 'Mangoes are my favorite fruit.';
    let TranslatedText =   '<span class="highlight">favourite</span>' ;
           assert.include(translator.americanToBritish(wordString), TranslatedText);
      done();
    });     
    test('Highlight I ate yogurt for breakfast.', function(done) {
    let wordString = 'I ate yogurt for breakfast.';
    let TranslatedText ='<span class="highlight">yoghurt</span>';
      assert.include(translator.americanToBritish(wordString),TranslatedText);
      done();
    });
    test("Highlight We watched the footie match for a while.", function(done) {
    let wordString = "We watched the footie match for a while.";
    let TranslatedText =  '<span class="highlight">soccer</span>';
      assert.include(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
    test("Highlight Paracetamol takes up to an hour to work.", function(done) {
    let wordString = "Paracetamol takes up to an hour to work.";
    let TranslatedText ='<span class="highlight">Acetaminophen</span>' ;
      assert.include(translator.britishToAmerican(wordString),TranslatedText);
      done();
    });
   });    
});
