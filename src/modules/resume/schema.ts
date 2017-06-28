/**
 * resume schema.
 */
import * as mongoose from 'mongoose';
import { ObjectId, Time } from '../common';

export type ResumeId = ObjectId;

export interface IResume {
	_id: ResumeId;
	version: string;
	name: string;
	description: string;
	skills: ISkill[];
	edu_exps: IEduExp[];
	work_exps: IWorkExp[];
	project_exps: IProjectExp[];
	create_time: Time;
	update_time: Time;
	deleted: boolean;
}

interface ISkill {
	name: string;
	description: string;
	progress: number;
}

interface IEduExp {
	name: string;
	description: string;
	date_from: Time;
	date_to: Time;
}

interface IProjectExp {
	name: string;
	description: string;
	href: string;
	role: string;
	techs: string[];
	date_form: Time;
	date_to: Time;
}

interface IWorkExp {
	company: string;
	description: string;
	date_from: Time;
	date_to: Time;
}

export const ResumeSchema: {[key in keyof IResume]: mongoose.SchemaTypeOpts<IResume[key]>} = {
	_id: {
		type: mongoose.Types.ObjectId,
	},
	version: {
		type: String,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		default: '',
	},
	skills: [
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				default: '',
			},
			progress: {
				type: Number,
				max: 100,
				min: 0,
			},
		},
	],
	edu_exps: [
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				default: '',
			},
			date_from: {
				type: Date,
				default: Date.now,
			},
			date_to: {
				type: Date,
			},
		},
	],
	work_exps: [
		{
			company: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				default: '',
			},
			date_from: {
				type: Date,
				default: Date.now,
			},
			date_to: {
				type: Date,
			},
		},
	],
	project_exps: [
		{
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				default: '',
			},
			href: {
				type: String,
				default: '',
			},
			role: {
				type: String,
				required: true,
			},
			techs: [
				{
					type: string,
					required: true,
				},
			],
			date_from: {
				type: Date,
				default: Date.now,
			},
			date_to: {
				type: Date,
			},
		},
	],
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
