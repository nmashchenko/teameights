import React from 'react';
import CustomSelect from "../../../../../../shared/components/CustomSelect/CustomSelect";
import SelectValue from "../../../../../../shared/components/CustomSelect/components/SelectValue";
import programmingLanguageOptions from "../../../../../../constants/programmingLanguages";
import {Item} from "../../../../../../shared/components/CustomSelect/CustomSelect.styles";
import {ContentContainer} from "./UserConcentrationForm.styles";
import {
    ButtonContainer,
} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import {useFormikContext} from "formik";
import frameworkOptions from "../../../../../../constants/frameworks";
import concentrationOptions from "../../../../../../constants/concentrations";
import ButtonWithDisabled from "../../../../../../shared/components/ButtonWithDisabled/ButtonWithDisabled";

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
                <ButtonWithDisabled errors={errors}/>
            </ButtonContainer>
        </ContentContainer>
    );
};

export default UserConcentrationForm;
