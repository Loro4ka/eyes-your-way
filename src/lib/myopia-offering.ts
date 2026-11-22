export const spectacleCatalogUrl = "https://optika100.com/catalog_s/linzy_dlya_ochkov/?lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&expand=lensType";
export const contactCatalogUrl = "https://optika100.com/catalog_s/kontaktnye_linzy_/dlya_kontrolya_miopii/";

export const spectacleLenses = [
  { manufacturer: "Essilor", model: "Stellest", catalogUrl: "https://optika100.com/catalog_s/linzy_dlya_ochkov/?expand=lensType&lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&technology=Stellest", slug: "stellest", price: "от 20 600 ₽ за пару", technology: "H.A.L.T.", description: "Центральная зона корректирует близорукость, а окружающие её асферические микролинзы создают оптический сигнал для контроля прогрессирования миопии.", note: "Выбор оправы и точная центровка — часть подбора." },
  { manufacturer: "Essilor", model: "Myopilux Plus", catalogUrl: "https://optika100.com/catalog_s/linzy_dlya_ochkov/?expand=lensType&lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&brand=ESSILOR", slug: "myopilux-plus", price: "от 18 700 ₽ за пару", technology: "Поддержка зрения вблизи", description: "Детские линзы с дополнительной оптической силой для близи. Применение обсуждается с врачом с учётом аккомодации и совместной работы глаз.", note: "Не аналог Stellest: другой дизайн и показания." },
  { manufacturer: "ZEISS", model: "MyoCare", catalogUrl: "https://optika100.com/catalog_s/linzy_dlya_ochkov/?expand=lensType&lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&brand=ZEISS", slug: "myocare", price: "от 16 800 ₽ за пару", technology: "C.A.R.E.", description: "Очковые линзы с центральной зоной коррекции и кольцевыми оптическими элементами для контроля миопии у детей.", note: "Подходящий вариант линзы определяет специалист." },
  { manufacturer: "Hoya", model: "MiYOSMART", catalogUrl: "https://optika100.com/catalog_s/linzy_dlya_ochkov/?expand=lensType&lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&technology=MiYOSMART", slug: "miyosmart", price: "от 19 900 ₽ за пару", technology: "D.I.M.S.", description: "Центральная зона обеспечивает коррекцию зрения, а многочисленные сегменты вокруг неё формируют миопический дефокус.", note: "Необходимы правильная посадка очков и соблюдение режима ношения." },
] as const;

export const contactLenses = [
  { manufacturer: "Cooper Vision", model: "MiSight", catalogUrl: "https://optika100.com/catalog_s/kontaktnye_linzy_/dlya_kontrolya_miopii/misight_1_day_30sht_/", slug: "misight", price: "от 3 200 ₽ (30 шт.)", technology: "Двухфокусный дизайн", description: "Мягкие однодневные контактные линзы с зонами коррекции зрения и зонами миопического дефокуса.", note: "Новая пара каждый день; подбор и обучение у специалиста." },
  { manufacturer: "Seed", model: "SEED 1 DAY Pure EDOF", catalogUrl: "https://optika100.com/catalog_s/kontaktnye_linzy_/dlya_kontrolya_miopii/seed_1_day_pure_edof_32sht_1/", slug: "seed-1-day-pure-edof", price: "от 2 400 ₽ (32 шт.)", technology: "EDOF", description: "Однодневные контактные линзы с расширенной глубиной фокуса. Возможность применения для конкретного ребёнка оценивает врач.", note: "Не требуют хранения и очистки: после снятия линзы утилизируют." },
  { manufacturer: "OKVision", model: "Prima Bio Bi-focal", catalogUrl: "https://optika100.com/catalog_s/kontaktnye_linzy_/dlya_kontrolya_miopii/prima_bio_bi_focal_6sht_/", slug: "prima-bio-bi-focal", price: "от 4 900 ₽ (6 шт.)", technology: "Бифокальный дизайн", description: "Мягкие бифокальные контактные линзы. Параметры, режим замены и применимость для контроля миопии уточняются при подборе.", note: "Уход и сроки замены — по инструкции к выбранной линзе." },
] as const;

