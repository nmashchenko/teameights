import AvatarEditIcon from "../../../../../assets/AvatarEditIcon";
import {AvatarEditContainer} from "./AvatarEditButton.styles";

const AvatarEditButton = (props) => {
    return (
        <AvatarEditContainer {...props}>
            <AvatarEditIcon />
        </AvatarEditContainer>
    );
};

export default AvatarEditButton;
