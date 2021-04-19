/**
 * Scopes based on "Haskell Syntax Highlighting"
 *
 * https://marketplace.visualstudio.com/items?itemName=justusadam.language-haskell
 */

import { TokenColor } from '../types';

export default {
	keyword: {
		other: {
			'import, module, where, data, deriving, instance, type, hiding, qualified, newtype, class, family, forall, foreign, pattern': {
				haskell: {
					foreground: TokenColor.Amethyst
				}
			}
		}
	},

	punctuation: {
		separator: {
			comma: {
				haskell: {
					foreground: TokenColor.Smoke
				}
			}
		}
	},

	meta: {
		declaration: {
			exports: {
				haskell: {
					'\\ storage': {
						type: {
							haskell: {
								foreground: TokenColor.Carmine
							}
						}
					},

					foreground: TokenColor.Amethyst
				}
			},

			data: {
				algebraic: {
					haskell: {
						'\\ constant': {
							other: {
								haskell: {
									foreground: TokenColor.Carmine
								}
							}
						},

						'\\ storage': {
							type: {
								haskell: {
									foreground: TokenColor.Nectarine
								}
							}
						}
					}
				},

				generalized: {
					haskell: {
						'\\ storage': {
							type: {
								haskell: {
									foreground: TokenColor.Nectarine
								}
							}
						},

						'\\ constant': {
							other: {
								haskell: {
									foreground: TokenColor.Ocean
								}
							}
						}
					}
				}
			},

			type: {
				haskell: {
					'\\ storage': {
						type: {
							haskell: {
								foreground: TokenColor.Nectarine
							}
						}
					}
				}
			},

			instance: {
				haskell: {
					'\\ storage': {
						type: {
							haskell: {
								foreground: TokenColor.Nectarine
							}
						}
					}
				}
			},

			class: {
				haskell: {
					'\\ storage': {
						type: {
							haskell: {
								foreground: TokenColor.Nectarine
							}
						}
					}
				}
			}
		},

		'type-application': {
			haskell: {
				'\\ storage': {
					type: {
						haskell: {
							foreground: TokenColor.Nectarine
						}
					}
				}
			}
		},

		function: {
			'type-declaration': {
				haskell: {
					'\\ storage': {
						type: {
							haskell: {
								foreground: TokenColor.Nectarine
							}
						}
					}
				}
			}
		}
	},

	variable: {
		other: {
			member: {
				wildcard: {
					haskell: {
						foreground: TokenColor.Amethyst
					}
				}
			}
		}
	}
};
