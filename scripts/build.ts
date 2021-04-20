import { writeFile } from 'fs/promises';
import { renderSync } from 'sass';

const index = `${process.cwd()}/src/languages/index.scss`;
const themeFile = `${process.cwd()}/themes/Orchid-color-theme.json`;

interface Token {
	scope: string;
	settings: {
		foreground?: string;
		fontStyle?: string;
	};
}

interface MatchGroups {
	scopes: string;
	settings: string;
}

const tokens: Token[] = [];

void (async (): Promise<void> => {
	const compiled = renderSync({ file: index }).css.toString();

	let match: RegExpExecArray;
	const regex = /(?<scopes>.+) {(?<settings>(?:\s+[\w-]+: [#\w\d]+;)+)/gim;

	while ((match = regex.exec(compiled))) {
		const groups = (match.groups as unknown) as MatchGroups;
		const settings: Token['settings'] = {};

		const styles =
			groups.settings
				.trim()
				.split('\n')
				.map((x) => x.trim()) ?? [];

		for (const style of styles) {
			const [, key, value] = style.match(/^(color|font-weight|font-style): (.+);$/);

			switch (key) {
				case 'color': {
					settings.foreground = value;
					break;
				}

				case 'font-style':
				case 'font-weight': {
					settings.fontStyle = value;
				}
			}
		}

		if (groups.scopes.includes(', ')) {
			groups.scopes.split(', ').map((scope) => {
				return tokens.push({ scope: scope.replace(/#/g, ''), settings });
			});

			continue;
		}

		tokens.push({ scope: groups.scopes.replace(/#/g, ''), settings });
	}

	let theme = (await import(themeFile)).default;
	theme = { ...theme, tokenColors: tokens };

	writeFile(themeFile, JSON.stringify(theme, null, 4));
})();
