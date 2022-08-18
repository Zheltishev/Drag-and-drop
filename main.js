const app = document.querySelector('.app');
const items = document.querySelectorAll('.item');
const blocks = document.querySelectorAll('.block');

app.addEventListener('dragover', e => {
  e.preventDefault();
})

items.forEach(item => {
  item.draggable = true;

  item.addEventListener('dragstart', e => {
    item.classList.add('active');
    e.dataTransfer.setData('text/plain', e.target.id);
  })

  item.addEventListener('dragend', () => {
    item.classList.remove('active');
  })
})

blocks.forEach(block => {
  block.addEventListener('drop', e => {
    const id = e.dataTransfer.getData('text/plain');
    const elem = document.getElementById(id);

    if (e.target.classList.contains('block')) {
      e.target.appendChild(elem);
    }

    if (e.target.classList.contains('item')) {
      e.target.parentElement.insertBefore(elem, e.target)
    }
  })
})