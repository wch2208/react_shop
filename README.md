# 리액트 쇼핑몰 프로토타입

배포 링크 : https://shop-wch2208.vercel.app

## 프로젝트 소개

---

이 프로젝트는 fake store api를 활용해서 쇼핑몰의 화면을 구현한 프로젝트입니다. 사용자는 이 사이트를 통해 다양한 상품을 탐색하고 원하는 제품을 장바구니에 담을 수 있습니다.

## 주요 기능

---

- 페이지 구현 및 라우팅
- 반응형 디자인
- 다크 모드
- 장바구니에 제품 추가 및 삭제 기능

![프로젝트 동작 시연](src/assets/프로젝트소개.gif)

![반응형 디자인 시연](src/assets/프로젝트반응형디자인소개.gif)

## 기술

---

Frontend : `React`, `MUI`, `Recoil`

Deployment : `vercel`

> Recoil

- atoms

  - 상품 목록 데이터

  - 전역 상태로 만들어서 API 통신 1회만 실행

  - 상품이 보여지는 모든 컴포넌트에서 활용

- 장바구니 데이터

  - 네비게이션바의 카트 벳지에서 활용

  - 장바구니 컴포넌트에서 활용

- selectors

  - 장바구니의 제품 총합계 데이터 계산

  - 로직을 store에 모아서 관리할 수 있음

> Vercel

- Github에 연동과 프로젝트 생성이 동시에 간편하게 이뤄짐

- 자동 배포

  - git push로 실행됨

> React

- SPA 구현

  - 초기 로딩 후 페이지 전환이 빠름

- 컴포넌트 기반

  - 버튼, 상품 카드 등을 구현할 때 재사용 가능

- 라이브러리 활용

  - Recoil, Router, MUI를 활용

---

## 배경 및 동기

웹 개발을 학습하는 과정에서 HTML, CSS, JavaScript와 같은 다양한 웹 기술들을 따로따로 배워왔습니다. 하지만 이러한 기술들을 단순히 개별적으로 배우는 것에서 그치지 않고, **실제로 어떻게 통합되어 하나의 웹사이트를 이루는지를 경험**해보고 싶었습니다. 그래서 저는 이론적 지식과 실습을 결합하여, 실제로 작동하는 웹사이트를 만들어 보기로 결심했습니다. 이 쇼핑몰 프로젝트는 제가 배운 모든 것을 실제로 적용해보고, 이론과 실습의 균형을 맞추는 데 도움이 될 것이라고 생각했습니다. 또한, 실제 사용자들이 이용할 수 있는 서비스를 만들며 사용자 경험(UX)과 사용자 인터페이스(UI) 디자인에 대해 고민해봤습니다. 이 프로젝트를 통해, 저는 웹 개발자로서의 실력을 한 단계 더 발전시키고 싶었습니다.

---

## 배운 점

기획이 미비한 상태에서 의욕이 앞서 만들기부터 시작하면서 시행착오를 많이 겪었습니다. React와 Recoil을 사용한 경험은 제 개발 능력에 큰 도전이자 성장의 기회였습니다. 특히, Recoil을 사용한 상태 관리는 단순한 문서 작업을 넘어서는 실제 웹사이트의 동적인 상호작용에서 필수적인 부분임을 깊이 이해할 수 있었습니다. 이는 **웹개발에서 데이터 흐름과 상태 관리의 중요성을 명확히 인식하는 계기**가 되었습니다. 또한, Recoil과 Vercel을 적용하는 과정은 **새로운 도구들을 빠르고 효과적으로 습득하고 적용**하는 능력을 길러주었습니다. 사이트의 각 요소를 구현하는 과정에서는 세부적인 UI 구현과 사용자 경험에 대한 고민을 할 수 있었습니다. 이러한 경험들은 제가 더 복잡하고 동적인 웹 애플리케이션을 개발하는 데 필요한 기초를 다지는 데 큰 도움이 될 것입니다.

---
