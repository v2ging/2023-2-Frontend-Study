자바스크립트 기본 - 배열 내장 함수 - for each: for문을 작성한 것처럼 배열의 모든 요소 접근 - map: 원본 배열의 모든 요소에 접근하면서 새로운 함수 값을 리턴해 새로운 배열 생성 - includes, indexOf: 배열 요소 판단 - findIndex: 일치하는 요소가 존재하는 경우 최초의 index 반환 - filter: 전달한 콜백함수가 true를 반환하는 모든 요소를 필터링 - slice: 지정한 인덱스 만큼 배열을 잘라 새로운 배열로 반환 - concat: 배열에 배열을 붙여 새로운 배열 생성 - sort: 원본 배열을 문자열 기준으로 사전순으로 정리 - join: 배열 값 합치기

자바스크립트 응용 - Truthy & Falsy - 자바스크립트가 조건식에서 참으로 평가하는 값 - {}, [], 숫자, Infinity, 문자열, ... - 자바스크립트가 조건식에서 거짓으로 평가하는 값 - null, undefined, 0, -0, NaN, ""(빈 문자열) - Falsy: 예외 처리 시 유용하게 사용 가능 - 삼항 연산자 - 조건식 ? 참일 때 실행할 식 : 거짓일 때 실행할 식; - 비 구조화 할당 - 배열의 비 구조화 할당 - 예시
`let arr["one", "two", "three"];
                let [one,two,three] = arr;`
또는
`let [one,two,three] = ["one", "two", "three"];` - swap 예시
`let a = 10;
let b = 20;

                [a, b]= [b, a];
                conosole.log(a, b) // 20 10`
        - 객체의 비 구조화 할당
            - 예시
                `let object = {one: "one", two: "two", three: "three"};
                let one = object.one;
                let two = object.two;
                let three = object.three;`
            - 예시
                `let object = {one: "one", two: "two", three: "three", name: "가니"};
                let {one, two, three, name: myName} = object; // 키 값으로 참조
                console.log(one, two, three, myName);`
    - Spread
        - 객체의 값을 다른 객체에 펼쳐줌
        - 배열의 값을 다른 객체에 펼쳐줌
        - 예시
            ...cookie,
    - 동기 & 비동기
        - 동기 처리 방식
            - 코드가 작성된 순서대로 작업을 처리
            - 이전 작업이 진행 중일 때는 다음 작업을 수행하지 않고 기다림
            - 먼저 작성된 코드를 다 실행하고 나서야 뒤에 작성된 코드를 실행함
        - 비동기 처리 방식
            - 논 블로킹 방식: 하나의 작업이 스레드를 blocking하지 않는 방법
            - 여러 개의 작업을 동시에 실행시킴
            - 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함
    - Promise
        - 자바스크립트의 비동기를 돕는 객체
        - 비동기 작업이 가질 수 있는 3가지 상태: Pending(대기상태), Fufilled(성공) - resolve 되었다, Rejected(실패) - reject 되었다
        - 함수가 프로미스를 반환 -> 함수는 비동기 작업을 하고 작업의 결과를 프로미스 객체로 받아서 사용할 수 있음
    - async
        - 자동적으로 Promise를 리턴하는 비동기 처리 함수를 만듦
        - 함수의 리턴 값: 프로미스의 resolve의 결과 값이 됨
    - await
        - 비동기 함수가 동기적으로 행동하게 함
    - API: 애플리케이션 프로그램 인터페이스
        - open API 사이트: https://jsonplaceholder.typicode.com

Node.js - package.json의 script 수정하여 자주 사용하는 명령어를 쉬운 키워드로 바꿀 수 있음 - 예시
"start": "node index.js" - 예시 사용
npm start - package.json - dependencies: 외부 패키지 - "^" == 정확한 버전이 아닌 이 버전 이상으로 설치되었다 - package-lock.json - 정확한 패키지 버전 확인 가능 - nodejs의 패키지 모음 - https://www.npmjs.com - npm i 로 다운받은 외부 모듈은 js에서 경로 표현하지 않아도 됨

React.js 기초 - React(Component 기반의 UI 라이브러리 - 선언형 프로그래밍)를 사용하는 이유 - 중복된 코드 줄일 수 있다, 수정 시 편리하다 - 컴포넌트 방식 - 중복될 것이라 예상되는 요소를 별도의 파일, 모듈로 저장해두고 (이를 컴포넌트라고 부름) 이 컴포넌트를 필요한 파일, 페이지마다 불러와 사용한다 - virtual DOM 개념 실습하면서 더 익히기 !! - JSX - 자바스크립트의 확장 문법 - 닫힌 규칙: 여는 태그가 있으면 닫는 태그 또한 존재해야함 - 셀프 클로징 태그: 열자마자 닫음 - 예시: <img />, <br />, ... - 최상위 태그 규칙 - 최상위 태그 = 가장 바깥쪽에 있는 태그 - <React.Fragment> - import React 후 사용 - <> </> 으로 줄여 사용 가능 - State - 컴포넌트는 상태가 변화하면 화면을 Rerender 한다 (= 다시 호출한다) - 컴포넌트가 여러 개의 상태를 갖을 수 있다 - const [count, setCount] = useState(0); - React의 메서드인 useState는 배열을 반환하고 배열의 비구조화 할당을 통해 0번째 인덱스를 count로, 1번째 인덱스를 setCount라는 상수로 받아옴 - 0번 인덱스: 상태의 값으로 사용됨 - 1번 인덱스: 상태를 변화시키는 상태 변화 함수로 사용됨 - useState를 호출하며 넘겨준 인자 0: 상태의 초깃값으로 사용됨 - Props - 상위 컴포넌트가 하위 컴포넌트에게 값을 전달할 때 사용하는 속성 - 전달할 값을 객체로 만들어 spread 연산자 이용해 전달 가능 - Props는 Component를 다른 컴포넌트의 Props로 전달 가능 - React의 Component가 Rerender되는 상황 1. 본인이 관리하고 본인이 가진 상태가 바뀔 때 2. 나에게 내려오는 Props가 바뀔 때 3. 부모가 Rerender 될 때
