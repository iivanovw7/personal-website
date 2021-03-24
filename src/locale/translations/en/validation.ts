import { VALIDATION } from '../../../config/constants';

export default {
    [`pw.common.validation.${VALIDATION.search}`]: '<span>{ length, plural, =0{0 characters} one{1 character} other{# character} }</span> min',
};
