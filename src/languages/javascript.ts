import { TokenColor, TokenFontStyle } from '../types';

export default {
	keyword: {
		operator: {
			quantifier: {
				regexp: {
					foreground: '#89B6FF'
				}
			},

			or: {
				regexp: {
					foreground: TokenColor.Amethyst
				}
			},

			foreground: TokenColor.Amethyst
		}
	},

	entity: {
		name: {
			label: {
				foreground: TokenColor.Carmine
			}
		}
	},

	punctuation: {
		decorator: {
			foreground: TokenColor.Amethyst
		},

		definition: {
			bracket: {
				curly: {
					foreground: TokenColor.Carmine
				}
			},

			group: {
				regexp: {
					foreground: TokenColor.Chartreuse,
					fontStyle: TokenFontStyle.Bold
				},

				assertion: {
					regexp: {
						foreground: TokenColor.Chartreuse,
						fontStyle: TokenFontStyle.Bold
					}
				}
			},

			'character-class': {
				regexp: {
					foreground: TokenColor.Carmine
				}
			}
		}
	},

	meta: {
		import: {
			foreground: TokenColor.Carmine
		}
	},

	variable: {
		other: {
			foreground: TokenColor.Carmine
		},

		object: {
			property: {
				foreground: TokenColor.Carmine
			}
		}
	},

	constant: {
		character: {
			escape: {
				backslash: {
					regexp: {
						foreground: TokenColor.Storm
					}
				}
			}
		},

		other: {
			'character-class': {
				regexp: {
					foreground: TokenColor.Cerulean
				}
			}
		}
	}
};
