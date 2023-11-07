useState()

- state란? 컴포넌트가 가질 수 있는 상태이다.
  useState라는 react hook을 이용해 state를 간편하게 생성하고, 업데이트 시킬 수 있다.

- useState를 사용하기 위해 react에서 import 받아야 한다.
  import {useState} from 'react';

- 변수 선언
  const [state, setState] = useState(초기값);

- 변수 재선언
  setState(변경될 값);
  state는 setState라는 상태변화함수에 의해서만 변경될 수 있다.

- setState 함수를 이용해서 state의 값을 변경하면 해당 컴포넌트(재사용 가능한 웹의 구성요소)는 화면에 다시 렌더링 되어서 state가 변경될 때마다 화면이 업데이트 된다.

props

- props란? 부모 컴포넌트에서 자식 컴포넌트로 전달해주는 객체이다.
  모든 React 컴포넌트는 자신의 props를 다룰 때 반드시 순수 함수처럼 동작해야 한다.

- props와 state의 차이
  두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖는다.
  props는 컴포넌트에 전달되는 반면 state는 컴포넌트 안에서 관리된다.

map()

- map() 함수란? 파라미터로 전달된 함수를 사용하여 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 새로운 배열을 생성한다.
  반복되는 컴포넌트를 렌더링하기 위하여 자바스크립트 배열의 내장함수인 map을 사용한다.

생명주기

- 모든 리액트 컴포넌트는 **생성(mount), 업데이트(update), 제거(unmount)**의 생명주기를 갖는다
- 클래스형 컴포넌트는 생명주기 메소드를 통해 생명주기를 제어할 수 있고, 함수형 컴포넌트는 React Hook 중 useEffect를 활용하여 생명주기를 제어한다.

- mount란? 화면에 데이터가 나가는 것을 의미한다. 즉, 컴포넌트가 실행되는 것이다.
- mount 되는 경우

1. props로 받은 값을 컴포넌트의 state로 설정할 때
2. 컴포넌트가 나타나면 외부 API를 요총해야 할 때
3. 라이브러리를 사용할 때
4. setInterval이나 setTimeout과 같은 상태변화함수

- unmount란? 컴포넌트가 삭제되는 것이다.
- unmount 되는 경우

1. 상태변화함수를 사용해서 등록했던 작업을 제거할 때
2. 라이브러리 인스턴스를 만들었다면, 이 인스턴스를 제거할 때

- useEffect로 전달된 함수는 컴포넌트 렌더링 -> 화면 업데이트 -> useEffect 실행 순으로 실행된다.

1. useEffect(callBackFunc);
2. useEffect(callBackFunc, []);
3. useEffect(callBackFunc, [state]);
4. useEffect(callBackFunc, {return(() => func())});

// 1번의 경우, 컴포넌트가 마운트 된 후, 컴포넌트가 업데이트된 후, 컴포넌트가 언마운트 되기 전에 콜백 함수가 실행 된다.
// 2번의 경우, 컴포넌트가 최초로 마운트될 때만 콜백 함수가 실행된다.
// 3번의 경우, 컴포넌트가 최초로 마운트될 때 + 의존성 배열에 넣어준 state가 변경되었을 때 콜백 함수가 실행된다.
// 4번의 경우, 컴포넌트가 어떠한 함수를 리턴하는 형태로 해당 함수는 언마운트되기 직전에 수행된다.

대표적인 동기식 처리 방식에는 `setTimeout`이 있고, `callback`, `promise`가 있습니다.

