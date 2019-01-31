---
title: "Установка последней версии TeamViewer в Ubuntu"
date: "2018-02-24"
---

Начиная с 13 версии, TeamViewer, программа для удалённого контроля компьютеров и мобильных устройств, стала нативным приложением для Linux. В этой статье рассмотрим установку программы TeamViewer в Ubuntu.

## Коротко о программе TeamViewer.

Мне, зачастую, требуется подключиться к удаленному компьютеру знакомых, друзей, родителей, чтобы помочь что-то настроить. Если ехать лично, то это займет кучу времени. Намного проще подключиться удаленно со своего персонального компьютера к удаленному компьютеру, получить полный контроль и настроить всё, что нужно. В локальной сети для этого можно использовать и другие программы, такие как nomachine или x2go.

Но если нужно через интернет получить доступ к удаленному компьютеру, то самый отличный кроссплатформенный продукт это TeamViewer. TeamViewer доступен на операционных системах Microsoft Windows, Mac OS X, Linux, Chrome OS, iOS, Android. Таким образом можно попросить человека, чтобы он легко и быстро поставил на компьютер TeamViewer, это вообще не сложно (в случае чего можно по телефону подсказать), либо установить данное приложение заранее.

Интерфейс приложения очень интуитивно понятный:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_192.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_192.png)

Слева отображается пароль и id, который просим у того человека, к которому будет подключаться. В правой части окна вводим этот самый id, после чего будет запрошен пароль. Если авторизоваться, то можно будет хранить список устройств, к которым подключаемся.

#### Внимание.

Приложение TeamViewer бесплатно только для домашнего использования. То есть, использовать его для подключения к рабочему компьютеру будет означать нарушение лицензии.

К примеру, я иногда подключаюсь к своему домашнему ноутбуку с телефона, вот как это выглядит:

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/IMG_0826-512x288.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/IMG_0826.png)

**А теперь отличная новость.**

Начиная с 13 версии, TeamViwer для Ubuntu стал нативным приложением, раньше использовался Wine. Полная новость на английском по ссылке: [\[Update\] TeamViewer 13](https://community.teamviewer.com/t5/Linux/Update-TeamViewer-13/m-p/24537) .

Что это означает для пользователей:

- нативный клиент, больше никакого Wine;
- нативные 64 битные пакеты, никаких больше 32 битных зависимостей пакетов;
- DEB и RPM репозитории для получения своевременных обновлений.

## Установка TeamViwer в Ubuntu.

Для установки TeamViewer в Ubuntu выберите любой из представленных способов ниже:

#### 1). Установка TeamViewer через графический интерфейс в Ubuntu, скачав deb пакет с официального сайта.

Чтобы установить самую последнюю стабильную версию TeamViwer в Ubuntu, скачайте deb пакет с официального сайта по следующей ссылке:

[https://www.teamviewer.com/ru/download/linux/](https://www.teamviewer.com/ru/download/linux/)

[![](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_191.png)](http://www.linuxrussia.com/wp-content/uploads/2018/02/linuxrussia_191.png)

После чего установите скачанный deb пакет программы TeamViwer через Центр приложений Ubuntu (_двойной клик по deb пакету_) или любым другим, удобным для вас способом, к примеру, вы можете воспользоваться приложением Gdebi: [Gdebi — программа для установки .deb пакетов в Ubuntu.](http://www.linuxrussia.com/gdebi-deb-ubuntu.html)

#### 2). Установка TeamViewer в терминале Ubuntu, скачав deb пакет с официального сайта.

Если вы предпочитаете использовать терминал для установки приложений, то выполните в нём одну из следующих команд в соответствии с архитектурой вашей операционной системы Ubuntu.

Для **Ubuntu 64 бит** выполните следующую команду установки программы TeamViewer:

cd /tmp/ && wget https://download.teamviewer.com/download/linux/teamviewer\_amd64.deb && sudo dpkg -i teamviewer\_amd64.deb

Для **Ubuntu 32 бит** выполните следующую команду установки программы TeamViewer:

cd /tmp/ && wget https://download.teamviewer.com/download/linux/teamviewer\_i386.deb && sudo dpkg -i teamviewer\_i386.deb

Данные два способа установки посредством скачивания deb пакета с официального сайта наиболее простые и предпочтительные. В систему будет добавлен официальный репозиторий вместе с установкой TeamViewer, то есть, вместе с обновлением системы будет обновляться и данное приложение.

#### 3). Установка TeamViewer из официального репозитория в терминале.

Добавляем ключ репозитория в систему (_это одна команда, её нужно скопировать полностью и выполнить в терминале_):

wget -O - https://download.teamviewer.com/download/linux/signature/TeamViewer2017.asc | sudo apt-key add -

Создаем файл с репозиторием TeamViwer в систему:

sudo gedit /etc/apt/sources.list.d/teamviewer.list

Если у вас окружение рабочего стола не Gnome, то заменить gedit на тот редактор, который используется в вашей системе, либо воспользоваться консольным nano. В открывшемся редакторе нужно вставить следующие строки:

\###   TeamViewer DEB repository list

### NOTE: Manual changes to this file
###        - prevent it from being updated by TeamViewer package updates
###        - will be lost after using the 'teamviewer repo' command
###       The original file can be restored with this command:
###       cp /opt/teamviewer/tv\_bin/script/teamviewer.list /etc/apt/sources.list.d/teamviewer.list
###       which has the same effect as 'teamviewer repo default'

### NOTE: It is preferred to use the following commands to edit this file:
###       teamviewer repo                - show current repository configuration
###       teamviewer repo default        - restore default configuration
###       teamviewer repo disable        - disable the repository
###       teamviewer repo main \[stable\]  - make all TeamViewer packages available (default)
###       teamviewer repo tv13 \[stable\]  - make TeamViewer 13 packages available
###                             stable     omit preview and beta releases

### Choose stable main to receive updates for TeamViewer 13 and upcoming major releases
### Choose preview main to receive early updates for TeamViewer 13 and to receive major beta releases

### Choose stable tv13 to receive updates for TeamViewer 13
### Choose preview tv13 to receive early updates for TeamViewer 13

deb http://linux.teamviewer.com/deb stable main
deb http://linux.teamviewer.com/deb preview main

# deb http://linux.teamviewer.com/deb stable tv13
# deb http://linux.teamviewer.com/deb preview tv13

Сохраняем данный файл и закрываем редактор.

Обновляем сведения о пакетах в репозиториях системы и устанавливаем, непосредственно, саму программу TeamViewer, выполнив следующую команду в терминале:

sudo apt update && sudo apt install teamviewer

Вот и всё.

## Удаление TeamViewer из Ubuntu.

Если хотите удалить программу TeamViewer из Ubuntu, то откройте терминал и выполните следующую команду:

sudo apt remove teamviewer

Также можно удалить файл репозитория из системы:

sudo rm /etc/apt/sources.list.d/teamviewer.list

Всё, теперь приложение Teamviewer удалено из системы Ubuntu.

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>
