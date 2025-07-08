function imp(){
    var n = Number(document.getElementById("n"). value);
    var resu = document.getElementById("resu");
         if(n % 2===0){
          resu.innerHTML= "O número " + n + " é par."
    }else{
       resu.innerHTML= "O número " + n + " é impar."
    }
}