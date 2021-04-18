import { VALIDATION } from '../../../config/constants';

export default {
    [`pw.validation.${VALIDATION.search}`]: '<span>{ length, plural, =0{0 characters} one{1 character} other{# character} }</span> min',
};
