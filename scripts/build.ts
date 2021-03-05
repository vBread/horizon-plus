import { writeFile } from 'fs/promises';
import { basename } from 'path';
import readdirp from 'readdirp';
import { TokenConfig } from '../src/types';
import { walkObject } from './index';

const languages = readdirp(`${process.cwd()}/src/languages`);
const themeFile = `${process.cwd()}/themes/Orchid-color-theme.json`;
const semanticTokenColors: Record<string, TokenConfig['settings']> = {};

void (async (): Promise<void> => {
	const buildScopes = (object: object): TokenConfig[] => {
		const tokens = new Map<string, Record<string, string>>();
		const tokenColors: TokenConfig[] = [];

		for (const path of walkObject(object)) {
			const keys = path.split('.');
			const cleaned: string[] = [];
			const [setting, value] = keys.splice(-2);

			for (let i = 0; i < keys.length; i++) {
				const previous = keys[i - 1];
				const current = keys[i];

				if (current.startsWith('\\')) {
					cleaned.push(`${previous}${current.replace('\\', '')}`);
					cleaned.splice(cleaned.indexOf(previous), 1);

					continue;
				}

				cleaned.push(current);
			}

			const scope = cleaned.join('.');
			const scopes: string[] = [];

			const multi = cleaned.find((scope) => /\w+, \w+/.test(scope));

			if (multi) {
				multi.split(', ').forEach((s) => {
					const parent = scope.split(/.\w+,/)[0];

					return scopes.push(`${parent === '' ? '' : `${parent}.`}${s}`);
				});
			} else {
				scopes.push(scope);
			}

			for (const scope of scopes) {
				if (tokens.has(scope)) {
					tokens.get(scope)[setting] = value;
				} else {
					tokens.set(scope, { [setting]: value });
				}
			}
		}

		for (const [scope, settings] of tokens) {
			tokenColors.push({ scope, settings });
		}

		return tokenColors;
	};

	const tokenColors: TokenConfig[] = [];

	for await (const file of languages) {
		const scopes = (await import(file.fullPath)).default;

		if (basename(file.basename, '.ts') === 'semantic') {
			for (const token of buildScopes(scopes)) {
				semanticTokenColors[token.scope as string] = token.settings;
			}

			continue;
		}

		tokenColors.push(...buildScopes(scopes));
	}

	let theme = (await import(themeFile)).default;
	theme = { ...theme, tokenColors, semanticTokenColors };

	writeFile(themeFile, JSON.stringify(theme, null, 4));
})();
