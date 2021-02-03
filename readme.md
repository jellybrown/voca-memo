# Voca Memo

<br>

## ❗️ 프로젝트 목적

<br>

집에서 간단히 이용할 수 있는 영어 단어장을 만들어보고 싶었습니다.

<br>

---

<br>

## ❗️ 프로젝트 기간

<br>

### 2021.01.03 ~ 2021.01.17 (1인)

<br>

## ❗️ 사용된 기술 & 라이브러리

<br>

### - html,css

### - javascript

### - Local storage

<br>

---

<br>

## ❗️ 프로젝트 구현

<br>

### 1. html, css, javascript 이용

<br>

- 마크업을 먼저 깔끔히 하고, js를 이용해 단어를 추가하도록 했습니다.

```html
<!--  voca section -->

<section class="voca_section">
  <div class="voca_title">
    <h1>나만의 영어단어장</h1>
  </div>
  <ul class="voca_list">
    <!-- 여기에 영어 단어가 들어옵니다 -->
  </ul>
  <button class="main_add_btn"><i class="fas fa-plus"></i></button>
</section>
```

```html
<!--  modal section -->

<section class="modal_section hide">
    ...
    <div class="content">
                <div class="modal_eng column">
                    <label for="eng_input">영어</label>
                    <input type="text" id="eng_input"/>
                </div>
                <div class="modal_ko column">
                    <label for="ko_input">뜻</label>
                    <input type="text" id="ko_input"/>
                </div>
            </div>
            <button class="modal_add_btn">추가</button>
    </div>
<section>
```

```js
// javascript

const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};

const addNewWord = () => {
  const word = generateWord();
  wordList.push(word);
  saveLocalStorage(wordList);
  clearInput();
  const data = makeData(word);
  pushList(data);
};
```

<br>

### 2. Local Storage

<br>

- 껏다 켜도 괜찮도록 Local Storage를 이용했습니다.

```js

// save 함수 선언
const saveLocalStorage = (items) => {
  localStorage.setItem("localWords", JSON.stringify(items));
};

// load 함수 선언
const loadLocalStorage = () => {
  const savedData = localStorage.getItem("localWords");
  if (savedData === null) return;
  const parseData = JSON.parse(savedData);
  parseData.forEach((item) => {
      ...
  });
}

// delete 함수 선언
const deleteInLocalStorage = (list) => {
  const willDeleteWord = list.childNodes[0].innerText;

  const willUpdateList = wordList.filter(
    (word) => willDeleteWord !== Object.values(word)[0]
  );
  wordList = willUpdateList;
  saveLocalStorage(wordList);
};

```

<br>

---

<br>

## ❗️ 프로젝트 결과화면

<br>

<img src="https://github.com/jellybrown/voca-memo/blob/master/voca-memo.gif" width="800">

<br>

---

<br>

## ❗️ 만들면서 힘들었던 점

<br>

### Local Storage

새로 접속하면 이전 내용을 기억하는 것처럼 화면에 렌더링이 되어 있어야 하는데, <br>
local storage에 어떻게 저장해야 가능한건지 생각이 나지 않았습니다. <br>
이전에 local storage에 대해 학습했던 걸 보며 "전체를 가지고와 분해한 다음 렌더링을 한다" 는 것을 복습하고, <br>
계속 전체를 업데이트 해야함을 알았습니다.

<br>

### class를 이용하여 해보고 싶었으나 실패

class를 이용하여 프로젝트를 만들어보고 싶었으나, 이 프로젝트와 맞지 않는 것 같고, class로 무엇을 만들어야 할지 판단이 서지않았습니다. <br>
객체지향으로 코드를 작성하는 법에 대해 공부하고 새로운 프로젝트를 해볼 예정입니다.

## <br>
