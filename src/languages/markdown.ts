import { TokenColor, TokenFontStyle } from '../types';

export default {
	markup: {
		quote: {
			foreground: TokenColor.Aurora
		},

		fenced_code: {
			foreground: TokenColor.Marigold
		},

		inline: {
			raw: {
				foreground: TokenColor.Ocean
			}
		},

		underline: {
			link: {
				foreground: TokenColor.Nectarine
			}
		}
	},

	punctuation: {
		definition: {
			heading: {
				foreground: TokenColor.Carmine
			},

			'list, metadata': {
				foreground: TokenColor.Amethyst
			},

			bold: {
				foreground: TokenColor.Amethyst,
				fontStyle: TokenFontStyle.Bold
			},

			italic: {
				foreground: TokenColor.Amethyst,
				fontStyle: TokenFontStyle.Italic
			},

			string: {
				begin: {
					markdown: {
						foreground: TokenColor.Carmine
					}
				},

				end: {
					markdown: {
						foreground: TokenColor.Carmine
					}
				}
			}
		}
	},

	meta: {
		separator: {
			foreground: TokenColor.Amethyst
		},

		link: {
			reference: {
				foreground: TokenColor.Carmine,
				fontStyle: TokenFontStyle.Italic
			}
		}
	},

	entity: {
		name: {
			section: {
				foreground: TokenColor.Carmine
			}
		}
	},

	string: {
		other: {
			link: {
				title: {
					foreground: TokenColor.Ocean
				}
			}
		}
	}
};
