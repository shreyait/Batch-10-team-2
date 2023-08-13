


export default function CustomButton(props) {

    const {isBig, children, ...otherProps} = props;

    return <button className="button-24" style={{width: isBig ? '400px': '150px'}} {...otherProps}>
        {children}
    </button>
}