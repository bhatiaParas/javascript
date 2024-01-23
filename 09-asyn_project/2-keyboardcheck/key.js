const insert = document.querySelector('#insert');

window.addEventListener('keydown',function(e){  //learn---->keydown
   insert.innerHTML = `
   <div class = 'color'>
   <table>
   <tr>
     <th>key</th>
     <th>keyCode</th>
     <th>Code</th>
   </tr>
   <tr>
     <td>${e.key === " " ? "Space" : e.key}</td>
     <td>${e.keyCode}</td>
     <td>${e.code}</td>
   </tr>
  
 </table>
 </div>`
  
})


//javascript asynchronous ha...aage theory google ya chatgpt se nikal loo.....