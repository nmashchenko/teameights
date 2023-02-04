import {Button} from "./CustomButon.styles";

const CustomButton = ({onClick, children}) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default CustomButton;
