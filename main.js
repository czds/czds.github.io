var piano = document.querySelector('#piano').querySelectorAll('span');
var sound = document.querySelector('.sound').querySelectorAll('audio');
var white = document.querySelector('.white').querySelectorAll('span');
var black = document.querySelector('.black').querySelectorAll('span');

window.play = function (el) {
    if (!el.isActive) {
        let index = el.$el.className.split('-')[1];
        sound[index].play();
        el.isActive = true;
        setTimeout(function () {
            el.isActive = false;
        }, 2000, el);
    }
};

function show(el) {
    if (!el.classList.contains('active')) {
        el.classList.add('active');
        setTimeout(function () {
            el.classList.remove('active');
        }, 1000, el);
    };
};

function go(key) {
    switch (key) {
        case 'a': play(w0); show(white[0]);
            break;
        case 'b': play(w1); show(white[1]);
            break;
        case 'c': play(w2); show(white[2]);
            break;
        case 'd': play(w3); show(white[3]);
            break;
        case 'e': play(w4); show(white[4]);
            break;
        case 'f': play(w5); show(white[5]);
            break;
        case 'g': play(w6); show(white[6]);
            break;
        case 'h': play(w7); show(white[7]);
            break;
        case 'i': play(w8); show(white[8]);
            break;
        case 'j': play(w9); show(white[9]);
            break;
        case 'k': play(w10); show(white[10]);
            break;
        case 'l': play(w11); show(white[11]);
            break;
        case 'm': play(w12); show(white[12]);
            break;
        case 'n': play(w13); show(white[13]);
            break;
        case 'o': play(w14); show(white[14]);
            break;
        case 'p': play(w15); show(white[15]);
            break;
        case 'q': play(w16); show(white[16]);
            break;
        case 'r': play(w17); show(white[17]);
            break;
        case 's': play(w18); show(white[18]);
            break;
        case 't': play(w19); show(white[19]);
            break;
        case 'u': play(w20); show(white[20]);
            break;
        case 'v': play(w21); show(white[21]);
            break;
        case 'w': play(w22); show(white[22]);
            break;
        case 'x': play(w23); show(white[23]);
            break;
        case 'y': play(w24); show(white[24]);
            break;
        case 'z': play(w25); show(white[25]);
            break;
        case 'A': play(w26); show(white[26]);
            break;
        case 'B': play(w27); show(white[27]);
            break;
        case 'C': play(w28); show(white[28]);
            break;
        case 'D': play(w29); show(white[29]);
            break;
        case 'E': play(w30); show(white[30]);
            break;
        case 'F': play(w31); show(white[31]);
            break;
        case 'G': play(w32); show(white[32]);
            break;
        case 'H': play(w33); show(white[33]);
            break;
        case 'I': play(w34); show(white[34]);
            break;
        case 'J': play(w35); show(white[35]);
            break;
        case 'K': play(w36); show(white[36]);
            break;
        case 'L': play(w37); show(white[37]);
            break;
        case 'M': play(w38); show(white[38]);
            break;
        case 'N': play(w39); show(white[39]);
            break;
        case 'O': play(w40); show(white[40]);
            break;
        case 'P': play(w41); show(white[41]);
            break;
        case 'Q': play(w42); show(white[42]);
            break;
        case 'R': play(w43); show(white[43]);
            break;
        case 'S': play(w44); show(white[44]);
            break;
        case 'T': play(w45); show(white[45]);
            break;
        case 'U': play(w46); show(white[46]);
            break;
        case 'V': play(w47); show(white[47]);
            break;
        case 'W': play(w48); show(white[48]);
            break;
        case 'X': play(w49); show(white[49]);
            break;
        case 'Y': play(w50); show(white[50]);
            break;
        case 'Z': play(w51); show(white[51]);
            break;
        case '1': play(w52); show(black[0]);
            break;
        case '2': play(w53); show(black[1]);
            break;
        case '3': play(w54); show(black[2]);
            break;
        case '4': play(w55); show(black[3]);
            break;
        case '5': play(w56); show(black[4]);
            break;
        case '6': play(w57); show(black[5]);
            break;
        case '7': play(w58); show(black[6]);
            break;
        case '8': play(w59); show(black[7]);
            break;
        case '9': play(w60); show(black[8]);
            break;
        case '0': play(w61); show(black[9]);
            break;
        case '-': play(w62); show(black[10]);
            break;
        case '[': play(w63); show(black[11]);
            break;
        case ']': play(w64); show(black[12]);
            break;
        case '\\': play(w65); show(black[13]);
            break;
        case ';': play(w66); show(black[14]);
            break;
        case ',': play(w67); show(black[15]);
            break;
        case '.': play(w68); show(black[16]);
            break;
        case '/': play(w69); show(black[17]);
            break;
        case '!': play(w70); show(black[18]);
            break;
        case '@': play(w71); show(black[19]);
            break;
        case '#': play(w72); show(black[20]);
            break;
        case '$': play(w73); show(black[21]);
            break;
        case '%': play(w74); show(black[22]);
            break;
        case '^': play(w75); show(black[23]);
            break;
        case '&': play(w76); show(black[24]);
            break;
        case '*': play(w77); show(black[25]);
            break;
        case '(': play(w78); show(black[26]);
            break;
        case ')': play(w79); show(black[27]);
            break;
        case '_': play(w80); show(black[28]);
            break;
        case '{': play(w81); show(black[29]);
            break;
        case '}': play(w82); show(black[30]);
            break;
        case '|': play(w83); show(black[31]);
            break;
        case ':': play(w84); show(black[32]);
            break;
        case '<': play(w85); show(black[33]);
            break;
        case '>': play(w86); show(black[34]);
            break;
        case '?': play(w87); show(black[35]);
            break;
        default:
    }
};

var myPiano = new Vue({
    el: '#content',
    data: {
        content: '',
        speed: 0.6,
        interval: null
    },
    methods: {
        play: function () {
            stop();
            let arr = this.content.replace(/[^\w\[\]\\;,\./!@#\$%\^&\*\(\)\{\}\|:<>\?_-\s]/g, "").split('');
            let i = 0;
            this.interval = setInterval(function () {
                if (i < arr.length)
                    go(arr[i++]);
            }, this.speed * 1000, i)
        },
        stop: function () {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }
    }
});

for (let i = 0; i < 88; i++) {
    let el = '.w-' + i,
        name = ('w' + i);
    window[name] = new Vue({
        'el': el,
        'data': {
            isActive: false
        },
        'methods': {
            play
        }
    })
};

var input = document.querySelector('textarea');
var inputSign = false, inputCache = '';

input.addEventListener('compositionstart', e => {
    inputSign = e.isTrusted;
});

input.addEventListener('compositionend', e => {
    inputSign = e.isTrusted;
    inputCache = ''
});

input.addEventListener('keydown', e => {
    e.stopPropagation();
});

input.addEventListener('input', e => {
    if (!e.data)
        return;

    let data = e.data.replace(/'/g, "");

    go(data.replace(inputCache, ""));

    if (inputSign)
        inputCache = data;

    return false;
});

document.addEventListener('keydown', e => {
    go(e.key);
    return false;
});

