/**
 * db init.
 */
import * as mongoose from 'mongoose';
import { MONGO_HOST } from '../config';

export function init() {
	// mongoose.Promise = global.Promise;
	mongoose.connect(MONGO_HOST);
}
