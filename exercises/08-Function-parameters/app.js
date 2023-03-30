// Your code goes here:
let text1=" is a ";
let text2=" years old";
let text3=" born in";
let text4=" with";
let text5= " eyes";
let renderPerson=(par1, par2, par3, par4,par5)=>{
  let firstext= par1+text1;
  let secondtext=par4+text2+' ';
  let thirthtext=par5+text3+' ';
  let fourthtext=par2+text4+' ';
  let fifthtext=par3+text5;
  return firstext+secondtext+thirthtext+fourthtext+fifthtext;

}

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));