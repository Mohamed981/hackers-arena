import express from 'express';
import asyncHandler from 'express-async-handler';

import { initDb } from './datastore';
import { createPostHandler, listPostsHandler } from './handlers/postHandler';
import { signInHandler, signUpHandler } from './handlers/authHandler';
import { errHandler } from './middleware/errorMiddleware';
import { requestLoggerMiddleware } from './middleware/loggerMidleware';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware';

const app = express();

(async () => {
  await initDb();
  dotenv.config();

  app.use(express.json());

  app.use(requestLoggerMiddleware);

//Public endpoints
  app.post('/v1/signup', asyncHandler(signUpHandler));
  app.post('/v1/signin', asyncHandler(signInHandler));

  app.use(authMiddleware);

  //Protected endpoints
  app.get('/v1/posts', asyncHandler(listPostsHandler));
  app.post('/v1/posts', asyncHandler(createPostHandler));
  
  app.use(errHandler);

  app.listen(5000);
})();
