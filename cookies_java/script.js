const btn_close = document.querySelector('#close')
const cont_cookies = document.querySelector('.cookies-box')

const acep = document.querySelector('#acep');
const show = document.querySelector('#ver');
const mod = document.querySelector('.modal');

const close_mode = document.querySelector('#close_modal');

const ac = document.querySelector('#acept-cookie');


function comprobarcookies(){
    if(localStorage.cookie1 == 'true'){
        cont_cookies.style.bottom = '-200px'
    }

}

comprobarcookies();






function aceptarCookies(){
    localStorage.cookie1 = 'true'
    cont_cookies.style.bottom = '-200px'

    let expire = Date()
    expire = new Date(expire.getTime() + 77660000)
    document.cookie1 = 'cookie1=aceptada; + expire'
}


acep.addEventListener('click', () => {
    aceptarCookies();
})







btn_close.addEventListener('click', () => {
 cont_cookies.style.bottom = '-200px'
})


show.addEventListener('click', () => {
    mod.style.visibility = 'visible'
    mod.style.opacity = '1'
})

close_mode.addEventListener('click', () => {
    mod.style.visibility = 'hidden'
    mod.style.opacity = '0'

})

ac.addEventListener('click', () => {
    mod.style.visibility = 'hidden'
    mod.style.opacity = '0'
    aceptarCookies();


})




