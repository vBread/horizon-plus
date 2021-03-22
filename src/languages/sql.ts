import { TokenColor } from '../types';

export default {
	keyword: {
		other: {
			'DDL, sql': {
				foreground: TokenColor.Amethyst
			},

			'DML, create': {
				sql: {
					foreground: TokenColor.Amethyst
				}
			}
		},

		operator: {
			star: {
				sql: {
					foreground: TokenColor.Carmine
				}
			}
		}
	}
};
