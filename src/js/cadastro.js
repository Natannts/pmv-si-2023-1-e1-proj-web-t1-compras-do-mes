
function cadastrar(){
    //a função criará um objeto novo de com as informações de usuário (novousuario.nome) e senha (novousuario.senha) conforme o que for inserido no input.
    if (document.getElementById("senha").value === document.getElementById("confsenha").value) 
    {
    let novousuario = new Object(); 
    novousuario.nome=document.getElementById("usuario").value; 
    novousuario.senha=document.getElementById("senha").value; 
    novousuario.confsenha=document.getElementById("confsenha").value; 
    let jt = JSON.stringify(novousuario); 
    localStorage.setItem(novousuario.nome, jt);
    alert("Cadastro realizado! Realize seu login!");
    location.href = "/src/index.html";}
    
    //caso as informações nos campos de "senha" e "confirme senha" não estejam iguais, o código acima não será rodado e a mensagem abaixo aparecerá

    else {alert('"Senha" e "Confirme a senha" devem conter o mesmo dado.')}
    
   }