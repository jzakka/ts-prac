# TypeScript 학습 커리큘럼

> 대상: Go 경험 1.5년+ 개발자, JS/TS는 처음
> 방식: Go와 비교하며 빠르게 핵심만, 직접 코드 실습
> 실행: `npx ts-node src/lessonXX.ts`

---

## Phase 1: JS/TS 속성 입문 (Go 개발자용)

### Lesson 01 - JS/TS 핵심 문법 한판 정리
- Go와 다른 점 위주로: `let`/`const`, 화살표 함수, 템플릿 리터럴
- `===` vs `==`, `null` vs `undefined`
- 구조 분해(Destructuring), 스프레드(`...`)
- 배열 메서드: `map`, `filter`, `reduce` (Go의 for loop 대체)
- 파일: `src/lesson01.ts`

### Lesson 02 - 함수와 클로저
- 화살표 함수, 콜백 패턴 (Go와 비슷하지만 훨씬 많이 씀)
- 클로저(Closure)가 JS에서 핵심인 이유
- `this`의 함정 (Go에는 없는 개념)
- 파일: `src/lesson02.ts`

---

## Phase 2: TypeScript 타입 시스템 (Go와 가장 다른 부분)

### Lesson 03 - Interface & Type Alias
- `interface` vs `type` (Go의 struct/interface와 비교)
- 선택적 속성(`?`), `readonly`
- 구조적 타이핑 (Go도 structural typing이지만 TS는 더 유연)
- 파일: `src/lesson03.ts`

### Lesson 04 - Union, Literal, Narrowing
- Union 타입: `string | number` (Go에는 없는 강력한 기능)
- Literal 타입: `"success" | "error"`
- 타입 좁히기(Narrowing): `typeof`, `in`, 타입 가드
- 판별 유니온 (Discriminated Union)
- 파일: `src/lesson04.ts`

### Lesson 05 - 제네릭 (Generics)
- Go 제네릭과 비교: `<T>` vs `[T any]`
- 제약 조건: `extends` (Go의 `~` 제약과 비교)
- 제네릭 함수, 인터페이스, 타입
- 파일: `src/lesson05.ts`

### Lesson 06 - 유틸리티 타입 & 고급 타입
- `Partial`, `Required`, `Pick`, `Omit`, `Record`
- Mapped Type, Conditional Type
- `keyof`, `typeof`, 인덱스 접근 타입
- `never` 타입 활용
- 파일: `src/lesson06.ts`

---

## Phase 3: 비동기 & 실전 패턴

### Lesson 07 - Promise & async/await
- Go의 goroutine/channel과 완전히 다른 모델
- 콜백 → Promise → async/await 진화 과정
- `Promise.all`, `Promise.race`
- 에러 처리: `try/catch` (Go의 `if err != nil` 대체)
- 파일: `src/lesson07.ts`

### Lesson 08 - 모듈 & 클래스
- `import/export` (Go의 package와 비교)
- 클래스: `public`/`private`/`protected`, `extends`, `implements`
- 언제 클래스 vs 함수형으로 갈지
- 파일: `src/lesson08/`

### Lesson 09 - 실전 패턴 모음
- Enum vs `as const` (어떤 걸 써야 할까)
- 타입 가드 함수 (`is`)
- 함수 오버로드
- `unknown` vs `any` (왜 `any`를 피해야 하는지)
- 파일: `src/lesson09.ts`

---

## Phase 4: 미니 프로젝트

### Project 1 - Todo CLI 앱
- 타입 설계부터 구현까지
- 파일: `src/projects/todo/`

### Project 2 - API 클라이언트
- fetch, async/await, 에러 핸들링 실전
- 파일: `src/projects/api-client/`

---

## 학습 규칙
1. 한 레슨에 하나의 파일, 직접 타이핑
2. Go와 비교하며 차이점 중심으로 이해
3. 이해 안 되면 바로 질문
4. 다음 레슨 넘어가기 전에 현재 레슨 완전 이해

## 현재 진행 상황
- [x] 커리큘럼 생성
- [x] **Lesson 01** - JS/TS 핵심 문법 한판 정리
- [x] **Lesson 02** - 함수와 클로저
- [ ] **Lesson 03** - Interface & Type Alias ← 현재 위치
