let msg_box = document.querySelector('.msg-box');
let sender = document.querySelector('.sender');
let box2 = document.querySelector('.box2');
let msgtxt = document.querySelector('.msg');
let person = "";
const msg = p => {

    let mbox = msg_box;
    if (p == 'Minh') {
        person = 'Minh'
        sender.innerHTML += "Anh Iu <3";
        msgtxt.innerHTML = "Được 1 năm rồi nhỉ. Cảm ơn em vì đã đồng hành cùng anh suốt hành trình này, và cũng xin lỗi vì đã luôn làm em buồn. Anh biết anh tồi nhưng... Trà ơi cùng anh đi tiếp nhé. ANH YÊU EM";

    } else {
        person = 'Tra';
        sender.innerHTML += "Bé Iu <3";
        msgtxt.innerHTML = "Nhắn cho anh những lời em muốn nói nhé!!";
    }
    mbox.classList.add('Fadein');
    setTimeout(() => {
        box2.style.display = 'flex';
        mbox.style.display = 'flex';

    }, 290);


}

const cancel = p => {

    if (person != 'Minh') {
        document.location.href = "https://www.facebook.com/messages/t/100014537854436";
    }

    let mbox = msg_box;
    mbox.classList.remove('Fadein');
    mbox.classList.add('Fadeout');
    setTimeout(() => {
        box2.style.display = 'none';
        mbox.style.display = 'none'
    }, 290);
    sender.innerHTML = "From ";
    msgtxt.innerHTML = "";


}

