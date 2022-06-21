filterSelection('all');
function filterSelection(c) {
  const x = document.getElementsByClassName('filterDiv');
  if (c == 'all') c = '';
  for (let i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], 'show');
    };
  };
};


function w3AddClass(element, name) {
  const arr1 = element.className.split(' ');
  const arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}


function w3RemoveClass(element, name) {
  const arr1 = element.className.split(' ');
  const arr2 = name.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

const btnContainer = document.getElementById('content__filter');
const btns = btnContainer.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
