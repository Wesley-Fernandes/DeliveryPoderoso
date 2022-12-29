interface StyleProps{
    full: {
        class: string,
        style: {}
    };
    image: {
        class: string,
        style: {}
    }
}
export const Styles:StyleProps = {
    full: {
        class: "carousel slide",
        style: {
            "height": "300px",
            "overflow": "hidden"
        }
    },
    image: {
        class: "carousel-item",
        style: {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "height": "300px",
        }
    }
}