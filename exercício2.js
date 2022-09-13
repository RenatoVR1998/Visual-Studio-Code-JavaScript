let C, N, NE, SM = "500", SE, ST

C = prompt("Digite o seu código: ")

N = prompt("Digite o número de horas trabalhadas: ")
NE = N - 50
ST = (parseInt(SM) + (NE * 20))

if(N<=50){
ST = N * 10

alert("Seu salário é "+ ST + "\nSem salário excedente.")
}

else if(N>50){
SE = NE * 20

    alert("Seu salário é "+ SM + "\nSalário excedente é "+ SE + "\nSalário Total: "+ ST)
}