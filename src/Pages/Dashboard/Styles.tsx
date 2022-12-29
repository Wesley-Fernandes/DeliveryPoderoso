type StyleProps ={
    dashboard: {
        style: {},
        class: string
    },
    main: {
        style: {},
        class: string
    },
    section: {
        style: {},
        class: string
    },

}

const Styles:StyleProps = {
    dashboard: {
        style: {
            "background":"url('https://i.ibb.co/zhtFhWn/pexels-robin-stickel-70497-1.jpg')",
        },
        class: `h-100 d-flex flex-wrap`
    },
    main: {
        style: {
            "width":"100%",
            "height":"calc(100vh - 80px)",
            "backgroundColor":"#fff",
            "overflow-y": "scroll",
            "display":"flex",
            "flex-wrap": "wrap",
        },
        class: ``
    },
    section: {
        style: {"height": "300px" , "background-color": "#272727"},
        class: `d-flex flex-wrap justify-content-center w-100`
    },

}

export default Styles;