package middleware

import (
	"os"
	"quick-notes/controllers"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
)

func CheckAccessLevel(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")
	if cookie == "" {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "missing JWT token",
		})
	}

	jwtSecretKey := os.Getenv("JWT_SECRET_KEY")
	token, err := jwt.ParseWithClaims(cookie, &controllers.CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtSecretKey), nil
	})
	if err != nil || !token.Valid {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "invalid JWT token",
		})
	}

	claims, ok := token.Claims.(*controllers.CustomClaims)
	if !ok {
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "failed to parse JWT claims",
		})
	}

	userRole := claims.Role

	if userRole == "user" {
		c.Status(fiber.StatusForbidden)
		return c.JSON(fiber.Map{
			"message": "user is not an admin",
		})
	}

	c.Locals("UserRole", userRole)

	return c.Next()
}
