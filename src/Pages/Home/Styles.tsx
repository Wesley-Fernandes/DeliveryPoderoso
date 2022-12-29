
interface StylesProps{
    backgroundClass: string,
    hud: string,
    img: string,
    button: string,
    backgroundStyle: {},
    hudStyles: {}
}
const Styles:StylesProps = {
    backgroundClass: "vh-100 d-flex flex-wrap justify-content-center  align-items-center",
    hud: "Middle-Box d-flex border flex-wrap justify-content-center",
    img: "w-50 mb-2",
    button: "btn btn btn-warning w-100 p-3 mb-2 font-bold",
    backgroundStyle: {"background":"url('https://i.ibb.co/zhtFhWn/pexels-robin-stickel-70497-1.jpg')"},
    hudStyles: {'backdrop-filter': 'blur(10px)','padding': '1rem', 'overflow':'hidden', 'borderRadius': '20px'}

}



export default Styles;