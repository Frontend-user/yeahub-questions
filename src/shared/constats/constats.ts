export const API_TOKEN = import.meta.env.VITE_API_TOKEN
export const API_URL = import.meta.env.VITE_API_URL
export const API_ROUTES = {
    QUESTIONS: "questions",
    SPECIALIZATIONS: 'specializations'
}


export const STATIC_QUESTIONS_LIST = [
    {
        "id": 77,
        "title": "Как можно создать телефонную ссылку?",
        "description": "Этот вопрос проверяет понимание специальных схем в атрибутах href для создания интерактивных ссылок, таких как телефонные",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "a",
            "phone"
        ],
        "longAnswer": "<p>Телефонная ссылка в HTML — это гиперссылка, которая использует схему <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">tel:</code> для указания телефонного номера. Такая ссылка позволяет инициировать звонок при клике, если устройство поддерживает эту функцию (например, смартфон или компьютер с установленной телефонной программой).</p><h4>&nbsp;</h4><h4>Как работает телефонная ссылка:</h4><p>&nbsp;</p><ol><li><p><strong>Формат ссылки</strong>:<br>Атрибут <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">href</code> содержит номер телефона в формате <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">tel:номер</code>. Номер можно записывать с кодом страны, чтобы он был универсальным.<br>Пример:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;a href=\"tel:+1234567890\"&gt;Позвонить&lt;/a&gt;</code></pre></li><li><p>&nbsp;</p><p><strong>Поддержка дополнительных символов</strong>:<br>Можно добавлять символы:</p><ul><li>- Пробелы, тире и скобки игнорируются устройством.</li><li>- Для пауз или дополнительных действий используют запятые <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">,</code> (пауза) или точку с запятой <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">;</code> (ожидание).</li></ul><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;a href=\"tel:+1234567890,123\"&gt;Позвонить с добавочным номером&lt;/a&gt;</code></pre></li><li><strong>Текст ссылки</strong>:<br>Текст между тегами <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;a&gt;</code> виден пользователю и может быть произвольным.</li></ol><h4>&nbsp;</h4><h4>Полный пример:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;Телефонная ссылка&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;p&gt;Для связи с нами нажмите:&lt;/p&gt;\n    &lt;a href=\"tel:+1234567890\"&gt;Позвонить нам&lt;/a&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><h4>&nbsp;</h4><h4>Практическое применение:</h4><p><strong>- Мобильные сайты</strong>: Удобно для пользователей, которые хотят быстро связаться с компанией.</p><p><strong>- Поддержка клиентов</strong>: На страницах с контактами можно использовать телефонные ссылки для улучшения пользовательского опыта.</p><h4>&nbsp;</h4><h4>Советы:</h4><p>- Указывайте номер телефона в международном формате, чтобы ссылка работала на любых устройствах.</p><p>- Убедитесь, что текст ссылки понятен и мотивирует пользователя совершить действие (например, \"Позвонить\").</p><p>&nbsp;</p><p>Телефонные ссылки улучшают удобство использования сайта, особенно для мобильных пользователей, и помогают напрямую взаимодействовать с аудиторией.</p>",
        "shortAnswer": "<p>Для создания телефонной ссылки используется тег <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;a&gt;</code> с атрибутом <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">href</code>, значение которого начинается с <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">tel:</code>. Например:</p><p>&nbsp;</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;a href=\"tel:+1234567890\"&gt;Позвонить&lt;/a&gt;</code></pre><p>Когда пользователь нажимает на эту ссылку, устройство автоматически предложит совершить звонок на указанный номер. Это особенно полезно для мобильных пользователей.</p>",
        "status": "public",
        "rate": 1,
        "complexity": 2,
        "createdAt": "2024-10-06T06:51:56.210Z",
        "updatedAt": "2024-11-17T17:31:08.831Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 27,
                "title": "HTML",
                "description": "Разметка веб-страниц с использованием семантических тегов для улучшения SEO и доступности.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/6b8a29bc-ce64-4282-be53-d4e57ffdfad9",
                "createdAt": "2024-10-06T06:32:23.656Z",
                "updatedAt": "2025-03-10T16:25:37.483Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 20,
                        "title": "Java Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения на языке Java с использованием фреймворков, таких как Spring Framework",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T18:53:51.891Z",
                        "updatedAt": "2025-03-08T16:11:55.762Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 76,
        "title": "Что такое атрибут в html?",
        "description": "Этот вопрос проверяет понимание атрибутов HTML, которые добавляют тэгам дополнительную информацию.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "attribute"
        ],
        "longAnswer": "<p>Атрибуты в HTML предоставляют дополнительную информацию элементам, помогая настроить их свойства или поведение. Атрибуты пишутся в открывающем теге элемента и состоят из <strong>имени</strong> и <strong>значения</strong>, разделенных знаком <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">=</code>.</p><h4>&nbsp;</h4><h4>Основные принципы:</h4><p>- Атрибуты указываются только в открывающем теге.</p><p>- Значения атрибутов заключаются в кавычки (двойные или одинарные).</p><p>- У одного элемента может быть несколько атрибутов, которые перечисляются через пробел.</p><h4>&nbsp;</h4><h4>Примеры популярных атрибутов:</h4><p>&nbsp;</p><ol><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>href</strong></code> — для ссылок:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;a href=\"https://example.com\"&gt;Перейти&lt;/a&gt;</code></pre><p>Указывает адрес, куда ведет ссылка.</p></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>src</strong></code> — для изображений:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;img src=\"image.jpg\" alt=\"Описание изображения\"&gt;</code></pre><p>Указывает путь к изображению.</p></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>alt</strong></code> — альтернативный текст для изображения:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;img src=\"image.jpg\" alt=\"Описание изображения\"&gt;</code></pre><p>Показывается, если изображение не загрузилось.</p></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>id</strong></code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>class</strong></code> — для идентификации и стилизации:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;div id=\"main\" class=\"container\"&gt;&lt;/div&gt;</code></pre><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">id</code> должен быть уникальным на странице, а <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">class</code> используется для группировки элементов.</p></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>disabled</strong></code> — логический атрибут, который делает элемент неактивным:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;button disabled&gt;Кнопка&lt;/button&gt;</code></pre></li></ol><h4>&nbsp;</h4><h4>Пример с несколькими атрибутами:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;a href=\"https://example.com\" target=\"_blank\" title=\"Откроется в новом окне\"&gt;Ссылка&lt;/a&gt;</code></pre><ul><li><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">href</code>: адрес ссылки.</li><li><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">target=\"_blank\"</code>: открытие в новой вкладке.</li><li><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">title</code>: подсказка при наведении курсора.</li></ul><h4>&nbsp;</h4><h4>Практическое применение:</h4><p>Атрибуты используются для управления поведением и отображением HTML-элементов. Например, вы можете настроить кнопку так, чтобы она была неактивной (атрибут <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">disabled</code>), добавить стили через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">class</code> или подключить внешние ресурсы через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">src</code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">href</code>.</p><p>&nbsp;</p><p>Пример на практике:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;title&gt;Пример атрибутов&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1 id=\"main-title\" class=\"title\"&gt;Заголовок&lt;/h1&gt;\n    &lt;a href=\"https://example.com\" target=\"_blank\"&gt;Перейти на сайт&lt;/a&gt;\n    &lt;img src=\"image.jpg\" alt=\"Картинка\"&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><p>Атрибуты делают элементы гибкими и функциональными, что позволяет создавать сложные и интерактивные веб-страницы.</p>",
        "shortAnswer": "<p>Атрибут в HTML — это дополнительная информация, которая задает свойства элемента. Он указывается внутри открывающего тега в формате имя=\"значение\".&nbsp;</p><p>&nbsp;</p><p>Например, атрибут href в теге &lt;a&gt; задает ссылку, а src в &lt;img&gt; указывает путь к изображению. Атрибуты влияют на внешний вид или функциональность элементов, но их значения не видны на самой странице.</p><p>&nbsp;</p><p>Пример:</p><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;a href=\"https://example.com\"&gt;Перейти на сайт&lt;/a&gt;</code></p>",
        "status": "public",
        "rate": 1,
        "complexity": 1,
        "createdAt": "2024-10-06T06:51:00.293Z",
        "updatedAt": "2024-11-17T17:30:51.312Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 27,
                "title": "HTML",
                "description": "Разметка веб-страниц с использованием семантических тегов для улучшения SEO и доступности.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/6b8a29bc-ce64-4282-be53-d4e57ffdfad9",
                "createdAt": "2024-10-06T06:32:23.656Z",
                "updatedAt": "2025-03-10T16:25:37.483Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 20,
                        "title": "Java Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения на языке Java с использованием фреймворков, таких как Spring Framework",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T18:53:51.891Z",
                        "updatedAt": "2025-03-08T16:11:55.762Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 75,
        "title": "Для чего используется тег <link>?",
        "description": "Этот вопрос проверяет понимание назначения тега <link> в HTML.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "link"
        ],
        "longAnswer": "<p>Тег <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code> — это HTML-элемент, который позволяет подключать внешние ресурсы к веб-странице. Он используется только в секции <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;head&gt;</code> и не отображается на самой странице.</p><h4>&nbsp;</h4><h4>Основные атрибуты тега <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code>:</h4><p>&nbsp;</p><p><span style=\"color:#cccccc;\"><strong>• </strong></span><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>rel</strong></code> (relationship): указывает тип связи между текущим документом и подключаемым ресурсом.</p><p>&nbsp;</p><p><span style=\"color:#cccccc;\"><strong>• </strong></span><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>stylesheet</strong></code> — для подключения CSS-файлов.</p><p>&nbsp;</p><p><span style=\"color:#cccccc;\"><strong>• </strong></span><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>icon</strong></code><strong> </strong>— для указания фавикона.</p><p>&nbsp;</p><p><span style=\"color:#cccccc;\"><strong>• </strong></span><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>href</strong></code> (hyperlink reference): путь к подключаемому файлу. Это может быть относительный или абсолютный URL.</p><p>&nbsp;</p><p><span style=\"color:#cccccc;\"><strong>• </strong></span><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>type</strong></code> (опционально): MIME-тип ресурса, например, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">text/css</code>.</p><h4>&nbsp;</h4><h4>Примеры использования:</h4><p>&nbsp;</p><ol><li><strong>Подключение CSS-файла</strong>:</li><li><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;link rel=\"stylesheet\" href=\"styles.css\"&gt;</code></pre><p>Это наиболее распространенное использование тега <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code>. Он связывает внешний файл стилей с HTML-документом.</p></li><li>&nbsp;</li><li><strong>Указание фавикона</strong>:</li><li><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\"&gt;</code></pre><p>Этот тег указывает браузеру, какой значок показывать на вкладке страницы.</p></li><li>&nbsp;</li><li><strong>Подключение других ресурсов</strong>:<br>Например, подключение шрифтов:</li><li><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;link href=\"https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap\" rel=\"stylesheet\"&gt;</code></pre></li></ol><h4>&nbsp;</h4><h4>Полный пример:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n    &lt;title&gt;Пример с тегом link&lt;/title&gt;\n    &lt;link rel=\"stylesheet\" href=\"styles.css\"&gt;\n    &lt;link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\"&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Пример подключения ресурсов&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre><p>&nbsp;</p><p>Тег <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code> позволяет разделить структуру и стили веб-страницы. Это удобно для управления стилями (CSS) и улучшает производительность, поскольку браузеры могут кэшировать подключенные файлы. Например, при разработке сайта подключение шрифтов и CSS через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code> помогает быстро изменить внешний вид без изменения HTML.</p>",
        "shortAnswer": "<p>Тег <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;link&gt;</code> используется для подключения внешних ресурсов к HTML-документу. Чаще всего он применяется для подключения CSS-стилей. Тег располагается внутри секции <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;head&gt;</code> и не отображается на странице. Пример:</p><p>&nbsp;</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;link rel=\"stylesheet\" href=\"styles.css\"&gt;\n</code></pre><p>Этот код подключает файл стилей <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">styles.css</code> к странице.</p>",
        "status": "public",
        "rate": 1,
        "complexity": 3,
        "createdAt": "2024-10-06T06:49:48.647Z",
        "updatedAt": "2024-11-17T17:29:46.804Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 27,
                "title": "HTML",
                "description": "Разметка веб-страниц с использованием семантических тегов для улучшения SEO и доступности.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/6b8a29bc-ce64-4282-be53-d4e57ffdfad9",
                "createdAt": "2024-10-06T06:32:23.656Z",
                "updatedAt": "2025-03-10T16:25:37.483Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 20,
                        "title": "Java Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения на языке Java с использованием фреймворков, таких как Spring Framework",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T18:53:51.891Z",
                        "updatedAt": "2025-03-08T16:11:55.762Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 74,
        "title": "Что такое мета-теги?",
        "description": "Мета-теги (или мета-элементы) являются частью HTML-документа, которая содержит метаданные о документе. Они помогают браузерам, поисковым системам и другим инструментам интерпретировать содержимое веб-страницы.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "meta",
            "html"
        ],
        "longAnswer": "<p>Мета-теги (от слова \"метаинформация\") — это специальные теги, которые размещаются внутри секции <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;head&gt;</code> HTML-документа и предоставляют браузерам, поисковым системам и другим сервисам информацию о странице.</p><h4>&nbsp;</h4><h4>Основные виды мета-тегов:</h4><ol><li><p><strong>Кодировка</strong>:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta charset=\"UTF-8\"&gt;</code></pre><p>Этот тег задает кодировку символов, чтобы текст корректно отображался. UTF-8 поддерживает большинство языков и символов.</p></li><li><p>&nbsp;</p><p><strong>Адаптивность для мобильных устройств</strong>:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code></pre><p>Этот тег помогает странице адаптироваться к размерам экрана, особенно на мобильных устройствах.</p></li><li><p>&nbsp;</p><p><strong>Описание страницы</strong>:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta name=\"description\" content=\"Это описание страницы для поисковых систем.\"&gt;</code></pre><p>Используется для улучшения SEO (поисковой оптимизации). Поисковые системы часто отображают это описание в результатах поиска.</p></li><li><p>&nbsp;</p><p><strong>Ключевые слова</strong>:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta name=\"keywords\" content=\"HTML, мета-теги, фронтенд\"&gt;</code></pre><p>Сейчас используется редко, так как поисковики больше опираются на контент страницы.</p></li><li><p>&nbsp;</p><p><strong>Автор</strong>:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta name=\"author\" content=\"Имя автора\"&gt;</code></pre><p>Указывает автора страницы.</p></li><li><p>&nbsp;</p><p><strong>Социальные сети</strong>:<br>Например, для корректного отображения ссылки в соцсетях:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;meta property=\"og:title\" content=\"Название страницы\"&gt;\n&lt;meta property=\"og:description\" content=\"Описание для соцсетей\"&gt;\n&lt;meta property=\"og:image\" content=\"ссылка_на_изображение\"&gt;</code></pre><p>Эти теги используются Facebook, Twitter и другими платформами для формирования красивой карточки при публикации ссылки.</p></li></ol><h4>&nbsp;</h4><h4>Пример использования:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=\"UTF-8\"&gt;\n    &lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;\n    &lt;meta name=\"description\" content=\"Учебная страница о мета-тегах.\"&gt;\n    &lt;meta name=\"author\" content=\"Иван Иванов\"&gt;\n    &lt;title&gt;Мета-теги в HTML&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Пример использования мета-тегов&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</code></pre><h4>&nbsp;</h4><p><strong>SEO</strong>: Помогает поисковым системам лучше индексировать страницу.</p><p><strong>Мобильные устройства</strong>: Делает сайт удобным для просмотра на разных экранах.</p><p><strong>Социальные сети</strong>: Улучшает представление ссылки при её публикации.</p><p>&nbsp;</p><p>Мета-теги важны на всех этапах разработки: от создания лендингов до сложных веб-приложений.</p>",
        "shortAnswer": "<p>Мета-теги — это элементы в <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;head&gt;</code> HTML-документа, которые содержат метаинформацию, то есть данные о самой странице. Они не отображаются пользователю напрямую, но влияют на индексацию в поисковых системах, корректное отображение страницы и взаимодействие с социальными сетями.&nbsp;</p><p>&nbsp;</p><p>Например, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;meta charset=\"UTF-8\"&gt;</code> задает кодировку, а <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;meta name=\"description\" content=\"Описание страницы\"&gt;</code> предоставляет поисковикам описание страницы.</p>",
        "status": "public",
        "rate": 2,
        "complexity": 1,
        "createdAt": "2024-10-06T06:47:03.988Z",
        "updatedAt": "2024-11-17T17:27:44.373Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 27,
                "title": "HTML",
                "description": "Разметка веб-страниц с использованием семантических тегов для улучшения SEO и доступности.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/6b8a29bc-ce64-4282-be53-d4e57ffdfad9",
                "createdAt": "2024-10-06T06:32:23.656Z",
                "updatedAt": "2025-03-10T16:25:37.483Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 20,
                        "title": "Java Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения на языке Java с использованием фреймворков, таких как Spring Framework",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T18:53:51.891Z",
                        "updatedAt": "2025-03-08T16:11:55.762Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 86,
        "title": "Для чего нужен прототип?",
        "description": "Этот вопрос проверяет знание ключевой концепции прототипного наследования в JavaScript.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "proto",
            "прототип"
        ],
        "longAnswer": "<p>В JavaScript объекты могут наследовать свойства и методы от других объектов. Этот процесс происходит через механизм, называемый <strong>прототипным наследованием</strong>. Прототип — это объект, связанный с другим объектом через скрытое свойство <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">[[Prototype]]</code> (или <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">__proto__</code> в старых браузерах).</p><h4>&nbsp;</h4><h4>Как работает прототипное наследование?</h4><p>&nbsp;</p><p>Когда вы обращаетесь к свойству объекта:</p><p>- JavaScript сначала ищет его в самом объекте.</p><p>- Если свойство не найдено, поиск продолжается в его прототипе.</p><p>- Если свойство есть в прототипе, оно используется.</p><h4>&nbsp;</h4><h4>Пример:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const animal = {\n  eats: true,\n  walk() {\n    console.log(\"Гуляет\");\n  }\n};\n\nconst dog = Object.create(animal); // Создаём объект dog с прототипом animal\ndog.barks = true;\n\nconsole.log(dog.eats); // true (унаследовано от animal)\ndog.walk();           // \"Гуляет\" (метод из прототипа animal)\nconsole.log(dog.barks); // true (собственное свойство dog)</code></pre><h4>&nbsp;</h4><h4>Почему прототип важен?</h4><p><strong>- Экономия памяти</strong>: Общие методы и свойства хранятся в одном объекте (прототипе), а не копируются для каждого экземпляра.</p><p><strong>- Расширяемость</strong>: Можно добавлять новые методы в прототип, и они сразу станут доступны всем объектам, которые наследуют этот прототип.</p><h4>&nbsp;</h4><h4>Создание прототипов</h4><p>&nbsp;</p><p><strong>Через </strong><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>Object.create()</strong></code><br>Вы явно указываете, какой объект будет прототипом.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const animal = { eats: true };\nconst rabbit = Object.create(animal);\nconsole.log(rabbit.eats); // true</code></pre><p><strong>Через функции-конструкторы</strong><br>Функции-конструкторы автоматически связывают созданный объект с прототипом через свойство <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">prototype</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function Animal(name) {\n  this.name = name;\n}\nAnimal.prototype.eats = true;\n\nconst dog = new Animal(\"Собака\");\nconsole.log(dog.eats); // true</code></pre><p><strong>Через классы</strong><br>Классы в JavaScript — это удобная обёртка над прототипным наследованием.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  walk() {\n    console.log(`${this.name} гуляет`);\n  }\n}\n\nconst cat = new Animal(\"Кошка\");\ncat.walk(); // \"Кошка гуляет\"</code></pre><h4>&nbsp;</h4><h4>Пример поиска свойства в цепочке прототипов:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const grandparent = { heritage: \"ancient\" };\nconst parent = Object.create(grandparent);\nparent.legacy = \"modern\";\n\nconst child = Object.create(parent);\nconsole.log(child.heritage); // \"ancient\" (из grandparent)\nconsole.log(child.legacy);   // \"modern\" (из parent)</code></pre><h4>Практическое применение</h4><p>&nbsp;</p><p>Прототипы часто используются для создания иерархий объектов, например:</p><p>- В веб-разработке — методы <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">Array</code> или <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">Object</code> (например, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">push</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">map</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">toString</code>) определены в их прототипах.</p><p>- В больших приложениях — для наследования общих функций между объектами.</p><h4>&nbsp;</h4><p>Прототип — это основа системы наследования в JavaScript, которая позволяет создавать гибкие и экономичные структуры объектов. Знание этой концепции помогает глубже понять, как работают встроенные объекты и классы в JavaScript.</p>",
        "shortAnswer": "<p>Прототип — это объект, от которого другой объект может наследовать свойства и методы. В JavaScript каждый объект имеет скрытое свойство <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">[[Prototype]]</code>, которое указывает на его прототип. Это позволяет организовать наследование, чтобы не дублировать код и переиспользовать общие методы. Например, если метод не найден в объекте, JavaScript ищет его в прототипе.</p><p>&nbsp;</p><p>Пример:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const animal = { eats: true };\nconst dog = Object.create(animal);\nconsole.log(dog.eats); // true</code></pre>",
        "status": "public",
        "rate": 3,
        "complexity": 7,
        "createdAt": "2024-10-06T07:11:18.592Z",
        "updatedAt": "2025-01-13T21:48:45.313Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"31f454ef-aa68-4691-b111-9483a5fe8cfc\",\"firstName\":\"Никита\",\"lastName\":\"Колымажнов\"}",
        "questionSpecializations": [
            {
                "id": 21,
                "title": "Node.js Backend Developer",
                "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                "imageSrc": null,
                "createdAt": "2024-12-07T19:06:16.704Z",
                "updatedAt": "2025-03-08T16:37:48.063Z"
            },
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 2,
                "title": "JavaScript",
                "description": "JavaScript - популярный язык программирования, в основном используемый для создания динамических и интерактивных веб-страниц. Он необходим для разработки интерфейсов веб-приложений.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/3ded3210-32fa-4063-9b8f-a5e8f353a1c4",
                "createdAt": "2024-06-04T13:40:16.610Z",
                "updatedAt": "2025-03-10T17:16:46.190Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 21,
                        "title": "Node.js Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T19:06:16.704Z",
                        "updatedAt": "2025-03-08T16:37:48.063Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 85,
        "title": "Расскажите про this и контекст",
        "description": "Этот вопрос проверяет понимание ключевого понятия JavaScript — this и его поведения в различных ситуациях",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "this",
            "контекст"
        ],
        "longAnswer": "<p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> — это специальное ключевое слово в JavaScript, которое определяет, на какой объект ссылается текущий код. Его значение устанавливается в момент вызова функции, а не в момент её определения, что иногда вызывает путаницу.</p><h4>&nbsp;</h4><h4>Как работает <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code>:</h4><ol><li><p><strong>Внутри методов объекта</strong>:<br>Если функция вызвана как метод объекта, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> указывает на этот объект.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const obj = {\n  name: \"Анна\",\n  greet() {\n    console.log(`Привет, ${this.name}!`);\n  },\n};\nobj.greet(); // Привет, Анна!</code></pre></li><li><p>&nbsp;</p><p><strong>В обычных функциях</strong>:</p><p>Если функция вызвана в глобальном контексте (вне строгого режима), <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> ссылается на глобальный объект (<code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">window</code> в браузере, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">global</code> в Node.js).</p><p>В строгом режиме (<code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">'use strict'</code>) <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> будет <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">undefined</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function showThis() {\n  console.log(this);\n}\nshowThis(); // В браузере: window, в строгом режиме: undefined</code></pre></li><li><p><strong>В конструкторах</strong>:<br>В функциях-конструкторах <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> указывает на создаваемый объект.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function Person(name) {\n  this.name = name;\n}\nconst user = new Person(\"Иван\");\nconsole.log(user.name); // Иван</code></pre><p><strong>В стрелочных функциях</strong>:<br>В стрелочных функциях <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> наследуется из внешнего контекста, где функция была определена.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const obj = {\n  name: \"Петр\",\n  greet: () =&gt; {\n    console.log(this.name);\n  },\n};\nobj.greet(); // undefined, так как this у стрелочной функции берётся из глобального контекста</code></pre></li></ol><h4>&nbsp;</h4><h4>Примеры использования и проблем:</h4><ol><li><p><strong>Потеря контекста</strong>:<br>При передаче метода объекта в переменную или функцию <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> теряет связь с объектом.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const obj = {\n  name: \"Сергей\",\n  greet() {\n    console.log(this.name);\n  },\n};\nconst greet = obj.greet;\ngreet(); // undefined</code></pre><p><strong>Решение</strong>: Использовать <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">bind</code>, стрелочные функции или методы, такие как <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">.call()</code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">.apply()</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const boundGreet = obj.greet.bind(obj);\nboundGreet(); // Сергей</code></pre></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>this</strong></code><strong> в обработчиках событий</strong>:<br>В обработчиках событий <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> ссылается на элемент, к которому привязан обработчик.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", function () {\n  console.log(this); // Кнопка, на которую нажали\n});</code></pre></li><li><p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>this</strong></code><strong> в классах</strong>:<br>В методах классов <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> указывает на экземпляр класса.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">class User {\n  constructor(name) {\n    this.name = name;\n  }\n  greet() {\n    console.log(`Привет, ${this.name}!`);\n  }\n}\nconst user = new User(\"Мария\");\nuser.greet(); // Привет, Мария!</code></pre></li></ol><h4>&nbsp;</h4><h4>Заключение</h4><p>Понимание <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> помогает избежать типичных ошибок в JavaScript и правильно работать с объектами, функциями и методами. Использование стрелочных функций, строгого режима и привязки контекста (<code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">bind</code>) делает работу с <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> более предсказуемой.</p>",
        "shortAnswer": "<p><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> в JavaScript — это ключевое слово, которое ссылается на текущий контекст выполнения. Контекст зависит от того, где и как используется <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code>:</p><p>&nbsp;</p><p>- В методе объекта <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> указывает на этот объект.</p><p>- В функции <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> по умолчанию указывает на глобальный объект (в строгом режиме — <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">undefined</code>).</p><p>- В стрелочных функциях <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">this</code> наследуется из внешнего контекста.</p><p>&nbsp;</p><p>Пример:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const obj = {\n  name: \"Иван\",\n  greet() {\n    console.log(`Привет, ${this.name}!`);\n  },\n};\nobj.greet(); // Привет, Иван!</code></pre>",
        "status": "public",
        "rate": 4,
        "complexity": 6,
        "createdAt": "2024-10-06T07:10:27.109Z",
        "updatedAt": "2025-01-10T06:31:59.917Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "questionSpecializations": [
            {
                "id": 21,
                "title": "Node.js Backend Developer",
                "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                "imageSrc": null,
                "createdAt": "2024-12-07T19:06:16.704Z",
                "updatedAt": "2025-03-08T16:37:48.063Z"
            },
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 2,
                "title": "JavaScript",
                "description": "JavaScript - популярный язык программирования, в основном используемый для создания динамических и интерактивных веб-страниц. Он необходим для разработки интерфейсов веб-приложений.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/3ded3210-32fa-4063-9b8f-a5e8f353a1c4",
                "createdAt": "2024-06-04T13:40:16.610Z",
                "updatedAt": "2025-03-10T17:16:46.190Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 21,
                        "title": "Node.js Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T19:06:16.704Z",
                        "updatedAt": "2025-03-08T16:37:48.063Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 84,
        "title": "Для чего нужны функции?",
        "description": "Этот вопрос проверяет понимание назначения функций в программировании.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "функция"
        ],
        "longAnswer": "<p>Функция в программировании — это именованный блок кода, который выполняет определённую задачу. Функции помогают сделать код более удобным, структурированным и легко поддерживаемым.</p><h4>&nbsp;</h4><h4>Зачем нужны функции:</h4><p><strong>- Повторное использование</strong>: Однажды написанный код функции можно вызывать множество раз.</p><p><strong>- Читаемость</strong>: Функции делят программу на логические части, что упрощает понимание кода.</p><p><strong>- Модульность</strong>: Программа становится более организованной и легче масштабируется.</p><p><strong>- Устранение дублирования</strong>: Общие задачи можно выделить в функции, чтобы не писать их повторно.</p><h4>&nbsp;</h4><h4>Как работают функции:</h4><p><strong>- Объявление функции</strong>: Указывается её имя, параметры (если нужны) и блок выполняемого кода.</p><p><strong>- Вызов функции</strong>: Код внутри функции выполняется при вызове.</p><p>&nbsp;</p><p>Пример на JavaScript:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">// Объявление функции\nfunction sum(a, b) {\n  return a + b;\n}\n\n// Вызов функции\nconst result = sum(3, 5);\nconsole.log(result); // Выведет: 8</code></pre><h4>&nbsp;</h4><h4>Типы функций:</h4><ol><li><p><strong>С параметрами</strong>: Принимают входные данные (аргументы) для выполнения задачи.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function greet(name) {\n  return `Привет, ${name}!`;\n}\nconsole.log(greet(\"Анна\")); // Привет, Анна!</code></pre></li><li><p><strong>Без параметров</strong>: Выполняют задачу, не требующую входных данных.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function sayHello() {\n  console.log(\"Привет, мир!\");\n}\nsayHello();</code></pre></li><li><p>&nbsp;</p><p><strong>Функции с возвратом результата</strong>: Используют <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">return</code> для возврата значения.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function square(num) {\n  return num * num;\n}\nconsole.log(square(4)); // 16</code></pre></li><li><p>&nbsp;</p><p><strong>Анонимные функции</strong>: Не имеют имени, часто используются в качестве аргументов или в колбэках.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">const multiply = function(a, b) {\n  return a * b;\n};\nconsole.log(multiply(2, 3)); // 6</code></pre></li></ol><h4>&nbsp;</h4><h4>Пример практического использования:</h4><p>Вы создаёте сайт, где нужно рассчитать скидку для покупателя:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function calculateDiscount(price, discount) {\n  return price - (price * discount) / 100;\n}\n\nconst finalPrice = calculateDiscount(1000, 20);\nconsole.log(`Итоговая цена: ${finalPrice} руб.`); // Итоговая цена: 800 руб.</code></pre><h4>Практическая польза:</h4><p>Функции делают ваш код гибким и понятным. Если логика расчёта скидки изменится, нужно будет обновить только функцию, а не весь код сайта. Они являются базовым строительным блоком любого приложения.</p>",
        "shortAnswer": "<p>Функции — это блоки кода, которые выполняют определённую задачу. Они помогают избежать дублирования кода, упрощают его обслуживание и делают программу более понятной. Функция может принимать данные (параметры) и возвращать результат. Например:</p><p>&nbsp;</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-javascript\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">function greet(name) {\n  return `Привет, ${name}!`;\n}\nconsole.log(greet(\"Иван\")); // Выведет: Привет, Иван!</code></pre>",
        "status": "public",
        "rate": 2,
        "complexity": 2,
        "createdAt": "2024-10-06T07:07:55.413Z",
        "updatedAt": "2025-01-13T21:48:56.424Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"31f454ef-aa68-4691-b111-9483a5fe8cfc\",\"firstName\":\"Никита\",\"lastName\":\"Колымажнов\"}",
        "questionSpecializations": [
            {
                "id": 21,
                "title": "Node.js Backend Developer",
                "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                "imageSrc": null,
                "createdAt": "2024-12-07T19:06:16.704Z",
                "updatedAt": "2025-03-08T16:37:48.063Z"
            },
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 2,
                "title": "JavaScript",
                "description": "JavaScript - популярный язык программирования, в основном используемый для создания динамических и интерактивных веб-страниц. Он необходим для разработки интерфейсов веб-приложений.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/3ded3210-32fa-4063-9b8f-a5e8f353a1c4",
                "createdAt": "2024-06-04T13:40:16.610Z",
                "updatedAt": "2025-03-10T17:16:46.190Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    },
                    {
                        "id": 21,
                        "title": "Node.js Backend Developer",
                        "description": "Это специалист, который разрабатывает серверные приложения и сервисы с использованием платформы Node.js.",
                        "imageSrc": null,
                        "createdAt": "2024-12-07T19:06:16.704Z",
                        "updatedAt": "2025-03-08T16:37:48.063Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 80,
        "title": "В чем разница между display: none и visibility: hidden?",
        "description": "Понимание этих различий важно для правильного управления видимостью элементов на веб-странице.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "display",
            "visability",
            "hidden"
        ],
        "longAnswer": "<p>В CSS свойства <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>display</strong></code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>visibility</strong></code> управляют видимостью элементов, но делают это по-разному.</p><p>&nbsp;</p><ol><li><p><strong>•&nbsp;</strong><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>display: none</strong></code>:</p><p>&nbsp;</p></li><li><p>Когда применяется display: none, элемент полностью удаляется из потока документа. Это значит, что он не занимает пространство, и другие элементы на странице будут вести себя так, как если бы этого элемента не существовало.</p><p>Элемент не будет взаимодействовать с пользователем и не будет видимым.</p><p>&nbsp;</p><p>Это свойство часто используется для динамически скрытых элементов (например, в модальных окнах или выпадающих меню), где элемент полностью исчезает и не влияет на макет страницы.</p><p>&nbsp;</p></li><li><p><strong>• </strong><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>visibility: hidden</strong></code>:</p><p>&nbsp;</p><p>Когда применяется visibility: hidden, элемент всё ещё остаётся в документе, но становится невидимым для пользователя. Он сохраняет своё место в макете, то есть другие элементы не сдвигаются и не изменяют своё положение.</p><p>&nbsp;</p><p>Элемент по-прежнему может занимать пространство, и его можно будет снова показать с помощью visibility: visible.</p><p>&nbsp;</p></li></ol><p>Используйте <strong>display: none</strong> для полного удаления элемента, если вы не хотите, чтобы он занимал пространство, и <strong>visibility: hidden</strong> — когда нужно скрыть элемент, но оставить его место в макете.</p>",
        "shortAnswer": "<p><strong>• </strong><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>display: none</strong></code> полностью удаляет элемент с веб-страницы, как если бы его не существовало. Он не занимает места в макете, и элементы после него сдвигаются, чтобы занять его пространство.</p><p>&nbsp;</p><p><strong>• </strong><code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><strong>visibility: hidden</strong></code> скрывает элемент, но оставляет его место на странице. Элемент всё ещё занимает пространство в макете, но не виден пользователю.</p>",
        "status": "public",
        "rate": 2,
        "complexity": 4,
        "createdAt": "2024-10-06T06:57:47.136Z",
        "updatedAt": "2024-11-17T17:33:32.949Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 28,
                "title": "CSS",
                "description": "Стилейзация интерфейсов, включая адаптивную верстку и оптимизацию для различных устройств с использованием Flexbox и Grid.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/0bdb1f3b-b6f8-43df-b170-10b711e794d5",
                "createdAt": "2024-10-06T06:32:44.139Z",
                "updatedAt": "2025-01-18T19:48:30.013Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 79,
        "title": "Можете объяснить концепцию CSS box model (блочная модель)?",
        "description": "Это важная концепция для работы с макетами и стилями в CSS.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "box model",
            "padding",
            "margin",
            "border"
        ],
        "longAnswer": "<p>CSS box model (блочная модель) — это основа для понимания, как браузер вычисляет размеры и расположение элементов на веб-странице. Каждый элемент HTML воспринимается как прямоугольник, который делится на четыре области:</p><p>&nbsp;</p><p><strong>• Content</strong> (Контент) — это фактическое содержимое элемента, например, текст, изображения или другие вложенные элементы. Это основная часть, чьи размеры можно задать через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">width</code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">height</code>.</p><p>&nbsp;</p><p><strong>• Padding</strong> (Внутренний отступ) — пространство между содержимым элемента и его границей. Padding добавляется внутри элемента, и его можно настроить с помощью свойств <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">padding-top</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">padding-right</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">padding-bottom</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">padding-left</code>.</p><p>&nbsp;</p><p><strong>• Border</strong> (Граница) — рамка вокруг контента и padding. Размеры границы можно задать через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">border-width</code>, а стиль и цвет через <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">border-style</code> и <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">border-color</code>.</p><p>&nbsp;</p><p><strong>• Margin</strong> (Внешний отступ) — пространство между элементом и его соседями. Margin управляет расстоянием между элементами, но не влияет на размеры самого элемента. Этот отступ можно настроить через свойства <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">margin-top</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">margin-right</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">margin-bottom</code>, <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">margin-left</code>.</p><p>&nbsp;</p><p>При вычислении общих размеров элемента браузер складывает ширину контента, padding, border и margin. Например, если у вас есть элемент с шириной контента 200px, padding 20px, border 5px и margin 10px, то общая ширина элемента будет составлять 200px (content) + 20px (padding слева) + 20px (padding справа) + 5px (border слева) + 5px (border справа) = 250px. Margin влияет на расположение элемента, но не входит в его размеры.</p><p>&nbsp;</p><p>Для управления размерами элементов, включая padding и border, часто используется свойство <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">box-sizing: border-box;</code>. Это делает так, что размеры элемента уже включают padding и border, что упрощает работу с макетами.</p><p>&nbsp;</p><p>Пример:</p><p>&nbsp;</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">div {\n  width: 200px;      /* content width */\n  padding: 20px;     /* padding around content */\n  border: 5px solid black; /* border around padding */\n  margin: 10px;      /* margin outside border */\n}</code></pre><p>&nbsp;</p><p>Использование правильного понимания и настройки box model позволяет легко управлять позиционированием и расстоянием между элементами на странице.</p>",
        "shortAnswer": "<p>CSS box model - это основной концепт в CSS, описывающий как элементы на веб-странице представлены в виде прямоугольных блоков, состоящих из контента, отступов, границ и внутренних полей.</p>",
        "status": "public",
        "rate": 2,
        "complexity": 3,
        "createdAt": "2024-10-06T06:55:05.437Z",
        "updatedAt": "2024-11-17T17:32:39.604Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 28,
                "title": "CSS",
                "description": "Стилейзация интерфейсов, включая адаптивную верстку и оптимизацию для различных устройств с использованием Flexbox и Grid.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/0bdb1f3b-b6f8-43df-b170-10b711e794d5",
                "createdAt": "2024-10-06T06:32:44.139Z",
                "updatedAt": "2025-01-18T19:48:30.013Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    }
                ]
            }
        ]
    },
    {
        "id": 78,
        "title": "Что такое специфичность в CSS?",
        "description": "Этот вопрос проверяет понимание механизма, с помощью которого CSS решает, какие стили применять к элементу, если на него воздействуют разные правила.",
        "code": null,
        "imageSrc": null,
        "keywords": [
            "selector",
            "специфичность"
        ],
        "longAnswer": "<p>Специфичность — это числовое значение, которое CSS использует для определения приоритета правил, если они конфликтуют при применении к одному элементу.</p><h4>&nbsp;</h4><h4>Как рассчитывается специфичность:</h4><p>Каждое правило имеет \"вес\", который зависит от типов селекторов:</p><p>&nbsp;</p><p><strong>Инлайн-стили</strong>: Самые приоритетные, специфичность <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">1000</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;div style=\"color: red;\"&gt;Текст&lt;/div&gt;</code></pre><p>&nbsp;</p><p><strong>ID-селекторы</strong>: Один ID добавляет <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">100</code> к специфичности.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">#main { color: blue; }</code></pre><p>&nbsp;</p><p><strong>Классы, атрибуты, псевдоклассы</strong>: Каждый добавляет <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">10</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">.highlight { color: green; }\n[type=\"text\"] { color: gray; }</code></pre><p>&nbsp;</p><p><strong>Тег-селекторы и псевдоэлементы</strong>: Каждый добавляет <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">1</code>.</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">p { color: black; }</code></pre><p>Универсальный селектор (<code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">*</code>) и каскадность имеют специфичность <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">0</code>.</p><h4>&nbsp;</h4><h4>Пример расчета:</h4><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">/* Специфичность: 0-0-1 (только тег) */\ndiv { color: black; } \n\n/* Специфичность: 0-0-10 (только класс) */\n.class { color: green; } \n\n/* Специфичность: 0-1-0 (ID-селектор) */\n#id { color: blue; } </code></pre><p>&nbsp;</p><p>Если все три правила применяются к одному элементу <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">&lt;div id=\"id\" class=\"class\"&gt;</code>, то итоговый цвет будет <strong>синий</strong>, так как ID-селектор самый специфичный.</p><h4>&nbsp;</h4><h4>Влияние каскада и специфичности:</h4><p>- Если два правила имеют одинаковую специфичность, побеждает то, которое указано последним в CSS-файле.</p><p>- <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">!important</code> может переопределить любое правило, но его следует использовать с осторожностью.</p><h4>&nbsp;</h4><h4>Полный пример:</h4><p>HTML:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-html\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">&lt;div id=\"main\" class=\"highlight\"&gt;Текст&lt;/div&gt;</code></pre><p>&nbsp;</p><p>CSS:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">div { color: black; } /* специфичность: 0-0-1 */\n.highlight { color: green; } /* специфичность: 0-0-10 */\n#main { color: blue; } /* специфичность: 0-1-0 */</code></pre><p>Результат: текст станет <strong>синим</strong>, так как стиль <code style=\"border-radius: 12px; padding: 1.5px 5px; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\">#main</code> имеет наибольшую специфичность.</p><h4>&nbsp;</h4><h4>Практическое применение:</h4><p>Специфичность помогает разработчикам понять, почему один стиль переопределяет другой. Это особенно важно при работе с большими проектами, где множество CSS-правил могут пересекаться. Чтобы избежать путаницы, рекомендуется использовать понятную структуру селекторов и избегать чрезмерно сложных комбинаций.</p>",
        "shortAnswer": "<p>Специфичность в CSS — это способ определения приоритета CSS-правил, когда к одному элементу применяются несколько конфликтующих стилей. Она рассчитывается на основе количества селекторов разных типов в правиле:</p><p>&nbsp;</p><p><strong>- Инлайн-стили</strong> (например, style=\"color: red;\") имеют наивысший приоритет.</p><p><strong>- ID-селекторы</strong> (#id) более специфичны, чем классы (.class) или теги (div).</p><p>- Универсальные селекторы (*) и каскадность имеют минимальный приоритет.</p><p>&nbsp;</p><p>Например:</p><pre style=\"border-radius: 12px; border: 1px solid #FDF4FF; padding: 20px; margin: 20px 0; background: linear-gradient(180deg, #FFFFFF 0%, #E8DAFF 100%);\"><code class=\"language-css\" style=\"border-radius: 12px; border: none; padding: 0; background: none;\">#id { color: blue; } /* более специфично, чем */\n.class { color: green; }</code></pre>",
        "status": "public",
        "rate": 3,
        "complexity": 3,
        "createdAt": "2024-10-06T06:54:04.361Z",
        "updatedAt": "2024-11-17T17:32:15.809Z",
        "createdBy": "{\"userId\":\"0a1438a3-1776-43b4-9a95-e60ee6573903\",\"firstName\":\"Руслан\",\"lastName\":\"Куянец\"}",
        "updatedBy": "{\"userId\":\"bc475b16-8d73-4dd1-9cb9-5214feca6eae\",\"firstName\":\"Дарья\",\"lastName\":\"Крутова\"}",
        "questionSpecializations": [
            {
                "id": 11,
                "title": "React Frontend Developer",
                "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                "imageSrc": null,
                "createdAt": "2024-10-03T09:08:10.605Z",
                "updatedAt": "2024-12-13T15:29:16.935Z"
            }
        ],
        "questionSkills": [
            {
                "id": 28,
                "title": "CSS",
                "description": "Стилейзация интерфейсов, включая адаптивную верстку и оптимизацию для различных устройств с использованием Flexbox и Grid.",
                "imageSrc": "https://e5e684b1-4a6a-4be5-b7ee-b2b678239d61.selstorage.ru/skill/0bdb1f3b-b6f8-43df-b170-10b711e794d5",
                "createdAt": "2024-10-06T06:32:44.139Z",
                "updatedAt": "2025-01-18T19:48:30.013Z",
                "specializations": [
                    {
                        "id": 11,
                        "title": "React Frontend Developer",
                        "description": "React-разработчик — это инженер-программист или веб-разработчик, который занимается фронтендом или дизайном пользовательских интерфейсов, используя библиотеку React",
                        "imageSrc": null,
                        "createdAt": "2024-10-03T09:08:10.605Z",
                        "updatedAt": "2024-12-13T15:29:16.935Z"
                    }
                ]
            }
        ]
    }
]