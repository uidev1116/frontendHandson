new Promise((resolve) => {
  resolve([
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
  ])
}).then((data) => {
  const createImageList = (obj) => {
    const flag = document.createDocumentFragment()
    const li = document.createElement('li');
    const a = document.createElement('a')
    a.href = `/${obj.to}`;
    const img = document.createElement('img')
    img.src = obj.img;
    img.alt = obj.alt
    const text = obj.text;
    flag.appendChild(li).appendChild(a).appendChild(img).insertAdjacentHTML('afterend', text);
    return flag;
  }

  const elems = data.map(createImageList);

  const appendElemToParent = (parent) => (elem) => parent.appendChild(elem);

  const ul = document.getElementById('js-list');
  elems.map(appendElemToParent(ul));
})
