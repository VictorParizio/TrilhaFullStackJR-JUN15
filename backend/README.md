# Backend Smart Plan

![Node](https://img.shields.io/badge/Node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-000000?style=for-the-badge&logo=Prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-007ACC?style=for-the-badge&logo=Docker&logoColor=white)

## Descrição

**O Servidor Smart Plan** é um sistema para Gestão de Projetos, desenvolvida com Node.js, Express e TypeScript, utilizando Docker integrado com Prisma para gerenciar banco de dados PostgreSQL.

O sistema permite aos usuários se cadastrar, fazer login e listar, cadastrar, editar e excluir projetos, contendo um título e uma descrição.

## Requisitos

- Node.js
- Docker

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/backend-smart-plan.git
   cd backend-smart-plan
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Para iniciar o servidor em modo de desenvolvimento com hot-reload:

   ```sh
   npm run dev
   ```

4. Acesse no seu navegador:
   ```ss
   http://localhost:3000/
   ```

## Docker

O sistema utiliza o Docker para configurar e gerenciar o banco de dados PostgreSQL. Certifique-se de ter o Docker instalado e funcionando em seu sistema.

### Docker Compose

Para iniciar o banco de dados PostgreSQL usando Docker Compose execute o comando:

```sh
docker compose up -d
```

### Requisitos Funcionais

1. **Registro e Autenticação**

   - [ x ] Deve ser possível se Registrar.
   - [ x ] Deve ser possível se Autenticar.

2. **Gerenciamento de Projetos**

   - [ x ] Deve ser possível Criar um projeto.
   - [ x ] Deve ser possível Atualizar um projeto.
   - [ x ] Deve ser possível Deletar um projeto.
   - [ x ] Deve ser possível Listar todos os projetos.

### Regras de Negócio

- [ x ] O usuário não pode se cadastrar com email duplicado.
- [ x ] Apenas usuários autenticados podem acessar os projetos.
- [ x ] Apenas o usuário que criou o projeto pode acessar, editar e excluir um projeto.
- [ x ] Todo projeto deve conter título e descrição.

### Requisitos Técnicos

- [ x ] Os dados do sistema devem persistir em um banco de dados.
- [ x ] A senha deve ser criptografada antes de ser armazenada no banco.
- [ x ] Autenticar o usuário ao Registrar-se.
- [ x ] Autenticar o usuário ao Entrar no sistema.
- [ x ] Implementar documentação da API (e.g., usando Swagger).

- [ x ] Isolar todas as chamadas ao BD na camada de Service
- [ x ] Validar todos os dados que chegam no sistema.
