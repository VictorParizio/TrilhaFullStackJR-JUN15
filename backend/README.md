# Backend Smart Plan

## Descrição

**Backend Smart Plan** é uma plataforma para Gestão de Projetos, desenvolvida com Node.js e Express, utilizando TypeScript integrada com um banco de dados PostgreSQL.

A aplicação web permitirá aos usuários listar, cadastrar, editar e excluir projetos, cada um contendo um título e uma descrição.

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

## Docker

A aplicação utiliza o Docker para configurar e gerenciar o banco de dados PostgreSQL. Certifique-se de ter o Docker instalado e funcionando em seu sistema.

### Docker Compose

Para iniciar o banco de dados PostgreSQL usando Docker Compose execute o comando:

```sh
docker-compose up -d
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
- [ x ] Todo projeto deve conter título e descrição.

### Requisitos Técnicos

- [ x ] Os dados da aplicação devem persistir em um banco de dados PostgreSQL.
- [ x ] A senha deve ser criptografada antes de ser armazenada no banco.
- [ x ] Autenticar o usuário ao Registrar-se.
- [ x ] Autenticar o usuário ao Entrar na aplicação.
- [ ] Implementar documentação da API (e.g., usando Swagger).

- [ ] Validar todos os dados que chegam na aplicação.
- [ x ] Isolar todas as chamadas ao BD na camada de Service