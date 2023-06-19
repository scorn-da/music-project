import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop()
  track: Track;
}

export const TrackSchema = SchemaFactory.createForClass(Comment);
