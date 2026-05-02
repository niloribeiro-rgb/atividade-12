let alunos = ["jao", "ana"]
let notas = [1, 3]



function adAluno(posicao) {

    let aluno = document.querySelector('#aluno').value
    let nota = document.querySelector('#nota').value

    if (aluno !== "") {
        if (nota !== "") {

            if (alunos.includes(aluno) == false) {

                if (posicao == 1) {
                    // final
                    alunos.push(aluno)
                    notas.push(nota)
                }
                if (posicao == 2) {
                    // inicio
                    alunos.unshift(aluno)
                    notas.unshift(nota)
                }
            }
            else {
                alert("aluno ja existe")
            }

        }
        else {
            alert("sem o nota do aluno")
        }
    }
    else {
        alert("sem o nome do aluno")
    }
    mostrar()
}

function adAlunoInicio() {

}

let listaAlunos = document.querySelector('#listaAlunos')
function mostrar() {

    listaAlunos.innerHTML = ""

    alunos.forEach((alunoEach, i) => {
        listaAlunos.innerHTML += `<li>Nome: ${alunoEach} Nota: ${notas[i]} <button onclick="excluir(${i})">X</button></li>`
    })

    exibirNotasCrecente()
    // para atualiza a outra funcao

}

function excluir(index) {
    alunos.splice(index, 1)
    notas.splice(index, 1)

    // excluir apartir casa i, 1 item
    mostrar()
}
function excluirUltimo() {
    alunos.pop()
    notas.pop()
    mostrar()
}

let listaNotas = document.querySelector('#listaNotasCrescente')
let notasCrescente

    // copia temporaria do arrey principal para nao botar sort no principal(notas)
    // e reaproveitei o arrey notasCrescente
function exibirNotasCrecente() {
    notasCrescente = [... notas]
    // o [... notas] pede para pegar os elementos desse arrey
    // "let notasCrescente = notas" nao copia, mas apenas da um "apelido"

    // notasCrescente = notas.map(nota => nota.sort((a, b) => a - b)) nao funcionou

    notasCrescente = notasCrescente.sort((a, b) => a - b)


    listaNotas.innerHTML = ""
    notas.forEach((notaEach) => {
        listaNotas.innerHTML += `<li>${notaEach}</li>`
    })
}


mostrar()
// exibir o com mostrar() so no final para nao quebrar o codigo: chamar o listaAlunos sem ter esse elemento no html ainda