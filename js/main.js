// 題庫設計
const levels = [
  {
    title: '1. 用 print() 印出 Hello, world!',
    description: '請用 print() 印出 Hello, world!。',
    answer: 'print("Hello, world!")',
    starter: 'print("")',
    hint: 'print() 可以把你想說的話顯示在螢幕上。'
  },
  {
    title: '2. 用 print() 印出你的名字',
    description: '請用 print() 印出你的名字。',
    answer: 'print("Cheung Kap Lam")',
    starter: 'print("")',
    hint: '把 "你的名字" 換成你自己的名字。'
  },
  {
    title: '3. 印出 123+456 的結果',
    description: '請用 print() 印出 123+456 的結果。',
    answer: 'print(123+456)',
    starter: 'print(123+456)',
    hint: 'print() 也可以印出數字運算結果。'
  },
  {
    title: '4. 宣告一個變數 name，值為 "Amy"，然後印出 name',
    description: '請宣告變數 name，值為 "Amy"，然後印出 name。',
    answer: 'name = "Amy"\nprint(name)',
    starter: 'name = ""\nprint(name)',
    hint: '先宣告變數，再用 print() 印出。'
  },
  {
    title: '5. 宣告變數 a=5, b=7，印出 a+b',
    description: '請宣告 a=5, b=7，然後印出 a+b。',
    answer: 'a = 5\nb = 7\nprint(a + b)',
    starter: 'a = 0\nb = 0\nprint(a + b)',
    hint: '變數可以直接相加。'
  },
  {
    title: '6. 用 if 判斷 10 是否大於 5，若是則印出 "Yes"',
    description: '請用 if 判斷 10 是否大於 5，若是則印出 "Yes"。',
    answer: 'if 10 > 5:\n    print("Yes")',
    starter: 'if 10 > 5:\n    print("")',
    hint: 'if 條件後面要加冒號，縮排很重要。'
  },
  {
    title: '7. 用 for 迴圈印出 1 到 5',
    description: '請用 for 迴圈印出 1 到 5。',
    answer: 'for i in range(1, 6):\n    print(i)',
    starter: 'for i in range(1, 6):\n    print(i)',
    hint: 'range(1, 6) 會產生 1~5。'
  },
  {
    title: '8. 宣告一個 list 包含 2, 4, 6，印出這個 list',
    description: '請宣告一個 list 包含 2, 4, 6，然後印出這個 list。',
    answer: 'numbers = [2, 4, 6]\nprint(numbers)',
    starter: 'numbers = []\nprint(numbers)',
    hint: 'list 用中括號。'
  },
  {
    title: '9. 印出 list [1,2,3] 的第二個元素',
    description: '請印出 list [1,2,3] 的第二個元素。',
    answer: 'nums = [1, 2, 3]\nprint(nums[1])',
    starter: 'nums = [1, 2, 3]\nprint(nums[ ])',
    hint: 'Python 的索引從 0 開始。'
  },
  {
    title: '10. 用 while 迴圈印出 1, 2, 3',
    description: '請用 while 迴圈印出 1, 2, 3。',
    answer: 'i = 1\nwhile i <= 3:\n    print(i)\n    i += 1',
    starter: 'i = 1\nwhile i <= 3:\n    print(i)\n    i += 1',
    hint: 'while 需要自己控制變數遞增。'
  },
  {
    title: '11. 宣告 function greet()，印出 "Hi!"',
    description: '請宣告 function greet()，然後印出 "Hi!"。',
    answer: 'def greet():\n    print("Hi!")\ngreet()',
    starter: 'def greet():\n    print("")',
    hint: '定義 function 用 def。'
  },
  {
    title: '12. 宣告 function add(a, b)，回傳 a+b，然後印出 add(3, 4)',
    description: '請宣告 function add(a, b)，回傳 a+b，然後印出 add(3, 4)。',
    answer: 'def add(a, b):\n    return a + b\nprint(add(3, 4))',
    starter: 'def add(a, b):\n    return a + b\nprint(add( , ))',
    hint: 'return 會回傳值。'
  },
  {
    title: '13. 用 for 迴圈印出 list ["a", "b", "c"] 的每個元素',
    description: '請用 for 迴圈印出 list ["a", "b", "c"] 的每個元素。',
    answer: 'letters = ["a", "b", "c"]\nfor letter in letters:\n    print(letter)',
    starter: 'letters = ["a", "b", "c"]\nfor letter in letters:\n    print(letter)',
    hint: 'for 變數 in list。'
  },
  {
    title: '14. 用 if-else 判斷 x=7 是否大於 10，印出 "大" 或 "小"',
    description: '請用 if-else 判斷 x=7 是否大於 10，印出 "大" 或 "小"。',
    answer: 'x = 7\nif x > 10:\n    print("大")\nelse:\n    print("小")',
    starter: 'x = 7\nif x > 10:\n    print("")',
    hint: 'if-else 要注意縮排。'
  },
  {
    title: '15. 宣告 dict {"name":"Amy", "age":10}，印出 name',
    description: '請宣告 dict {"name":"Amy", "age":10}，然後印出 name。',
    answer: 'info = {"name": "Amy", "age": 10}\nprint(info["name"])',
    starter: 'info = {"name": "", "age": 0}\nprint(info[""])',
    hint: 'dict 用大括號，取值用中括號。'
  },
  {
    title: '16. 用 input() 取得使用者輸入，然後印出',
    description: '請用 input() 取得使用者輸入，然後印出。',
    answer: 'name = input()\nprint(name)',
    starter: 'name = input()\nprint(name)',
    hint: 'input() 會讓使用者輸入。'
  },
  {
    title: '17. 用 for 迴圈計算 1+2+3+4+5 並印出',
    description: '請用 for 迴圈計算 1+2+3+4+5 並印出。',
    answer: 'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)',
    starter: 'total = 0\nfor i in range(1, 6):\n    total += i\nprint(total)',
    hint: '用一個變數累加。'
  },
  {
    title: '18. 宣告一個 list，印出長度',
    description: '請宣告一個 list，然後印出長度。',
    answer: 'nums = [1, 2, 3, 4]\nprint(len(nums))',
    starter: 'nums = []\nprint(len(nums))',
    hint: 'len(list) 會得到長度。'
  },
  {
    title: '19. 宣告 function square(x)，回傳 x 的平方，印出 square(5)',
    description: '請宣告 function square(x)，回傳 x 的平方，然後印出 square(5)。',
    answer: 'def square(x):\n    return x * x\nprint(square(5))',
    starter: 'def square(x):\n    return x * x\nprint(square())',
    hint: 'x * x 是平方。'
  },
  {
    title: '20. 用 for 迴圈印出 2, 4, 6, 8, 10',
    description: '請用 for 迴圈印出 2, 4, 6, 8, 10。',
    answer: 'for i in range(2, 11, 2):\n    print(i)',
    starter: 'for i in range(2, 11, 2):\n    print(i)',
    hint: 'range(2, 11, 2) 會產生 2,4,6,8,10。'
  }
];

