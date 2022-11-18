# cc-links

Модуль для сокращения ссылок

<p align="center">
  <h1>CC-LINKS</h1>
  <a href="https://www.npmjs.com/package/cc-links"><img src="https://img.shields.io/npm/v/cc-links.svg?style=flat-square" alt="NPM version"></a>
  <a href="https://www.npmjs.com/package/cc-links"><img src="https://img.shields.io/npm/dt/cc-links.svg?style=flat-square" alt="NPM downloads"></a>
</p>

# Сокращение ссылок

<p>
Модуль использует единственный метод для сокрещения вашей ссылки
</p>

```js
const ccGenerator = require("cc-links");

const getLink = async () => {
    try {
        let short = await ccGenerator('https://my_site.pw')
        console.log(short)
    } catch (err) {
        console.error(err.message || "Error!")
    }
}
```

При успешном выполнении мы получим объект:

```js
  /*
    short — объект, возвращаемый при успешном сокращении:
    {
      link: {
        "from": "https:vk.com/api/link/generate", Ваша ссылка для сокращения
        "to": "qupe.pw/R3s5sOvTj", сокращенный адрес
        "code": "R3s5sOvTj",
        "date": "2022-11-18T09:13:20.426Z",
      }
    }
  */
```

<p>Обратите внимание что для каждой ссылки можно получить только 1 сокращение а так же вы не получите ошибку если пришлете любую строку не являющуюся url</p>

<p align='center'>Made by <a href="https://хор-енотов.рф">ХОР ЕНОТОВ</a></p>