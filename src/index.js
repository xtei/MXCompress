function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const txtEditorJs = document.querySelector(".area-editor-js");
const codeEditorJS = CodeMirror.fromTextArea(
  document.getElementById("code-editor-js"),
  {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 5,
    indentWithTabs: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Shift-Alt-F": function (cm) {
        indentAllCode(cm);
      },
    },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  }
);
const txtEditorCss = document.querySelector(".area-editor-css");
const codeEditorCSS = CodeMirror.fromTextArea(
  document.getElementById("code-editor-css"),
  {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 5,
    indentWithTabs: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Shift-Alt-F": function (cm) {
        indentAllCode(cm);
      },
    },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  }
);
const txtViewJs = document.querySelector(".output-area-js");
const codeViewJS = CodeMirror.fromTextArea(
  document.getElementById("output-end"),
  {
    mode: "javascript",
    theme: "dracula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 5,
    indentWithTabs: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Shift-Alt-F": function (cm) {
        indentAllCode(cm);
      },
    },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  }
);
const txtViewCss = document.querySelector(".output-area-css");
const codeViewCss = CodeMirror.fromTextArea(
  document.getElementById("output-end-css"),
  {
    mode: "css",
    theme: "dracula",
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 2,
    indentWithTabs: true,
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "Ctrl-Q": function (cm) {
        cm.foldCode(cm.getCursor());
      },
      "Shift-Alt-F": function (cm) {
        indentAllCode(cm);
      },
    },
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  }
);
function customHint(cm) {
  var cur = cm.getCursor();
  var token = cm.getTokenAt(cur);
  var start = token.start;
  var end = token.end;
  var word = token.string;
  var list = [
    "function",
    "var",
    "let",
    "const",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "default",
    "break",
    "continue",
    "return",
    "try",
    "catch",
    "finally",
    "throw",
    "class",
    "extends",
    "super",
    "constructor",
    "import",
    "export",
    "from",
    "as",
    "new",
    "this",
    "typeof",
    "instanceof",
    "void",
    "delete",
    "in",
    "of",
    "with",
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity",
    "async",
    "await",
    "yield",
    "debugger",
    "Object",
    "Array",
    "String",
    "Number",
    "Boolean",
    "Function",
    "Symbol",
    "Date",
    "RegExp",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Promise",
    "console",
    "window",
    "document",
    "Math",
    "JSON",
    "parseInt",
    "parseFloat",
    "isNaN",
    "isFinite",
    "eval",
    "setTimeout",
    "setInterval",
    "clearTimeout",
    "clearInterval",
    "require",
    "module",
    "exports",
    "arguments",
    "prototype",
    "apply",
    "bind",
    "call",
    "getOwnPropertyDescriptor",
    "defineProperty",
    "hasOwnProperty",
    "toString",
    "valueOf",
    "keys",
    "values",
    "entries",
    "length",
    "push",
    "pop",
    "shift",
    "unshift",
    "concat",
    "slice",
    "splice",
    "indexOf",
    "lastIndexOf",
    "forEach",
    "map",
    "filter",
    "reduce",
    "reduceRight",
    "some",
    "every",
    "find",
    "findIndex",
    "includes",
    "sort",
    "reverse",
    "join",
    "split",
    "replace",
    "charAt",
    "charCodeAt",
    "substring",
    "substr",
    "toUpperCase",
    "toLowerCase",
    "trim",
    "startsWith",
    "endsWith",
    "repeat",
    "search",
    "match",
    "test",
    "exec",
  ];
  if (word) {
    list = list.filter((item) => item.startsWith(word));
  }
  return {
    list: list,
    from: CodeMirror.Pos(cur.line, start),
    to: CodeMirror.Pos(cur.line, end),
  };
}
function customHintCss(cm) {
  var cur = cm.getCursor();
  var token = cm.getTokenAt(cur);
  var start = token.start;
  var end = token.end;
  var word = token.string;
  var list = [
    "body { };",
    "header { };",
    "button { };",
    "a { };",
    "input { };",
    "::placeholder",
    ":hover",
    "color",
    "background",
    "background-color",
    "background-image",
    "background-size",
    "background-repeat",
    "background-position",
    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-radius",
    "box-shadow",
    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "width",
    "height",
    "max-width",
    "min-width",
    "max-height",
    "min-height",
    "display",
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "z-index",
    "float",
    "clear",
    "overflow",
    "overflow-x",
    "overflow-y",
    "visibility",
    "opacity",
    "font",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "line-height",
    "text-align",
    "text-decoration",
    "text-transform",
    "text-shadow",
    "letter-spacing",
    "word-spacing",
    "white-space",
    "vertical-align",
    "content",
    "cursor",
    "list-style",
    "list-style-type",
    "list-style-position",
    "list-style-image",
    "outline",
    "outline-width",
    "outline-style",
    "outline-color",
    "table-layout",
    "border-collapse",
    "border-spacing",
    "caption-side",
    "empty-cells",
    "quotes",
    "counter-reset",
    "counter-increment",
    "resize",
    "transition",
    "transition-property",
    "transition-duration",
    "transition-timing-function",
    "transition-delay",
    "transform",
    "transform-origin",
    "transform-style",
    "animation",
    "animation-name",
    "animation-duration",
    "animation-timing-function",
    "animation-delay",
    "animation-iteration-count",
    "animation-direction",
    "filter",
    "backdrop-filter",
    "clip-path",
    "mask",
    "mask-image",
    "mask-size",
    "mask-position",
    "mask-repeat",
    "mask-origin",
    "mask-clip",
    "mask-composite",
    "mix-blend-mode",
    "isolation",
    "will-change",
    "scroll-behavior",
    "scroll-snap-type",
    "scroll-snap-align",
    "scroll-snap-stop",
  ];
  if (word) {
    list = list.filter((item) => item.startsWith(word));
  }
  return {
    list: list,
    from: CodeMirror.Pos(cur.line, start),
    to: CodeMirror.Pos(cur.line, end),
  };
}
function autoComplete(cm) { cm.showHint({ hint: customHint, completeSingle: false }); } function autoCompleteCss(cm) { cm.showHint({ hint: customHintCss, completeSingle: false }); } codeEditorJS.on("inputRead", function (cm) { autoComplete(cm); }); codeEditorCSS.on("inputRead", function (cm) { autoCompleteCss(cm); }); codeViewJS.on("inputRead", function (cm) { autoComplete(cm); }); codeViewCss.on("inputRead", function (cm) { autoCompleteCss(cm); }); function indentAllCode(cm) { cm.operation(() => { for (let i = 0; i < cm.lineCount(); i++) { cm.indentLine(i, "smart"); } }); } CodeMirror.keyMap.default["Shift-Alt-F"] = function (cm) { indentAllCode(cm); }; CodeMirror.commands.autocomplete = function (cm) { cm.showHint({ hint: CodeMirror.hint.anyword }); }; function autoIndentOnPaste(editor) { editor.on("change", (instance, changeObj) => { if (changeObj.origin === "paste") { const totalLines = instance.lineCount(); instance.operation(() => { for (let i = 0; i < totalLines; i++) { instance.indentLine(i, "smart"); } }); } }); } autoIndentOnPaste(codeEditorJS); autoIndentOnPaste(codeViewJS); autoIndentOnPaste(codeEditorCSS); autoIndentOnPaste(codeViewCss); const copyBtn = document.querySelector(".copyBtn"); const clearInputCode = document.querySelector(".clearBtn"); const fileInputJs = document.querySelector("#file-inputjs"); const fileInputCss = document.querySelector("#file-inputcss"); const compressBtn = document.querySelector(".compressBtn"); const rigthOptions = document.querySelector(".rigth-options-buttons"); const toastContainer = document.querySelector(".toast-container"); const stats = document.createElement("div"); stats.classList.add("states"); rigthOptions.appendChild(stats); rigthOptions.style.display = "none"; let errorTST = false; let modeCompressLanguage = "js"; const dropBg = document.querySelector(".drop-bg"); const dropBgBtn = document.querySelector(".setmenu"); const dropBgCloseBtn = document.querySelector(".closeDrop"); dropBgBtn.addEventListener("click", () => { dropBg.classList.toggle("active"); }); dropBgCloseBtn.addEventListener("click", () => { dropBg.classList.remove("active"); }); const btnLanguageModeJs = document.querySelector(".CompressJs"); const btnLanguageModeCss = document.querySelector(".CompressCSS"); const btnHeaderLanguageModeJs = document.querySelector(".CompressJS"); const btnHeaderLanguageModeCss = document.querySelector(".CompressCss"); const optionsHeader = document.querySelectorAll(".options"); const optionsDrop = document.querySelectorAll(".opt-drop"); optionsHeader.forEach((item) => { item.addEventListener("click", (e) => { const selectedLanguage = item.classList.contains("CompressJS") ? "js" : "css"; setActiveOption(selectedLanguage); }); }); optionsDrop.forEach((item) => { item.addEventListener("click", (e) => { const selectedLanguage = item.classList.contains("CompressJs") ? "js" : "css"; setActiveOption(selectedLanguage); }); }); const titlesection = document.querySelector(".sct1"); function setActiveOption(language) { modeCompressLanguage = language; LanguageModePage(language); updateActiveClasses(language); } function updateActiveClasses(language) { optionsHeader.forEach((i) => { i.classList.toggle( "active", (language === "js" && i.classList.contains("CompressJS")) || (language === "css" && i.classList.contains("CompressCss")) ); }); optionsDrop.forEach((i) => { i.classList.toggle( "active", (language === "js" && i.classList.contains("CompressJs")) || (language === "css" && i.classList.contains("CompressCSS")) ); }); } btnLanguageModeCss.addEventListener("click", () => { modeCompressLanguage = "css"; LanguageModePage(modeCompressLanguage); dropBg.classList.remove("active"); }); btnLanguageModeJs.addEventListener("click", () => { modeCompressLanguage = "js"; LanguageModePage(modeCompressLanguage); dropBg.classList.remove("active"); }); btnHeaderLanguageModeCss.addEventListener("click", () => { modeCompressLanguage = "css"; LanguageModePage(modeCompressLanguage); }); btnHeaderLanguageModeJs.addEventListener("click", () => { modeCompressLanguage = "js"; LanguageModePage(modeCompressLanguage); }); const fileUpload = document.querySelector(".file-upload"); const fileUploadCss = document.querySelector(".file-uploadcss"); fileUpload.addEventListener("click", () => fileInputJs.click()); fileUploadCss.addEventListener("click", () => fileInputCss.click()); fileInputJs.addEventListener("change", handleFileUpload); fileInputCss.addEventListener("change", handleFileUpload); const pasteCode = document.querySelector(".pastBtn"); function pasteCodeFunction(element) { if (element === "js") { navigator.clipboard.readText().then((text) => { codeEditorJS.setValue(text); autoIndentOnPaste(codeEditorJS); }); } else if (element === "css") { navigator.clipboard.readText().then((text) => { codeEditorCSS.setValue(text); autoIndentOnPaste(codeEditorCSS); }); } } function LanguageModePage(language) { titlesection.textContent = `Faça uma compressão do seu código ${language}`; if (language === "js") { txtEditorJs.style.display = "block"; txtEditorCss.style.display = "none"; fileUpload.style.display = "flex"; fileUploadCss.style.display = "none"; } else if (language === "css") { txtEditorJs.style.display = "none"; txtEditorCss.style.display = "block"; fileUpload.style.display = "none"; fileUploadCss.style.display = "flex"; } pasteCode.addEventListener("click", () => { pasteCodeFunction(language); }); } LanguageModePage(modeCompressLanguage); function handleFileUpload(event) { const file = event.target.files[0]; if (file) { const reader = new FileReader(); reader.onload = function (e) { if (modeCompressLanguage === "js") { codeEditorJS.setValue(e.target.result); } else if (modeCompressLanguage === "css") { codeEditorCSS.setValue(e.target.result); } toast("Arquivo importado com sucesso!", false); compressBtn.disabled = false; }; reader.readAsText(file); } } const importArea = document.querySelector(".drag-files-container"); ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => { importArea.addEventListener(eventName, preventDefaults, false); }); ["dragenter", "dragover"].forEach((eventName) => { importArea.addEventListener(eventName, () => importArea.classList.add("active") ); }); ["dragleave", "drop"].forEach((eventName) => { importArea.addEventListener( eventName, () => importArea.classList.remove("active"), false ); }); const fileInput1 = document.querySelector("#file-input"); importArea.addEventListener("drop", handleDrop, false); importArea.addEventListener("click", () => fileInput1.click(), false); function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); } document.addEventListener("dragenter", (e) => { importArea.classList.add("active"); }); function handleDrop(e) { const file = e.dataTransfer.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = function (e) { if (modeCompressLanguage === "js") { codeEditorJS.setValue(e.target.result); } else if (modeCompressLanguage === "css") { codeEditorCSS.setValue(e.target.result); } toast("Arquivo importado com sucesso!", false); compressBtn.disabled = false; }; reader.readAsText(file); } compressBtn.addEventListener("click", function () { let code; if (modeCompressLanguage === "js") { code = codeEditorJS.getValue(); txtViewJs.style.display = "block"; txtViewCss.style.display = "none"; } else if (modeCompressLanguage === "css") { code = codeEditorCSS.getValue(); txtViewJs.style.display = "none"; txtViewCss.style.display = "block"; } if (!code.trim()) { errorTST = true; toast(`Insira um código ${modeCompressLanguage} para comprimir`, errorTST); return; } if (modeCompressLanguage === "js") { try { esprima.parseScript(code); } catch (e) { rigthOptions.style.display = "flex"; errorTST = true; toast("O código JavaScript contém erros de sintaxe.", errorTST); stats.classList.add("error-sintaxe"); stats.innerHTML = `${e}: Line: ${e.lineNumber}, Col: ${e.column}`; copyBtn.disabled = true; clearInputCode.disabled = true; return; } } const config1 = document.querySelector("#chk1").checked; const config2 = document.querySelector("#chk2").checked; const config3 = document.querySelector("#chk3").checked; const compressionLevel = getCompressionLevel({ config1, config2, config3 }); let compressedCode; if (modeCompressLanguage === "js") { compressedCode = compressJavaScript(code, compressionLevel); } else { compressedCode = compressCSS(code, compressionLevel); } copyBtn.disabled = false; clearInputCode.disabled = false; copyBtn.addEventListener("click", () => { errorTST = false; copyToClipboard(compressedCode); }); clearInputCode.addEventListener("click", () => { codeEditorJS.setValue(""); codeEditorCSS.setValue(""); }); if (modeCompressLanguage === "js") { codeViewJS.setValue(compressedCode); } else if (modeCompressLanguage === "css") { codeViewCss.setValue(compressedCode); } const originalSize = code.length; const compressedSize = compressedCode.length; const reduction = ( ((originalSize - compressedSize) / originalSize) * 100 ).toFixed(2); stats.classList.remove("error-sintaxe"); rigthOptions.style.display = "flex"; stats.innerHTML = `Redução de ${reduction}% | Arquivo comprimido: ${compressedSize} caracteres | Tamanho Original: ${originalSize} caracteres`; }); function getCompressionLevel(configs) { if (configs.config3) { return "heavy"; } else if (configs.config2) { return "medium"; } else if (configs.config1) { return "light"; } else { return; } } function compressJavaScript(code, level) { let compressed = code; if (level === "light" || level === "medium" || level === "heavy") { compressed = compressed.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""); } if (level === "medium" || level === "heavy") { compressed = compressed.replace(/\s+/g, " ").trim(); } if (level === "heavy") { compressed = compressed.replace(/\s*([{}=;:,.()<>+\-*/&|!~?^])\s*/g, "$1"); compressed = compressed.replace(/;\s*;/g, ";"); compressed = compressed.replace( /([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=\s*void\s*0/g, "$1=void 0" ); } return compressed; } function compressCSS(code, level) { let compressed = code; if (level === "light" || level === "medium" || level === "heavy") { compressed = compressed.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""); } if (level === "medium" || level === "heavy") { compressed = compressed.replace(/\s+/g, " ").trim(); } if (level === "heavy") { compressed = compressed.replace(/\s*([{};:,.()<>+\-*/&|!~?^])\s*/g, "$1"); compressed = compressed.replace(/;\s*;/g, ";"); compressed = compressed.replace(/\s*([{}])\s*/g, "$1"); } return compressed; } const dialogLoading = document.querySelector(".loading-back"); function showLoadingDialog() { dialogLoading.style.display = "flex"; } function hiddenLoadingDialog() { dialogLoading.style.display = "none"; } function updateProgressBar(percentage) { const progressBar = document.querySelector(".progress"); progressBar.style.width = percentage + "%"; } function analyzeCode(code) { const comments = (code.match(/\/\*[\s\S]*?\*\/|\/\/.*/g) || []).length; const spaces = (code.match(/\s/g) || []).length; const lines = (code.match(/[\n\r]/g) || []).length; if (comments > 10 || spaces > 50 || lines > 30) { return "strong"; } else if (comments > 5 || spaces > 20 || lines > 10) { return "medium"; } else { return "weak"; } } hiddenLoadingDialog(); function smartCompress(code, type) { showLoadingDialog(); let compressionLevel = analyzeCode(code); let compressed = code; if (type === "js") { compressed = compressJsIntel(code, compressionLevel); } else if (type === "css") { compressed = compressCssIntel(code, compressionLevel); } hiddenLoadingDialog(); return compressed; } function compressJsIntel(code, level) { if (level === "strong") { return code .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "") .replace(/\s+/g, " ") .replace(/[\n\r]/g, ""); } else if (level === "medium") { return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").replace(/[\n\r]/g, ""); } else { return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""); } } function compressCssIntel(code, level) { if (level === "strong") { return code .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "") .replace(/\s+/g, " ") .replace(/[\n\r]/g, ""); } else if (level === "medium") { return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "").replace(/[\n\r]/g, ""); } else { return code.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, ""); } } const compressCodeIntelBtn = document.querySelector(".compressBtnIntel"); compressCodeIntelBtn.addEventListener("click", () => { const jsCode = codeEditorJS.getValue(); const cssCode = codeEditorCSS.getValue(); let compressedCode = ""; let code; if (modeCompressLanguage === "js") { code = jsCode; txtViewJs.style.display = "block"; txtViewCss.style.display = "none"; } else if (modeCompressLanguage === "css") { code = cssCode; txtViewJs.style.display = "none"; txtViewCss.style.display = "block"; } if (modeCompressLanguage === "js") { try { esprima.parseScript(code); } catch (e) { rigthOptions.style.display = "flex"; errorTST = true; toast("O código JavaScript contém erros de sintaxe.", errorTST); stats.classList.add("error-sintaxe"); stats.innerHTML = `${e}: Line: ${e.lineNumber}, Col: ${e.column}`; copyBtn.disabled = true; clearInputCode.disabled = true; return; } } if (jsCode.trim() !== "") { compressedCode = smartCompress(code, "js"); codeViewJS.setValue(compressedCode); } if (cssCode.trim() !== "") { compressedCode = smartCompress(code, "css"); codeViewCss.setValue(compressedCode); } copyBtn.disabled = false; clearInputCode.disabled = false; copyBtn.addEventListener("click", () => { errorTST = false; copyToClipboard(compressedCode); }); clearInputCode.addEventListener("click", () => { codeEditorJS.setValue(""); codeEditorCSS.setValue(""); }); const originalSize = code.length; const compressedSize = compressedCode.length; const reduction = ( ((originalSize - compressedSize) / originalSize) * 100 ).toFixed(2); stats.classList.remove("error-sintaxe"); rigthOptions.style.display = "flex"; stats.innerHTML = `Redução de ${reduction}% | Arquivo comprimido: ${compressedSize} caracteres | Tamanho Original: ${originalSize} caracteres`; }); function toast(textToast, errorToast) { const toastBg = document.querySelector(".toast-bg"); const toastDimiss = document.querySelector(".dimissToast"); const toastText = document.querySelector(".text-toast"); toastText.textContent = textToast; toastBg.classList.add("active"); toastContainer.classList.add("animate__animated", "animate__bounceIn"); if (errorToast) { toastContainer.classList.add("error"); } else { toastContainer.classList.remove("error"); } setTimeout(() => { toastBg.classList.remove("active"); toastContainer.classList.remove("animate__animated", "animate__bounceIn"); }, 5000); toastDimiss.addEventListener("click", () => { toastBg.classList.remove("active"); toastContainer.classList.remove("animate__animated", "animate__bounceIn"); }); } function copyToClipboard(text) { if (navigator.clipboard) { navigator.clipboard .writeText(text) .then(() => { toast("Codigo copiado com sucesso!", errorTST); }) .catch((err) => { console.error("Erro ao copiar o codigo: ", err); toast("Erro ao copiar o codigo", errorTST); }); } } function showDialog(DialogTitle, ButtonAction) { const bgDialog = document.querySelector(".dialog-bg"); bgDialog.classList.add("active"); const dialogContent = document.createElement("div"); dialogContent.classList.add("dialog-content"); const hr1 = document.createElement("hr"); const hr2 = document.createElement("hr"); const headerDialog = document.createElement("div"); headerDialog.classList.add("header-dialog"); const leftHeaderDialog = document.createElement("div"); leftHeaderDialog.classList.add("left-area-d"); const icon1 = document.createElement("i"); icon1.classList.add("bi", "bi-book-fill"); const closeDialog = document.createElement("i"); closeDialog.classList.add("bi", "bi-x", "closeDialog"); const titleDialog = document.createElement("h1"); titleDialog.classList.add("title-dialog"); titleDialog.textContent = DialogTitle; const descriptionDialog = document.createElement("h4"); descriptionDialog.classList.add("description-text"); descriptionDialog.innerHTML = getDescriptionText(DialogTitle); const iconSetBtn = document.createElement("i"); iconSetBtn.classList.add("bi", "bi-arrow-right-square"); const buttonSet = document.createElement("button"); buttonSet.classList.add("dbtn-action"); buttonSet.textContent = ButtonAction; buttonSet.appendChild(iconSetBtn); buttonSet.addEventListener("click", () => { handleButtonAction(ButtonAction); }); leftHeaderDialog.appendChild(icon1); leftHeaderDialog.appendChild(titleDialog); headerDialog.appendChild(leftHeaderDialog); headerDialog.appendChild(closeDialog); dialogContent.appendChild(headerDialog); dialogContent.appendChild(hr1); dialogContent.appendChild(descriptionDialog); dialogContent.appendChild(hr2); dialogContent.appendChild(buttonSet); bgDialog.appendChild(dialogContent); closeDialog.addEventListener("click", () => { bgDialog.classList.remove("active"); bgDialog.innerHTML = ""; }); }
const aboutBtn = document.querySelector(".aboutBtn");
aboutBtn.addEventListener("click", () => {
  showDialog("Sobre o site", "Ir para o projeto no GitHub");
});

const reportBtn = document.querySelector(".reportBugs");
reportBtn.addEventListener("click", () => {
  showDialog("Bugs Encontrados | Feedback", "Reportar bug | Sugestões");
});

const setGitHubBtn = document.querySelector(".setGitHub");
setGitHubBtn.addEventListener("click", () => {
  window.location.href = "https://github.com/xtei/MXCompress";
});

function getDescriptionText(title) {
  switch (title) {
    case "Sobre o site":
      return `
          <p>O <strong>Mix Compressor</strong> é uma ferramenta poderosa e fácil de usar que ajuda os desenvolvedores a otimizar seus códigos CSS e JavaScript. Isso resulta em um carregamento mais rápido e desempenho mais rápido das páginas web.</p> <hr>
          <ul>
            <li><strong>Compressão de Código CSS e JavaScript:</strong> Vários níveis de compressão disponíveis: <strong>Leve</strong>, <strong>Média</strong> e <strong>Forte</strong>.</li> <hr>
            <li><strong>Interface Intuitiva:</strong> Área de entrada e saída de código, importação de arquivos via drag-and-drop.</li> <hr>
            <li><strong>Modo de Seleção de Linguagem:</strong> Alternância fácil entre compressão de CSS e JavaScript.</li> <hr>
            <li><strong>Estatísticas de Compressão:</strong> Informações detalhadas sobre a redução de tamanho do código.</li> <hr>
            <li><strong>Cópia para Área de Transferência:</strong> Fácil cópia do código comprimido.</li> <hr>
            <li><strong>Link do criador</strong>: <a class="link" href="https://github.com/xtei" target="_blank">Acessar o GitHub</a></li>
          </ul>
        `;
    case "Bugs Encontrados | Feedback":
      return `
          <p>Olá, você pode reportar o bug OU realizando um feedback clicando no botão abaixo, onde será redirecionado ao gmail ou enviando um email para: <hr><strong>mixcompress@gmail.com</strong><hr>antes disso:</p> <hr>
          <ul>
            <li>Certifique-se de que o código não contenha erros antes de comprimir.</li> <hr>
            <li>Verifique o resultado da compressão para garantir que todas as funcionalidades do código original foram preservadas.</li> <hr>
            <li>Utilize as diferentes opções de compressão conforme necessário para otimizar seu código de maneira eficiente.</li> <hr>
            <li><strong>Atenção para o uso de otimização Forte para codigos em CSS:</strong> Pode ocorrer que ao comprimir seu codigo <strong>CSS</strong> no modo <strong>Forte</strong>, junte algumas linhas, assim podendo remover a estilização dos elementos afetados. Você pode prefirir também, utilizar o modo de otimização Media, onde também é uma boa forma de otimizar o codigo.</li>
          </ul>
        `;
    case "Feedback":
      return `
          Seu feedback é importante, assim melhoramos o site e corrigimos bugs, com suas sugestões e reclamações <hr>
        `;
    default:
      return "Descrição padrão para outros diálogos.";
  }
}

function handleButtonAction(action) {
  switch (action) {
    case "Ir para o projeto no GitHub":
      window.location.href = "https://github.com/xtei/MXCompress";
      break;
    case "Reportar bug | Sugestões":
      window.location.href =
        "mailto:mixcompress@gmail.com?subject=Bug%20Report%20|%20SUGESTÃO&body=Descreva%20o%20PROBLEMA%20aqui%20ou%20faça%20uma%20SUGESTÃO";
      break;
    default:
      alert("Ação de botão padrão.");
  }
}
