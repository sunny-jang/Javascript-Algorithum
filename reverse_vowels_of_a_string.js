var reverseVowels = function(s) {
  let result = '';
  
  let strings = [];
  let vowels = [];
  
  for(let i = 0;  i<s.length; i ++) {
      let orig = s[i]
      let char = s[i].toLowerCase();
      
      if(char === 'a' ||char === 'e' || char === 'i' ||char === 'u' ||char === 'o') {
          vowels.push(orig);
          orig = null;
      }
      
      strings.push(orig);
  }
  
  for(let i = 0;  i<strings.length; i++) {
      if(!strings[i]) {
          strings[i] = vowels.splice(vowels.length-1,1)[0]
      }
  }
  
  result = strings.join('');
  