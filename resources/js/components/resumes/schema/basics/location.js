const padding = ['pr-md-1', 'p-0'];
const colMd4 = ['col-md-4', ...padding];
const colMd6 = ['col-md-6', ...padding];
export default{
    fields: [
            //Address
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Address',
            label: 'Address',
            model: 'address',
            styleClasses: colMd4
        },
        // Postal Code
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Postal Code',
            label: 'Postal Code',
            model: 'postalCode',
            styleClasses: colMd4
        },
        //City
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'City',
            label: 'City',
            model: 'city',
            styleClasses: colMd4
        },
        //Country Code
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'ej: US',
            label: 'Country Code',
            model: 'countryCode',
            styleClasses: colMd6
        },
        //Region
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Region',
            label: 'Region',
            model: 'region',
            styleClasses: colMd6
        },
    ]

}
