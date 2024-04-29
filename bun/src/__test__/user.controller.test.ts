import { describe, it, expect } from "vitest";

import { UsersController } from "../user.controller";

describe("UserController", () => {

    it("gets a user given an Id", async () => {
        // Given
        const userController = new UsersController();

        // When
        const user = await userController.getUser("123");

        // Then
        expect(user).toEqual( {
            id: 123,
            firstname: "Mathieu",
            lastname: "Gandin"
        });
    });
});
