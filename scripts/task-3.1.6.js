
/* function to work out percentage */

function percentage(num, per)
{

    return (num/100)*per;

}

/* set variables */

var pretip = "200"

var tippercent = "10"

var tipvalue = percentage(pretip, tippercent) 

var totalbill = pretip + tipvalue 


/* write totals to document */

document.write('Your total bill, with tip, is £' );
document.write(totalbill);

document.write('<br>Tip value is £')
document.write(tipvalue);