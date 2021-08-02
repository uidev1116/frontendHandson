const dataList = [
  {
    href: 'a1.html',
    src: 'bookmark.png',
    text: 'a1',
  },
  {
    href: 'a2.html',
    src: 'message.png',
    text: 'a2',
  },
]

const createImageList = (data) => {
  const li = document.createElement('li');
  const a = document.createElement('a')
  a.href = data.href;
  const img = document.createElement('img')
  img.src = `/img/${data.src}`;
  const text = document.createTextNode(data.text)
  li.appendChild(a).appendChild(img).appendChild(text);
  return li;
}

const elems = dataList.map(createImageList);

const ul = document.getElementById('js-list');
elems.map((elem) => ul.appendChild(elem));
