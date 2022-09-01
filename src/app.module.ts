import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule], // aquí va a escuchar a los demás modulos
  controllers: [],
  providers: [],
})
export class AppModule {}
