package database

import (
	"fmt"
	"log"
	"os"
	"quick-notes/models"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	DSN := GetDSN()
	db, err := gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if err != nil {
		panic("Couldn't connect to the database")
	}
	log.Printf("The database has been connected successfully 🥰")

	DB = db

	MigrateDatabase()
}

func MigrateDatabase() {
	db := DB
	err := db.AutoMigrate(
		&models.User{},
		&models.Note{},
	)

	if err != nil {
		log.Fatalf("Failed to migrate database schema: %v", err)
	}

	log.Println("Database schema migrated successfully 🤩")
}

func GetDSN() string {
	host := os.Getenv("DB_HOST")
	user := os.Getenv("DB_USER")
	password := os.Getenv("DB_PASSWORD")
	dbname := os.Getenv("DB_NAME")
	port := os.Getenv("DB_PORT")

	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s", host, user, password, dbname, port)
}
