export interface IFormCommentSchema{
  postId: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  content: string;
  replyTo?: string;
}

export interface ICommentFormProps {
  postId: string;
  replyTo?: string;
  updateReplyTo?: ReplyCallback;
}

export type CommentFormProps = React.ComponentPropsWithRef<'form'> & ICommentFormProps;

export type ReplyCallback = (commentId: string | undefined) => void;

