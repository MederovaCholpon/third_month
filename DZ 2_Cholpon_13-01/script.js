const block2 = document.querySelector('.block2');
let position = 0;
(recurs = () => {
  let l = parseFloat(getComputedStyle(block2).left),
    	t = parseFloat(getComputedStyle(block2).top);
  if (l < 600 && t == 0) block2.style.left = l + 1 + 'px';
  if (l == 600 && t < 600) block2.style.top = t + 1 + 'px';
  if (l > 0 && t == 600) block2.style.left = l - 1 + 'px';
  if (l == 0 && t > 0) block2.style.top = t - 1 + 'px';
  setTimeout(recurs, 8);
	//console.log(position);
})();