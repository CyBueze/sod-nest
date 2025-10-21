// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { join } from 'path';
// import { engine } from 'express-handlebars';
// import * as express from 'express';
// import { NestExpressApplication } from '@nestjs/platform-express';

// async function bootstrap() {
//   // 👇 Tell TypeScript this is an Express app
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);

//   // Serve static assets
//   app.useStaticAssets(join(__dirname, '..', 'public'));

//   // Configure Handlebars engine
//   app.engine(
//     'hbs',
//     engine({
//       extname: '.hbs',
//       defaultLayout: 'main',
//       layoutsDir: join(__dirname, '..', 'views/layouts'),
//       partialsDir: join(__dirname, '..', 'views/partials'),
//     }),
//   );

//   // Set base views and view engine
//   app.setBaseViewsDir(join(__dirname, '..', 'views'));
//   app.setViewEngine('hbs');

//   await app.listen(process.env.PORT ?? 3000);
//   console.log(`🚀 App running on http://localhost:${process.env.PORT ?? 3000}`);
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { engine } from 'express-handlebars';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files
  app.useStaticAssets(join(process.cwd(), 'public'));

  // Detect correct base path (works in both src and dist)
  const viewsPath = join(process.cwd(), 'views');

  app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: join(viewsPath, 'layouts'),
      partialsDir: join(viewsPath, 'partials'),
    }),
  );

  app.setBaseViewsDir(viewsPath);
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `🚀 App running on http://localhost:${process.env.PORT ?? 3000}`,
  );
}

bootstrap();
