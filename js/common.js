// Price form options
let form = document.querySelector('form');

form.addEventListener(
  'change',
  evt => {
    let trg = evt.target,
      trg_par = trg.closest('.plan__item'),
      trg_button = trg.nextSibling.nextSibling;

    if (trg.type === 'radio' && trg_par) {
      let prior = form.querySelector('.plan__item.checked');

      if (prior) {
        let trg_button = prior.querySelector(
          '.plan__item.checked .btn__orange',
        );
        trg_button.innerText = 'Auswählen';
        prior.classList.remove('checked');
      }

      trg_par.classList.add('checked');
      trg_button.innerText = 'Ihr Plan';
    }
  },
  false,
);

// Submenu
let menu__item = document.querySelectorAll('.hasSubMenu');

Array.from(menu__item).forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('selected')) {
      el.classList.remove('selected');
    } else {
      el.classList.add('selected');
    }
  });
});

// Mobile menu
let mainHeader = document.querySelector('#headerMain'),
  menuSwitcher = document.querySelector('#menuSwitcher'),
  loggedIn = document.querySelector('#loggedIn'),
  bodySelector = document.querySelector('body');

let mobileMenu = () => {
  if (menuSwitcher.checked) {
    if (document.querySelector('#userMenuSelector')) {
      loggedIn.classList.remove('selected');
      let userMenuSelector = document.querySelector('#userMenuSelector');
      userMenuSelector.checked = false;
    }
    mainHeader.classList.add('fixedHeader');
    bodySelector.classList.add('hasFixedHeader');
  } else {
    mainHeader.classList.remove('fixedHeader');
    bodySelector.classList.remove('hasFixedHeader');
  }
};

let mobileUserMenu = () => {
  if (document.querySelector('#userMenuSelector')) {
    let userMenuSelector = document.querySelector('#userMenuSelector');

    if (userMenuSelector.checked) {
      loggedIn.classList.add('selected');
      mainHeader.classList.add('fixedHeader');
      bodySelector.classList.add('hasFixedHeader');
    } else {
      if (!menuSwitcher.checked) {
        mainHeader.classList.remove('fixedHeader');
        bodySelector.classList.remove('hasFixedHeader');
      }
    }
  }
};

mobileMenu();
mobileUserMenu();

menuSwitcher.addEventListener('change', mobileMenu, false);
if (document.querySelector('#userMenuSelector')) {
  userMenuSelector.addEventListener('change', mobileUserMenu, false);
}

// Open / close item
let selector__items = document.querySelectorAll('.show__hide-selector');

Array.from(selector__items).forEach(el2 => {
  el2.addEventListener('click', () => {
    if (el2.classList.contains('close__item')) {
      el2.classList.remove('close__item');
      el2.classList.add('open__item');
      el2.nextSibling.nextSibling.classList.toggle('d-none');
    } else {
      el2.classList.remove('open__item');
      el2.classList.add('close__item');
      el2.nextSibling.nextSibling.classList.toggle('d-none');
    }
  });
});

// Custom file field
var inputs = document.querySelectorAll('.file__custom');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {
    var fileName = '';
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace(
        '{count}',
        this.files.length,
      );
    } else {
      fileName = e.target.value.split('\\').pop();
    }

    if (fileName) label.querySelector('span').innerHTML = fileName;
    else label.innerHTML = labelVal;
  });
});

// Custom scrollbar
let rsMultiple;

if (window.innerWidth >= 992) {
  rsMultiple = new RS.RocketScroll('.scroll');
}

// Chat tabs
if (window.innerWidth < 992) {
  let chatTabs = document.querySelectorAll('.chatTab');
  let chatTabContent = document.querySelectorAll('.chatTabContent');
  Array.from(chatTabs).forEach(el3 => {
    el3.addEventListener('click', () => {
      if (!el3.classList.contains('active__tab')) {
        Array.from(chatTabs).forEach(el5 => {
          el5.classList.remove('active__tab');
        });

        el3.classList.add('active__tab');

        Array.from(chatTabContent).forEach(el4 => {
          el4.classList.add('d__none');
        });

        if (el3.getAttribute('id') == 'chatTab1') {
          document
            .querySelector('#chatTabContent1')
            .classList.remove('d__none');
        } else if (el3.getAttribute('id') == 'chatTab2') {
          document
            .querySelector('#chatTabContent2')
            .classList.remove('d__none');
        } else if (el3.getAttribute('id') == 'chatTab3') {
          document
            .querySelector('#chatTabContent3')
            .classList.remove('d__none');
        }
      }
    });
  });
}
