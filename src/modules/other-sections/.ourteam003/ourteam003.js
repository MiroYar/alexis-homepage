import { ajax } from '../../ajax';

function setArrowPositionXRelativeToCard(arrow, card) {
    const arrowParent = arrow.parentElement;
    const coorCard = card.getBoundingClientRect();
    const coorArrowParent = arrowParent.getBoundingClientRect();
    const x = coorCard.left - coorArrowParent.left + card.offsetWidth / 2 - arrow.offsetWidth / 2;
    arrow.style.transform = `translateX(${x}px)`;
}

function setAboutSpecialist(specialistName, data, event) {
    const ABOUT_SPECIALIST_WRAP = event.currentTarget;

    const TITLE = ABOUT_SPECIALIST_WRAP.querySelector('.about-specialist__title');
    const TEXT = ABOUT_SPECIALIST_WRAP.querySelector('.about-specialist__text');

    // Редактирование описания о специалисте.
    TITLE.innerHTML = `About ${specialistName.match(/[^\s]+/)[0]}`;
    TEXT.innerHTML = data.about;

    // Редактирование ссылок контактов специалиста.
    const CONTACTS = ABOUT_SPECIALIST_WRAP.getElementsByTagName('li');
    for (let i = 0; i < CONTACTS.length; i++) {
        const contactsItem = CONTACTS[i];
        contactsItem.classList.forEach(className => {
            if (/contact-item__/.test(className)) {
                const contactName = className.replace(/contact-item__/, '');
                const a = contactsItem.getElementsByTagName('a');
                if (data.contacts.hasOwnProperty(contactName)) {
                    contactsItem.style.display = '';
                    a[0].href = `${data.contacts[contactName]}`;
                } else {
                    contactsItem.style.display = 'none';
                    a[0].href = '#';
                }
            }
        });
    }

    // Удаление класса у блока с описанием о специалисте для появления блока.
    ABOUT_SPECIALIST_WRAP.classList.remove('about-specialist__wrap_hidden');
}

function setFocusEventForCard(arrow, specialistsData, aboutSpecialistWrap, event) {
    let card = event.target;

    setArrowPositionXRelativeToCard(arrow, card);

    const SPECIALIST_NAME = card.querySelector('.team-card__name').innerHTML;
    const DATA = specialistsData[`${SPECIALIST_NAME}`];

    // Присвоение класса блоку с описанием о специалисте для скрытия описания с последующего его редактирования и появления вновь.
    aboutSpecialistWrap.addEventListener(
        'transitionend',
        setAboutSpecialist.bind(null, SPECIALIST_NAME, DATA),
        { once: true }
    );
    aboutSpecialistWrap.classList.add('about-specialist__wrap_hidden');
}

export function setEventsForTeamSection() {
    const OURTEAM = document.querySelector('.ourteam');
    const ABOUT_SPECIALIST = OURTEAM.querySelector('.about-specialist');
    const ARROW = ABOUT_SPECIALIST.querySelector('.about-specialist__arrow');
    const ABOUT_SPECIALIST_WRAP = ABOUT_SPECIALIST.querySelector('.about-specialist__wrap');

    // AJAX запрос для получения данных о специалистах.
    ajax('./json/ourteam.json', response => {
        const SPECIALISTS_DATA = response;

        // Выбор карты специалиста по умолчанию.
        setFocusEventForCard(ARROW, SPECIALISTS_DATA, ABOUT_SPECIALIST_WRAP, {
            target: OURTEAM.querySelector('.team-card')
        });

        // Назначение действий при выборе карты специалиста.
        OURTEAM.addEventListener(
            'focusin',
            setFocusEventForCard.bind(null, ARROW, SPECIALISTS_DATA, ABOUT_SPECIALIST_WRAP)
        );
    });
}
