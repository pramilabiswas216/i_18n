import languageConfig from "./lang.json";

const I18n = (kewword)=>{
    const lang = localStorage.getItem("lang" || "en");
    return languageConfig[lang][kewword];
    }


export default I18n;