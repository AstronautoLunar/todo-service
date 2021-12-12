<h1 align="center">Projeto CRUD de tarefas</h1>

<p align="center">Um back-end para gerenciamento de tarefas</p>

* [Sobre](#Sobre)
* [Pre Requisitos](#Pre-requisitos)
* [Como usar](#Como-user)
  * [GET](#GET)
  * [POST](#POST)
  * [PUT](#PUT)
  * [DELETE](#DELETE)
* [Tecnologias](#Tecnologias)

<h4 align="center">
 :construction: Desenvolvimento :construction:
</h4>

## Sobre
Mais um projeto pratico sem fins lucrativos, como todo projeto meu como esse não irei dar deploy, apenas fiz para estudos e aperfeiçoamento de minhas habilidades
em back-end, Fique livre para explorar e estudar meu código, criticas são bem vindas e contribuições também

## Pre Requisitos
Você vai precisar do node.js instalado em sua máquina, segue o link da instalação

- [Nodejs](https://nodejs.org/en/download/)

e também precisará instalar um gerenciador de pacotes

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable);

Copie e cole no seu GIT

```
  git clone https://github.com/Pyedrown/todo-service
```
e em seguida use

```
  cd todo-service
```

## Como usar

Entre na pasta do projeto através do terminal e execute o seguinte comando

```
  yarn serve
```

O servidor possui 4 endpoints sendo eles

### GET 

```
  localhost:4444/api/getAllTasks
```

Retorna um json com os dados da api

Os dados serão retornados no seguinte formato:

<pre>
  {
    "tasks": [
        {
            "id": "fasdofsafaf",
            "text": "Varrer a casa",
            "date": "2021/06/08",
            "completed": false
        }
    ]
}
</pre>

- id: 
    - tipo: string
    - definição: identificador da tarefa

- text:
  - tipo: string,
  - definição: Armazena de fato a tarefa
  
- date:
  - tipo: string,
  - definição: Armazena a data onde foi criada a tarefa
  
- completed:
  - tipo: boolean
  - definição: Verifica se a tarefa foi concluida ou não

### POST

```
  localhost:4444/api/addTask
```

Envia para o servidor a tarefa no formato de json com a seguinte estrutura:

<pre>
  {
    "text": "Lanchar"
  }
</pre>

### PUT

```
  localhost:4444/api/modifyTask
```

Modifica a tarefa, envia no formato json com a seguinte estrutura:

<pre>
   {
    "id": "fasdossafaf",
    "text": "Cuidar do bebê"
  }
</pre>

### DELETE

```
  localhost:4444/api/deleteTask
```

Delete a tarefa, envia em formato json com a seguinte estrutura:

<pre>
  {
    "id": "543722099579561"
  }
</pre>

## Tecnologias

- [Typescript](https://www.typescriptlang.org)
- [Expressjs](https://expressjs.com/pt-br/)
