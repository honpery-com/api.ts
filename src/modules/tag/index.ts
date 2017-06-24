/**
 * tag module router.
 */
import * as Router from 'koa-router';

const TagRouter = new Router();

/**
 * tag list api.
 */
TagRouter.get('/', async (ctx, next) => {
	ctx.body = 'tag list';
});

/**
 * tag detail api.
 */
TagRouter.get('/:tag_id', async (ctx, next) => {
	ctx.body = 'tag detail';
});

/**
 * tag create api.
 */
TagRouter.post('/', async (ctx, next) => {
	ctx.body = 'tag create';
});

/**
 * tag update api,
 */
TagRouter.patch('/:tag_id', async (ctx, next) => {
	ctx.body = 'tag update';
});

/**
 * tag delete api.
 */
TagRouter.delete('/:tag_id', async (ctx, next) => {
	ctx.body = 'tag delete';
});

export default TagRouter;
