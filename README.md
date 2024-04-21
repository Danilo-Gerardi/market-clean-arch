# MarketCleanArch

Esta aplicação usa o padrão de Arquitetura Limpa com o intuito de demonstrar como é possível implementá-la no front-end.

## Passos para baixar e rodar a app

1. Em um terminal, digite **git clone https://github.com/Danilo-Gerardi/market-clean-arch.git**

2. Para instalar as dependências, dê o comando `npm install`.

3. Em seguida digite `npm start` para rodar a app.

##### Pré-requisitos

Node.js instalado a partir da versão 14.

## Organização da Aplicação

Ela está organizada em 3 diretórios principais, a seguir:

**adapters**, **domain** e **infra**, buscando se parecer com as camadas propostas na Clean Arch.

O artigo a seguir traz maiores explicações sobre as camadas e conceitos como a regra da dependência e o uso de interfaces:

https://medium.com/@danilogerardi/um-resumo-sobre-a-arquitetura-limpa-3a5712138f73

## Casos de uso (Usecases)

###### 1. Realizar a compora de um presente)

###### 2. Buscar produtos (presentes)

## Observações

1. Na pasta _assets_, há o arquivo **mock-api.json** para simular um payload de resposta de um endpoint get de uma api rest.
   <br/>

2. A aplicação faz uso do sistema de injeção de dependência do Angular (**Angular DI System**), que está no arquivo _app.module.ts_, no qual estão declaradas as interfaces e suas respectivas implementações.
   <br/>
3. Cada módulo Angular é carregado via **Lazy Loading** para tornar o pacote (bundle) final menor, carregando apenas os módulos necessários.
