# Voca Memo

<br>

## ❗️ 프로젝트 소개

<br>

- 마크업과 JS를 복습하며 만든 프로젝트
- 간단히 이용할 수 있는 영어 단어장

<br>

---

<br>

## ❗️ 프로젝트 기간

<br>

- 2021.01.03 ~ 2021.01.17 (1인)

<br>

## ❗️ 사용된 기술

<br>

- html, css

- Javascript

- Local storage

<br>

<br>

## ❗️ 개선해볼 것

<br>

- [x] html class 이름 깔끔하게 정리
- [x] LocalStorage 클래스로 리팩토링 하기(O) -> 메서드 리팩토링 하기
- [ ] 각 입력칸 영어/한글인지 확인하기
- [x] 단어 1번 추가시 모달창 닫기

<br>

---

<br>

## ❗️ 프로젝트 구현

<br>

### 1. html, css, javascript 이용

<br>

- 의미있는 마크업을 위해 section, h1, ul등의 태그들을 이용했습니다.

```html
<!--  voca section -->

<section class="voca">
  <div class="voca__title">
    <h1>나만의 영어단어장</h1>
  </div>
  <ul class="voca__list">
    <!-- 여기에 단어가 들어옵니다. -->
  </ul>
  <button class="voca__add-button"><i class="fas fa-plus"></i></button>
</section>
```

```html
<!--  modal section -->

<section class="modal hide">
  <div class="modal__container">
    <div class="modal__header">
      <h2>단어추가</h2>
      <span class="close">
        <i class="fas fa-times"></i>
      </span>
    </div>
    <!-- modal__header -->
    <div class="input__wrapper">
      <div class="column english__wrapper">
        <label for="english">영어</label>
        <input type="text" id="english" />
      </div>
      <div class="column korean__wrapper">
        <label for="korean">뜻</label>
        <input type="text" id="korean" />
      </div>
    </div>
    <!-- input__wrapper: 단어 작성 영역 -->
    <button class="modal__add-button">추가</button>
  </div>
  <!-- modal__container -->
</section>
```

<br>

- 지루하지 않게, 휴지통 아이콘에 애니메이션을 만들어서 적용했습니다.

```css
.trash_icon:hover {
  color: #fff;
  animation: shake 0.3s infinite;
}

@keyframes shake {
  0% {
    transform: rotate(45deg) scale(1.1);
  }
  50% {
    transform: rotate(-45deg) scale(1.3);
  }
  100% {
    transform: rotate(45deg) scale(1.1);
  }
}
```

<br>

- 단어를 생성할 수 있도록 함수를 작성했습니다.

```js
// javascript

// 단어를 생성하는 함수
const generateWord = () => {
  const engValue = engInput.value;
  const koValue = koInput.value;
  return new Word(engValue, koValue);
};

// html & LocalStorage에 단어를 추가하는 함수
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

- 정보가 사라지지 않게 Local Storage를 이용했습니다.

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

## ❗️ 링크

<br>

<a href="https://jellybrown.github.io/voca-memo/">구경하러 가기</a>

<br>

## ❗️ 프로젝트 결과화면

<br>

<img src="https://github.com/jellybrown/voca-memo/blob/master/voca-memo.gif" width="800">

<br>

---

<br>

## ❗️ 만들면서 힘들었던 점

<br>

### 1. Local Storage

새로 접속하면 이전 내용을 기억하는 것처럼 화면에 렌더링이 되어 있어야 하는데, <br>
local storage에 어떻게 저장해야 가능한건지 생각이 나지 않았습니다. <br>
이전에 local storage에 대해 학습했던 걸 보며,<br>
전체를 가지고와 분해한 다음 렌더링을 한다는 것을 복습한뒤 적용했습니다. <br>

<br>

### 2. class를 이용하여 해보고 싶었으나 실패

class를 이용하여 프로젝트를 만들어보고 싶었으나 이 프로젝트와 맞지 않는 것 같고,<br>
class로 무엇을 만들어야 할지 판단이 서지않았습니다. <br>
객체지향에 대해 공부하고 새로운 프로젝트를 해볼 예정입니다.

<br>
