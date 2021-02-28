import { TokenColor, TokenFontStyle } from '../types';

export default {
	meta: {
		'attribute-selector': {
			foreground: TokenColor.Spring
		},

		'property-value': {
			foreground: TokenColor.Nectarine
		}
	},

	support: {
		type: {
			vendored: {
				'property-name': {
					foreground: TokenColor.Ocean
				}
			}
		},

		constant: {
			'property-value': {
				foreground: TokenColor.Nectarine
			}
		},

		function: {
			'misc, url, transform': {
				foreground: TokenColor.Amethyst
			}
		},

		'property-name': {
			foreground: TokenColor.Ocean
		}
	},

	storage: {
		modifier: {
			'ignore-case': {
				foreground: TokenColor.Amethyst
			}
		}
	},

	keyword: {
		other: {
			unit: {
				foreground: TokenColor.Carmine
			},

			important: {
				foreground: TokenColor.Amethyst
			}
		},

		operator: {
			scss: {
				foreground: TokenColor.Amethyst
			},

			pattern: {
				css: {
					foreground: TokenColor.Amethyst
				}
			}
		},

		control: {
			'at-rule': {
				foreground: TokenColor.Amethyst
			}
		}
	},

	entity: {
		other: {
			'attribute-name': {
				'class, css': {
					foreground: TokenColor.Carmine
				},

				id: {
					foreground: TokenColor.Amethyst
				},

				attribute: {
					scss: {
						foreground: TokenColor.Carmine
					}
				},

				'pseudo-class': {
					foreground: TokenColor.Nectarine
				},

				'pseudo-element': {
					foreground: TokenColor.Nectarine
				},

				'parent-selector-suffix': {
					foreground: TokenColor.Carmine
				}
			}
		},

		name: {
			function: {
				scss: {
					foreground: TokenColor.Amethyst
				}
			},

			tag: {
				reference: {
					foreground: TokenColor.Amethyst
				},

				custom: {
					foreground: TokenColor.Ocean
				}
			}
		}
	},

	variable: {
		scss: {
			foreground: TokenColor.Ocean
		},

		argument: {
			css: {
				foreground: TokenColor.Ocean,
				fontStyle: TokenFontStyle.Italic
			}
		}
	}
};
