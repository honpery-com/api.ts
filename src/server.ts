/**
 * api.ts
 */
import * as Koa from 'koa';
import * as db from './common/db';
import { SERVER_PORT } from './config';

const app = new Koa();

db.init();

app.listen(SERVER_PORT, () => console.log(`server running at ${SERVER_PORT}.`));
