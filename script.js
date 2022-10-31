
function getCheckedValues(){
    return Array.from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox)=>checkbox.checked)      
    .map((checkbox)=>checkbox.value)     
}

  

  
document.getElementById("btnsubmit").onclick=function()
        {
            document.getElementById("table").style.display="block";
            
            var table = document.getElementById("table");
            var row = table.insertRow(-1);
            
            var fname = row.insertCell(0);
            var lname = row.insertCell(1);
            var add = row.insertCell(2);
            var pin=row.insertCell(3);
            var gender=row.insertCell(4);
            var food=row.insertCell(5);
            var state=row.insertCell(6);
            var country=row.insertCell(7);
            
            fname.innerHTML = document.getElementById("first-name").value;
            lname.innerHTML = document.getElementById("last-name").value;
            add.innerHTML = document.getElementById("address").value;
            pin.innerHTML=document.getElementById("pincode").value;   
            gender.innerHTML=document.querySelector('input[name = "gender"]:checked').value;                      
            food.innerHTML=getCheckedValues();
            state.innerHTML=document.getElementById("state").value;
            country.innerHTML=document.getElementById("country").value; 
            
            myform.reset();
            
            return false;      

        }
        
        
       
              

        
        