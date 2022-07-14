class billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value); 
    for(var bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if( div > bi.cantidad)
        {
          papeles = bi.cantidad  
        }
        else
        {
          papeles = div;
        }

        entregado.push( new billete(bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
      }  
    }
    if(dinero > 0)
    {
      resultado.innerHTML = "Soy un cajero pobre y no tengo dinero";
    }
    else
    {
      for(var e of entregado)
      resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />"
    }

  }


var caja = [];
var entregado = [];
caja.push( new billete(100, 20) );
caja.push( new billete(50, 200) );
caja.push( new billete(20, 60) );
caja.push( new billete(10, 100) );
caja.push( new billete(5, 70) );
var dinero = 0;
var div = 0;
var papeles = 0;

var r = document.getElementById("resultado)");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero)