export class LocalStorage {
  load() {
    const savedData = localStorage.getItem("localWords");
    if (savedData === null) return;
    const parseData = JSON.parse(savedData);
    return parseData;
  }

  save(items) {
    localStorage.setItem("localWords", JSON.stringify(items));
  }

  delete(wordList, list) {
    const willDeleteWord = list.childNodes[0].innerText;

    const willUpdateList = wordList.filter(
      (word) => willDeleteWord !== Object.values(word)[0]
    );
    wordList = willUpdateList;
    this.save(wordList);
  }
}
