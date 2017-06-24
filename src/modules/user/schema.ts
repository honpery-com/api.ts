/**
 * user schema.
 */
import * as mongoose from 'mongoose';
import { ObjectId, Time } from '../common';

export type UserId = ObjectId;

type UserTarget = 'admin' | 'register';

export interface IUser {
	_id: UserId;
	username: string;
	email: string;
	website: string;
	target: UserTarget;
	create_time: Time;
	update_time: Time;
	deleted: boolean;
}

export const UserSchema: {[key in keyof IUser]: mongoose.SchemaTypeOpts<any>} = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	username: {
		type: String,
		unique: true,
	},
	email: {
		type: String,
		default: '',
	},
	website: {
		type: String,
		default: '',
	},
	target: {
		type: String,
		enum: ['admin', 'register'],
		required: true,
	},
	create_time: {
		tyoe: Date,
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
