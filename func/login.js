function check(){
    var name=document.getElementById('name').value;
    var psw=document.getElementById('psw').value;
    
    if((name=="user"&& psw=="user") ||(name=="admin"&& psw=="admin"))
    {
      if(name=="admin"){
        window.location.href="#";
        return false;
      }
      else{
        window.location.href="index.html";
        return false;
      }
    }
    else{
      alert("wrong username or password");
      return false;
    }
  }