/**
 * password schema.
 */
import * as mongoose from 'mongoose';
import { ObjectId, Time } from '../common';
import { UserId } from '../user/schema';

export type PasswordId = ObjectId;

export interface IPassword {
	_id: PasswordId;
	user_id: UserId;
	passwords: IPasswordDetail[];
}

interface IPasswordDetail {
	password: string;
	create_time: Time;
}

export const PasswordSchema: {[key in keyof IPassword]: mongoose.SchemaTypeOpts<any>} = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	user_id: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	passwords: [
		{
			password: {
				type: String,
				required: true,
			},
			create_time: {
				type: Date,
				defualt: Date.now,
			},
		},
	],
};