fetch 함수로 HTTP 요청하기

    ```jsx
    fetch(
          `https://jsonplaceholder.typicode.com/comments`
        ).then((res) => res.json());
    ```

    → 단순히 원격 API에 있는 데이터를 가져올 때 쓰임

    → fetch함수는 디폴트로 GET 방식으로 작동하고, 옵션 인자가 필요 없음

    → 응답(response) 객체는 json() 메서드를 제공하고, 이 메서드를 호출하면 응답(response) 객체로부터 JSON 형태의 데이터를 자바스크립트 객체로 변환하여 얻을 수 있음

async와 await

- 기존의 처리 방식의 문제점들을 보완하면서도 사용법이 훨씬 간단
- async
  sync를 함수 선언 앞에 붙여주게 되면 함수 내부는 전부 비동기로 바뀌게 된다.
  함수 내부에 전부 promise가 씌워진다고 생각하면 된다.
  await를 사용하기 위한 선언문
  리턴값은 promise 객체
  예외처리 - .then / .catch
- await
  async 내부에서만 사용 가능.
  만약 await가 백엔드를 호출하는 함수 앞에 붙게 된다면 데이터를 가져오는 것이 완료될 때까지 기다려주게 된다.

기능

1. async 함수가 비동기적으로 실행되게 한다
   a. await가 없는 async 함수는 동기적으로 실행된다
2. await 뒤에 오는게 promise 객체이면 promise의 resolve 값으로 바꿔준다
   a. await 붙이지 않으면 promise 객체 자체가 출력됨
   b. await 붙이면 promise의 resolve 값이 출력됨

### 페이지 구성방식

SPA (Single Page Application): 하나의 페이지로 구성된 웹 어플리케이션

- 웹 어플리케이션에 필요한 모든 정적 리소스를 한 번에 다운로드하고, 그 이후 새로운 페이지 요청이 있을 때 페이지 갱신에 필요한 데이터만 전달 받아서 페이지를 구성한다.
  - 클라이언트 관점: 최초에 페이지를 로딩한 시점부터는 페이지 리로딩 없이 필요한 부분만 서버로 부터 받아서 화면을 갱신한다.
  - 필요한 부분만 갱신하기 때문에 네이티브 앱에 가까운 자연스러운 페이지 이동(화면 깜빡임X)과 사용자 경험을 제공할 수 있다.
- 렌더링 방식: CSR

MPA (Multi Page Application)

- 새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스 (HTML, CSS, JS)가 다운되는 전통적인 웹페이지 구성 방식
  - 페이지를 이동하거나 새로고침하면 전체 페이지를 다시 렌더링한다.
- 렌더링 방식: SSR

## 렌더링방식

CSR (Client Side Rendering): 클라이언트 측에서 렌더링하는 방식

- 최초에 한 번 서버에서 전체 페이지를 로딩하여 보여주고 이후에는 사용자의 요청이 올 때마다 리소스를 서버에서 제공한 후 클라이언트가 해석하고 렌더링하는 방식
- 장점
  - js만으로 완전히 페이지를 만들 수 있으며 HTML, CSS를 동적으로 생성할 수 있다.
  - 컴포넌트 단위로 코드를 나누고 다양한 디자인 패턴을 적용할 수 있다
  - Full page load 없이 라우팅이 가능하다
- 단점
  - SEO(Search Engine Optimization)에 취약하다
    - HTML 파일을 하나만 받아와서 작동하다 보니 각각 페이지에 대한 정보를 담기 힘들며, Crawler가 서버에서 페이지를 요청해 HTML만을 읽어 페이지에 어떤 정보가 있는 지 확인하고 DB에 저장해 유저가 검색하면 DB에서 정보를 꺼내준다.
  - 첫 로드시 모든 로직이 담겨 있는 js를 다운로드 해야 해 로딩 속도가 길다.

SSR(Server Side Rendering): 서버 측에서 렌더링하는 방식

- 사용자가 웹 페이지에 접근할 때 서버에서 페이지에 대한 요청을 하며 서버에서는 HTML, VIEW와 같은 리소스들을 어떻게 보여질지 해석하고 렌더링하여 사용자에게 반환한다.
- 장점
  - SEO 검색엔진 최적화에 유리하다
    - Crawler는 페이지를 indexing하기 위해 페이지에 관한 많은 정보가 필요한데 SSR을 활용해 미리 페이지를 빌드하면 Crawler에게 많은 정보를 줄 수 있다.
  - 클라이언트에서 요청한 페이지의 HTML을 다운로드 하기 때문에 CSR보다 초기 로딩 속도가 빠르다.
  - 서버에서 렌더링 후 각각의 페이지를 넘겨받는 것이므로 각각 페이지에 대한 정보를 입력하기 쉽다.
- 단점
  - 사용자 경험 측면
    - 클랙했을 때 새로운 HTML을 받아오기 때문에 요청시마다 새로고침되어 깜빡임이 생긴다.
  - header나 footer처럼 중복되는 내용도 다시 렌더링해야 하기 때문에 초기 진입은 빠를지언정 페이지 이동은 느리다.
  - 완성된 HTML을 js보다 먼저 받아오기 때문에 완성된 HTML로 화면은 확인되지만 js 다운로드가 늦어진다면 기능이 먹통이 된다.
  - TTV(Time To View) ≠ TTI(Time To Interactive)

### React Router V6 기능

REACT에서 CSR기반의 페이지 라우팅을 할 수 있게 도와주는 라이브러리

**URL 제어**
Path Variable

- 특정 자원에 접근하기 위해 사용
- 콜론(:)과 useParams 라는 사용자정의 hook을 이용해 URL 파라미터를 받을 수 있다.

Query String

- URL을 통해 웹 페이지에 데이터를 전달하는 방법
- 보통 쿼리 형태로 되어 있으며 많은 웹 사이트에서 조회 페이지에서 사용된다.
- Path Variable과 달리 라우팅에 영향을 끼치지 않아 <Link>에 따로 명시하지 않아도 된다.
- useSearchParams hook을 사용해 값을 확인할 수 있다.

Page Moving

- useNavaitate hook 이용해 페이지를 이동할 수 있다.
