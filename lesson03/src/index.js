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
  const flag = document.createDocumentFragment()
  const li = document.createElement('li');
  const a = document.createElement('a')
  a.href = data.href;
  const img = document.createElement('img')
  img.src = `/img/${data.src}`;
  const text = document.createTextNode(data.text)
  flag.appendChild(li).appendChild(a).appendChild(img).after(text);
  return flag;
}

const elems = dataList.map(createImageList);

const ul = document.getElementById('js-list');
ul.append(...elems);
