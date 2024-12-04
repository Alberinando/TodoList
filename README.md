## Getting Started

Para a execução do projeto primeiramente clone o projeto:

```
git clone https://github.com/Alberinando/TodoList.git
```

instale as dependência:

```
npm install
```

Para o banco de dados:

```
npx prisma generate
npx prisma migrate dev --name init
```

Após isso execulte o comando abaixo:

```
npm run dev
```
