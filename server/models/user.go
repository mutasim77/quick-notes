package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"unique"`
	Role     string `json:"role"`
	Password []byte `json:"-"`
}

/**
  The field is tagged with "-" to indicate that it should be excluded
  from JSON serialization and deserialization. This is commonly used for sensitive information like passwords
  to prevent them from being inadvertently exposed in JSON responses or stored in plain sight.
**/
