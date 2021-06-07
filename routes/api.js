'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      
      
    let translatedText="";
    let text = (req.body.text===undefined)?res.json({error: 'Required field(s) missing'}):req.body.text;
    let translateType = (req.body.locale===undefined)? res.json({error: 'Required field(s) missing'}):req.body.locale;
    
    if(text==""){
      return res.json({ error: 'No text to translate' });
    }
    
    if (!(translateType=="american-to-british" || translateType=="british-to-american")) {
       return res.json({ error: 'Invalid value for locale field' });
    }
    
  
     translatedText= translator.translate(translateType,text);
  
   let output = {text:text,translation:translatedText};

   return  res.json(output);
      
  
    });
};
