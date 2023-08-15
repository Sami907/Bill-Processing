function CartProcess()
{
    var a1;
    var a2;
    var a3;
    var a4;
    var TotalBillAmount;

    //Quantity Process
    var q1 = parseInt(document.getElementById("q1").value);
    var q2 = parseInt(document.getElementById("q2").value);
    var q3 = parseInt(document.getElementById("q3").value);
    var q4 = parseInt(document.getElementById("q4").value);
    //Rate Process
    var r1 = parseInt(document.getElementById("r1").innerText);
    var r2 = parseInt(document.getElementById("r2").innerText); 
    var r3 = parseInt(document.getElementById("r3").innerText); 
    var r4 = parseInt(document.getElementById("r4").innerText); 

    if(q1 > 0)
    {
        a1 = q1 * r1;
    }
    else
    {
        a1 = "";
    }

    if(q2 > 0)
    {
        a2 = q2 * r2;
    }
    else
    {
        a2 = "";
    }

    if(q3 > 0)
    {
        a3 = q3 * r3;
    }
    else
    {
        a3 = "";
    }

    if(q4 > 0)
    {
        a4 = q4 * r4;
    }
    else
    {
        a4 = ""
    }

    document.getElementById("a1").innerText = a1;
    document.getElementById("a2").innerText = a2;
    document.getElementById("a3").innerText = a3;
    document.getElementById("a4").innerText = a4;

    TotalBillAmount = a1 + a2 + a3 + a4;

    document.getElementById("lbl3").innerText = TotalBillAmount;
}

function Clear(val)
{
    document.getElementById("a1").innerHTML = val;
    document.getElementById("a2").innerHTML = val;
    document.getElementById("a3").innerHTML = val;
    document.getElementById("a4").innerHTML = val;
    document.getElementById("q1").value = val;
    document.getElementById("q2").value = val;
    document.getElementById("q3").value = val;
    document.getElementById("q4").value = val;
    document.getElementById("lbl3").innerText = val;
}

CartProcess();
Clear("");