let P, E, M

P = prompt("Digite o peso dos tomates: ")

if(P<=50)
alert("Pesagem concluída.")


else if(P>50){
    E = P - 50
    M = E * 4

    alert("O valor da multa é "+ M)
}