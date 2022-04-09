
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');
    var inputTime = new Date('2021-8-9 12:00:00'); //返回的是用户输入的毫秒数
    countDown()
    setInterval(countDown,1000)
    function countDown(time) {
            var nowTime = new Date(); //返回的是当前时间的毫秒数
            var times = (inputTime - nowTime) / 1000; //剩余时间的毫秒数
            var h = parseInt(times / 60 / 60 % 24); //时
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h;
            var m = parseInt(times / 60 % 24); //分
            m = m < 10 ? '0' + m : m;
            minute.innerHTML = m;
            var s = parseInt(times % 24); //秒
            s = s < 10 ? '0' + s : s;
            second.innerHTML = s;
        }
  