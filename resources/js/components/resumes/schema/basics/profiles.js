const padding = ['pr-md-1', 'p-0'];
const colMd4 = ['col-md-4', ...padding];
export default {
    fields: [
        // Network
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Twitter',
            label: 'Network',
            model: 'network',
            styleClasses: colMd4,
        },
        // URL
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'https://example.com',
            label: 'URL',
            model: 'url',
            styleClasses: colMd4,
        },
        // USERNAME
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'john doe',
            label: 'Username',
            model: 'username',
            styleClasses: colMd4,
        }
    ]
}
