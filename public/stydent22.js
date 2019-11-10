var tabal =document.getElementById("tabal");
var input =document.getElementById("input-page");
var button =document.getElementById("button");
var pagesize , array =[] , s=['id' , 'first_name' ,'last_name' ,'grade'] ;
button.addEventListener("click" , function(){
pagesize = input.value ;
 fetch('http://localhost:3000/arr?page='+pagesize,{
        method:'GET'
    })
    .then( res => res.json())
    .then((data) => {
     array= data,
      console.log(array);
        for (var i = 0; i < array.length; i++) {
            var l='';
        tabal.innerHTML +='<tr>';
         for(var j=0 ; j<s.length ; j++){
             let t =s[j];
           l +='<th class="th">'+array[i][t] + '</th>';
         }
          tabal.innerHTML += l+'</tr>';
     }
    });
});