import { Like } from "../../../shared/src/types";

export interface LikeDao{
    createLike(like: Like): Promise<void>;
}