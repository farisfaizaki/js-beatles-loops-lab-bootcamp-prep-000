function theBeatlesPlay(musicians,instruments){
  var newString = new Array();
  for(let i=0;i<musicians.length;i++){
    var sentence = `${musicians[i]} plays ${instruments[i]}`;
    newString.push(sentence);
  }
  return newString;
}
