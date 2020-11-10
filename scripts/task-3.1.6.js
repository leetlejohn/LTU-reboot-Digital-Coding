
/* function to work out percentage */

function percentage(num, per)
{

    return (num/100)*per;

}

/* set variables */

var pretip = "200"

var tippercent = "10"

var tipvalue = percentage(pretip, tippercent) 

var totalbill = parseInt(pretip) + parseInt(tipvalue)

var totalbilldec = totalbill.toFixed(2);

var tipvaluedec = tipvalue.toFixed(2);


/* write totals to document */

document.write('Your total bill, with tip, is £' );
document.write(totalbilldec);

document.write('<br>Tip value is £')
document.write(tipvaluedec);