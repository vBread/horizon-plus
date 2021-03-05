/**
 * Scopes based on "vscode-graphql"
 *
 * https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
 */

import { TokenColor } from '../types';

export default {
	keyword: {
		'operation, on, fragment, type, schema, enum, scalar, interface, implements, union, input': {
			graphql: {
				foreground: TokenColor.Amethyst
			}
		}
	},

	string: {
		unquoted: {
			alias: {
				graphql: {
					foreground: TokenColor.Carmine
				}
			}
		}
	},

	variable: {
		graphql: {
			foreground: TokenColor.Carmine
		},

		arguments: {
			graphql: {
				foreground: TokenColor.Carmine
			}
		},

		fragment: {
			graphql: {
				foreground: TokenColor.Nectarine
			}
		}
	},

	constant: {
		character: {
			enum: {
				graphql: {
					foreground: TokenColor.Carmine
				}
			}
		}
	},

	entity: {
		scalar: {
			foreground: TokenColor.Nectarine
		}
	},

	punctuation: {
		'colon, comma, assignment, or': {
			graphql: {
				foreground: TokenColor.Amethyst
			}
		}
	}
};
