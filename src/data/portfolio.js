import { publicFile } from '../utils/publicAsset'

const cert = (file) => publicFile('certificates', file)

export const portfolio = {
  brand: 'Практика',
  person: {
    name: 'Охнич Тарас Романович',
    role:
      'Здобувач фахової передвищої освіти, 4 курс, група КН-41. Спеціальність 122 «Комп’ютерні науки»',
    description:
      'Переддипломна практика на базі ФОП Бац Богдан Михайлович, посада — помічник розробника програмного забезпечення (27.04–22.05.2026).',
    availability: 'КЗ ЛОР «Самбірський фаховий педагогічний коледж імені Івана Филипчака»',
  },
  navLinks: [
    { href: '#home', label: 'Головна' },
    { href: '#pro-mene', label: 'Про мене' },
    { href: '#meta', label: 'Мета' },
    { href: '#kharakter-praktyky', label: 'Характер' },
    { href: '#dyplomna-robota', label: 'Дипломна' },
    { href: '#zvit', label: 'Щоденник' },
    { href: '#vysnovky-praktyky', label: 'Висновки' },
  ],
  certificates: [
    {
      id: 'cert-1',
      title: 'Сертифікат 1',
      src: cert('cert-1.pdf'),
      type: 'pdf',
      alt: 'Сертифікат 1',
    },
    {
      id: 'cert-2',
      title: 'Сертифікат 2',
      src: cert('cert-2.pdf'),
      type: 'pdf',
      alt: 'Сертифікат 2',
    },
    {
      id: 'cert-3',
      title: 'Сертифікат 3',
      src: cert('cert-3.pdf'),
      type: 'pdf',
      alt: 'Сертифікат 3',
    },
    {
      id: 'thanks-1',
      title: 'Подяка',
      src: cert('podyaka.jpeg'),
      type: 'image',
      alt: 'Подяка від бази практики',
    },
  ],
  hero: {
    eyebrow: 'Щоденник переддипломної практики',
    title: 'Охнич Тарас',
    subtitle: '122 Комп’ютерні науки · помічник розробника ПЗ',
    description:
      'Портфоліо практики: мета, характер практики, щоденник, дипломна робота та висновки.',
  },
  about: {
    intro:
      'Студент 4 курсу групи КН-41. Під час переддипломної практики працював над вебсайтом для застосунку Principles (React, Vite, API) та паралельно виконував завдання дипломного проєкту.',
    facts: [
      { label: 'Заклад освіти', value: 'СФПК імені Івана Филипчака' },
      { label: 'Група', value: 'КН-41, 4 курс' },
      { label: 'База практики', value: 'ФОП Бац Богдан Михайлович' },
      { label: 'Посада', value: 'Помічник розробника програмного забезпечення' },
      { label: 'Період', value: '27.04 – 22.05.2026' },
      { label: 'Керівник від бази', value: 'Бац Богдан Михайлович' },
    ],
    stack: ['React', 'Vite', 'JavaScript', 'Figma', 'Git', 'API'],
  },
}
