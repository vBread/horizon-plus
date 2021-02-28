import { TokenColor } from '../types';

export default {
	entity: {
		name: {
			tag: {
				'style, script, template': {
					foreground: TokenColor.Carmine
				},

				block: {
					any: {
						foreground: TokenColor.Carmine
					}
				},

				html: {
					foreground: TokenColor.Carmine
				}
			}
		},

		other: {
			'attribute-name': {
				html: {
					foreground: TokenColor.Nectarine
				}
			}
		}
	}
};
