// Price form options

let form = document.querySelector('form');

form.addEventListener(
  'change',
  evt => {
    let trg = evt.target,
      trg_par = trg.closest('.plan__item');

    if (trg.type === 'radio' && trg_par) {
      let prior = form.querySelector('.plan__item.checked');

      if (prior) {
        prior.classList.remove('checked');
      }

      trg_par.classList.add('checked');
    }
  },
  false,
);
