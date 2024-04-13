var guesnumber=document.getElementById("guesnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10


function check()
{
var enterdnumber=guesnumber.value 
if(randomnumber==enterdnumber)
{
    result.textContent=("You Win....")
    alert("You..win")
    totalscore=totalscore+1
    score.textContent="you score:"+totalscore
}
else
{
    result.textContent=("You Wrong... Try agin")
    alert("You wrong Try agin")
    totalscore=totalscore-1
    score.textContent="You score:  "+totalscore
}
}
var answer=document.getElementById("answer")

function checkanswer()
{
    answer.textContent= "Answer:"+randomnumber
}
