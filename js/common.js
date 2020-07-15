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

// Main menu submenu
let menu__item = document.querySelector('.main__nav-list div');

menu__item.addEventListener(
  'click',
  evt => {
    let trg = evt.target;

    if (trg.classList.contains('selected')) {
      trg.classList.remove('selected');
    } else {
      trg.classList.add('selected');
    }
  },
  false,
);
