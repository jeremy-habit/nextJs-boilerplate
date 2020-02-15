import { css, ThemedCssFunction, DefaultTheme } from 'styled-components';
import { breakpoints } from '#config/breakpoints';

/* :::::::::::::::::::::::::::: media queries conditions */
const MEDIA_QUERIES_RULE_MAX = 0;
const MEDIA_QUERIES_RULE_MIN = 1;
const MEDIA_QUERIES_RULE_ONLY = 3;

/* :::::::::::::::::::::::::::: EM */
const EM_DIVISOR = 16;
const EM_UNIT = 'em';

const convertPxToEm = (pxValue: number): number => pxValue / EM_DIVISOR;

const generateMediaQueriesRules = (mediaQueriesRuleType: number, minSize: number, maxSize: number, unit: string): string => {
  switch (mediaQueriesRuleType) {
    case MEDIA_QUERIES_RULE_MAX:
      return `(max-width: ${maxSize}${unit})`;
    case MEDIA_QUERIES_RULE_ONLY:
      return `(min-width: ${minSize}${unit}) and (max-width: ${maxSize}${unit})`;
    case MEDIA_QUERIES_RULE_MIN:
    default:
      return `(min-width: ${minSize}${unit})`;
  }
};

/* todo : nice to have : media custom */
interface MediaType {
  sm: ThemedCssFunction<DefaultTheme>;
  lg: ThemedCssFunction<DefaultTheme>;
  md: ThemedCssFunction<DefaultTheme>;
  xs: ThemedCssFunction<DefaultTheme>;
}

const media = (mediaQueriesRuleType: number): MediaType =>
  Object.keys(breakpoints).reduce(
    (accumulator: MediaType, label: string) => {
      const minSize = convertPxToEm(breakpoints[label].min);
      const maxSize = convertPxToEm(breakpoints[label].max);
      accumulator[label] = (literals: TemplateStringsArray, ...args: any[]) => {
        return css`
                    @media ${generateMediaQueriesRules(mediaQueriesRuleType, minSize, maxSize, EM_UNIT)} {
                        ${css(literals, ...args)};
                    }
                `;
      };
      
      return accumulator;
    },
    {} as MediaType,
  );

export const applyStyleFrom = (): MediaType => media(MEDIA_QUERIES_RULE_MIN);

export const applyStyleUntil = (): MediaType => media(MEDIA_QUERIES_RULE_MAX);

export const applyStyleOnlyFor = (): MediaType => media(MEDIA_QUERIES_RULE_ONLY);
