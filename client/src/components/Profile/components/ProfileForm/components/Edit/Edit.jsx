import PlusIcon from "../../../../../../assets/PlusIcon";
import {EditButton} from "./Edit.styles";

const Edit = ({className}) => {
    return (
        <EditButton className={className}>
            <PlusIcon />
        </EditButton>
    );
};

export default Edit;
