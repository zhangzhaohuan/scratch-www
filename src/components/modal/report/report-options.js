const PropTypes = require('prop-types');

const {
    arrayOf,
    string,
    shape,
    bool
} = PropTypes;

/**
 * Define both the PropType shape and default value for report options
 * to ensure structure is validated by PropType checking going forward.
 */

const messageShape = shape({
    id: string.isRequired
});

const subcategoryShape = shape({
    value: string.isRequired,
    label: messageShape.isRequired,
    prompt: messageShape.isRequired,
    preventSubmission: bool
});

const categoryShape = shape({
    value: string.isRequired,
    label: messageShape.isRequired,
    prompt: messageShape.isRequired,
    subcategories: arrayOf(subcategoryShape).isRequired
});

const reportOptionsShape = arrayOf(categoryShape);

const REPORT_OPTIONS = [
    {
        value: '',
        label: {id: 'report.reasonPlaceHolder'},
        prompt: {id: 'report.promptPlaceholder'},
        subcategories: []
    },
    {
        value: '0',
        label: {id: 'report.reasonCopy'},
        prompt: {id: 'report.promptCopy'},
        subcategories: []
    },
    {
        value: '1',
        label: {id: 'report.reasonUncredited'},
        prompt: {id: 'report.promptUncredited'},
        subcategories: []
    },
    {
        value: '2',
        label: {id: 'report.reasonScary'},
        prompt: {id: 'report.promptScary'},
        subcategories: []
    },
    {
        value: '3',
        label: {id: 'report.reasonLanguage'},
        prompt: {id: 'report.promptLanguage'},
        subcategories: []
    },
    {
        value: '4',
        label: {id: 'report.reasonMusic'},
        prompt: {id: 'report.promptMusic'},
        subcategories: []
    },
    {
        value: '8',
        label: {id: 'report.reasonImage'},
        prompt: {id: 'report.promptImage'},
        subcategories: []
    },
    {
        value: '5',
        label: {id: 'report.reasonPersonal'},
        prompt: {id: 'report.promptPersonal'},
        subcategories: [
            {
                value: '',
                label: {id: 'report.reasonPlaceHolder'},
                prompt: {id: 'report.promptPlaceholder'}
            },
            {
                value: '4',
                label: {id: 'report.reasonMusic'},
                prompt: {id: 'report.promptMusic'},
                preventSubmission: true
            },
            {
                value: '8',
                label: {id: 'report.reasonImage'},
                prompt: {id: 'report.promptImage'}
            },
            {
                value: '5',
                label: {id: 'report.reasonPersonal'},
                prompt: {id: 'report.promptPersonal'}
            },
            {
                value: '6',
                label: {id: 'general.other'},
                prompt: {id: 'report.promptPersonal'}

            }
        ]
    },
    {
        value: '6',
        label: {id: 'general.other'},
        prompt: {id: 'report.promptGuidelines'},
        subcategories: []
    }
];

module.exports = {
    reportOptionsShape,
    REPORT_OPTIONS
};
