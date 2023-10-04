# Configuração do Typescript

1. inicializar um projeto node.js: `npm init`;
2. instalar o typescript:
  2.1 global (não recomendado);
  2.2 local: `npm install typescript -D`;
    -D : pacotes de lib para desenvolvimento, não vão para a produção;
3. transpilar cód TS para JS: `npx tsc index.ts --watch`;
    `npx tsc --init`