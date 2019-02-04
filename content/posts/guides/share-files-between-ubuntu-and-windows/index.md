---
title: "Настройка файлового обмена между Windows и Ubuntu."
author: "Edward Kobylyanets"
date: 2019-05-04
url: "/share-files-between-ubuntu-and-windows"
category: "guides"
featuredImage: "images/share_files_logo.png"
status: "published"
---

В данной статье расскажу о настройке файлового обмена между Windows и Ubuntu. Мы научимся расшаривать папки (каталоги) в Ubuntu и подключаться к ним из Windows 10 и наоборот. В этой статье все действия мы будем выполнять без использования терминала.

<!-- more -->

Этой статьей я хочу развеять предрассудки, что шарить папки на Ubuntu очень сложно. Так как же расшарить папку в Ubuntu?

# Настройка общего доступа папки в Ubuntu и подключение к ней из Windows.

Открываем файловый менеджер (Nautilus). Выбираем папку, которую хотим расшарить другим пользователям в локальной сети. Кликаем по ней правой кнопкой мыши, в контекстном меню выбираем "Свойства" и переходим на вкладку "Общедоступная папка по локальной сети":

![Свойства папки](images/share_files_ubuntu_1.png)

Если проставить галочку "Опубликовать эту папку" и нажать кнопку "Применить", то наша папка станет доступна другим пользователям в локальной сети. И у эта папка будет подсвечена значком общего доступа:

![Значок общего доступа](images/share_files_ubuntu_2.png)

**Но есть нюансы. Не спешите закрывать статью.**

Если мы это сделаем в первый раз, то система нам радушно предложит установить "Службу общего доступа к папкам":

![Служба общего доступа к папкам](images/share_files_ubuntu_3.png)

Соглашаемся и жмём "Установить службу", появится окно, непосредственно, с установкой пакета Samba:

![Установить службу](images/share_files_ubuntu_4.png)

Устанавливаем и соглашаемся на перезапуск сеанса:

![Перезапуск сеанса](images/share_files_ubuntu_5.png)

## Давайте разберёмся подробнее с открытием общего доступа к папке.

Создадим какую-нибудь папку, к примеру, назовём её LinuxFiles. Проставим галочку "Опубликовать эту папку" и нажать "Применить":

![Опубликовать эту папку](images/share_files_ubuntu_6.png)

В поле "Наименование" можно вписать имя сетевого ресурса, как оно будет отображаться у нас в сети.

К примеру, мы создаём название каталога с пробелами и прочими символами, а здесь, в поле "Наименование" указываем нормальное название сетевого ресурса латинскими буквами.

## Как подключиться к расшаренной папке Ubuntu из Windows?

Для этого нам надо узнать наш **ip** или **название устройства** (hostname).

Это можно сделать в графическом интерфейсе через "Параметры" системы.

В пункте "Сеть" посмотреть подробности вашего подключения:

![Параметры сети](images/share_files_ubuntu_7.png)

В пункте "Подробности" (О системе):

![О системе](images/share_files_ubuntu_8.png)

Тоже самое можно посмотреть и в терминале, выполнив следующие команды:

```bash
ifconfig
hostname
```

После чего в Windows подключаемся, введя в адресной строке Проводника два обратных слеша `\\`, а затем ip адрес или имя устройства Ubuntu:

![Проводник Windows](images/share_files_ubuntu_9.png)

Отобразятся все расшаренные каталоги на Ubuntu машине. Но если мы попытаемся зайти в нашу папку LinuxFiles, то получим ошибку доступа:

![Ввод сетевых учетных данных](images/share_files_ubuntu_10.png)
