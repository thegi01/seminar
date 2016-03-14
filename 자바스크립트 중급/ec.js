window.onload = function(){ 

	/* 글로벌 코드 실행 콘텍스트 */

	var value = 123;
	function sports(){};
	var music = function(){};
	sports();

	// 3. 코드 실행
	실행 컨텍스트 = {
		렉시컬 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : { 
						sports : Function Object,
						value : 123,
						music : Function Object
					}
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		변수 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : 빌트인 글로벌 오브젝트(NaN, undefined, Infinity, eval, parseInt, isNaN)
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		this 바인딩 컴포넌트  : 글로벌 오브젝트
	}

	// 2. 초기화
	실행 컨텍스트 = {
		렉시컬 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : { 
						sports : Function Object,
						value : undefined,
						music : undefined
					}
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		변수 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : 빌트인 글로벌 오브젝트(NaN, undefined, Infinity, eval, parseInt, isNaN)
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		this 바인딩 컴포넌트  : 글로벌 오브젝트
	}


	// 1. 준비단계
	
	글로벌 환경(GE)  : {
		환경 레코드(ER) : {
			오브젝트 환경 레코드(OER) : 빌트인 글로벌 오브젝트(NaN, undefined, Infinity, eval, parseInt, isNaN)
		}, 
		외부 렉시컬 환경 참조 : null
	}
	

	// 글로벌 오브젝트 생성하고 엔진이 실행 컨텍스트 안으로 이동
	// 렉시컬 환경 컴포넌트 생성
	// 글로벌 환경을 렉시컬 환경 컴포넌트와 변수 환경 컴포넌트에 설정
	// this 바인딩 컴포넌트 생성

	실행 컨텍스트 = {
		렉시컬 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : 빌트인 글로벌 오브젝트(NaN, undefined, Infinity, eval, parseInt, isNaN)
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		변수 환경 컴포넌트 : {
			글로벌 환경(GE)  : {
				환경 레코드(ER) : {
					오브젝트 환경 레코드(OER) : 빌트인 글로벌 오브젝트(NaN, undefined, Infinity, eval, parseInt, isNaN)
				}, 
				외부 렉시컬 환경 참조 : null
			}
		},
		this 바인딩 컴포넌트  : 글로벌 오브젝트
	}
	


}
