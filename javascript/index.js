//変数
let a = 'Hello World';

//定数
const b = 'test world';

//配列
let c = [1,2,3,4,5];

//while
/*
let i = 0;
while(i < c.length){
  console.log(c[i]);
  i++;
}*/

//if
/*
if(c.length>5){
  console.log("配列は5以上");
}else if(c.length>3){
  console.log("配列は3以上");
}else{
  console.log("配列は...");
}*/

//function
/*
const out_c = (arg) => {
  console.log(c[arg])
};
*/

//object
/*
const d = {
  color: 'blue',
  size:12,
  font:"Times New Roman"
};
console.log(d.size);
*/
//window.alert("hey");
//console.log(document.getElementsByTagName("button")[0]);

document.getElementsByTagName("button")[0].addEventListener('click', () => {
  window.alert("hey");
});
//console.log(c[0]);