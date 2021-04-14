/**
 * Scopes based on "vscode-ignore"
 *
 * https://marketplace.visualstudio.com/items?itemName=Breadnaught.vscode-ignore
 */

import { TokenColor } from '../types';

export default {
	entity: {
		other: {
			path: {
				foreground: TokenColor.Amethyst
			}
		}
	},

	keyword: {
		operator: {
			quantifier: {
				ignore: {
					foreground: TokenColor.Carmine
				}
			}
		}
	},

	constant: {
		other: {
			'character-class': {
				range: {
					ignore: {
						foreground: TokenColor.Cerulean
					}
				}
			}
		}
	},

	punctuation: {
		definition: {
			'character-class': {
				ignore: {
					foreground: TokenColor.Smoke
				}
			}
		},

		separator: {
			directory: {
				foreground: TokenColor.Smoke
			}
		}
	}
};
