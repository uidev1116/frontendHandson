const dataList = [
  {
    to: "bookmark.html",
    img: "1.png",
    alt:"画像1",
    text: "ブックマーク"
  },
  {
    to: "message.html",
    img: "2.png",
    alt:"画像2",
    text: "メッセージ"
  }
];


const createImageList = (data) => {
  const flag = document.createDocumentFragment()
  const li = document.createElement('li');
  const a = document.createElement('a')
  a.href = data.to;
  const img = document.createElement('img')
  img.src = `/img/${data.img}`;
  img.alt = data.alt
  const text = data.text;
  flag.appendChild(li).appendChild(a).appendChild(img).insertAdjacentHTML('afterend', text);
  return flag;
}

const elems = dataList.map(createImageList);

const append = (target) => (elem) => target.appendChild(elem);

const ul = document.getElementById('js-list');
elems.map(append(ul));

