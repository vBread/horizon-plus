import { TokenColor, TokenFontStyle } from '../types';

export default {
	class: {
		foreground: TokenColor.Nectarine
	},

	'method, function': {
		foreground: TokenColor.Ocean
	},

	'function:defaultLibrary': {
		foreground: TokenColor.Ocean
	},

	'variable, property, enumMember': {
		foreground: TokenColor.Carmine
	},

	parameter: {
		foreground: TokenColor.Carmine,
		fontStyle: TokenFontStyle.Italic
	}
};
