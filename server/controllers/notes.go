package controllers

import (
	"quick-notes/database"
	"quick-notes/models"

	"github.com/gofiber/fiber/v2"
)

func CreateNote(c *fiber.Ctx) error {
	var data map[string]string

	if err := c.BodyParser(&data); err != nil {
		return err
	}

	userID := c.Locals("userID")

	note := models.Note{
		UserID: userID.(int),
		Title:  data["title"],
		Text:   data["text"],
		Tags:   data["tags"],
	}

	database.DB.Create(&note)

	return c.JSON(note)
}

func GetNotes(c *fiber.Ctx) error {
	userID := c.Locals("userID").(int)

	var notes []models.Note
	database.DB.Where("user_id = ?", userID).Find(&notes)

	return c.JSON(notes)
}

func DeleteNote(c *fiber.Ctx) error {
	userID := c.Locals("userID").(int)
	noteID := c.Params("id")

	//! Check if the note exists and belongs to the authenticated user
	var note models.Note
	if err := database.DB.Where("id = ? AND user_id = ?", noteID, userID).First(&note).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"message": "Note not found",
		})
	}

	//! Delete the note from the database
	if err := database.DB.Delete(&note).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to delete note",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Note deleted successfully",
	})
}

func GetAllNotes(c *fiber.Ctx) error {
	var notes []models.Note
	database.DB.Find(&notes)

	return c.JSON(notes)
}
