export interface ModalType {
    modalOpen: boolean,
    toggle: ()=> void,
    modalSize: 'sm' | 'md' | 'lg',
    children: any,
    header : string
}
const Modal = ({
    modalOpen,
    toggle,
    modalSize,header,children
}: ModalType) => {
    const stylesModal = {
        mainDiv: {
            display : modalOpen ? 'block' : 'none',
            width: modalSize === 'sm' ? '650px' : modalSize === 'md' ? '750px' : modalSize === 'lg' ? '1000px' : '550px',
            backgroundColor : 'white',
            minHeight : '400px',
            border : '1px solid black',
            borderRadius : '10px'
        },
        headerStyle : {
            display : 'flex',
            justifyContent : 'space-between',
            padding : '15px',
            border : '1px solid black',
            backgroundColor : '#289ace',
            color : 'white',
            borderRadius : '10px'
        },
    }

    return (
        <div style={stylesModal.mainDiv}>
            <div style={stylesModal.headerStyle}>
                {header}
                <span onClick={toggle}>X</span>
            </div>
            <div style={{display : 'flex',flexDirection :'column',alignItems : 'center' , justifyContent : 'center',height :'100%'}}>
                {children}
            </div>
        </div>
    )
}

export default Modal