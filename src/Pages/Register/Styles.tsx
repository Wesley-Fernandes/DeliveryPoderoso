
interface StylesProps{
    background: string;
    hud: string;
    img: string;
    button: string;
    hudStyles: {};
    backgroundStyle: {};
}
const Styles:StylesProps = {
    background: `
        vh-100 d-flex
        flex-wrap
        justify-content-center
        align-items-center`,

    backgroundStyle: {
        "background":"url('https://i.ibb.co/zhtFhWn/pexels-robin-stickel-70497-1.jpg')"
    },
    hud: `
        Middle-Box
        rounded border
        d-flex
        flex-wrap
        justify-content-center`,
    hudStyles: {
        'backdrop-filter': 'blur(10px)',
        'padding': '1rem',
        'overflow':'hidden',
        'borderRadius': '20px'
    },
    img: `
        w-50
        mb-2`,
    button: `
        btn
        btn-warning
        w-100
        p-3
        mb-2`
}



export default Styles;