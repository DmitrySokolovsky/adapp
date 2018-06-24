import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';

export const generateClassName = createGenerateClassName();
export const jss = create(jssPreset());
const insertionPointForCSS: HTMLElement = (document.getElementById('jss-insertion-point') as HTMLElement);
jss.setup({ insertionPoint: insertionPointForCSS });