export const childServices = [
  { name: "Приём детского врача", description: "Оценка зрения, рефракции и состояния глаз, анализ предыдущих рецептов и выбор индивидуальной тактики контроля миопии." },
  { name: "Биометрия Lenstar LS 900", origin: "Швейцария", description: "Бесконтактное оптическое измерение параметров глаза, включая его осевую длину. Сравнение повторных измерений помогает врачу отслеживать динамику роста глаза." },
] as const;

export const biometryService = {
  name: "Биометрия Lenstar LS 900",
  device: "Lenstar LS 900",
  origin: "Швейцария",
  slug: "biometriya-lenstar",
  lead: "Бесконтактное оптическое измерение параметров глаза. Главное для контроля миопии — осевая длина: по её изменению врач видит, как растёт глаз.",
  measures: [
    { name: "Осевая длина глаза", text: "Расстояние от передней поверхности глаза до заднего отдела. При прогрессировании миопии глаз обычно удлиняется." },
    { name: "Радиусы кривизны роговицы", text: "Крутизна роговицы по двум меридианам — учитывается при подборе очковых и контактных линз." },
    { name: "Диаметр роговицы и «белок — белок»", text: "Горизонтальные размеры глаза — влияют на посадку очков и подбор контактных линз." },
    { name: "Глубина передней камеры", text: "Расстояние от роговицы до хрусталика — параметр состояния глаза." },
    { name: "Толщина роговицы", text: "Помогает оценить состояние роговицы и корректно прочитать остальные измерения." },
    { name: "Диаметр зрачка", text: "Измеряется при разном освещении — учитывается при выборе многофокусных дизайнов." },
  ],
  steps: [
    { title: "Без касания глаза", text: "Прибор работает на оптическом измерении: датчик не соприкасается с глазом, анестезирующие капли не нужны." },
    { title: "Нужно смотреть на метку", text: "Ребёнку следует удерживать взгляд на внутренней fixation-метке. Измерение занимает несколько минут на оба глаза." },
    { title: "Несколько повторных измерений", text: "Прибор делает серию замеров и усредняет их, чтобы снизить влияние моргания и неверного фиксации взгляда." },
    { title: "Результат в карту наблюдения", text: "Измерения сохраняют, чтобы сравнить с предыдущими и оценить динамику роста глаза." },
  ],
  why: [
    { title: "Объективная метрика", text: "Осевая длина не зависит от слов ребёнка и от усталости в конце дня — её можно сравнить с прошлым визитом." },
    { title: "Рост глаза виден раньше", text: "Изменение осевой длины опережает заметное падение зрения, поэтому динамику можно заметить вовремя." },
    { title: "Помогает оценить выбранную тактику", text: "Врач сопоставляет измерение с рефракцией, возрастом и образом жизни ребёнка и обсуждает с родителями дальнейшие шаги." },
  ],
  frequency: "Частоту осмотров назначает врач индивидуально. Часто биометрию повторяют примерно раз в шесть месяцев, а после первичного подбора — раньше. При боли, покраснении или внезапном ухудшении зрения обращайтесь за помощью без ожидания планового визита.",
  disclaimer: "Биометрия — это измерение, а не лечение. Она не излечивает миопию и не гарантирует остановку её прогрессирования. Состав обследования и необходимость дополнительных процедур определяет врач.",
  note: "Прибор выдаёт набор параметров; в протокол конкретного обследования входят не все они — что измерять и как интерпретировать, решает врач.",
} as const;

export const myopiaClinic = { address: "Санкт-Петербург, ул. Кирочная, 17", metro: "м. Чернышевская", hours: "Ежедневно 10:00–20:00", phone: "8-800-700-0214", phoneHref: "tel:88007000214" } as const;
export const myopiaProductPages = [
  ...spectacleLenses.filter((l) => l.slug !== "stellest").map((l) => ({ ...l, kind: "Линзы для очков" })),
  ...contactLenses.map((l) => ({ ...l, kind: "Контактные линзы" })),
];
