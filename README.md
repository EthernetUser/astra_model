1) в корне поекта в консоли ввести команду `npm install`

2) в папке ./server/config/database.json в "development" ввести настройки бд

3) в консоли зайти в папку ./server/ и выполнить команду `npx sequelize db:migrate`, чтобы создать таблицы в бд

4) там же выполнить команду `npx sequelize db:seed:all`, чтобы внести начальные данные в бд

5) в корне проекта выполнить команду `npm run dev`, чтобы запустить front и back
