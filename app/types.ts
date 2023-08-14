export type CheckboxProps = {
    options: CheckboxOption[];
    updateOptions: Function;
}

export type CheckboxOption = {
    value: boolean;
    label: string;
}