>npm init -y // Inicializa o node para gerenciar os pacotes

>npm i -D typescript ts-node  // Instala os pacotes para ambiente de desenvolvimento em typescript

>npx tsc --init  // Inicializa o arquivo de configuração do typescript
>npx tsc app.ts // Para transpilar o arquivo para javascript
>npx ts-node app.ts // para transpilar e executar o arquivo

OBS: 
1- Inserido no package.json o script dev com os comando do npx ts-node app.ts para serem executados de maneira mais produtiva:
>npm run dev

