import Modal from "./Modal";

const meta  = {
    title : "Example/Modal",
    component : Modal
}

export default meta


export const Normal = {
    args : {
        modalOpen : true,
        toggle : ()=>{console.log("HI")},
        modalSize : "md",
        header : "Medium modal header",
        children : "Medium Modal"
    }
}

export const Large = {
    args : {
        modalOpen : true,
        toggle : ()=>{console.log("Large")},
        modalSize : "lg",
        header : "Large modal header",
        children : "Large Modal"
    }
}