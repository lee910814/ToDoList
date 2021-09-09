const button = document.querySelector("#button");//버튼
const input = document.querySelector("#input");//폼
const list = document.querySelector("#list");//리스트
let cnt = 0;//삭제버튼 index
let todo = 4;

function clickButton(){ //버튼에 이벤트를 주기위해 함수정의
    const temp = document.createElement("li");
    temp.setAttribute("class","list-group-item");
    temp.setAttribute("id","li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button style='float:right;' class='btn btn-outline-secondary' type='button' onclick='remove("+cnt+")'>삭제</button>";
    list.appendChild(temp);
}

function remove(cnt){
    let li = document.getElementById('li' + cnt);
    list.removeChild(li);
}
button.addEventListener("click",clickButton);//버튼에 이벤트 정의