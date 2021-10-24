# ⚠️ Informações
Repositorio do projeto da equipe 'Wadababu' no Hackathon Cibercidadão promovido pela Prodest.

### 🚀 Membros da Equipe
* [Aquiles Silva Aguiar](https://www.linkedin.com/in/aquilesaguiar/)
* [Arthur Cezar dos Santos](https://www.linkedin.com/in/arthurcezars/)
* [Breno Robert](https://www.linkedin.com/in/brenorobertdiogo/)
* [Matheus Oliveira](https://www.linkedin.com/in/matheus-o-f-ribeiro/)

### 📝 Repositorios
* Front-end - <https://github.com/BrenoRobertDiogo/HackaProdestFrontEnd>
* Back-end - <https://github.com/MatheusVp2/Hacka-Prodest-Backend>

### 🌱 Tema / Ideia
Solução web que apresenta geograficamente informações sobre lugares vinculados ao governo do ES, como 
instituições governamentais, pontos turísticos e postos de saúde, além de informações sobre transporte público.
Assim, os cidadãos poderiam pesquisar os lugares que gostariam de ir acessando um único portal, com informações 
sobre o local, informações geográficas e de transporte. Além disso, cada lugar do Estado poderia disponibilizar um QR 
Code contendo informações sobre o lugar, localização e informações de transporte. Os pontos de ônibus também 
poderiam ter um QR Code contendo informações de transporte e rotas para possíveis lugares.
Por exemplo, a partir da localização do cidadão, é possível visualizar os lugares turísticos e identificar o transporte 
público para chegar ao lugar que o cidadão deseja conhecer. A solução poderia fornecer informações sobre o ponto 
turístico, horário de funcionamento, fotos e outros.
Outro exemplo poderia ser um cidadão que chegou a um ponto de ônibus e gostaria de saber quais lugares ele poderia 
visitar a partir desse ponto, bem como informações e horários. Nesse caso, o cidadão poderia usar o celular para ler o 
QR Code do ponto de ônibus e visualizar os roteiros para os pontos turísticos, conhecendo as linhas e horários possíveis 
para pegar o ônibus e chegar ao lugar.

### ✨ Tecnologias
A equipe organizadora do hackaton deixou livre a escolha das tecnologias, então optamos por usar as que o grupo tem mais afinidade.
* [Python](https://www.python.org/) - Tratamento de dados
* [Node](https://nodejs.org/en/) - API
* [JavaScript](https://www.javascript.com/) - Front-end
  
### 🔀 Rotas
Lista de rotas da API.
* /api/v1/educacao/  - /api/v1/educacao/filtro?municipio=Serra
* /api/v1/seguranca/ - /api/v1/seguranca/filtro?tipo=Bombeiro Militar&municipio=Serra
* /api/v1/saude/     - /api/v1/saude/filtro?municipio=Serra
* /api/v1/turismo/agencia         - /api/v1/turismo/agencia/filtro?municipio=Serra
* /api/v1/turismo/hotel           - /api/v1/turismo/hotel/filtro?municipio=Serra
* /api/v1/turismo/locadoraCarro   - /api/v1/turismo/locadoraCarro/filtro?municipio=Serra
* /api/v1/turismo/restaurante    - /api/v1/turismo/restaurante/filtro?municipio=Serra
* /api/v1/pontosOnibus

### 🗄 Base de dados
Lista de links de onde coletamos os dados utilzados na nossa aplicação.
* <https://dados.es.gov.br/dataset/>
