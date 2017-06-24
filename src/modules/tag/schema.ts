/**
 * tag schema.
 */
import * as mongoose from 'mongoose';
import { ObjectId, Time } from '../common';

export type TagId = ObjectId;

export interface ITag {
	_id: TagId;
	name: string;
	description: string;
	create_time: Time;
	update_time: Time;
	deleted: boolean;
}

export const TagSchema: {[key in keyof ITag]: mongoose.SchemaTypeOpts<any>} = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	name: {
		type: String,
		unique: true,
	},
	description: {
		type: String,
		default: '',
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
