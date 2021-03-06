import React, { Component } from 'react';

class Counter extends Component {
  // 컴포넌트에 state를 설정할 때는 constructor 메소드를 작성하여 설정한다
  // 반드시 super(props)를 호출해 주어야 한다
  // 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출해준다
  // 컴포넌트의 state는 객체 형식이어야 한다
  // constructor(props) {
  //   super(props);
  //   // state의 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixNumber: 0,
  //   };
  // }

  // 클래스 필드
  // 클래스 필드를 정의하는 경우, this에 클래스필드를 바인딩 해서는 안된다
  // this는 클래스의 constructor나 메소드 내에서만 가능하다

  state = {
    number: 0,
    fixNumber: 0,
  };

  render() {
    // state를 조회할 때는 this.state로 조회한다
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>number: {number}</h1>
        <h2>Fix Number: {fixNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정한다
          // onClick={() => {
          //   // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
          //   this.setState({ number: number + 1 });
          //   this.setState((prevState, props) => {
          //     return {
          //       // prevState: 기존 상태, props는 현재 지니고 있는 props
          //       // props가 필요하지 않다면 생략 가능
          //       // 업데이트 하고 싶은 내용
          //     };
          //   });
          // }}

          onClick={() => {
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              },
              () => {
                console.log('방금 setState가 호출되었습니다1');
                console.log(this.state);
              },
            );
            // 위 코드와 아래 코드는 똑같은 기능
            // 아래 코드는 함수에서 바로 객체를 반환한다는 뜻
            // 값을 바로 반환하고 싶다면 코드블록{} 생략 가능
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('방금 setState가 호출되었습니다2');
                console.log(this.state);
              },
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
