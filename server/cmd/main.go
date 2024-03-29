package main

import (
	"log"
	"os"
	"quick-notes/database"
	"quick-notes/middleware"
	"quick-notes/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load("../.env"); err != nil && !os.IsNotExist(err) {
		log.Fatalf("Error loading .env")
	}

	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     os.Getenv("CORS_WHITELIST"),
	}))

	app.Use("/api/note", middleware.AuthMiddleware)
	app.Use("/api/admin/*", middleware.CheckAccessLevel)

	routes.AuthRoutes(app)
	routes.NotesRoutes(app)
	routes.AdminRoutes(app)

	app.Listen(":8000")
}
