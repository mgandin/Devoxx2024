import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import { describe, it } from "https://deno.land/std@0.204.0/testing/bdd.ts";
import { UsersController } from "../user.controller.ts";

describe("UserController", () => {

    it("gets a user given an Id", async () => {
        // Given
        const userController = new UsersController();

        // When
        const user = await userController.getUser("123");

        // Then
        assertEquals(user, {
            id: 123,
            firstname: "Mathieu",
            lastname: "Gandin"
        });
    });
});
