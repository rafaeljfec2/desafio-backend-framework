# Instruções de Utilização da WebAPI

Clonando repositório

```bash
$ git clone https://github.com/rafaeljfec2/desafio-backend-framework.git
```

Instalando as dependências

```bash
$ yarn install
```

## Executando a aplicação.

- Certifique-se de ter instalado o docker em sua maquina caso utilize o linux ou MacOS.
- No caso do windows verifique se o docker esta configurado utilizando o serviço wsl2 [clique aqui](https://github.com/codeedu/wsl2-docker-quickstart) para ver como configurar.
- Execute o comando:

```bash
$ docker-compose up
```

## Testando a aplicação

- Faça a importação do arquivo **postman.json** que está na raiz do projeto no postman para efetuar os testes da api.

## Testes unitários

Para executar as rotinas de testes unitários, execute o comando:

```bash
$ yarn test
```

## Acesso ao Postgress

- [Clique aqui para acessar o pgAdmin 4](http://localhost:8000/login?next=%2F)

## Documentação

- [Clique aqui para acessar a documentação](http://localhost:3333/api-docs)
