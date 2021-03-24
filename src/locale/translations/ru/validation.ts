import { VALIDATION } from '../../../config/constants';

export default {
    [`pw.common.validation.${VALIDATION.search}`]: '<span>минимум { length, plural, =0{0 символов} one{1 символ} few{# символа} other{# символов} }</span>',
};
