
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { engine } from 'express-handlebars';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',   // <--- your base layout
    layoutsDir: join(__dirname, '..', 'views/layouts'),
    partialsDir: join(__dirname, '..', 'views/partials'),
  }));
  app.setViewEngine('hbs');

  app.useStaticAssets(join(__dirname, '..', 'public'));


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
