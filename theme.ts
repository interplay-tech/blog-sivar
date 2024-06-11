import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#111",
    "--my-brand": "#ff385c",
    "--my-brand-hover": "#ff385c",
    "--my-brand-active": "#ff385c",
    "--my-brand-text": "#ff385c",
    "--my-brand-text-hover": "#ff385c",
    "--my-brand-text-active": "#ff385c",
}


export const theme = buildLegacyTheme({
    
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],

    "--component-text-color":props ["--my-white"],


    /*  Brand */
    "--brand-primary":props["--my-brand"],

    /* default button */

    "--default-button-color":"#666",
    
    
})
