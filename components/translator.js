const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')


/*Object.keys(americanToBritishTitles).forEach(function(item){
let newKey = item.replace('\.','\\.');
americanToBritishTitles[newKey]= americanToBritishTitles[item];
delete americanToBritishTitles[item];
});*/


class Translator {

translate(translateType,text){
  
    if(translateType==="american-to-british"){
        return this.americanToBritish(text);      
    }
     if(translateType==="british-to-american"){
    return this.britishToAmerican(text);
    }
  
}
  
 
americanToBritish(wordString){
   
   let oldString = wordString;
   let checkList = [americanOnly,americanToBritishSpelling,americanToBritishTitles];
  
    
   for( let i =0; i<3;i++){
     Object.keys(checkList[i]).forEach(function (american){
     
       let regex = new RegExp("(" + american + ")(\\s|\\W)", "gi");
       if(regex.test(wordString)){
         
         if(wordString.match(regex)[0].charAt(0)===wordString.match(regex)[0].charAt(0).toUpperCase()){

   wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+checkList[i][american].charAt(0).toUpperCase()+ checkList[i][american].slice(1)+ '</span>');
       }
        else{ 
         wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+checkList[i][american]+'</span>');
        }  
       }
   });
   }  

     
       let regexTime = /\b(\d+:\d+)\b/g;
        
       if(wordString.match(regexTime)!=null){
         let foundTime = wordString.match(regexTime)[0];
        wordString= wordString.replace(foundTime,'<span class="highlight">'+this.britishTime(foundTime)+'</span>');
       }
                 
        if(oldString===wordString){
       wordString= "Everything looks good to me!";
      }
        return wordString;
}  
                      
  britishToAmerican(wordString){
    
    let oldString = wordString;
     let checkList = [americanOnly,americanToBritishSpelling,americanToBritishTitles];
    
   for( let i =0; i<3;i++){
     Object.keys(checkList[i]).forEach(function (american){
     

    let regex = new RegExp("(" + checkList[i][american] + ")(\\s|\\W)", "gi");
       if(regex.test(wordString)){
         
            if(wordString.match(regex)[0].charAt(0)===wordString.match(regex)[0].charAt(0).toUpperCase()){
   wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+american.charAt(0).toUpperCase()+ american.slice(1)+ '</span>');
       }
        else{         
         wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+american+'</span>');
        } 
       }
   });
   }  
    Object.keys(britishOnly).forEach(function (british){
     
       let regex = new RegExp("(" + british + ")(\\s|\\W)", "gi");
       if(regex.test(wordString)){
         
            if(wordString.match(regex)[0].charAt(0)===wordString.match(regex)[0].charAt(0).toUpperCase()){
   wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+britishOnly[british].charAt(0).toUpperCase()+ britishOnly[british].slice(1)+ '</span>');
       }
         else{
         wordString=wordString.replace(wordString.match(regex)[0].slice(0,-1),'<span class="highlight">'+britishOnly[british]+'</span>');
         }
      }
   });
    
    let regexTime = /\b(\d+\.\d+)\b/g;
        
   
      if(wordString.match(regexTime)!=null){
         let foundTime = wordString.match(regexTime)[0];
        wordString= wordString.replace(foundTime,'<span class="highlight">'+this.americanTime(foundTime)+'</span>');
       }
    
          if(oldString===wordString){
       wordString= "Everything looks good to me!";
      }    
         return wordString;
}  
      
 britishTime(time){
  let splitTime =time.replace(":",".");
   return splitTime;
} 
  
  americanTime(time){
  let splitTime =time.replace(".",":");
   return splitTime;
}  
   checkCaps(wordString, regex){
       
   if(wordString.match(regex)[0].charAt(0)===wordString.match(regex)[0].charAt(0).toUpperCase()){
     return true;
   }
    return false;
  } // end of checkCaps
  
  highlight(foundWord,bool){
    
    if(bool){
     return '<span class="highlight">'+foundWord.charAt(0).toUpperCase()+ foundWord.slice(1)+ '</span>';
    }  
    return '<span class="highlight">'+foundWord+ '</span>';
  } // end of highlight
  
 

}// end of Translator

module.exports = Translator;
