package routes

import (
	"quick-notes/controllers"

	"github.com/gofiber/fiber/v2"
)

func NotesRoutes(app *fiber.App) {
	app.Post("/api/note", controllers.CreateNote)
	app.Get("/api/notes", controllers.GetNotes)
	app.Delete("/api/note/:id", controllers.DeleteNote)
}
