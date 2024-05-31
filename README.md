# Gerenciamento de Tasks
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

Este é um projeto completo de gerenciamento de tarefas desenvolvido com as tecnologias Node.js, PostgreSQL e React.
O objetivo é fornecer uma plataforma eficiente e intuitiva para que os usuários possam criar, ler, atualizar e excluir suas tarefas de forma simples e organizada.
O projeto inclui uma API backend construída com Node.js e Prisma, bem como uma interface web desenvolvida com React, permitindo uma experiência de usuário fluida e responsiva.

<b>Por Diego Alba</b>

## Metodologia CRUD

O projeto implementa o método CRUD (Create, Read, Update, Delete) para o gerenciamento de tarefas. Isso significa que os usuários podem realizar as seguintes operações:

- Criar novas tarefas

- Visualizar as tarefas existentes

- Atualizar informações de tarefas já cadastradas

- Excluir tarefas que não são mais necessárias

Essa abordagem garante que os usuários tenham total controle sobre suas tarefas, podendo adicionar, consultar, modificar e remover itens conforme necessário, proporcionando uma experiência de gerenciamento eficiente e customizável.

## Tencologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

 ### BackEnd
O backend do projeto foi construído com Node.js, uma plataforma de desenvolvimento JavaScript de alto desempenho. Além disso, foi utilizado o Prisma, um ORM (Object-Relational Mapping) moderno que facilita a interação com o banco de dados PostgreSQL.

### FrontEnd 
O frontend foi desenvolvido com React, uma biblioteca JavaScript popular para construção de interfaces de usuário. Essa tecnologia permite a criação de aplicações web responsivas e de alta performance.

### Outro Componentes

Foram utilizadas outras ferramentas e bibliotecas para complementar o projeto, como o Express.js para a construção da API,
o Axios para realizar requisições HTTP, o CORS para gerenciar a segurança da comunicação entre frontend e backend, e o Nodemon para facilitar o desenvolvimento.

## Configuração e Execução

Certifique-se de ter o Node.js, o PostgreSQL e o Docker instalados em seu sistema. Em seguida, instale as dependências do projeto executando o comando `npm install` na raiz do projeto.

```
npm install express
```

```
npm install -g nodemon
```

```
npm install cors
```

```
npm install prisma
```

```
npm install @prisma/client
```



Com as dependências instaladas é possível botar o server para botar com `npm run dev` e `docker-compose up -d`
Ao usar  `npx prisma studio` o prisma conecta ao banco e mostra uma aplicação com todas as tabelas. Bem útil durante o desenvolvimento.

Para a parte do FrontEnd utilizamos
```
npx create-react-app {nome do seu projeto}
```

```
npm install axios
```

```
npm install react-icons --save
```

Em seguida, execute o comando `npm start` para iniciar o servidor frontend. A aplicação estará disponível, por padrão, em `http://localhost:3000`.

## Contribuição e Feedback
Todos são bem-vindos a contribuir com melhorias, correções de bugs ou novas funcionalidades. Se você tiver alguma sugestão ou feedback, sinta-se à vontade para abrir uma issue ou enviar um pull request.
Sua participação é extremamente valiosa para o meu desenvolvimento pessoal como pessoa programadora.
