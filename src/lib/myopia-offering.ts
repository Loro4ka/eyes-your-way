export const spectacleCatalogUrl = "https://optika100.com/catalog_s/linzy_dlya_ochkov/?lensType=%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8C+%D0%BC%D0%B8%D0%BE%D0%BF%D0%B8%D0%B8&expand=lensType";
export const contactCatalogUrl = "https://optika100.com/catalog_s/kontaktnye_linzy_/dlya_kontrolya_miopii/";

export const spectacleLenses = [
  { manufacturer: "Essilor", model: "Stellest", technology: "H.A.L.T.", description: "Центральная зона корректирует близорукость, а окружающие её асферические микролинзы создают оптический сигнал для контроля прогрессирования миопии.", note: "Выбор оправы и точная центровка — часть подбора." },
  { manufacturer: "Essilor", model: "Myopilux Plus", technology: "Поддержка зрения вблизи", description: "Детские линзы с дополнительной оптической силой для близи. Применение обсуждается с врачом с учётом аккомодации и совместной работы глаз.", note: "Не аналог Stellest: другой дизайн и показания." },
  { manufacturer: "ZEISS", model: "MyoCare", technology: "C.A.R.E.", description: "Очковые линзы с центральной зоной коррекции и кольцевыми оптическими элементами для контроля миопии у детей.", note: "Подходящий вариант линзы определяет специалист." },
  { manufacturer: "Hoya", model: "MiYOSMART", technology: "D.I.M.S.", description: "Центральная зона обеспечивает коррекцию зрения, а многочисленные сегменты вокруг неё формируют миопический дефокус.", note: "Необходимы правильная посадка очков и соблюдение режима ношения." },
] as const;

export const contactLenses = [
  { manufacturer: "Cooper Vision", model: "MiSight", technology: "Двухфокусный дизайн", description: "Мягкие однодневные контактные линзы с зонами коррекции зрения и зонами миопического дефокуса.", note: "Новая пара каждый день; подбор и обучение у специалиста." },
  { manufacturer: "Seed", model: "SEED 1 DAY Pure EDOF", technology: "EDOF", description: "Однодневные контактные линзы с расширенной глубиной фокуса. Возможность применения для конкретного ребёнка оценивает врач.", note: "Не требуют хранения и очистки: после снятия линзы утилизируют." },
  { manufacturer: "OKVision", model: "Prima Bio Bi-focal", technology: "Бифокальный дизайн", description: "Мягкие бифокальные контактные линзы. Параметры, режим замены и применимость для контроля миопии уточняются при подборе.", note: "Уход и сроки замены — по инструкции к выбранной линзе." },
] as const;

export const childServices = [
  { name: "Приём детского врача", description: "Оценка зрения, рефракции и состояния глаз, анализ предыдущих рецептов и выбор индивидуальной тактики контроля миопии." },
  { name: "Биометрия Lenstar LS 900", origin: "Швейцария", description: "Бесконтактное оптическое измерение параметров глаза, включая его осевую длину. Сравнение повторных измерений помогает врачу отслеживать динамику роста глаза." },
] as const;

export const myopiaClinic = { address: "Санкт-Петербург, ул. Кирочная, 17", metro: "м. Чернышевская", hours: "Ежедневно 10:00–20:00", phone: "8-800-700-0214", phoneHref: "tel:88007000214" } as const;