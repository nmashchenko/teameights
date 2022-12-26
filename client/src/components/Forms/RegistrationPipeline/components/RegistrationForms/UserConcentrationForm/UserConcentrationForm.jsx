import React from 'react';
import CustomSelect from "../../../../../../shared/components/CustomSelect/CustomSelect";
import SelectValue from "../../../../../../shared/components/CustomSelect/components/SelectValue";
import programmingLanguageOptions from "../../../../../../constants/programmingLanguages";
import {Item} from "../../../../../../shared/components/CustomSelect/CustomSelect.styles";
import {ContentContainer} from "./UserConcentrationForm.styles";
import {useFormikContext} from "formik";
import frameworkOptions from "../../../../../../constants/frameworks";
import concentrationOptions from "../../../../../../constants/concentrations";
import FormButton from "../../MultiStepRegistration/components/FormButton/FormButton";
import {ButtonContainer} from "../../../../../../shared/styles/Button.styles";

const UserConcentrationForm = () => {
    const {errors} = useFormikContext()

    return (
        <ContentContainer>
            <CustomSelect
                multiple={true}
                label='Programming Languages'
                name='programmingLanguages'
                renderValue={(selected) => <SelectValue selected={selected}/>}
                width="22rem"
            >
                {programmingLanguageOptions.map(({label}) => (
                    <Item key={label} value={label}>
                        {label}
                    </Item>
                ))}
            </CustomSelect>
            <CustomSelect
                multiple={true}
                label='Frameworks'
                name='frameworks'
                renderValue={(selected) => <SelectValue selected={selected}/>}
                width="22rem"
            >
                {frameworkOptions.map(({label}) => (
                    <Item key={label} value={label}>
                        {label}
                    </Item>
                ))}
            </CustomSelect>
            <CustomSelect
                label='Concentration'
                name='concentration'
                renderValue={(selected) => <SelectValue selected={selected}/>}
                width="22rem"
            >
                {concentrationOptions.map(({label}) => (
                    <Item key={label} value={label}>
                        {label}
                    </Item>
                ))}
            </CustomSelect>
            <ButtonContainer>
                <FormButton errors={errors}/>
            </ButtonContainer>
        </ContentContainer>
    );
};

export default UserConcentrationForm;
