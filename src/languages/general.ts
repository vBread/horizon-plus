import { TokenColor, TokenFontStyle } from '../types';

export default {
	string: {
		'quoted, template': {
			foreground: TokenColor.Spring
		},

		regexp: {
			'\\ keyword': {
				other: {
					foreground: TokenColor.Amethyst
				}
			},

			foreground: TokenColor.Marigold
		}
	},

	entity: {
		name: {
			variable: {
				foreground: TokenColor.Carmine
			},

			type: {
				foreground: TokenColor.Nectarine
			},

			function: {
				foreground: TokenColor.Ocean
			},

			foreground: TokenColor.Nectarine
		},

		other: {
			'inherited-class': {
				foreground: TokenColor.Nectarine
			}
		}
	},

	support: {
		variable: {
			foreground: TokenColor.Carmine
		},

		function: {
			foreground: TokenColor.Ocean
		},

		type: {
			'property-name': {
				foreground: TokenColor.Carmine
			}
		},

		foreground: TokenColor.Nectarine
	},

	variable: {
		language: {
			foreground: TokenColor.Nectarine,
			fontStyle: TokenFontStyle.Italic
		},

		other: {
			constant: {
				property: {
					foreground: TokenColor.Carmine
				}
			},

			property: {
				foreground: TokenColor.Carmine
			}
		},

		parameter: {
			foreground: TokenColor.Carmine,
			fontStyle: TokenFontStyle.Italic
		}
	},

	storage: {
		type: {
			cs: {
				foreground: TokenColor.Nectarine
			}
		},

		foreground: TokenColor.Amethyst
	},

	comment: {
		foreground: TokenColor.Grisaille,
		fontStyle: TokenFontStyle.Italic
	},

	constant: {
		numeric: {
			foreground: TokenColor.Marigold
		},

		character: {
			escape: {
				foreground: TokenColor.Ocean
			}
		},

		foreground: TokenColor.Marigold
	},

	punctuation: {
		separator: {
			foreground: TokenColor.Amethyst
		},

		accessor: {
			foreground: TokenColor.Amethyst
		},

		section: {
			embedded: {
				foreground: TokenColor.Amethyst
			}
		},

		definition: {
			'template-expression': {
				foreground: TokenColor.Amethyst
			},

			tag: {
				foreground: TokenColor.Carmine
			},

			typeparameters: {
				foreground: TokenColor.Carmine
			}
		}
	},

	keyword: {
		'logical, control': {
			foreground: TokenColor.Amethyst
		},

		operator: {
			'new, expression, logical, delete, type, increment, decrement': {
				foreground: TokenColor.Amethyst
			}
		}
	},

	meta: {
		'object-literal': {
			key: {
				foreground: TokenColor.Carmine
			}
		}
	}
};
