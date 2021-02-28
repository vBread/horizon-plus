export interface TokenConfig {
	name?: string;
	scope: string | string[];
	settings: {
		foreground?: TokenColor;
		fontStyle?: TokenFontStyle;
	};
}

export enum TokenColor {
	Amethyst = '#B877DB',
	Aurora = '#78E08F',
	Carmine = '#E95678',
	Cerulean = '#89B6FF',
	Chartreuse = '#B3F172',
	Grisaille = '#5C5D63',
	Marigold = '#F09483',
	Nectarine = '#F8C291',
	Ocean = '#25B0BC',
	Smoke = '#BBBBBB',
	Spring = '#AFD485',
	Storm = '#AAAAAA'
}

export enum TokenFontStyle {
	All = 'italic bold',
	Bold = 'bold',
	Italic = 'italic'
}
