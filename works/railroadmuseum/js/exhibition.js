$(function(){
    $('.pin1').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit01.jpg)'
        })
        $('.room_info h3').text('중앙홀');
        $('.room_info p').text('철도박물관 실내전시관 메인홀로 우리나라 최초의 철도인 경인철도 기공식 사진과 한국철도 100주년 기념 조형물, 파시 1형 증기기관차 4288호 축소모형이 전시되어 있습니다.')
    });
    $('.pin2').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit02.jpg)'
        })
        $('.room_info h3').text('역사실');
        $('.room_info p').text('우리나라 철도의 탄생 배경부터 현재의 철도로 발전하기까지의 과정을 한눈에 볼 수 있는 전시실입니다 우리나라 주요 철도 간선인 경인선, 경부선, 경의선, 호남선 건설 배경과 발전과정, 한국전쟁과 철도, KTX의 개통 역사를 만나볼 수 있습니다.')
    });
    $('.pin3').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit03.jpg)'
        })
        $('.room_info h3').text('차량실');
        $('.room_info p').text('우리나라 철도차량의 발전과정을 찾아볼 수 있는 전시실입니다. 동력차, 객차, 화차의 모형과 부속, 제작 공구 등 철도차량 유물전시와 함께 철도모형 디오라마, 열차운전 체험 등 기차 체험도 즐길 수 있습니다.')
    });
    $('.pin4').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit05.jpg)'
        })
        $('.room_info h3').text('철도모형 디오라마실');
        $('.room_info p').text('증기기관차, 비둘기호, 새마을호, KTX까지 열차 모형들이 실제 움직이는 모습을 관람할 수 있습니다.')
    });
    $('.pin5').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit04.jpg)'
        })
        $('.room_info h3').text('전기실');
        $('.room_info p').text('철도의 전기·신호·통신의 역사와 원리를 다양한 전시물과 체험으로 알아볼 수 있는 전시실입니다.')
    });
    $('.pin6').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit08.jpg)'
        })
        $('.room_info h3').text('시설실');
        $('.room_info p').text('여러 종류의 레일, 선로보수장비 등을 통해 철길의 역사와 원리를 알아볼 수 있는 전시실입니다.')
    });
    $('.pin7').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit07.jpg)'
        })
        $('.room_info h3').text('수송서비스실');
        $('.room_info p').text('철도 제복, 각종 승차권, 기차여행자료 등을 통해 철도수송서비스에 대해 알아볼 수 있는 전시실입니다.')
    });
    $('.pin8').click(function(){
        $('.map_pin').attr('src','img/icon_loca.png');
        $(this).attr('src','img/icon_currloca.png');
        $('.room_img').css({
            'background-image':'url(img/exhibit06.jpg)'
        })
        $('.room_info h3').text('영상실');
        $('.room_info p').text('다양한 시청각 자료를 관람할 수 있습니다.')
    });
});