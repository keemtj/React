import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  console.log(qs);
  console.log(location);
  const query = qs.parse(location.search, {
    // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
    // ? 를 생략하지 않으면 showDetail text가 화면에 출력되지 않는다.
    ignoreQueryPrefix: true,
  });

  // 쿼리의 파싱 결과 값은 문자열이다.
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
