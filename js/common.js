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
