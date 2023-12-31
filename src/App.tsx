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


/** Destructiong 추가
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


/*
(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요? 

그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

(조건) private static x = 10; 

*/
/**
(숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 
array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

(동작 예시)
함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 
 */
type CountType = <T>(a:T[]|string) => number;
const Count:CountType = (a) => a.length;
console.log(Count<string>('string'))


/** 
(숙제2) Animal 이라는 타입이 있습니다.
interface Animal {
  name : string;
  age : number 
}
let data = '{"name" : "dog", "age" : 1 }'
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 
data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
오늘 배운 Generic을 이용해서 구현해보도록 합시다.  
(동작 예시)
함수<Animal>(data) 이렇게 쓰면 이 자리에 { name : 'dog' , age : 1 } 이런 object 자료가 남아야합니다. 
근데 타입은 Animal임
*/
interface Animal {
  name : string;
  age : number 
}
let data = '{"name" : "dog", "age" : 1 }'

type 함수Type = <T extends string>(a:T)=>T;
const 함수 :함수Type= (a) => JSON.parse(a);
console.log(함수(data))

/**
(숙제3) class 를 수정해봅시다.

class Person {
  name;
  constructor(a){
    this.name = a;
  }
}
let a = new Person('어쩌구');
a.name //any 타입이 되었넹 

지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
이게 싫어서 파라미터에 string을 집어넣으면 string 타입
number를 집어넣으면 number 타입
string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 
오늘 배운 Generic을 이용해봅시다. 
 */

class Person<T> {
  name:T;

  constructor(a:T){
    this.name = a;
  }
}
let a = new Person(['어쩌구']);
console.log(a)

/**
(숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다. 

tuple 타입과 spread 연산자를 써보도록 합시다. 
 */

let arr1:[string,number,...Boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]

/**
 (숙제3) 함수에 타입지정을 해보도록 합시다.

function 함수(){
}
1. 이 함수의 첫째 파라미터는 문자,
2. 둘째 파라미터는 boolean,
3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다. 
그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요? 
오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
 */

function 함수1(...x:[string,boolean,...(number|string)[]]){
}
함수1('a', true, 6, 3, '1', 4)

/**
숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다. 
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다. 

(동작예시)
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 
[ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
 */

function 함수2(...x:[...(string|number)[]]):(string[]|number[])[]{
  let a :string[] = [];
  let b :number[] = [];
  x.forEach(element => {
    if(typeof element === 'string'){
      a.push(element)
    }else{
      b.push(element)
    }
  }
  );
  return [a,b]
}

console.log(함수2('b', 5, 6, 8, 'a'))
/*
이렇게 하는 방법도 있음
unction 함수(...rest :(string|number)[]){

  let result :[string[], number[]] = [[],[]];

  rest.forEach((a)=>{
    if (typeof a === 'string') {
      result[0].push(a)
    } else {
      result[1].push(a)
    }
  })

  return result;  
} 
*/

/**
(숙제1) 다음 자료의 타입을 지정해보십시오. 
let obj = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}
 */
type ObjType ={
  [key:string] :string|number
}
let obj:ObjType = {
  model : 'k5',
  brand : 'kia',
  price : 6000,
  year : 2030,
  date : '6월',
  percent : '5%',
  dealer : '김차장',
}
/**
 (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.
 let obj = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}
object 안에 object 안에 object가 들어있습니다.
타입지정 해보도록 합시다. 물론 비슷한 object들이 
더 중첩되어도 가능하게 recursive한 타입을 써보는건 어떨까요. 
 */

interface ObjRecall {
  [key:string] : ObjRecall |number

}

let obj2:ObjRecall = {
  'font-size' : 10,
  'secondary' : {
    'font-size' : 12,
    'third' : {
      'font-size' : 14
    }
  }
}
console.log(obj2)
return (
    <div>

    </div>
  );
}

export default App;
