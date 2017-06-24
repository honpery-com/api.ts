/**
 * article schema.
 */
import * as mongoose from 'mongoose';
import { CategoryId } from '../category/schema';
import { ObjectId, Time } from '../common';
import { TagId } from '../tag/schema';

export type ArticleId = ObjectId;

export interface IArticle {
	_id: ArticleId;
	title: string;
	content: string;
	cover: string;
	category: CategoryId;
	tags: TagId[];
	uv: number;
	pv: number;
	create_time: Time;
	update_time: Time;
	deleted: boolean;
}

export const ArticleSchema: {[key in keyof IArticle]: mongoose.SchemaTypeOpts<any>} = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	title: {
		type: String,
		required: true,
		unique: true,
	},
	content: {
		type: String,
		default: '',
	},
	cover: {
		type: String,
		default: '',
	},
	category: {
		type: mongoose.Types.ObjectId,
		ref: 'Catgeory',
		required: true,
	},
	tags: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Tag',
		},
	],
	uv: {
		type: Number,
		default: 0,
	},
	pv: {
		type: Number,
		default: 0,
	},
	create_time: {
		type: Date,
		default: Date.now,
	},
	update_time: {
		type: Date,
		default: Date.now,
	},
	deleted: {
		type: Boolean,
		default: false,
	},
};
