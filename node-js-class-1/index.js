// console.log(global);
// global is a node object like javascript window, but there are
// several defarence between global and window object
// gobal object not contain so many things like window object, it just contain few things , 
//Like , setTimeout, setIntervall, clearTimeOut, clearIntervall,setImmidiet , clearImmidiate,queMicroTask,stuctureClone,


// Node Module
//in javascript every js file can get another files information {data/ vasiable}
// there In Node js is a deffarece way, there are every js file is seoparet,so if you wanna access some data of another js file ore npm, you need to import that file, and also export what are you want to import from that file, is you export single function o variable, then just wriye module.export = something, to export, but if you wanna export cupple of thing, then you should export like an object,
// import how you exported; there is an example importing from index2.js file;
const Name = require('./index2');
const { options, get } = require('./index2');
// console.log(options[3]);


//Node: module wraper
//ekhane amera ekta question er ans khuje ber korar cesta korechi,
//requier,module,export, __fileName , __pathName, egula to node er global object e nei tahole amra egula kivabe bebohar kori? mane egula ase kotha theke ?
//
//well, ei bishoy ta bujar jonno Node er build proccess e cokh rakhte hobe
// rayandal Node js toirir shomoy etake shomosto node code guloke ekti invisible efi function e rakha hoy,
// ar require, module,export, __fileName , __pathName egula sei fuction er e parameter
///////Importent NOde: eitake amra kolponay evabe vabte pari, cul paknami kore nije nije ifi fuction bananor dorkar nei, jus a thery
