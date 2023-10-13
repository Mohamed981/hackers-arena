import { Comment } from "../../../shared/src/types";

export interface CommentDao{
    createComment(comment: Comment): Promise<void>;
    listComments(postId :string): Promise<Comment[]>;
    deleteComment(postId:string): Promise<void>;
}