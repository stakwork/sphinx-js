export enum LocalStorageKeys {
	BRAINS_LIST = 'BRAINS_LIST'
}

export interface Brain {
	app_version: null | string;
	description: string;
	mission_statement: string;
	search_term: string;
	title: string;
}
