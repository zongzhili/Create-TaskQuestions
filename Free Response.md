# 2024 AP Computer Science Principles Free-Response Questions: Set 1

## AP® Computer Science Principles Written Response Prompts

### Instructions:

- **Time:** 1 hour
- **Questions:** 2
- Read each question carefully and completely.
- Write your response in the space provided for each question in the Written Response booklet.
- You may plan your answers in this orange booklet, but no credit will be given for anything written in this booklet. You will only earn credit for what you write in the separate Written Response booklet.

---

### Pre-FRQ Practice

## Identify the Algorithm present in the JavaScript Files.

### Aspects of Algorithm

Sequencing
Selection
Iteration

```javascript angelina
function insertText(inputContent, type) {
  DOMSelect.results.insertAdjacentHTML("beforeend", `<br></br>`);
  const content = inputContent;
  if (type === "file") {
    //selection if and else statements
    content.forEach(function (item) {
      //forEach is an iteration
      DOMSelect.results.insertAdjacentHTML(
        "beforeend",
        `<p class="text">${item}</p>`
      ); //sequencing, before results is done, put text on screen
    });
  } else {
    content.forEach(function (item) {
      //iteration
      DOMSelect.results.insertAdjacentHTML(
        "beforeend",
        `<p class="text">${item.textContent}</p>`
      );
    });
    DOMSelect.input.innerHTML = "";
  }
  DOMSelect.inputbox.style.display = "none";
  DOMSelect.settings.style.display = "";
}
```

### Question 1

Programs accept input to achieve their intended functionality. **Describe at least one valid input to your program and what your program does with that input.**

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

```js angelina
DOMSelect.submit.addEventListener("click", function () {
  insertText(DOMSelect.input.childNodes), "paste";
});
DOMSelect.fileinput.addEventListener("change", parseFile);
```

## One valid input is a text file and displaying it with different css.

### Question 2

Refer to your Personalized Project Reference when answering this question.

#### Part (a):

Consider the first iteration statement included in the Procedure section of your Personalized Project Reference. **Describe what is being accomplished by the code in the body of the iteration statement.**

The first iteration statement inserts the input content from the user back onto the screen.

#### Part (b):

Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference.

- Write two calls to your procedure that each cause a different code segment in the procedure to execute.
- Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.

```js angelina
function
```

#### Part (c):

Suppose another programmer provides you with a procedure called `checkValidity(value)` that:

- Returns `true` if a value passed as an argument is considered valid by the other programmer.
- Returns `false` otherwise.

Using the list identified in the List section of your Personalized Project Reference, **explain in detailed steps an algorithm that uses `checkValidity` to check whether all elements in your list are considered valid by the other programmer.** Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses `checkValidity`.

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.
``` js
function checkValidity(value){
    if(value)
}
```
---

### End of Exam
