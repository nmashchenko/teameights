import ModalWindow from "../../../ModalWindow/ModalWindow";
import Avatar from "@mikhail2404/react-avatar-edit";
import {Button} from "../../../../styles/Button.styles";
import {AvatarWrapper} from "./AvatarLoadModal.styles";

const AvatarLoadModal = ({handleSaveClose, ...props}) => {
    return (
        <ModalWindow>
            <AvatarWrapper>
                <Avatar
                    imageHeight={200}
                    height={200}
                    width={200}
                    cropRadius={40}
                    minCropRadius={40}
                    labelStyle={{
                        cursor: 'pointer',
                        color: '#5D9D0B',
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                    exportAsSquare
                    exportMimeType={'image/jpeg'}
                    exportSize={200}
                    exportQuality={0.7}
                    {...props}
                />
                <Button marginBottom="0" onClick={handleSaveClose}>
                    save
                </Button>
            </AvatarWrapper>
        </ModalWindow>
    );
};

export default AvatarLoadModal;