let currentLevel = 0;

function setLevel(idx) {
  const level = levels[idx];
  document.querySelector('.lesson h2').textContent = level.title;
  document.querySelector('.lesson .desc').textContent = level.description;
  document.querySelector('.lesson .example').textContent = level.hint;
  document.getElementById('python-code').value = level.starter;
  document.getElementById('output').textContent = '';
  document.getElementById('level-indicator').textContent = `第 ${idx+1} 關 / 共 20 關`;
  document.getElementById('prev-btn').disabled = idx === 0;
  document.getElementById('next-btn').disabled = idx === levels.length-1;
  // 預設隱藏提示
  document.querySelector('.lesson .example').style.display = 'none';
}

function outf(text) {
  var output = document.getElementById('output');
  output.innerHTML += text;
}

function runCode() {
  var prog = document.getElementById('python-code').value;
  var output = document.getElementById('output');
  output.innerHTML = '';
  Sk.configure({
    output: outf,
    read: function(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles['files'][x] === undefined)
        throw "File not found: '" + x + "'";
      return Sk.builtinFiles['files'][x];
    }
  });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'output';
  var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody('__main__', false, prog, true);
  });
  myPromise.then(function(mod) {
    // 驗證答案
    checkAnswer();
  }, function(err) {
    output.innerHTML += '<span style="color:red">' + err.toString() + '</span>';
  });
}

function checkAnswer() {
  const userCode = document.getElementById('python-code').value.trim().replace(/\r\n?/g, '\n');
  const answer = levels[currentLevel].answer.trim().replace(/\r\n?/g, '\n');
  if (userCode === answer) {
    showSuccess();
  } else {
    showFail();
  }
}

function showSuccess() {
  const output = document.getElementById('output');
  output.innerHTML += '\n<span class="success">恭喜你，過關了！</span>';
  document.getElementById('next-btn').classList.add('highlight');
  setTimeout(()=>{
    document.getElementById('next-btn').classList.remove('highlight');
  }, 1000);
}

function showFail() {
  const output = document.getElementById('output');
  output.innerHTML += '\n<span class="fail">答案還沒完全正確，再試一次！</span>';
}

document.addEventListener('DOMContentLoaded', function() {
  // 新增 Apple-style 關卡指示與按鈕
  const editor = document.querySelector('.editor-area');
  const nav = document.createElement('div');
  nav.className = 'level-nav';
  nav.innerHTML = `
    <button id="prev-btn" class="nav-btn">上一關</button>
    <span id="level-indicator"></span>
    <button id="next-btn" class="nav-btn">下一關</button>
  `;
  editor.parentNode.insertBefore(nav, editor.nextSibling);

  // 綁定事件（必須在插入按鈕後）
  document.getElementById('run-btn').addEventListener('click', runCode);
  document.getElementById('prev-btn').addEventListener('click', ()=>{
    if(currentLevel>0) {
      currentLevel--;
      setLevel(currentLevel);
    }
  });
  document.getElementById('next-btn').addEventListener('click', ()=>{
    if(currentLevel<levels.length-1) {
      currentLevel++;
      setLevel(currentLevel);
    }
  });
  // 綁定顯示提示按鈕
  document.getElementById('show-hint-btn').addEventListener('click', function() {
    document.querySelector('.lesson .example').style.display = 'block';
    this.style.display = 'none';
  });
  setLevel(0);
}); 