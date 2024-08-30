import type { Project } from "~/types/project";

export const projects:Project[] = [
    {
        name: 'Школа спортивного развития',
        img: '/projects/school-kyzym.png',
        link: 'https://school-kyzym.ru/',
        git:'https://github.com/MrFokus/school-sports-development',
    },
    {
        name: 'Система обращений и учёта инвентаря',
        description: 'Система позволяет отслеживать обращения по поломке или обслуживанию оборудования',
        img: '/projects/hospital.png',
        isLock:true
    },
    {
        name: 'Индекс счастья',
        img: '/projects/happines-index.png',
        link: 'https://happiness-index.admlr.lipetsk.ru/',
        isLock:true
    },
    {
        name: 'Система администрирования для приложения “Хочу Здесь Жить”',
        img: '/projects/want-live-here.png',
        isLock:true
    },
    {
        name: 'Промышленный туризм',
        img: '/projects/promtour.png',
        link:'https://promtour48.ru/',
        isLock:true
    },
    {
        name: 'Мототека',
        img: '/projects/mototeka.png',
        description: "В данном сервисе доступна информация о большинстве мотоциклов",
        inProcess:true
    },
]

