# Test task (WB parse)
The text of task: 
`
"Написать NodeJS сервис, который будет возвращать JSON массив объектов, содержащих информацию об остатках на складе ""Казань WB"", информацию тянуть с сайта wildberries.ru, поля: Артикул, [Размер 1, Размер 2... Размер N] ( Например { Art: 138593051, ""85E"": 4, ""100E"": 14 ... }). Артикулы:  138593051, 94340317, 94340606, 138590435, 138607462, 94339119, 94339244.
P.S. Апи WB использовать не нужно, ровно как и хэдлесс браузер. Достаточно зайти на wildberries.ru, открыть карточку любого товара, найти запрос и воссоздать его фетчем с нужными параметрами."
`

## Steps to start application
```bash
1) $ npm install
2) $ npm run start
```

## Steps to get result of test task
```bash
1) Open browser
2) Copy string 'http://localhost:3010/get-stocks'
3) Paste string to address bar and press Enter
4) See result of the application 
```