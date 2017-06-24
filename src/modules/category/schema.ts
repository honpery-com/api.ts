/**
 * category schema.
 */
import * as mongoose from 'mongoose';
import { ObjectId, Time } from '../common';

export type CategoryId = ObjectId;

export interface ICategory {
	_id: CategoryId;
	name: string;
	description: string;
	create_time: Time;
	update_time: Time;
	deleted: boolean;
}

export const CategorySchema: {[key in keyof ICategory]: mongoose.SchemaTypeOpts<any> } = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	name: {
		type: String,
		unique: true,
	},
	description: {
		type: String,
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
