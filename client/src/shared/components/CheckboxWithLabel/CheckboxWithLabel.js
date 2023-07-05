import { Indicator, Input, Label } from './CheckboxWithLabel.styles'

export default function CheckboxWithLabel({ value, checked, onChange, name, id, label, disabled }) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      {label}
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator />
    </Label>
  )
}
