var userwg=document.getElementById('wg')
var userhg=document.getElementById('hg')
var answerbtn=document.getElementById('check')
var answer=document.getElementById('result')



answerbtn.addEventListener('click',function(event)
{
    var uservalewg=Number(userwg.value)
    var uservalehg=Number(userhg.value)

    var bmi=uservalewg/(uservalehg*uservalehg)
    answer.style.backgroundColor='white'
    answer.style.width='40%'
    answer.style.marginLeft='30%'
    answer.style.borderRadius='20px'
    
    

    if(bmi.toFixed(2)<18.5)
    {
        answer.textContent='oops! , your underweight'

    }

    else if(bmi.toFixed(2)<25)
    {
        answer.textContent='Good!, your normalweight' 
    }

    else if(bmi.toFixed(2)<30)
    {
        answer.textContent='bad!, your overweight' 
    }

    else
    {
        answer.textContent='obese' 
    }
})