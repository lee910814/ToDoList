const says=[
    {
        say:"오늘의 할 일을 내일로 미루지마"
    },
    {
        say:"넌 할 수 있어 절대 포기하지마"
    },
    {
        say:"너 아주 잘하고 있어 멋있어"
    }
];

const say = document.querySelector("#say span:first-child");
const repeat = says[Math.floor(Math.random() * says.length)];
say.innerText = repeat.say
setTimeout(repeat,100);

