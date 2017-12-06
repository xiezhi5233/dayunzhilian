window.onload=function () {
    var lb = document.getElementById('lb');
    var btnl = document.getElementById('sjf-btnl');
    var btnr = document.getElementById('sjf-btnr');
    var banner = document.getElementsByClassName('sjf-lbt')[0];
    var btn = document.getElementsByClassName('sjf-btn')[0];
    var oli = lb.getElementsByTagName('li');
    window.onresize = function () {
        lb.style.width = banner.offsetWidth * (oli.length) + 'px';

        for (var i = 0; i < oli.length; i++) {

            oli[i].style.width = banner.offsetWidth + 'px';

        }
    };

    for (var i = 0; i < oli.length; i++) {

        oli[i].style.width = banner.offsetWidth + 'px';
        li = document.createElement('li');
        btn.appendChild(li);
    }


    btn.children[0].style.backgroundColor = '#FFFFFF';
    lb.appendChild(oli[0].cloneNode(true));
//    lb.style.width = oli[0].offsetWidth * (oli.length) + 'px';

    lb.style.width = banner.offsetWidth * (oli.length) + 'px';

    var timer = null, tim = null, star, end, speed, num = 0, now = 0, timer;
    btnl.onclick = function () {
        clearInterval(tim);
        next();
    }
    btnr.onclick = function () {
        clearInterval(tim);
        num--;
        now--;
        if (now == -1) {
            now = btn.children.length - 1;
        }
        if (num == -1) {
//            lb.style.left = -oli[0].offsetWidth * (oli.length - 1) lbxx-1_.png
            lb.style.left = -banner.offsetWidth * (oli.length - 1) + 'px';
            num = oli.length - 4;
        }
        change(now);
        aniam();
    }
    btn.children[0].className = 'cur';
    for (var i = 0; i < btn.children.length; i++) {
        btn.children[i].index = i;
        btn.children[i].onmouseover = function () {
            change(this.index);
            now = num = this.index;
            aniam();
            for (var i = 0; i < btn.children.length; i++) {
                btn.children[i].className = '';
            }
            btn.children[now].className = 'cur';
        }
    }
    function next() {
        num++;
        now++;
        if (now == btn.children.length) {
            now = 0;
        }
        if (num == oli.length) {
            lb.style.left = 0;
            num = 1;
        }
        change(now);
        aniam();
    }

    function aniam() {
        clearInterval(tim);
        tim = setInterval(function () {
            star = lb.offsetLeft;
            end = -oli[0].offsetWidth * num;
            speed = (end - star) / 7;
            speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
            if (star == end) {
                clearInterval(tim);
            } else {
                lb.style.left = lb.offsetLeft + speed + 'px';
            }
        }, 26)
    }

    function change(j) {
        for (var i = 0; i < btn.children.length; i++) {
            btn.children[i].style.backgroundColor = '';
        }
        btn.children[j].style.backgroundColor = '#FFFFFF';
    }

    timer = setInterval(next, 2000);
    banner.onmouseover = function () {
        clearInterval(timer);
        btnl.style.display = 'block';
        btnr.style.display = 'block';
    }
    banner.onmouseout = function () {
        timer = setInterval(next, 2000);
    }

    var ggd = document.getElementById('kkois');
    ggd.onclick=function(){
        location.assign('download.html')
    }
    var sssd = document.getElementById('kkoi');
    sssd.onclick=function(){
        location.assign('product.html')
    }
}