alert("¡¡¡TE GANASTE UN SUPER DESCUENTO!!!");

var cantidad=0;
var valorInicial=0;
var valorDescuento=0;
var valorPagar=0;

function ValorTotal(){
cantidad=document.getElementById("idcantidad").value;
valorInicial= cantidad*820000;

if(valorInicial==820000){
    document.write("Solo una? Lo sentimos, el descuento aplica para compras superiores");
}

if (1640000 <= valorInicial  && valorInicial<= 3280000){
    valorDescuento = valorInicial*0.15;
    valorPagar= valorInicial - valorDescuento;
    document.write("Tu super descuento es del 15%");
    }

    else{
   
        if(3280000 < valorInicial && valorInicial<= 6560000){
        valorDescuento = valorInicial*0.25;
        valorPagar= valorInicial - valorDescuento;
       document.write("Tu super descuento es del 25%");
        }

        else{
            if(6560000< valorInicial && valorInicial <= 9840000){
            valorDescuento = valorInicial*0.35;
            valorPagar= valorInicial - valorDescuento;
            document.write("Tu super descuento es del 35%"); 
            }
        
            else{
                if(9840000< valorInicial){
                document.write("Tu compra no tiene descuento. Lo sentimos. Luego será");
                }
            }
        }
    }
}


