//Multiple of 5
let num=prompt("Enter a number");{
    console.log(num);
}
if(num%5===0)
    {
        console.log(num,"Multiple of 5");
    }
    else{
        console.log(num,"Not a multiple of 5");
    }

//Grade
let score=prompt("Enter your score");
let Grade;

if(score>=90 && score<=100)
    {
        Grade= "A";
    }
    else if(score>=70 && score<=89)
        {
            Grade="B";
        }
        else if(score>=60 && score<=69)
            {
                Grade="C";
            }
            else if(score>=50 && score<=59)
                {
                    Grade="D";
                }
                else if(score>=0 && score<=49)
                {
                    Grade="F";
                }
                console.log("According to your score ,your Grade is:",Grade);