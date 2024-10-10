$(()=>{

})

//메뉴이동
function moveMenu(path) {
	// 현재 URL 전체 가져오기
	const currentUrl = window.location.href;

	// URL 객체 사용
	const url = new URL(currentUrl);

	// 프로토콜, 호스트, 그리고 경로를 합쳐서 원하는 URL 추출
	const baseUrl = `${url.protocol}//${url.host}${url.pathname.split('/').slice(0, -1).join('/')}/`;

	if(baseUrl.indexOf('http') > 0 || path == ''){
		//웹인 경우 || 홈 이동인 경우
		window.location.href=baseUrl + path;
	} else {
		//로컬인 경우
		window.location.href=baseUrl + path + '.html';
	}
}


//navigator.clipboard를 지원하지 않는 브라우저 대응
function copyToClipboard(text) {
    var textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = "fixed";  // DOM에서 보이지 않도록 설정
    document.body.appendChild(textarea);
    textarea.select();  // 텍스트 영역을 선택
    try {
        return document.execCommand("copy");  // 클립보드에 복사
    } catch (e) {
        alert("복사 실패하였습니다.", e);
        return false;
    } finally {
        document.body.removeChild(textarea);
    }
}

//천 단위 구분 기호
function formatNumber(num) {
    const numStr = num.toString();
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//로딩패널 보이기
function loadingStart(){
	$('#loadingPanel').css('display','flex');	
};

//로딩패널 숨기기
function loadingEnd(){
	$('#loadingPanel').css('display','none');	
};

//모바일 여부 판단
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 모바일 디바이스의 경우 일반적으로 찾을 수 있는 키워드
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}