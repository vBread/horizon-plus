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
	foreground?: string;
	fontStyle?: string;
	style: string;
}

const tokens: Token[] = [];

void (async (): Promise<void> => {
	const compiled = renderSync({ file: index }).css.toString();

	let match: RegExpExecArray;
	const regex = /(?<scopes>.+) {\s+(?:(?<foreground>color)|(?<fontStyle>font-(?:weight|style))): (?<style>#[a-f\d]{6})/gim;

	while ((match = regex.exec(compiled))) {
		const groups = (match.groups as unknown) as MatchGroups;
		const settings: Token['settings'] = {};

		if (groups.foreground) {
			settings.foreground = groups.style;
		}

		if (groups.fontStyle) {
			settings.fontStyle = groups.style;
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
