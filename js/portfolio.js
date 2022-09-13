// nav로 현재 페이지 확인 js
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

window.addEventListener('scroll', function() {
    if (checkVisible($('#heads'))) {
        $('.nav_line').attr('class','nav_line')
        $('.nav_line').eq(0).attr('class','nav_line now_line')
    }else if (checkVisible($('#about'))) {
        $('.nav_line').attr('class','nav_line')
        $('.nav_line').eq(1).attr('class','nav_line now_line')
    }else if (checkVisible($('#projects'))) {
        $('.nav_line').attr('class','nav_line')
        $('.nav_line').eq(2).attr('class','nav_line now_line')
    }if($(window).scrollTop() + $(window).height() == getDocHeight()){
        $('.nav_line').attr('class','nav_line')
        $('.nav_line').eq(3).attr('class','nav_line now_line')
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

// 글자 자동생성 및 삭제 
const $text = document.getElementById("typing");

// 글자 모음
const letters = [" Welcome", " Designed By HaeChan"];

// 글자 입력 속도
const speed = 100;
let i = 0;

// 타이핑 효과
    const typing = async () => {  
    const letter = letters[i].split("");
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
    }
    // 잠시 대기
    await wait(800);
    // 지우는 효과
    if (letters[i]) remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
        await wait(speed);
        letter.pop();
        $text.innerHTML = letter.join("");
        if(letter.length == 0){
            $text.innerHTML=" "
        }
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i++;
    if(i == 2){
        i = 0;
    }
    typing()
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
typing()


//switch toggle
let togproject = document.querySelector('.togproject')
let togskill = document.querySelector('.togskill')
let skill = document.querySelector('.skill')
let projects = document.querySelector('.projects')

togproject.addEventListener('click', function(){
    skill.classList.remove('active')
    togskill.classList.remove('action')
    togproject.classList.toggle('action');
    projects.classList.toggle('active');
})

togskill.addEventListener('click', function(){
    projects.classList.remove('active')
    togproject.classList.remove('action')
    togskill.classList.toggle('action');
    skill.classList.toggle('active');
})

//projects slider 
$(document).ready(function () {
	$(".box").not(".div_on").hide(); //화면 로딩 후 첫번째 div를 제외한 나머지 숨김
});

function prevSlide() {
	$(".box").hide(); //모든 div 숨김
	let allSlide = $(".box"); //모든 div 객체를 변수에 저장
	let currentIndex = 0; //현재 나타난 슬라이드의 인덱스 변수
	
	//반복문으로 현재 active클래스를 가진 div를 찾아 index 저장
	$(".box").each(function(index,item){ 
		if($(this).hasClass("div_on")) {
			currentIndex = index;
		}
	});
	
	//새롭게 나타낼 div의 index
	var newIndex = 0;
    
	if(currentIndex <= 0) {
		//현재 슬라이드의 index가 0인 경우 마지막 슬라이드로 보냄(무한반복)
		newIndex = allSlide.length-1;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 뒤로 간 index 지정
		newIndex = currentIndex-1;
	}

	//모든 div에서 active 클래스 제거
	$(".box").removeClass("div_on");
    
	//새롭게 지정한 index번째 슬라이드에 active 클래스 부여 후 show()
	$(".box").eq(newIndex).addClass("div_on");
	$(".box").eq(newIndex).show();
}

//다음 슬라이드
function nextSlide() {
	$(".box").hide();
	var allSlide = $(".box");
	var currentIndex = 0;
	
	$(".box").each(function(index,item){
		if($(this).hasClass("div_on")) {
			currentIndex = index;
		}
        
	});
	
	var newIndex = 0;
	
	if(currentIndex >= allSlide.length-1) {
		//현재 슬라이드 index가 마지막 순서면 0번째로 보냄(무한반복)
		newIndex = 0;
	} else {
		//현재 슬라이드의 index에서 한 칸 만큼 앞으로 간 index 지정
		newIndex = currentIndex+1;
	}

	$(".box").removeClass("div_on");
	$(".box").eq(newIndex).addClass("div_on");
	$(".box").eq(newIndex).show();
	
}
$('.prev').on('click',function(){
    prevSlide()
})

$('.next').on('click',function(){
    nextSlide()
})