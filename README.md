# Правила работы с проектом 
Тыкаем, копируем ssh
![image](https://github.com/Usapix/pavel-ib/assets/53493411/863bcabf-df43-4254-8e7d-d49fa957ee11)

На компе, в консоли вводим такой код (выбрать нужную папку)
```
git clone git@github.com:Usapix/pavel-ib.git
```

## Скачайте ветку
```
git pull origin Имя_ветки
```

## Выбор правильной ветки 
Выберите ветку, в которой разрабатываете приложение:
![image](https://github.com/Usapix/pavel-ib/assets/53493411/9d3acbfa-6c42-4392-b703-395416f57c20)

(тут можно посмотреть все ветки)

Чтобы переходить по веткам, нужна команда 
```
git checkout ИМЯ_ВЕТКИ
```
## Скачайте ноду lts
[https://nodejs.org/en](https://nodejs.org/en/download/package-manager)

## В корне проекта пропишите команду 
```
npm i
```
## Что делать после внесения изменений
Пишите 
```
git add .
```
Затем 
```
git commit -m "И пишите сюда что сделали"
```
Чтобы отправить изменения: 
```
git push origin ИМЯ_ВЕТКИ
```
