import less from "less";
import fs from "fs";


function template( css) {
    return `const pickerCss = `+

 "`<style id='stylesheet-for-custom-picker'>"+css+"</style>`;"+

`
let pickerCssNode;
function insertPickerCss(){
    if(!document.querySelector("#stylesheet-for-custom-picker")){
        document.head.insertAdjacentHTML('beforeend', pickerCss);
        pickerCssNode = document.querySelector("#stylesheet-for-custom-picker");
    }
}
function removePickerCss(){
    if(pickerCssNode){
        pickerCssNode.remove();
    }
}
export { insertPickerCss, removePickerCss };
`;
}

(async function () {
    let lessfile = fs.readFileSync("picker.less", "utf8");

    let { css } =  await less.render(lessfile, { cleancss: true, compress:true});

    fs.writeFileSync("./picker-src/pickerCss.js", template( css ),"utf8");
})()