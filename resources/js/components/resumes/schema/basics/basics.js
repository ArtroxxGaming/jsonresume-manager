const padding = ['pr-md-1', 'p-0'];
const colMd4 = ['col-md-4', ...padding];
const colMd6 = ['col-md-6', ...padding];

export default {
    fields: [
        //Picture
        {
            type: 'resume-image',
            label: 'Resume Profile Image',
            model: 'picture',
        },
        //Name
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Name',
            label: 'Name',
            model: 'name',
            styleClasses: colMd4
        },
        //Label
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'Programmer',
            label: 'Label',
            model: 'label',
            styleClasses: colMd4
        },
        //Email
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'email@email.com',
            label: 'Email',
            model: 'email',
            validator: 'email',
            styleClasses: colMd4
        },
        //Phone
        {
            type: 'input',
            inputType: 'tel',
            placeholder: '555-555-5555',
            label: 'Phone',
            model: 'phone',
            styleClasses: colMd6
        },
        //Website
        {
            type: 'input',
            inputType: 'text',
            placeholder: 'http://yoursite.com',
            label: 'Website',
            model: 'website',
            validator: 'url',
            styleClasses: colMd6
        },
        //Summary
        {
            type: 'textArea',
            placeholder: 'A summary of your resume',
            label: 'Summary',
            model: 'summary',
        },
    ]
}
