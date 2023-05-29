/*
more condition thakle thla age seta dite hobe
*/ 

for( i=1; i <=30; i++) {
  if( i%3 == 0 && i%5 == 0) {
    console.log("fooBar");
  }
  else if(i%3 == 0) {
    console.log("foo");
  }
  else if(i%5 == 0) {
    console.log("bar");
  }
  else {
    console.log(i); 
  }
}