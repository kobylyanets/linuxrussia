---
title: "Установка и настройка DOSBox в Ubuntu."
date: "2018-01-28"
author: "Eduard Kobylyanets"
category: "programs"
url: "dosbox-ubuntu"
---

В этой статье хочу рассказать про установку эмулятора MS DOS - DOSBox в Ubuntu. И поделиться с вами опытом своей настройки, а именно русификация и запуск Norton Commander для более удобной навигации.

## Коротко о DOSBox.

DOSBox - это эмулятор для PC, создающий DOS-окружение, необходимое для запуска старых программ и игр под MS-DOS. Эмулятор с открытыми исходниками и доступен под огромное количество систем, как настольных, так и мобильных.

Если хочется погрузиться в детство (молодость) и поиграть в игры того времени, то это идеальный инструмент. Мне недавно захотелось поиграть в Prince of Persia и пройти, наконец, эту игру, что в детстве так и не удалось. Вот так это выглядит в Ubuntu:

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_135.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_135.png)

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_134.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_134.png)

## Установка DOSBox в Ubuntu.

Ничего сложного в установке нет, вы можете найти в Центре приложений Ubuntu DOSBox и установить оттуда или выполнить следующую команду в терминале:

sudo apt install dosbox

Теперь этот эмулятор будет в списке установленных приложений. Или же для его запуска выполните команду в терминале:

dosbox

## Горячие клавиши управления эмулятором.

Скорость игр регулируется клавишами CTRL+F12 и CTRL+F11.

ALT+F12 – полная скорость.  
ALT+ENTER - переход в полноэкранный режим.  
CTRL+F10 - переключает мышку между окном DOSBox и рабочим столом.  
CTRL+F9 – выход.

## Настройка DOSBox в Ubuntu.

DOSBox не видит наши разделы на компьютере. Поэтому, чтобы запускать игры в нём, нам нужно примонтировать каталог. Для начала создайте в домашней директории папку для эмулятора, в котором будем складывать игры и приложения для DOS.

Я не проявил какой-то фантазии и назвал её DOS:  

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_136-512x300.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_136.png)

Теперь, чтобы этот каталог стал доступен в эмуляторе DOSBox, нужно в нём поочередно вводить следующие команды:

Монтируем каталог DOS домашней директории как диск C (_вместо ~/DOS - путь к вашему каталогу, значок ~ сокращенный путь к домашней директории текущего пользователя_):

MOUNT C: ~/DOS

Переходим на диск С:

С:

Переходим в каталог с игрой CD путь к папке с игрой:

CD PRINCE

И запускаем игру или программу, введя её название (.exe можно не вводить):

PRINCE

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_137.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_137.png)

Кроме того, нужно русифицировать консоль, чтобы русский язык нормально отображался, для этого вводим:

KEYB RU

Это нужно вводить каждый раз при запуске эмулятора! Не спешите удалять эмулятор, есть файл конфигурации приложения, где мы можем записать список команд, которые будут выполняться при старте эмулятора. То есть, мы автоматизируем эти рутинные команды.

Данный файл находится в домашней директории вашего пользователя .dosbox и называется dosbox-\*.conf:

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_138-512x293.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_138.png)

Открываем его и вписываем в самый конец все команды, которые хотим, чтобы выполнялись при старте. К примеру, те, что мы только что вводили:
```bash
[autoexec]
# Lines in this section will be run at startup.
# You can put your MOUNT lines here.
MOUNT C: ~/DOS
C:
KEYB RU
```
Получается так:

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_139-512x344.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_139.png)

Сохраняем. Теперь после перезапуска эмулятора у нас будет монтироваться каталог с играми и программами, а также будет русифицирован.

#### Norton Commander.

Но большинству пользователей лень вводить команды перехода в каталоги игр и прописывать их запуск. Именно поэтому и был придуман когда-то файловый менеджер Norton Commander. Я загрузил его по этой ссылке [http://old-dos.ru/files/file\_1458.html](http://old-dos.ru/files/file_1458.html) . Выбрал русскую версию 5.0, которую чаще всего качали другие. И вот что из этого получилось:

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_140.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_140.png)

Гораздо удобнее навигация по каталогам и запуск игр.

Ну и в завершение, давайте добавим в файл конфигурации, чтобы Norton Commander стартовал при запуске эмулятора, допишем в конце файла строчки:

\[autoexec\]
# Lines in this section will be run at startup.
# You can put your MOUNT lines here.
MOUNT C: ~/DOS
C:
KEYB RU
CD NC
NC

Заметьте, что у меня NC - это каталог, куда я распаковал Norton Commander и там лежит файл NC.EXE. Вы должны прописывать свой путь к папке с файлом NC.EXE.

У меня файл конфигурации выглядит следующим образом:

[![](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_141-512x341.png)](http://old.linuxrussia.com/wp-content/uploads/2018/01/linuxrussia_141.png)

Вот таким образом мы упростили работу с эмулятором DOSBox в Ubuntu. Теперь можно спокойно играть, не парясь вводить кучи команд в консоле. 

Вот и всё, что хотелось рассказать о данном эмуляторе.

## Удаление DOSBox из Ubuntu.

Для удаления DOSBox из Ubuntu просто введите следующую команду в терминале:

sudo apt remove dosbox

Ну или найдите dosbox в Центре приложений Ubuntu в списке установленных программ и удалите.

