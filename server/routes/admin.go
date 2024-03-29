package routes

import (
	"quick-notes/controllers"

	"github.com/gofiber/fiber/v2"
)

func AdminRoutes(app *fiber.App) {
	app.Get("/api/admin/users", controllers.GetAllUsers)
	app.Get("/api/admin/notes", controllers.GetAllNotes)
}
