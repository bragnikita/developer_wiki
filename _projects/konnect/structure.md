 ---

---
### tools/settings.yml
* Целевые хосты для стресс-тестов приложения
* Целевые хосты для выполнения команд fab пересоздания БД
* Хост, откуда работает Gatling
* Настройки стресс-теста (продолжительность), кол-во сообщений в сек, подключение новых юзеров со стороны веб-окна в секунду)
* Настройки приложения (они будут залиты в базу данных при обновлении): домены, юзеров в домене, модуль автоответа
###


```scala
class ClassName extends Simulation {

  val httpConf = http.baseURL(...) ...
  var feeder: функция, генерирующая данные (Iterator)
  var scn = scenario(<name>).feed(feed).exec(...request and response cherk...)
    .exitHereIfFailed.repeat(count) { exec(request...).pause(interval).exitHereIfFailed }
    .doIf(constantUsersPerSec)
  val injection = scn.inject( constantUsersPerSec(users_per_sec) during (test_duration minutes ))

  setUp(injection).protocols(httpConf)
}
```

### Запуск сценария через fab
- определить таск def taskname:()
- пометить декотраторами @task и @roles('gatling')
- строка описания содержания сценария
- запуск аплода всех скриптов гатлинга
- пересоздание рантайм-директории и лог-директории
- аплод sh-скрипта, запускающего выполнение (передавая параметры в темплейт), в рантайм-директорию
- отложенный запуск скрита через at
