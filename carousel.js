let curIndex = 0;
const screenWidth = window.innerWidth;
let maxIndex = 0;

const arrowsBind = () => {
	const content = document.querySelector(".content");
	const leftArrow = document.querySelector(".leftArrow");
	const rightArrow = document.querySelector(".rightArrow");
	leftArrow.addEventListener("click",() => {
		curIndex--;
		if(curIndex < 0) curIndex = maxIndex - 1;
		content.style.left = `-${curIndex * screenWidth}px`;

	})
	rightArrow.addEventListener("click",() => {
		curIndex++;
		if(curIndex >= maxIndex) curIndex = 0;
		content.style.left = `-${curIndex * screenWidth}px`;
	})
}

const arrows = () => {
	const commonStyle = `width: 40px; height: 40px; border-radius: 20px; background: #ddd; text-align: center; line-height: 40px; position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; user-select:none;`
	const leftArrowStyle = `left: 10px;`
	const rightArrowStyle = `right: 10px;`
	const leftArrow = `<div class="leftArrow" style="${commonStyle}${leftArrowStyle}">左</div>`
	const rightArrow = `<div class="rightArrow" style="${commonStyle}${rightArrowStyle}">右</div>`
	return `<div class="arrows">${leftArrow}${rightArrow}</div>`
}

const content = (imgs) => {
	const contentStyle = `height: 100%; white-space: nowrap; transition: all ease 0.5s; position: absolute; left: 0;`;
	let itemStr = '';
	imgs.forEach(v => {
	  	itemStr+=item(v)
	})
	return `<div class="content" style="${contentStyle}">${itemStr}</div>`;
}

const item = (img) => {
	const itemStyle = `width: ${screenWidth}px; height: 100%; display: inline-block; border`;
	return `<div style="${itemStyle}"><img src="${img}" style="width: 100%; height: 100%;"/></div>`;
}

export const carousel = ( imgs, speed, parentEle ) => {
	maxIndex = imgs.length;
	const containerStyle = `width: 100%; max-height: 150px; height: 150px; position: relative; overflow: hidden;`;
	const containerTamp = `<div style="${containerStyle}">${content(imgs)}${arrows()}</div>`;
	document.querySelector(parentEle).innerHTML = containerTamp;
	window.onload = arrowsBind();
}
  
// carousel([`http://h.hiphotos.baidu.com/image/h%3D300/sign=973e5976f7f2b211fb2e834efa806511/bd315c6034a85edf0ab7c12645540923dd5475ff.jpg`,
// 	`http://h.hiphotos.baidu.com/image/h%3D300/sign=973e5976f7f2b211fb2e834efa806511/bd315c6034a85edf0ab7c12645540923dd5475ff.jpg`,
// 	`http://h.hiphotos.baidu.com/image/h%3D300/sign=973e5976f7f2b211fb2e834efa806511/bd315c6034a85edf0ab7c12645540923dd5475ff.jpg`],500,`#demo`)

