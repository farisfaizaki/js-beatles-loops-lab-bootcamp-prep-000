function theBeatlesPlay(musicians,instruments){
  var newString = new Array();
  for(let i=0;i<musicians.length;i++){
    var sentence = `${musicians[i]} plays ${instruments[i]}`;
    newString.push(sentence);
  }
  return newString;
}

function johnLennonFacts(facts){
  var counter=0;
  var newArray = new Array();
  while(counter<facts.length){
    var sentence = `${facts[counter]}!!!`;
    newArray.push(sentence);
    counter++;
  }
  return newArray;

}

function iLoveTheBeatles(number){
  var counter=0;
  var array = new Array();
  if(number<=15){
    do{
    array.push("I Love The Beatles!")
    counter++;
  }while(counter<=number);
  }
  return array;
}
