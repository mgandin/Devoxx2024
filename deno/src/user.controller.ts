import { Controller, Get, Route, Tags, Response, Path } from "npm:tsoa";
import { isUserDisplayable } from "./user.ts";

type User = {
    id: number;
    firstname: string;
    lastname: string;
}

@Route("users")
@Tags("User")
export class UsersController extends Controller {

    @Get("{userId}")
    @Response(404, "User not found")
    public async getUser(@Path() userId: string): Promise<User> {
        if(isUserDisplayable(userId)) {
            return Promise.resolve({
                id: Number(userId),
                firstname: "Mathieu",
                lastname: "Gandin"
            });
        } else {
            throw new Error ("User Not Found");
        }
    }
}
