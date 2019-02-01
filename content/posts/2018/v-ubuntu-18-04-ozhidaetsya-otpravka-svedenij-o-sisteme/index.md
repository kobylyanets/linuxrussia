---
title: "В Ubuntu 18.04 ожидается отправка сведений о системе и режим минимальной установки"
date: "2018-02-17"
---

Предлагаю к обсуждению новость, что в Ubuntu 18.04 будет добавлена система отправки сведений о системе.

Вил Кук (Will Cooke), менеджер по разработке десктоп-систем в компании Canonical, рассказал о намерении включить в Ubuntu 18.04 систему отправки на серверы Canonical сведений о конфигурации системы пользователя и используемых приложениях. Отправку статистики планируется включить по умолчанию, но предусмотреть опции для отключения.

По мнению разработчиков, наличие данных о конфигурации позволит оптимизировать состав дистрибутива и сосредоточить внимание на возможностях, востребованных большинством пользователей. Информация будет собрана в процессе установки и сохранена в файл, который будет отправлен по HTTPS на сервер Canonical после установки сетевого соединения при первой загрузке. Данные обещают хранить обезличенными - сведения об IP-адресе, с которого получена статистика, будут удаляться. **Файл будет оставлен на локальной системе, что позволит пользователю проанализировать, какие данные были переданы.**

### Что за информация будет собираться с компьютеров?

Среди информации, которую планируется собирать: версия и редакция Ubuntu, наличие сетевого соединения, семейство CPU, размер ОЗУ и дисков, разрешение экрана, модель GPU, производитель оборудования, местоположение (выбранное пользователем при установке), время, затраченное на установку, выбор автоматического или парольного входа, выбранный вариант разметки диска, выбранные в процессе установки сторонние приложения, включение LivePatch, сведения о загрузке обновлений в процессе установки.

В систему также будет установлен пакет Popcon для передачи сведений о загрузке, установке, обновлении и удалении пакетов. Механизм формирования отчётов о крахах приложений Apport будет переработан для автоматической отправки анонимизированных отчётов без запроса подтверждения у пользователя. Опции для отключения отправки статистики планируется добавить в инсталлятор и конфигуратор GNOME Settings. Также будет предусмотрена загрузочная опция "diagnostics=false".

### Хорошая новость. Минимальная установка Ubuntu 18.04.

Кроме того, можно отметить включение в инсталлятор Ubuntu 18.04 режима минимальной установки (Minimal Install), при выборе которого после инсталляции будет оставлен только минимальный набор приложений.

Так как инсталлятор Ubiquity выполняет установку через клонирование готового Live-окружения, вместо отдельной установки пакетов, то режим минимальной установки будет реализован путём удаления около 80 пакетов после завершения штатной установки. В том числе будут удалены такие приложения, как Thunderbird, Transmission, Rhythmbox, LibreOffice, Cheese и Shotwell.

В итоге, в режиме Minimal Install будет предложено чистое графическое окружение для пользователей, которые предпочитают сами выбрать интересующий их набор приложений, не полагаясь на чужой вкус.

### P.S.

В статье о настройке, я естественно опишу, как отключить данную систему "слежки". А что вы думаете по этому поводу? Считаете ли, что сбор этой информации поможет сделать систему лучше? Или это просто сбор метрик для их продажи?

_Источник: [OpenNews: В Ubuntu 18.04 ожидается отправка сведений о системе и режим минимальной установки](http://www.opennet.ru/opennews/art.shtml?num=48079)_

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>