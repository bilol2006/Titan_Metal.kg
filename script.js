const t={
ru:{subtitle:'Нержавейка борбору №1',wa:'📱 WhatsApp',call:'☎ Позвонить',insta:'📷 Instagram',tt:'🎵 TikTok',map:'📍 Наш адрес',footer:'Работаем по всему Кыргызстану'},
kg:{subtitle:'Нержавейка борбору №1',wa:'📱 WhatsApp',call:'☎ Чалуу',insta:'📷 Instagram',tt:'🎵 TikTok',map:'📍 Дарек',footer:'Кыргызстан боюнча иштейбиз'}
};
function setLang(l){
localStorage.lang=l;
const d=t[l];
subtitle.textContent=d.subtitle;
wa.textContent=d.wa;
call.textContent=d.call;
insta.textContent=d.insta;
tt.textContent=d.tt;
map.textContent=d.map;
footer.textContent=d.footer;
}
setLang(localStorage.lang||'ru');
