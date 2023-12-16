import './App.css';

function App() {

  /**
   * 숙제1) 숫자여러개를 array 자료에 저장해놨는데
  
  가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
  
  이걸 클리닝해주는 함수가 필요합니다. 
  
  클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
  
  [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오
   */

  function arr(x: (number | string)[]) {
    let clean: number[] = [];
    x.forEach((data) => {
      if (typeof data === 'string') {
        clean.push(parseFloat(data))
      } else {
        clean.push(data)
      }
    })
    return (clean)
  }
  console.log(arr(['1', '2', 3, 4]))



  /** (숙제2) 다음과 같은 함수를 만들어보십시오.
  let 철수쌤 = { subject : 'math' }
  let 영희쌤 = { subject : ['science', 'english'] }
  let 민수쌤 = { subject : ['science', 'art', 'korean'] }
  과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
  과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
  철수쌤같은 선생님 object 자료를 집어넣으면 
  그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
  예시)
  만들함수( { subject : 'math' } )  //이 경우 'math'를 return
  만들함수( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
  만들함수( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 
  */

  function 숙제2(x: { subject: string | string[] }) {
    if (typeof x.subject === 'string') {
      return (
        x.subject
      )

    }
    else if (Array.isArray(x.subject) === true) {

      return (x.subject[x.subject.length - 1])
    } else {
      return '없음'
    }
  }
  console.log(숙제2({ subject: ['english', 'art'] }))

/**
(숙제1) object 타입을 정의한 
type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
 */

type 객체= {name:string};
type 객체2= {name:string}
type 객체합체 = 객체&객체2
// let 객체테스트 : 객체합체 = {name:'1',name:'2'}

/**
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 

1. 이 타입은 object 자료형이어야합니다.

2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 

3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.

4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  

type alias로 만들어보셈  
 */

type HomeType = {color?:string,size:number,readonly position:number[]}
let home:HomeType = {color:'블루',size:10,position:[10,20]}
console.log(home)

/**
 (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 

1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }

2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.

3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
 */

type 숙제3Type = {name:string, phone:number, email:string}

/**
Q. 이런 함수는 어떻게 만들까요?

- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고

- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.

- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능

- ['가위', '바보'] 이런거 return하면 에러나야함 


 */
function 가위바위보 (x:'가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
 return ['가위','바위']
}

/**
(숙제1) 아래 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

- type 키워드를 쓰든 말든 알아서 합시다.   

 */

type PlusOneType = (x:number)=>number
let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x:number):number{
    return x + 1
  },
  changeName : () => void
    console.log('안녕')
  
}
회원정보.plusOne(1);
회원정보.changeName();


/**
(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
 */


type CutZeroType=(x:string) => string;

let cutZero:CutZeroType = (a)=>{
    let result = a.replace(/^0+/,"");
    return result
} 

let removeDash= (a:string)=>{
  let result = a.replace(/-/g,"");
  return parseFloat(result)
}
console.log(cutZero('Oe-ro'))
console.log(removeDash('Oe-ro'))

/**
(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
예시)만들함수('010-1111-2222', cutZero, removeDash)

 */

let 숙제3함수 = (a:string,b:(x:string)=>string,c:(x:string)=>number)=>{
  
  console.log(c(b(a)))

}
숙제3함수('010-1111-2222', cutZero, removeDash)



/**
interface
(숙제1) interface 이용해서 간단하게 타입을 만들어봅시다 
 */
let 상품:ProductInterface = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
interface ProductInterface {
  brand:string,
  serialNumber:number,
  model:string[]
}

/**
(숙제2) array 안에 object 여러개가 필요합니다.
 */
let 장바구니:MarketInterface[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
interface MarketInterface {product:string;price:number}
/**
(숙제3) 위에서 만든 타입을 extends 해봅시다.
갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다. 
{ product : '청소기', price : 7000, card : false }
위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
 */
interface add extends MarketInterface{
  card:boolean
}

/**
(숙제4) object 안에 함수를 2개 넣고 싶은데요 

1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다. 

2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다. 

이 object 자료를 어떻게 만들면 될까요? 

interface를 이용해서 object에 타입지정도 해보십시오. 
 */

interface MathObj {
  plus:(a:number,b:number) => number,
  minus:(a:number,b:number) => number
}

let Obj:MathObj = {
  plus(a,b){
    return a+b
  },
  minus(a,b){
    return a-b
  }
}


/** Destructiong
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈 
 */

function 최댓값(...x : number[]) {
  let result = 0;
  x.forEach((i)=>{
    if (result < i) {
      result = i
    }
  })
  return result;
}


  return (
    <div>

    </div>
  );
}

export default App;
