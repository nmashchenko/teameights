import {GroupContainer, SectionContainer} from "../../../../../../../shared/components/CustomInput/CustomInput.styles";
import CustomInput from "../../../../../../../shared/components/CustomInput/CustomInput";
import CustomSelect from "../../../../../../../shared/components/CustomSelect/CustomSelect";
import CustomTextArea from "../../../../../../../shared/components/CustomTextArea/CustomTextArea";
import React from "react";
import countryList from "react-select-country-list";

const UserInfoForm = () => {
    const countriesOptions = React.useMemo(() => countryList().getData(), [])

    return (
        <>
            <SectionContainer>
                <GroupContainer>
                    <CustomInput placeholder="Input name"  label="Full name" name="fullName" type="text"/>
                </GroupContainer>
                <GroupContainer>
                    <CustomSelect label="Сountry" name="country" options={countriesOptions} placeholder="Select country"/>
                </GroupContainer>
            </SectionContainer>
            <SectionContainer>
                <GroupContainer>
                    <CustomInput placeholder="Input username" label="Username" name="username" type="text"/>
                </GroupContainer>
                <GroupContainer>
                    <CustomInput label="Age" name="age" type="text"/>
                </GroupContainer>
            </SectionContainer>
            <CustomTextArea
                label="About me (optional)"
                name="description"
                placeholder="Write something about yourself..."
                maxLength={200}
            />
        </>
    );
};

export default UserInfoForm;
