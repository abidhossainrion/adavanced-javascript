var name = 'Kuddus';



function add(num1,num2){
    result = num1+num2;
    console.log("result inside",name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return result;
}
console.log("result outside",name);
console.log('result outside',result);
var sum =  add(13,21);
console.log(sum);
