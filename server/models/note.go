package models

import (
	"gorm.io/gorm"
)

type Note struct {
	gorm.Model
	Id     uint   `json:"id"`
	UserID int    `json:"user_id"`
	Title  string `json:"title"`
	Text   string `json:"text"`
	Tags   string `json:"tags"`
}
